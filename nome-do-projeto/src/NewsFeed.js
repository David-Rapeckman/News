var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
var sources = [
    // InfoMoney
    { url: 'https://www.infomoney.com.br/mercados/feed/', category: 'bolsa' },
    { url: 'https://www.infomoney.com.br/economia/feed/', category: 'economia' },
    { url: 'https://www.infomoney.com.br/minhas-financas/feed/', category: 'financas' },
    // Valor Investe (usa globo.com)
    { url: 'https://valorinveste.globo.com/rss.xml', category: 'financas' },
    // Exame Invest
    { url: 'https://exame.com/invest/feed/', category: 'bolsa' },
    // Poder360
    { url: 'https://www.poder360.com.br/economia/feed/', category: 'economia' },
    // ADVFN
    { url: 'https://br.advfn.com/rss/Noticias/rss.xml', category: 'bolsa' },
    // Investing Brasil
    { url: 'https://br.investing.com/rss/news_285.rss', category: 'bolsa' },
    // Seu Dinheiro
    { url: 'https://www.seudinheiro.com/feed/', category: 'financas' },
    // Money Times
    { url: 'https://www.moneytimes.com.br/feed/', category: 'financas' },
    // InvestNews
    { url: 'https://investnews.com.br/feed/', category: 'financas' },
    // Bloomberg (versão global — inglês)
    { url: 'https://www.bloomberg.com/feed/podcast/etf-report.xml', category: 'bolsa' },
    // Reuters (em inglês)
    { url: 'http://feeds.reuters.com/reuters/businessNews', category: 'economia' },
    // Yahoo Finance
    { url: 'https://finance.yahoo.com/news/rssindex', category: 'economia' },
    // CNN Business
    { url: 'http://rss.cnn.com/rss/money_latest.rss', category: 'economia' },
    // MarketWatch
    { url: 'https://www.marketwatch.com/rss/topstories', category: 'economia' },
    // Investor's Business Daily
    { url: 'https://www.investors.com/feed/', category: 'bolsa' },
    // FXEmpire
    { url: 'https://www.fxempire.com/feed', category: 'cripto' },
    // TheStreet
    { url: 'https://www.thestreet.com/.rss/full', category: 'bolsa' },
    // Nasdaq
    { url: 'https://www.nasdaq.com/feed/rssoutbound?category=Business', category: 'bolsa' },
    // S&P Dow Jones
    { url: 'https://www.spglobal.com/spdji/en/rss/', category: 'bolsa' },
];
export default function NewsFeed(_a) {
    var _this = this;
    var category = _a.category;
    var _b = useState([]), news = _b[0], setNews = _b[1];
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var loadNews = function () { return __awaiter(_this, void 0, void 0, function () {
        var allNews, filtered, _i, filtered_1, src, resp, data, items, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    allNews = [];
                    filtered = sources.filter(function (s) { return s.category === category; });
                    _i = 0, filtered_1 = filtered;
                    _a.label = 1;
                case 1:
                    if (!(_i < filtered_1.length)) return [3 /*break*/, 7];
                    src = filtered_1[_i];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 5, , 6]);
                    return [4 /*yield*/, fetch("https://api.rss2json.com/v1/api.json?rss_url=".concat(encodeURIComponent(src.url)))];
                case 3:
                    resp = _a.sent();
                    return [4 /*yield*/, resp.json()];
                case 4:
                    data = _a.sent();
                    if (Array.isArray(data.items)) {
                        items = data.items.map(function (item) { return ({
                            title: item.title || '',
                            link: item.link || '',
                            pubDate: item.pubDate,
                            description: item.description || '',
                        }); });
                        allNews.push.apply(allNews, items);
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    console.error("Erro ao carregar o feed ".concat(src.url, ":"), error_1);
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7:
                    // mais recentes primeiro
                    allNews.sort(function (a, b) {
                        return new Date(b.pubDate || '').getTime() - new Date(a.pubDate || '').getTime();
                    });
                    setNews(allNews);
                    setLoading(false);
                    return [2 /*return*/];
            }
        });
    }); };
    useEffect(function () {
        loadNews();
    }, [category]);
    return (_jsxs("div", { children: [_jsx("button", { className: "toggle refresh", onClick: loadNews, children: "\uD83D\uDD04 Recarregar not\u00EDcias" }), loading && _jsx("p", { children: "Carregando not\u00EDcias\u2026" }), _jsx("div", { className: "news-container", children: news.map(function (item, idx) {
                    var imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
                    var imgSrc = imgMatch ? imgMatch[1] : null;
                    var textSnippet = item.description
                        .replace(/<[^>]+>/g, '')
                        .slice(0, 150)
                        .trim();
                    return (_jsxs("div", { className: "news-card", children: [imgSrc && _jsx("img", { src: imgSrc, alt: item.title }), _jsx("h3", { children: item.title }), _jsxs("p", { children: [textSnippet, "\u2026"] }), item.pubDate && (_jsx("small", { children: new Date(item.pubDate).toLocaleString() })), _jsx("div", { children: _jsx("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", children: "Leia mais \u2197" }) })] }, idx));
                }) })] }));
}
