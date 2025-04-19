import './App.css';
import NewsFeed from './NewsFeed';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>📈 Blog do Mercado Financeiro</h1>
        <p>Notícias, análises e tendências em tempo real</p>
      </header>

      <section className="breaking-news">
        <h2>🚨 Últimas Notícias (InfoMoney)</h2>
        <p>Atualizado automaticamente via RSS Feed</p>
      </section>

      <NewsFeed />
    </div>
  );
}

export default App;
