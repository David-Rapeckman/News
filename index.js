import { useEffect, useState } from "react";

export default function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const res = await fetch("/api/noticias");
        const data = await res.json();
        setNoticias(data);
      } catch (err) {
        console.error("Erro ao buscar notícias:", err);
      }
    };

    fetchNoticias();
    const interval = setInterval(fetchNoticias, 120000); // Atualiza a cada 2 minutos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <h1 className="text-2xl font-bold mb-4">📰 Notícias Econômicas em Tempo Real</h1>
      <div className="flex flex-col gap-2">
        {noticias.map((noticia, i) => (
          <div key={i} className="flex justify-between items-center bg-white rounded-2xl shadow p-4">
            <span className="flex-1 truncate">
              <a href={noticia.link} target="_blank" className="text-blue-600 hover:underline" rel="noopener noreferrer">
                {noticia.titulo}
              </a>
            </span>
            <small className="text-gray-600 mx-4">{noticia.hora}</small>
            <small className="text-gray-500">{noticia.fonte}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
