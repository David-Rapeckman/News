import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import './styles/global.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import NewsFeed from './NewsFeed';
function App() {
    var _a = useState('bolsa'), category = _a[0], setCategory = _a[1];
    var _b = useState(false), darkMode = _b[0], setDarkMode = _b[1];
    var toggleTheme = function () { return setDarkMode(!darkMode); };
    useEffect(function () {
        document.body.className = darkMode ? 'dark' : '';
    }, [darkMode]);
    return (_jsxs("div", { className: "app ".concat(darkMode ? 'dark' : ''), children: [_jsx(Header, { toggleTheme: toggleTheme, darkMode: darkMode }), _jsx(Sidebar, { setCategory: setCategory }), _jsx("main", { className: "content", children: _jsx(NewsFeed, { category: category }) }), _jsx(Footer, {})] }));
}
export default App;
