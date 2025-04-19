import React, { useState, useEffect } from 'react';
import './styles/Global.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NewsCard from './components/NewsCard';
import Footer from './components/Footer';
import NewsFeed from './NewsFeed';

function App() {
  const [category, setCategory] = useState('bolsa');
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Header toggleTheme={toggleTheme} darkMode={darkMode} />
      <Sidebar setCategory={setCategory} />
      <main className="content">
        <NewsFeed category={category} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
