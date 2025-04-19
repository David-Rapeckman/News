import React from 'react';

interface SidebarProps {
  setCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCategory }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => setCategory('bolsa')}>📊 Stocks</li>
        <li onClick={() => setCategory('economia')}>💰 Economy</li>
        <li onClick={() => setCategory('cripto')}>🪙 Crypto</li>
        <li onClick={() => setCategory('financas')}>📚 Finance</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
