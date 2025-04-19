import React, { useEffect, useState } from 'react';

type FeedItem = {
  title: string;
  link: string;
  description: string;
};

const NewsFeed: React.FC = () => {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeed = async () => {
      const CORS_PROXY = "https://api.allorigins.win/get?url=";
      const FEED_URL = encodeURIComponent("https://www.infomoney.com.br/feed/");

      try {
        const response = await fetch(`${CORS_PROXY}${FEED_URL}`);
        const data = await response.json();

        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        const feedItems: FeedItem[] = Array.from(items).map((item) => ({
          title: item.querySelector("title")?.textContent || "",
          link: item.querySelector("link")?.textContent || "",
          description: item.querySelector("description")?.textContent || "",
        }));

        setItems(feedItems.slice(0, 6)); // pega só os 6 primeiros
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar RSS:", error);
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading) return <p>🔄 Carregando notícias...</p>;

  return (
    <div className="news-container">
      {items.map((item, index) => (
        <article key={index} className="news-card">
          <h3>{item.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: item.description }} />
          <a href={item.link} target="_blank" rel="noopener noreferrer">🔗 Ler mais</a>
        </article>
      ))}
    </div>
  );
};

export default NewsFeed;
