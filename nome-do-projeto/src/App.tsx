import React, { useEffect, useState } from 'react';
import './App.css';
import NewsFeed from './NewsFeed';

function App() {
  const [category, setCategory] = useState('bolsa');
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={darkMode ? 'App dark' : 'App'}>
      <aside className="sidebar">
        <h2>📂 Categorias</h2>
        <ul>
          <li onClick={() => setCategory('bolsa')}>📊 Ações</li>
          <li onClick={() => setCategory('economia')}>💰 Economia</li>
          <li onClick={() => setCategory('financas')}>📚 Finanças</li>
        </ul>
      </aside>

      <header className="header">
        <h1>📈 Financial Blog</h1>
      </header>

      <main className="content">
        <NewsFeed category={category} />
      </main>

      <button className="toggle-theme" onClick={toggleTheme}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}

export default App;
