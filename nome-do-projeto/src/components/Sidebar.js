import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Sidebar = function (_a) {
    var setCategory = _a.setCategory;
    return (_jsx("aside", { className: "sidebar", children: _jsxs("ul", { children: [_jsx("li", { onClick: function () { return setCategory('bolsa'); }, children: "\uD83D\uDCCA Stocks" }), _jsx("li", { onClick: function () { return setCategory('economia'); }, children: "\uD83D\uDCB0 Economy" }), _jsx("li", { onClick: function () { return setCategory('cripto'); }, children: "\uD83E\uDE99 Crypto" }), _jsx("li", { onClick: function () { return setCategory('financas'); }, children: "\uD83D\uDCDA Finance" })] }) }));
};
export default Sidebar;
