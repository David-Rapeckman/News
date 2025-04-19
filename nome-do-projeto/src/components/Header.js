import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Header = function (_a) {
    var toggleTheme = _a.toggleTheme, darkMode = _a.darkMode;
    return (_jsxs("header", { className: "header", children: [_jsx("div", { className: "logo", children: _jsx("h1", { children: "4P Finance Blog" }) }), _jsx("button", { className: "toggle", onClick: toggleTheme, children: darkMode ? '☀️ Light Mode' : '🌙 Dark Mode' })] }));
};
export default Header;
