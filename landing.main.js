!function(r){var n={};function t(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return r[o].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=r,t.c=n,t.d=function(r,n,o){t.o(r,n)||Object.defineProperty(r,n,{enumerable:!0,get:o})},t.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,n){if(1&n&&(r=t(r)),8&n)return r;if(4&n&&"object"==typeof r&&r&&r.__esModule)return r;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:r}),2&n&&"string"!=typeof r)for(var e in r)t.d(o,e,function(n){return r[n]}.bind(null,e));return o},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,n){return Object.prototype.hasOwnProperty.call(r,n)},t.p="",t(t.s=84)}([,function(r,n){r.exports=function(r){var n=[];return n.toString=function(){return this.map(function(n){var t=function(r,n){var t=r[1]||"",o=r[3];if(!o)return t;if(n&&"function"==typeof btoa){var e=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=o.sources.map(function(r){return"/*# sourceURL="+o.sourceRoot+r+" */"});return[t].concat(i).concat([e]).join("\n")}var a;return[t].join("\n")}(n,r);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(r,t){"string"==typeof r&&(r=[[null,r,""]]);for(var o={},e=0;e<this.length;e++){var i=this[e][0];"number"==typeof i&&(o[i]=!0)}for(e=0;e<r.length;e++){var a=r[e];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(r,n,t){var o,e,i={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===e&&(e=o.apply(this,arguments)),e}),p=function(r){var n={};return function(r,t){if("function"==typeof r)return r();if(void 0===n[r]){var o=function(r,n){return n?n.querySelector(r):document.querySelector(r)}.call(this,r,t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(r){o=null}n[r]=o}return n[r]}}(),c=null,f=0,s=[],u=t(10);function d(r,n){for(var t=0;t<r.length;t++){var o=r[t],e=i[o.id];if(e){e.refs++;for(var a=0;a<e.parts.length;a++)e.parts[a](o.parts[a]);for(;a<o.parts.length;a++)e.parts.push(b(o.parts[a],n))}else{var p=[];for(a=0;a<o.parts.length;a++)p.push(b(o.parts[a],n));i[o.id]={id:o.id,refs:1,parts:p}}}}function l(r,n){for(var t=[],o={},e=0;e<r.length;e++){var i=r[e],a=n.base?i[0]+n.base:i[0],p={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(p):t.push(o[a]={id:a,parts:[p]})}return t}function m(r,n){var t=p(r.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=s[s.length-1];if("top"===r.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),s.push(n);else if("bottom"===r.insertAt)t.appendChild(n);else{if("object"!=typeof r.insertAt||!r.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var e=p(r.insertAt.before,t);t.insertBefore(n,e)}}function g(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r);var n=s.indexOf(r);n>=0&&s.splice(n,1)}function x(r){var n=document.createElement("style");if(void 0===r.attrs.type&&(r.attrs.type="text/css"),void 0===r.attrs.nonce){var o=function(){0;return t.nc}();o&&(r.attrs.nonce=o)}return h(n,r.attrs),m(r,n),n}function h(r,n){Object.keys(n).forEach(function(t){r.setAttribute(t,n[t])})}function b(r,n){var t,o,e,i;if(n.transform&&r.css){if(!(i="function"==typeof n.transform?n.transform(r.css):n.transform.default(r.css)))return function(){};r.css=i}if(n.singleton){var a=f++;t=c||(c=x(n)),o=k.bind(null,t,a,!1),e=k.bind(null,t,a,!0)}else r.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(r){var n=document.createElement("link");return void 0===r.attrs.type&&(r.attrs.type="text/css"),r.attrs.rel="stylesheet",h(n,r.attrs),m(r,n),n}(n),o=function(r,n,t){var o=t.css,e=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&e;(n.convertToAbsoluteUrls||i)&&(o=u(o));e&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */");var a=new Blob([o],{type:"text/css"}),p=r.href;r.href=URL.createObjectURL(a),p&&URL.revokeObjectURL(p)}.bind(null,t,n),e=function(){g(t),t.href&&URL.revokeObjectURL(t.href)}):(t=x(n),o=function(r,n){var t=n.css,o=n.media;o&&r.setAttribute("media",o);if(r.styleSheet)r.styleSheet.cssText=t;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(t))}}.bind(null,t),e=function(){g(t)});return o(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap)return;o(r=n)}else e()}}r.exports=function(r,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=l(r,n);return d(t,n),function(r){for(var o=[],e=0;e<t.length;e++){var a=t[e];(p=i[a.id]).refs--,o.push(p)}r&&d(l(r,n),n);for(e=0;e<o.length;e++){var p;if(0===(p=o[e]).refs){for(var c=0;c<p.parts.length;c++)p.parts[c]();delete i[p.id]}}}};var v,w=(v=[],function(r,n){return v[r]=n,v.filter(Boolean).join("\n")});function k(r,n,t,o){var e=t?"":o.css;if(r.styleSheet)r.styleSheet.cssText=w(n,e);else{var i=document.createTextNode(e),a=r.childNodes;a[n]&&r.removeChild(a[n]),a.length?r.insertBefore(i,a[n]):r.appendChild(i)}}},,,,,,,,function(r,n){r.exports=function(r){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!r||"string"!=typeof r)return r;var t=n.protocol+"//"+n.host,o=t+n.pathname.replace(/\/[^\/]*$/,"/");return r.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(r,n){var e,i=n.trim().replace(/^"(.*)"$/,function(r,n){return n}).replace(/^'(.*)'$/,function(r,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?r:(e=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(e)+")")})}},function(r,n,t){"use strict";t(12);window.onload=function(){setTimeout(()=>{document.querySelector(".preloader").className+=" stop"},1500),setTimeout(()=>{document.querySelector(".preloader.stop").style.display="none"},2500)}},function(r,n,t){var o=t(13);"string"==typeof o&&(o=[[r.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};t(2)(o,e);o.locals&&(r.exports=o.locals)},function(r,n,t){(r.exports=t(1)(!1)).push([r.i,"\r\n.preloader{\r\n\tbackground: #33393e;\r\n    visibility: visible;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 100000;\r\n    /* transition: 5s all; */\r\n    opacity: 1;\r\n    z-index: 100;\r\n\r\n}\r\n\r\n.loader {\r\n\twidth: 75px;\r\n\theight: 75px;\r\n\tborder: 10px solid white;\r\n\tborder-radius: 50%;\r\n\tborder-top-color: blue;\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\ttransform: translate(-50%, -50%);\r\n\tanimation: 2s load infinite linear;\r\n}\r\n\r\n.preloader.stop{\r\n    visibility: hidden;\r\n    opacity: 0;\r\n    transition: 1s all;\r\n}\r\n\r\n@keyframes stop {\r\n\tfrom {\r\n\t\topacity: 1;\r\n\t}\r\n\tto {\r\n        opacity: 0;\r\n\t}\r\n}\r\n\r\n@keyframes load {\r\n\tfrom {\r\n\t\ttransform: translate(-50%, -50%) rotate(0deg);\r\n\t}\r\n\tto {\r\n\t\ttransform: translate(-50%, -50%) rotate(360deg);\r\n\t}\r\n}",""])},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(r,n,t){"use strict";t.r(n);t(85),t(11),t(87),t(88),t(89),t(90),t(91),t(92),t(93),t(94),t(95),t(96),t(97),t(98),t(99),t(100),t(101),t(102),t(103);document.querySelector("#start").addEventListener("click",()=>{window.location.href="./game.html"})},function(r,n,t){var o=t(86);"string"==typeof o&&(o=[[r.i,o,""]]);var e={hmr:!0,transform:void 0,insertInto:void 0};t(2)(o,e);o.locals&&(r.exports=o.locals)},function(r,n,t){(r.exports=t(1)(!1)).push([r.i,"\r\n*{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbox-sizing: border-box;\r\n}\r\n\r\nhtml{\r\n\tfont: normal 16px sans-serif;\r\n\tcolor: #555;\r\n}\r\n\r\nul, nav{\r\n\tlist-style: none;\r\n}\r\n\r\na{\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n\tcursor: pointer;\r\n\r\n\topacity: 0.9;\r\n}\r\n\r\na:hover{\r\n\topacity: 1;\r\n}\r\n\r\na.btn{\r\n\tcolor: #fff;\r\n\tborder-radius: 35px;\r\n\ttext-transform: uppercase;\r\n\tbackground-color: #2196F3;\r\n\tfont-weight: 800;\r\n\ttext-align: center;\r\n}\r\n\r\nhr{\r\n\twidth: 150px;\r\n\theight: 2px;\r\n\tbackground-color: #2196F3;\r\n\tborder: 0;\r\n\tmargin-bottom: 80px;\r\n}\r\n\r\nsection{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\r\n\tpadding: 125px 100px;\r\n}\r\n\r\n@media (max-width: 1000px){\r\n\r\n\tsection{\r\n\t\tpadding: 100px 50px;\r\n\t}\r\n\r\n}\r\n\r\n@media (max-width: 600px){\r\n\r\n\tsection{\r\n\t\tpadding: 80px 30px;\r\n\t}\r\n\r\n}\r\n\r\nsection h3.title{\r\n\tcolor: #414a4f;\r\n\tfont: bold 32px 'Open Sans', sans-serif;\r\n\tmargin-bottom: 35px;\r\n\ttext-align: center;\r\n}\r\n\r\nsection p{\r\n\tmax-width: 800px;\r\n\ttext-align: justify;\r\n\tmargin-bottom: 35px;\r\n\tpadding: 0 20px;\r\n\tline-height: 2;\r\n}\r\n\r\nul.grid{\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tflex-wrap: wrap;\r\n\tjustify-content: center;\r\n}\r\n\r\nheader{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tz-index: 10;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\tjustify-content: space-between;\r\n\talign-items: center;\r\n\tcolor: #fff;\r\n\tpadding: 35px 100px 0;\r\n}\r\n\r\nheader h2{\r\n\tfont-family: 'Quicksand', sans-serif;\r\n}\r\n\r\nheader nav{\r\n\tdisplay: flex;\r\n}\r\n\r\nheader nav li{\r\n\tmargin: 0 15px;\r\n}\r\n\r\nheader nav li:first-child{\r\n\tmargin-left: 0;\t\r\n}\r\n\r\nheader nav li:last-child{\r\n\tmargin-right: 0;\t\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1000px){\r\n\theader{\r\n\t\tpadding: 20px 50px;\r\n\t}\r\n}\r\n\r\n\r\n@media (max-width: 700px){\r\n\theader{\r\n\t\tflex-direction: column;\t\t\r\n\t}\r\n\r\n\theader h2{\r\n\t\tmargin-bottom: 15px;\r\n\t}\r\n}\r\n\r\n\r\n.hero{\r\n\tposition: relative;\r\n\tjustify-content: center;\r\n\tmin-height: 100vh;\r\n\tcolor: #fff;\r\n\ttext-align: center;\r\n}\r\n\r\n.hero .background-image{\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-size: cover;\r\n\tbackground-color: #2196F3;\r\n\tz-index: -1;\r\n}\r\n\r\n.hero .background-image:after{\r\n\tcontent: '';\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #414a4f;\r\n\topacity: 0.75;\r\n}\r\n\r\n.hero h1{\r\n\tfont: bold 60px 'Open Sans', sans-serif;\r\n\tmargin-bottom: 15px;\r\n}\r\n\r\n.hero h3{\r\n\tfont: normal 28px 'Open Sans', sans-serif;\r\n\tmargin-bottom: 40px;\r\n}\r\n\r\n.hero a.btn{\r\n\tpadding: 20px 46px;\r\n}\r\n\r\n@media (max-width: 800px){\r\n\r\n\t.hero{\r\n\t\tmin-height: 600px;\r\n\t}\r\n\r\n\t.hero h1{\r\n\t\tfont-size: 48px;\r\n\t}\r\n\r\n\t.hero h3{\r\n\t\tfont-size: 24px;\r\n\t}\r\n\r\n\t.hero a.btn{\r\n\t\tpadding: 15px 40px;\r\n\t}\r\n\r\n}\r\n\r\n.оur-work{\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.product .grid li{\r\n\tpadding: 20px;\r\n\theight: 320px;\r\n\tborder-radius: 3px;\r\n\tbackground-clip: content-box;\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-color: #333;\r\n}\r\n\r\n.product .grid li.small{\r\n\tflex-basis: 40%;\r\n}\r\n\r\n.product .grid li.large{\r\n\tflex-basis: 55%;\r\n}\r\n\r\n\r\n@media (max-width: 1000px){\r\n\r\n\t.product .grid li.small,\r\n\t.product .grid li.large{\r\n\t\tflex-basis: 100%;\r\n\t}\r\n\r\n}\r\n\r\n.my-work{\r\n\tbackground-color: #f7f7f7;\r\n}\r\n\r\n.my-work .grid li{\r\n\tpadding: 0 30px;\r\n\tflex-basis: 33%;\r\n\ttext-align: center;\r\n}\r\n\r\n.my-work .grid li i{\r\n    font-size: 50px;\r\n    color: #2196F3;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.my-work .grid li h4{\r\n\tcolor: #555;\r\n    font-size: 20px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.my-work .grid li p{\r\n    margin: 0;\r\n}\r\n\r\n.my-work p.wrap {\r\n\tmax-width: 505px;\r\n}\r\n\r\n.my-work a.btn{\r\n\tpadding: 20px 46px;\r\n\tmargin-bottom: 35px;\r\n}\r\n\r\n@media (max-width: 1000px){\r\n\r\n\t.my-work .grid li{\r\n\t\tflex-basis: 70%;\r\n\t\tmargin-bottom: 65px;\r\n\t}\r\n\r\n\t.my-work .grid li:last-child{\r\n\t\tmargin-bottom: 0;\r\n\t}\r\n\r\n}\r\n\r\n\r\n@media (max-width: 600px){\r\n\r\n\t.my-work .grid li{\r\n\t\tflex-basis: 100%;\r\n\t}\r\n\r\n}\r\n\r\n.about-me{\r\n\tbackground-color: #fff;\r\n}\r\n\r\n.about-me .quote{\r\n\ttext-align: justify;\r\n    width: 95%;\r\n    font-size: 22px;\r\n    font-weight: 300;\r\n    line-height: 1.5;\r\n    margin-bottom: 20px;\r\n\tmargin: auto;\r\n\tpadding: 35px 0;\r\n}\r\n\r\n.about-me .author{\r\n    font-size: 18px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.about-me .author:last-child{\r\n    margin-bottom: 0;\r\n}\r\n\r\n.about-me .grid li{\r\n    padding: 20px;\r\n    border-radius: 3px;\r\n    background-clip: content-box;\r\n    background-size: cover;\r\n    background-position: center;\r\n\tbackground-color: #f7f7f7;\r\n}\r\n\r\n.about-me .grid li.small {\r\n    flex-basis: 30%;\r\n}\r\n\r\n.about-me .grid li.large {\r\n\tflex-basis: 70%;\r\n}\r\n\r\n.link-github{\r\n\tfont-weight: 600;\r\n\tcolor: blue;\r\n}\r\n\r\n.link-github:hover{\r\n\tcolor: rgb(255, 0, 34);\r\n\ttext-decoration: underline;\r\n}\r\n\r\n@media (max-width: 1000px){\r\n\r\n\t.about-me .quote{\r\n\t\tfont-size: 20px;\r\n\t}\r\n\r\n\t.about-me .author{\r\n\t    font-size: 16px;\r\n\t}\r\n\r\n}\r\n\r\n.contact{\r\n\tbackground-color: #f7f7f7;\r\n}\r\n\r\n.contact form{\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\tflex-wrap: wrap;\r\n\tmax-width: 800px;\r\n\twidth: 80%;\r\n}\r\n\r\n.contact form input{\r\n\tpadding: 15px;\r\n\tflex: 1;\r\n\tmargin-right: 30px;\r\n\tfont-size: 18px;\r\n\tcolor: #555;\r\n}\r\n\r\n.contact form .btn{\r\n\tpadding: 18px 42px;\r\n}\r\n\r\n\r\n@media (max-width: 800px){\r\n\r\n\t.contact form input{\r\n\t\tflex-basis: 100%;\r\n\t\tmargin: 0 0 20px 0;\r\n\t}\r\n\r\n}\r\n\r\nfooter{\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\talign-items: center;\r\n\ttext-align: center;\r\n\tcolor: #fff;\r\n\tbackground-color: #414a4f;\r\n\tpadding: 60px 0;\r\n}\r\n\r\nfooter ul{\r\n\tdisplay: flex;\r\n\tmargin-bottom: 25px;\r\n\tfont-size: 32px;\r\n}\r\n\r\nfooter ul li{\r\n\tmargin: 0 8px;\t\r\n}\r\n\r\nfooter ul li:first-child{\r\n\tmargin-left: 0;\t\r\n}\r\n\r\nfooter ul li:last-child{\r\n\tmargin-right: 0;\t\r\n}\r\n\r\nfooter p{\r\n\ttext-transform: uppercase;\r\n\tfont-size: 14px;\r\n\tcolor: rgba(255,255,255,0.6);\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\nfooter p a{\r\n\tcolor: #fff;\r\n}\r\n\r\n@media (max-width: 700px){\r\n\r\n\tfooter{\r\n\t\tpadding: 80px 15px;\r\n\t}\r\n\r\n}\r\n",""])},function(r,n,t){r.exports=t.p+"./img/RSS2018q3_v3.png"},function(r,n,t){r.exports=t.p+"./img/background2.jpg"},function(r,n,t){r.exports=t.p+"./img/my-foto.jpg"},function(r,n,t){r.exports=t.p+"./img/background1.jpg"},function(r,n,t){r.exports=t.p+"./img/monsters.jpg"},function(r,n,t){r.exports=t.p+"./img/players.jpg"},function(r,n,t){r.exports=t.p+"./img/hero4.png"},function(r,n,t){r.exports=t.p+"./img/background2_2.jpg"},function(r,n,t){r.exports=t.p+"./img/background1_1.jpg"},function(r,n,t){r.exports=t.p+"./img/monsters1.jpg"},function(r,n,t){r.exports=t.p+"./img/players1.jpg"},function(r,n,t){r.exports=t.p+"./img/score.jpg"},function(r,n,t){r.exports=t.p+"./img/background3_3.jpg"},function(r,n,t){r.exports=t.p+"./img/battle.jpg"},function(r,n,t){r.exports=t.p+"./img/attack2.jpg"},function(r,n,t){r.exports=t.p+"./img/hurt.jpg"},function(r,n,t){r.exports=t.p+"./img/task_exp.jpg"}]);