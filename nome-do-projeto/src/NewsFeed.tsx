import React, { useEffect, useState } from 'react';

interface Source {
  url: string;
  category: string;
}

const sources: Source[] = [
  // InfoMoney
  { url: 'https://www.infomoney.com.br/mercados/feed/', category: 'bolsa' },
  { url: 'https://www.infomoney.com.br/economia/feed/', category: 'economia' },
  { url: 'https://www.infomoney.com.br/minhas-financas/feed/', category: 'financas' },

  // Valor Investe (usa globo.com)
  { url: 'https://valorinveste.globo.com/rss.xml', category: 'financas' },

  // Exame Invest
  { url: 'https://exame.com/invest/feed/', category: 'bolsa' },

  // Poder360
  { url: 'https://www.poder360.com.br/economia/feed/', category: 'economia' },

  // ADVFN
  { url: 'https://br.advfn.com/rss/Noticias/rss.xml', category: 'bolsa' },

  // Investing Brasil
  { url: 'https://br.investing.com/rss/news_285.rss', category: 'bolsa' },

  // Seu Dinheiro
  { url: 'https://www.seudinheiro.com/feed/', category: 'financas' },

  // Money Times
  { url: 'https://www.moneytimes.com.br/feed/', category: 'financas' },

  // InvestNews
  { url: 'https://investnews.com.br/feed/', category: 'financas' },

  // Bloomberg (versão global — inglês)
  { url: 'https://www.bloomberg.com/feed/podcast/etf-report.xml', category: 'bolsa' },

  // Reuters (em inglês)
  { url: 'http://feeds.reuters.com/reuters/businessNews', category: 'economia' },

  // Yahoo Finance
  { url: 'https://finance.yahoo.com/news/rssindex', category: 'economia' },

  // CNN Business
  { url: 'http://rss.cnn.com/rss/money_latest.rss', category: 'economia' },

  // MarketWatch
  { url: 'https://www.marketwatch.com/rss/topstories', category: 'economia' },

  // Investor's Business Daily
  { url: 'https://www.investors.com/feed/', category: 'bolsa' },

  // FXEmpire
  { url: 'https://www.fxempire.com/feed', category: 'cripto' },

  // TheStreet
  { url: 'https://www.thestreet.com/.rss/full', category: 'bolsa' },

  // Nasdaq
  { url: 'https://www.nasdaq.com/feed/rssoutbound?category=Business', category: 'bolsa' },

  // S&P Dow Jones
  { url: 'https://www.spglobal.com/spdji/en/rss/', category: 'bolsa' },
];

interface NewsItem {
  title: string;
  link: string;
  pubDate?: string;
  description: string;
}

interface Props {
  category: string;
}

export default function NewsFeed({ category }: Props) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  const loadNews = async () => {
    setLoading(true);
    const allNews: NewsItem[] = [];

    const filtered = sources.filter(s => s.category === category);
    for (const src of filtered) {
      try {
        const resp = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(src.url)}`
        );
        const data = await resp.json();
        if (Array.isArray(data.items)) {
          const items: NewsItem[] = data.items.map((item: any) => ({
            title: item.title || '',
            link: item.link || '',
            pubDate: item.pubDate,
            description: item.description || '',
          }));
          allNews.push(...items);
        }
      } catch (error) {
        console.error(`Erro ao carregar o feed ${src.url}:`, error);
      }
    }

    // mais recentes primeiro
    allNews.sort(
      (a, b) =>
        new Date(b.pubDate || '').getTime() - new Date(a.pubDate || '').getTime()
    );

    setNews(allNews);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, [category]);

  return (
    <div>
      <button className="toggle refresh" onClick={loadNews}>
        🔄 Recarregar notícias
      </button>
      {loading && <p>Carregando notícias…</p>}

      <div className="news-container">
        {news.map((item, idx) => {
          const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
          const imgSrc = imgMatch ? imgMatch[1] : null;

          const textSnippet = item.description
            .replace(/<[^>]+>/g, '')
            .slice(0, 150)
            .trim();

          return (
            <div key={idx} className="news-card">
              {imgSrc && <img src={imgSrc} alt={item.title} />}
              <h3>{item.title}</h3>
              <p>{textSnippet}…</p>
              {item.pubDate && (
                <small>{new Date(item.pubDate).toLocaleString()}</small>
              )}
              <div>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Leia mais ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
