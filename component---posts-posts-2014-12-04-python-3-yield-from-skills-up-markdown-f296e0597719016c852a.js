(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"/9aa":function(e,t,n){var a=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,n){n("SRfc");var a=n("dVn5"),r=n("fo6e"),s=n("dt0z"),c=n("9NmV");e.exports=function(e,t,n){return e=s(e),void 0===(t=n?void 0:t)?r(e)?c(e):a(e):e.match(t)||[]}},"7xGc":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("L12J"),c=n("j9UF"),o=n("N1om");t.a=function(e){var t=e.children,n=e.pageContext,a=new Date(n.frontmatter.date).toLocaleDateString();return r.a.createElement(s.a,{id:"mdx"},r.a.createElement("h1",null,n.frontmatter.title),r.a.createElement("span",null,n.frontmatter.author),n.frontmatter.tags&&n.frontmatter.tags.map((function(e){return r.a.createElement(c.a,{key:o(e),to:"/tags/"+o(e)+"/"},e)})),r.a.createElement("div",{className:"right"},"at ",r.a.createElement("time",null,a)),r.a.createElement("hr",null),t)}},"9NmV":function(e,t,n){n("SRfc"),n("Oyvg");var a="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+a+"]",s="\\d+",c="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",p="[^\\ud800-\\udfff"+a+s+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",b="[\\ud800-\\udbff][\\udc00-\\udfff]",u="[A-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:"+o+"|"+p+")",f="(?:"+u+"|"+p+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",d="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,b].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),g="(?:"+[c,i,b].join("|")+")"+d,O=RegExp([u+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,u,"$"].join("|")+")",f+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,u+l,"$"].join("|")+")",u+"?"+l+"+(?:['’](?:d|ll|m|re|s|t|ve))?",u+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",s,g].join("|"),"g");e.exports=function(e){return e.match(O)||[]}},AP2z:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var a=n("nmnc"),r=Object.prototype,s=r.hasOwnProperty,c=r.toString,o=a?a.toStringTag:void 0;e.exports=function(e){var t=s.call(e,o),n=e[o];try{e[o]=void 0;var a=!0}catch(p){}var r=c.call(e);return a&&(t?e[o]=n:delete e[o]),r}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var a=Object.prototype.toString;e.exports=function(e){return a.call(e)}},Kz5y:function(e,t,n){var a=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,s=a||r||Function("return this")();e.exports=s},L12J:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("Wbzz"),c=function(e){var t=e.to,n=e.children;return r.a.createElement(s.a,{className:"no-underline text-teal-dark uppercase tracking-wide font-bold text-xl mr-8",to:t},n)},o=function(){return r.a.createElement("header",{className:"main-container mx-auto my-5"},r.a.createElement("nav",{className:"flex justify-end"},r.a.createElement(c,{to:"/"},"Home"),r.a.createElement(c,{to:"/tags"},"Tags"),r.a.createElement(c,{to:"/posts"},"Blogs"),r.a.createElement(c,{to:"/about"},"About")))};n("93Eu"),t.a=function(e){var t=e.children,n=(e.setHtmlAttributes,e.id);return r.a.createElement("div",{className:"antialiased leading-tight min-h-screen w-full bg-white"},r.a.createElement(o,null),r.a.createElement("div",{className:"main-container mx-auto"},r.a.createElement("main",{id:n,className:"mt-4 md:mt-0 mx-2 mb-24"},t)))}},N1om:function(e,t,n){var a=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=a},NykK:function(e,t,n){var a=n("nmnc"),r=n("AP2z"),s=n("KfNM"),c=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?r(e):s(e)}},Oyvg:function(e,t,n){var a=n("dyZX"),r=n("Xbzi"),s=n("hswa").f,c=n("kJMx").f,o=n("quPj"),p=n("C/va"),i=a.RegExp,b=i,u=i.prototype,l=/a/g,f=/a/g,m=new i(l)!==l;if(n("nh4g")&&(!m||n("eeVq")((function(){return f[n("K0xU")("match")]=!1,i(l)!=l||i(f)==f||"/a/i"!=i(l,"i")})))){i=function(e,t){var n=this instanceof i,a=o(e),s=void 0===t;return!n&&a&&e.constructor===i&&s?e:r(m?new b(a&&!s?e.source:e,t):b((a=e instanceof i)?e.source:e,a&&s?p.call(e):t),n?this:u,i)};for(var d=function(e){e in i||s(i,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},g=c(b),O=0;g.length>O;)d(g[O++]);u.constructor=i,i.prototype=u,n("KroJ")(a,"RegExp",i)}n("elZq")("RegExp")},TKrE:function(e,t,n){n("pIFo"),n("Oyvg");var a=n("qRkn"),r=n("dt0z"),s=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,c=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(s,a).replace(c,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Wbzz:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("+ZDr"),c=n.n(s);n.d(t,"a",(function(){return c.a}));n("lw3w"),n("emEt").default.enqueue,r.a.createContext({})},Z0cm:function(e,t,n){n("LK8F");var a=Array.isArray;e.exports=a},asDA:function(e,t){e.exports=function(e,t,n,a){var r=-1,s=null==e?0:e.length;for(a&&s&&(n=e[++r]);++r<s;)n=t(n,e[r],r,e);return n}},bZV1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return p}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("7ljp"),r=n("7xGc");var s={},c={_frontmatter:s},o=r.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(o,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",null,"python3 yield from skills up",Object(a.b)("a",{id:"sec-1"})),Object(a.b)("p",null,"The explanation that yield from g is equivalent to for v in g: yield v does not even begin to do justice to what yield from is all about. Because, let's face it, if all yield from does is expand the for loop, then it does not warrant adding yield from to the language and preclude a whole bunch of new features from being implemented in Python 2.x.\nThink of yield from as providing a transparent two-way channel from the caller to the sub-generator."),Object(a.b)("h2",null,"sending data to a generator using yield from",Object(a.b)("a",{id:"sec-1-1"})),Object(a.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(a.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'def generator():\n    """\n    A generator(coroutine) that writes data *sent* to it to fd, socket, etc.\n    """\n    while True:\n        w = (yield)\n        print(\'>> %s\' % w)\n\n\ndef gen_wrapper(c):          # c for coroutine\n    yield from c\n\nif __name__ == \'__main__\':\n    gen = generator()\n    wrap = gen_wrapper(gen)\n    wrap.send(None)  # initialize the coroutine\n    for i in range(4):\n        gen.send(i)'),Object(a.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"})))),Object(a.b)("h2",null,"exception handling for yield from",Object(a.b)("a",{id:"sec-1-2"})),Object(a.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(a.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"class TransactionException(Exception):\n    pass\n\n\ndef generator():\n    while True:\n        try:\n            w = (yield)\n        except TransactionException:\n            print('******')\n        else:\n            print('>> ', w)\n\n\ndef gen_wrapper(c):          # c for coroutine\n    yield from c\n\n\nif __name__ == '__main__':\n    gen = generator()\n    wrap = gen_wrapper(gen)\n    wrap.send(None)\n    for i in [0, 1, 2, 3, 'exc', 4]:\n        if i == 'exc':\n            wrap.throw(TransactionException)\n        else:\n            wrap.send(i)"),Object(a.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"})))),Object(a.b)("h2",null,"close outside of block",Object(a.b)("a",{id:"sec-1-3"})),Object(a.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(a.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"def generator():\n    while True:\n        w = (yield)\n        print('>> ', w)\n\n\ndef gen_wrapper(c):          # c for coroutine\n    yield from c\n\n\nif __name__ == '__main__':\n    gen = generator()\n    wrap = gen_wrapper(gen)\n    wrap.send(None)\n    for i in [0, 1, 2, 3, 'close', 4]:\n        if i == 'close':\n            wrap.close()\n        else:\n            wrap.send(i)"),Object(a.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"}),Object(a.b)("span",{parentName:"span"})))),Object(a.b)("h2",null,"benefits of yield",Object(a.b)("a",{id:"sec-1-4"})),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Using a generalization of the StopIteration exception makes it easy for other kinds of iterators to participate in the protocol without having to grow an extra attribute or a close() method."),Object(a.b)("li",{parentName:"ul"},"It simplifies the implementation, because the point at which the return value from the subgenerator becomes available is the same point at which the exception is raised. Delaying until any later time would require storing the return value somewhere."),Object(a.b)("li",{parentName:"ul"},"the primary benefits of yield from come when you've written a generator that uses these techniques and when it needs to be refactored.")),Object(a.b)("p",null,"and especially this part: ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://www.python.org/dev/peps/pep-0380/#generators-as-threads"}),"https://www.python.org/dev/peps/pep-0380/#generators-as-threads")),Object(a.b)("h2",null,Object(a.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"coroutine")," is not a ",Object(a.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"callback")," (which is ",Object(a.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"yield")," is not a ",Object(a.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"function"),")",Object(a.b)("a",{id:"sec-1-5"})),Object(a.b)("p",null,'The difference is that whenever the generator "yields" a value the execution of the generator is paused and the code continues where the generator was called.'),Object(a.b)("h1",null,"reference",Object(a.b)("a",{id:"sec-2"})),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://legacy.python.org/dev/peps/pep-0380/"}),"http://legacy.python.org/dev/peps/pep-0380/"),"\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://legacy.python.org/dev/peps/pep-0342/"}),"http://legacy.python.org/dev/peps/pep-0342/"),"\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"http://stackoverflows.com"}),"http://stackoverflows.com")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"speacial great thanks to ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"about.me/fantix"}),"@Fantix King"))))}p.isMDXComponent=!0},dVn5:function(e,t,n){n("SRfc");var a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(a)||[]}},dt0z:function(e,t,n){var a=n("zoYe");e.exports=function(e){return null==e?"":a(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},j9UF:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("Wbzz");t.a=function(e){var t=e.to,n=e.children;return r.a.createElement(s.a,{to:t},r.a.createElement("span",{className:"inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},n))}},lw3w:function(e,t,n){var a;e.exports=(a=n("rzlk"))&&a.default||a},nmnc:function(e,t,n){var a=n("Kz5y").Symbol;e.exports=a},qRkn:function(e,t,n){var a=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},rzlk:function(e,t,n){"use strict";n.r(t);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var a=n("q1tI"),r=n.n(a),s=n("IOVJ");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(s.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({location:t,pageResources:n},n.json)):null}},sgoq:function(e,t,n){n("pIFo"),n("Oyvg");var a=n("asDA"),r=n("TKrE"),s=n("6nK8"),c=RegExp("['’]","g");e.exports=function(e){return function(t){return a(s(r(t).replace(c,"")),e,"")}}},zoYe:function(e,t,n){n("a1Th"),n("h7Nl"),n("Btvt");var a=n("nmnc"),r=n("eUgh"),s=n("Z0cm"),c=n("/9aa"),o=a?a.prototype:void 0,p=o?o.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(s(t))return r(t,e)+"";if(c(t))return p?p.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---posts-posts-2014-12-04-python-3-yield-from-skills-up-markdown-f296e0597719016c852a.js.map