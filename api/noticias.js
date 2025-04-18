import { OpenAI } from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const feedUrls = [
    "https://www.infomoney.com.br/feed/",
    "https://valor.globo.com/rss/",
    "https://exame.com/rss/",
    "https://feeds.reuters.com/reuters/businessNews",
    "https://www.cnbc.com/id/100003114/device/rss/rss.html",
    "https://finance.yahoo.com/news/rssindex"
  ];

  const noticias = [];

  for (const url of feedUrls) {
    try {
      const res = await fetch(url);
      const xml = await res.text();
      const items = [...xml.matchAll(/<item>(.*?)<\/item>/gs)];

      for (const item of items.slice(0, 2)) {
        const titulo = item[1].match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] || "Sem título";
        const link = item[1].match(/<link>(.*?)<\/link>/)?.[1] || "";
        const pubDate = item[1].match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
        const hora = new Date(pubDate).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

        const isInternacional = link.includes("reuters") || link.includes("cnbc") || link.includes("yahoo");

        let tituloTraduzido = titulo;

        if (isInternacional) {
          const traduzido = await fetch(
            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=\${encodeURIComponent(titulo)}\`
          ).then(res => res.json());
          tituloTraduzido = traduzido[0]?.[0]?.[0] || titulo;
        }

        noticias.push({
          titulo: tituloTraduzido,
          link,
          fonte: new URL(url).hostname.replace("www.", ""),
          hora
        });
      }
    } catch (err) {
      console.error("Erro ao processar:", url, err);
    }
  }

  return new Response(JSON.stringify(noticias), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });

}