(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},"8rxo":function(e,t,n){"use strict";n("tU7J");var s=n("wFql"),a=n("Wbzz"),r=n("q1tI"),l=n.n(r),o=n("8vGp"),i=n.n(o),c=s.a.Title;t.a=function(e){var t={};Object.entries(e.allItems).forEach((function(n){var s=n[0],a=n[1],r=e.grouper(s);t[r]||(t[r]={}),t[r][s]=a}));var n=e.layout;return l.a.createElement(n,e,l.a.createElement(c,{level:1},e.pageTitle),Object.entries(t).map((function(e){var t=e[0],n=e[1];return l.a.createElement("span",{key:t},l.a.createElement(c,{id:t,level:2},t),l.a.createElement("ul",{className:i.a.itemList},Object.entries(n).map((function(e){var t=e[0],n=e[1];return l.a.createElement("li",{key:t},l.a.createElement(a.Link,{to:t},n))}))))})),e.children)}},"8vGp":function(e,t,n){e.exports={itemList:"list-all-module--itemList--1uKy5",hideOnReducedMotion:"list-all-module--hideOnReducedMotion--2qSo7",showOnReducedMotion:"list-all-module--showOnReducedMotion--2nn3G"}},XBgs:function(e,t,n){"use strict";var s=n("q1tI"),a=n.n(s),r=n("2+3N"),l=n("1lec"),o=n("+ejy");t.a=function(e){var t={},n={},s={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":n};return Object.entries(r).forEach((function(e){var n=e[0],s=e[1];t[s]=n})),Object.entries(l).forEach((function(e){var t=e[0],s=e[1];n[s]=t})),a.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:[],index:s,prefix:"news",pageTitle:e.pageTitle,pageTitleSuffix:"Armeria news"}),e.children)}},uWA1:function(e,t,n){"use strict";n.r(t);var s=n("q1tI"),a=n.n(s),r=n("8rxo"),l=n("XBgs"),o=n("xzJD");t.default=function(e){return a.a.createElement(r.a,Object.assign({},e,{pageTitle:"All past news items",allItems:o,layout:l.a,grouper:Object(s.useCallback)((function(e){var t=e.lastIndexOf("/")+1;return e.substring(t,Math.min(t+4,e.length))}),[])}))}},xzJD:function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')}}]);
//# sourceMappingURL=component---src-pages-news-list-tsx-24a8f63e3b9d2c500cd1.js.map