(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){n("SRfc");var r=n("dVn5"),o=n("fo6e"),a=n("dt0z"),u=n("9NmV");t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?o(t)?u(t):r(t):t.match(e)||[]}},"7xGc":function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("L12J"),u=n("j9UF"),c=n("N1om");e.a=function(t){var e=t.children,n=t.pageContext,r=new Date(n.frontmatter.date).toLocaleDateString();return o.a.createElement(a.a,{id:"mdx"},o.a.createElement("h1",null,n.frontmatter.title),o.a.createElement("span",null,n.frontmatter.author),n.frontmatter.tags&&n.frontmatter.tags.map((function(t){return o.a.createElement(u.a,{key:c(t),to:"/tags/"+c(t)+"/"},t)})),o.a.createElement("div",{className:"right"},"at ",o.a.createElement("time",null,r)),o.a.createElement("hr",null),e)}},"9NmV":function(t,e,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",a="\\d+",u="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+c+"|"+f+")",x="(?:"+s+"|"+f+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,l].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),v="(?:"+[u,i,l].join("|")+")"+m,b=RegExp([s+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,s,"$"].join("|")+")",x+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,s+d,"$"].join("|")+")",s+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,v].join("|"),"g");t.exports=function(t){return t.match(b)||[]}},AP2z:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(f){}var o=u.call(t);return r&&(e?t[c]=n:delete t[c]),o}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},FIr1:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return a})),n.d(e,"default",(function(){return f}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var r=n("7ljp"),o=n("7xGc");var a={},u={_frontmatter:a},c=o.a;function f(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["components"]);return Object(r.b)(c,Object.assign({},u,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"今天开始会写一些跟创业相关的东西. 一些杂感. 希望看官你可以看到我的过去, 看到我的未来.\n聪明如你如果有想法一定会速度联系我的."))}f.isMDXComponent=!0},KfNM:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},L12J:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),u=function(t){var e=t.to,n=t.children;return o.a.createElement(a.a,{className:"no-underline text-teal-dark uppercase tracking-wide font-bold text-xl sm:mx-4 mx-auto",to:e},n)},c=function(){return o.a.createElement("header",{className:"main-container mx-auto my-5"},o.a.createElement("nav",{className:"flex justify-end"},o.a.createElement(u,{to:"/"},"Home"),o.a.createElement(u,{to:"/tags"},"Tags"),o.a.createElement(u,{to:"/posts"},"Blogs"),o.a.createElement(u,{to:"/about"},"About")))};n("93Eu"),e.a=function(t){var e=t.children,n=(t.setHtmlAttributes,t.id);return o.a.createElement("div",{className:"antialiased leading-tight min-h-screen w-full bg-white"},o.a.createElement(c,null),o.a.createElement("div",{className:"main-container mx-auto"},o.a.createElement("main",{id:n,className:"mt-4 md:mt-0 mx-2 mb-24"},e)))}},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?o(t):a(t)}},Oyvg:function(t,e,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,u=n("kJMx").f,c=n("quPj"),f=n("C/va"),i=r.RegExp,l=i,s=i.prototype,d=/a/g,x=/a/g,p=new i(d)!==d;if(n("nh4g")&&(!p||n("eeVq")((function(){return x[n("K0xU")("match")]=!1,i(d)!=d||i(x)==x||"/a/i"!=i(d,"i")})))){i=function(t,e){var n=this instanceof i,r=c(t),a=void 0===e;return!n&&r&&t.constructor===i&&a?t:o(p?new l(r&&!a?t.source:t,e):l((r=t instanceof i)?t.source:t,r&&a?f.call(t):e),n?this:s,i)};for(var m=function(t){t in i||a(i,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=u(l),b=0;v.length>b;)m(v[b++]);s.constructor=i,i.prototype=s,n("KroJ")(r,"RegExp",i)}n("elZq")("RegExp")},TKrE:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),o=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(a,r).replace(u,"")}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Wbzz:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("+ZDr"),u=n.n(a);n.d(e,"a",(function(){return u.a}));n("lw3w"),n("emEt").default.enqueue,o.a.createContext({})},Z0cm:function(t,e,n){n("LK8F");var r=Array.isArray;t.exports=r},asDA:function(t,e){t.exports=function(t,e,n,r){var o=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++o]);++o<a;)n=e(n,t[o],o,t);return n}},dVn5:function(t,e,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},j9UF:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz");e.a=function(t){var e=t.to,n=t.children;return o.a.createElement(a.a,{to:e},o.a.createElement("span",{className:"inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},n))}},lw3w:function(t,e,n){var r;t.exports=(r=n("rzlk"))&&r.default||r},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qRkn:function(t,e,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},rzlk:function(t,e,n){"use strict";n.r(e);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),o=n.n(r),a=n("IOVJ");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){var e=t.location,n=t.pageResources;return n?o.a.createElement(a.a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({location:e,pageResources:n},n.json)):null}},sgoq:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("asDA"),o=n("TKrE"),a=n("6nK8"),u=RegExp("['’]","g");t.exports=function(t){return function(e){return r(a(o(e).replace(u,"")),t,"")}}},zoYe:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),u=n("/9aa"),c=r?r.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(u(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---posts-posts-2014-06-24-markdown-6a641f1d71ab5494bae0.js.map