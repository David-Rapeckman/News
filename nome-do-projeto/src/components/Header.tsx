import React from 'react';

interface HeaderProps {
  toggleTheme: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, darkMode }) => {
  return (
    <header className="header">
      <div className="logo">
        <h1>4P Finance Blog</h1>
      </div>
      <button className="toggle" onClick={toggleTheme}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
};

export default Header;
