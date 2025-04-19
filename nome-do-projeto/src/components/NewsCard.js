import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var NewsCard = function (_a) {
    var title = _a.title, description = _a.description, link = _a.link, imageSrc = _a.imageSrc;
    return (_jsxs("div", { className: "news-card", children: [_jsx("img", { src: imageSrc, alt: title }), _jsx("h3", { children: title }), _jsx("p", { children: description }), _jsx("a", { href: link, target: "_blank", rel: "noopener noreferrer", children: "Read more \u2197" })] }));
};
export default NewsCard;
