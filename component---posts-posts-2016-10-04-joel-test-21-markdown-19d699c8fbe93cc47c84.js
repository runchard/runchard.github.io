(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"/9aa":function(e,t,n){var r=n("NykK"),o=n("ExA7");e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){n("SRfc");var r=n("dVn5"),o=n("fo6e"),a=n("dt0z"),u=n("9NmV");e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?o(e)?u(e):r(e):e.match(t)||[]}},"7xGc":function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("L12J"),u=n("j9UF"),c=n("N1om");t.a=function(e){var t=e.children,n=e.pageContext,r=new Date(n.frontmatter.date).toLocaleDateString();return o.a.createElement(a.a,{id:"mdx"},o.a.createElement("h1",null,n.frontmatter.title),o.a.createElement("span",null,n.frontmatter.author),n.frontmatter.tags&&n.frontmatter.tags.map((function(e){return o.a.createElement(u.a,{key:c(e),to:"/tags/"+c(e)+"/"},e)})),o.a.createElement("div",{className:"right"},"at ",o.a.createElement("time",null,r)),o.a.createElement("hr",null),t)}},"9NmV":function(e,t,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+r+"]",a="\\d+",u="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",f="[A-Z\\xc0-\\xd6\\xd8-\\xde]",b="(?:"+c+"|"+i+")",p="(?:"+f+"|"+i+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,s].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),g="(?:"+[u,l,s].join("|")+")"+m,x=RegExp([f+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,f,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,f+b,"$"].join("|")+")",f+"?"+b+"+(?:['’](?:d|ll|m|re|s|t|ve))?",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,g].join("|"),"g");e.exports=function(e){return e.match(x)||[]}},AP2z:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,u=o.toString,c=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var r=!0}catch(i){}var o=u.call(e);return r&&(t?e[c]=n:delete e[c]),o}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;e.exports=function(e){return r.call(e)}},Kz5y:function(e,t,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},L12J:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),u=function(e){var t=e.to,n=e.children;return o.a.createElement(a.a,{className:"no-underline text-teal-dark uppercase tracking-wide font-bold text-xl mr-8",to:t},n)},c=function(){return o.a.createElement("header",{className:"main-container mx-auto my-5"},o.a.createElement("nav",{className:"flex justify-end"},o.a.createElement(u,{to:"/"},"Home"),o.a.createElement(u,{to:"/tags"},"Tags"),o.a.createElement(u,{to:"/posts"},"Blogs"),o.a.createElement(u,{to:"/about"},"About")))};n("93Eu"),t.a=function(e){var t=e.children,n=(e.setHtmlAttributes,e.id);return o.a.createElement("div",{className:"antialiased leading-tight min-h-screen w-full bg-white"},o.a.createElement(c,null),o.a.createElement("div",{className:"main-container mx-auto"},o.a.createElement("main",{id:n,className:"mt-4 md:mt-0 mx-2 mb-24"},t)))}},N1om:function(e,t,n){var r=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},NykK:function(e,t,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),u=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":u&&u in Object(e)?o(e):a(e)}},Oyvg:function(e,t,n){var r=n("dyZX"),o=n("Xbzi"),a=n("hswa").f,u=n("kJMx").f,c=n("quPj"),i=n("C/va"),l=r.RegExp,s=l,f=l.prototype,b=/a/g,p=/a/g,d=new l(b)!==b;if(n("nh4g")&&(!d||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(b)!=b||l(p)==p||"/a/i"!=l(b,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),a=void 0===t;return!n&&r&&e.constructor===l&&a?e:o(d?new s(r&&!a?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&a?i.call(e):t),n?this:f,l)};for(var m=function(e){e in l||a(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},g=u(s),x=0;g.length>x;)m(g[x++]);f.constructor=l,l.prototype=f,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},RQ4H:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return i}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var r=n("7ljp"),o=n("7xGc");var a={},u={_frontmatter:a},c=o.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(c,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This test have a small upgrade for Joel test 2.0"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Do you have a proper style to use source control?"),Object(r.b)("li",{parentName:"ol"},"Can you build and deploy your software in one step?"),Object(r.b)("li",{parentName:"ol"},"Do you build on every commit?"),Object(r.b)("li",{parentName:"ol"},"Do you have a search-able issue tracker?"),Object(r.b)("li",{parentName:"ol"},"Do you fix bugs before writing new code?"),Object(r.b)("li",{parentName:"ol"},"Do you measure your progress in terms of value delivered?"),Object(r.b)("li",{parentName:"ol"},"Do you have a runnable spec?"),Object(r.b)("li",{parentName:"ol"},"Does your environment foster collaboration?"),Object(r.b)("li",{parentName:"ol"},"Do you use the best tools money can buy?"),Object(r.b)("li",{parentName:"ol"},"Is testing everyone's responsibility?"),Object(r.b)("li",{parentName:"ol"},"Do new candidates write code during their interview?"),Object(r.b)("li",{parentName:"ol"},"Do you do hallway usability testing?")),Object(r.b)("h2",null,"Do you have a proper style to use source control?"),Object(r.b)("p",null,"I got too many issues when I use git."),Object(r.b)("p",null,"After learning phabricator/facebook/gitflow's style source control. I have to admit beyond source control that whole team should also grasp a proper way to use source control."),Object(r.b)("h2",null,"Do you have a search-able issue tracker?"),Object(r.b)("p",null,"Beyond bug database, we get issue tracker, github-issue/trello is one way to manage it."),Object(r.b)("p",null,"When dev-s just start programming, they need to know the various parts of the project. Beside version control's commits, the team also need issue tracker, teammates have a proper way to control and manage the information like how decisions make, who manage it, why write it and connect to which level of bug and features. Everything should bundle together."),Object(r.b)("h2",null,"ref link:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"http://www.steve.codes/blog/2016/7/22/an-updated-joel-test"}),"Joel test 2.0")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object.assign({parentName:"li"},{href:"http://www.joelonsoftware.com/articles/fog0000000043.html"}),"Joel test Original"))))}i.isMDXComponent=!0},TKrE:function(e,t,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),o=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(a,r).replace(u,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Wbzz:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("+ZDr"),u=n.n(a);n.d(t,"a",(function(){return u.a}));n("lw3w"),n("emEt").default.enqueue,o.a.createContext({})},Z0cm:function(e,t,n){n("LK8F");var r=Array.isArray;e.exports=r},asDA:function(e,t){e.exports=function(e,t,n,r){var o=-1,a=null==e?0:e.length;for(r&&a&&(n=e[++o]);++o<a;)n=t(n,e[o],o,e);return n}},dVn5:function(e,t,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},dt0z:function(e,t,n){var r=n("zoYe");e.exports=function(e){return null==e?"":r(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},j9UF:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz");t.a=function(e){var t=e.to,n=e.children;return o.a.createElement(a.a,{to:t},o.a.createElement("span",{className:"inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},n))}},lw3w:function(e,t,n){var r;e.exports=(r=n("rzlk"))&&r.default||r},nmnc:function(e,t,n){var r=n("Kz5y").Symbol;e.exports=r},qRkn:function(e,t,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},rzlk:function(e,t,n){"use strict";n.r(t);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),o=n.n(r),a=n("IOVJ");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?o.a.createElement(a.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({location:t,pageResources:n},n.json)):null}},sgoq:function(e,t,n){n("pIFo"),n("Oyvg");var r=n("asDA"),o=n("TKrE"),a=n("6nK8"),u=RegExp("['’]","g");e.exports=function(e){return function(t){return r(a(o(t).replace(u,"")),e,"")}}},zoYe:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),u=n("/9aa"),c=r?r.prototype:void 0,i=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(u(t))return i?i.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---posts-posts-2016-10-04-joel-test-21-markdown-19d699c8fbe93cc47c84.js.map