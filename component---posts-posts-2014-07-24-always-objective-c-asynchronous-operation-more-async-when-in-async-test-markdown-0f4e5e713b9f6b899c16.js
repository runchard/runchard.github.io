(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/9aa":function(e,t,a){var n=a("NykK"),c=a("ExA7");e.exports=function(e){return"symbol"==typeof e||c(e)&&"[object Symbol]"==n(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"6nK8":function(e,t,a){a("SRfc");var n=a("dVn5"),c=a("fo6e"),s=a("dt0z"),r=a("9NmV");e.exports=function(e,t,a){return e=s(e),void 0===(t=a?void 0:t)?c(e)?r(e):n(e):e.match(t)||[]}},"7xGc":function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),s=a("L12J"),r=a("j9UF"),o=a("N1om");t.a=function(e){var t=e.children,a=e.pageContext,n=new Date(a.frontmatter.date).toLocaleDateString();return c.a.createElement(s.a,{id:"mdx"},c.a.createElement("h1",null,a.frontmatter.title),c.a.createElement("span",null,a.frontmatter.author),a.frontmatter.tags&&a.frontmatter.tags.map((function(e){return c.a.createElement(r.a,{key:o(e),to:"/tags/"+o(e)+"/"},e)})),c.a.createElement("div",{className:"right"},"at ",c.a.createElement("time",null,n)),c.a.createElement("hr",null),t)}},"9NmV":function(e,t,a){a("SRfc"),a("Oyvg");var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",c="["+n+"]",s="\\d+",r="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+s+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",b="[A-Z\\xc0-\\xd6\\xd8-\\xde]",p="(?:"+o+"|"+i+")",m="(?:"+b+"|"+i+")",f="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",d="[\\ufe0e\\ufe0f]?"+f+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,l].join("|")+")[\\ufe0e\\ufe0f]?"+f+")*"),g="(?:"+[r,u,l].join("|")+")"+d,j=RegExp([b+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[c,b,"$"].join("|")+")",m+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[c,b+p,"$"].join("|")+")",b+"?"+p+"+(?:['’](?:d|ll|m|re|s|t|ve))?",b+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",s,g].join("|"),"g");e.exports=function(e){return e.match(j)||[]}},AP2z:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=a("nmnc"),c=Object.prototype,s=c.hasOwnProperty,r=c.toString,o=n?n.toStringTag:void 0;e.exports=function(e){var t=s.call(e,o),a=e[o];try{e[o]=void 0;var n=!0}catch(i){}var c=r.call(e);return n&&(t?e[o]=a:delete e[o]),c}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,a){var n=a("WFqU"),c="object"==typeof self&&self&&self.Object===Object&&self,s=n||c||Function("return this")();e.exports=s},L12J:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),s=a("Wbzz"),r=function(e){var t=e.to,a=e.children;return c.a.createElement(s.a,{className:"no-underline text-teal-dark uppercase tracking-wide font-bold text-xl sm:mx-4 mx-auto",to:t},a)},o=function(){return c.a.createElement("header",{className:"main-container mx-auto my-5"},c.a.createElement("nav",{className:"flex justify-end"},c.a.createElement(r,{to:"/"},"Home"),c.a.createElement(r,{to:"/tags"},"Tags"),c.a.createElement(r,{to:"/posts"},"Blogs"),c.a.createElement(r,{to:"/about"},"About")))};a("93Eu"),t.a=function(e){var t=e.children,a=(e.setHtmlAttributes,e.id);return c.a.createElement("div",{className:"antialiased leading-tight min-h-screen w-full bg-white"},c.a.createElement(o,null),c.a.createElement("div",{className:"main-container mx-auto"},c.a.createElement("main",{id:a,className:"mt-4 md:mt-0 mx-2 mb-24"},t)))}},N1om:function(e,t,a){var n=a("sgoq")((function(e,t,a){return e+(a?"-":"")+t.toLowerCase()}));e.exports=n},NykK:function(e,t,a){var n=a("nmnc"),c=a("AP2z"),s=a("KfNM"),r=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":r&&r in Object(e)?c(e):s(e)}},Oyvg:function(e,t,a){var n=a("dyZX"),c=a("Xbzi"),s=a("hswa").f,r=a("kJMx").f,o=a("quPj"),i=a("C/va"),u=n.RegExp,l=u,b=u.prototype,p=/a/g,m=/a/g,f=new u(p)!==p;if(a("nh4g")&&(!f||a("eeVq")((function(){return m[a("K0xU")("match")]=!1,u(p)!=p||u(m)==m||"/a/i"!=u(p,"i")})))){u=function(e,t){var a=this instanceof u,n=o(e),s=void 0===t;return!a&&n&&e.constructor===u&&s?e:c(f?new l(n&&!s?e.source:e,t):l((n=e instanceof u)?e.source:e,n&&s?i.call(e):t),a?this:b,u)};for(var d=function(e){e in u||s(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},g=r(l),j=0;g.length>j;)d(g[j++]);b.constructor=u,u.prototype=b,a("KroJ")(n,"RegExp",u)}a("elZq")("RegExp")},TKrE:function(e,t,a){a("pIFo"),a("Oyvg");var n=a("qRkn"),c=a("dt0z"),s=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,r=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=c(e))&&e.replace(s,n).replace(r,"")}},WFqU:function(e,t,a){(function(t){var a="object"==typeof t&&t&&t.Object===Object&&t;e.exports=a}).call(this,a("yLpj"))},Wbzz:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),s=a("+ZDr"),r=a.n(s);a.d(t,"a",(function(){return r.a}));a("lw3w"),a("emEt").default.enqueue,c.a.createContext({})},Z0cm:function(e,t,a){a("LK8F");var n=Array.isArray;e.exports=n},asDA:function(e,t){e.exports=function(e,t,a,n){var c=-1,s=null==e?0:e.length;for(n&&s&&(a=e[++c]);++c<s;)a=t(a,e[c],c,e);return a}},dVn5:function(e,t,a){a("SRfc");var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,a){var n=a("zoYe");e.exports=function(e){return null==e?"":n(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var a=-1,n=null==e?0:e.length,c=Array(n);++a<n;)c[a]=t(e[a],a,e);return c}},fo6e:function(e,t){var a=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return a.test(e)}},j9UF:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),s=a("Wbzz");t.a=function(e){var t=e.to,a=e.children;return c.a.createElement(s.a,{to:t},c.a.createElement("span",{className:"inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},a))}},lw3w:function(e,t,a){var n;e.exports=(n=a("rzlk"))&&n.default||n},nmnc:function(e,t,a){var n=a("Kz5y").Symbol;e.exports=n},qRkn:function(e,t,a){var n=a("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},rAj8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return i}));a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("91GP"),a("q1tI");var n=a("7ljp"),c=a("7xGc");var s={},r={_frontmatter:s},o=c.a;function i(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,["components"]);return Object(n.b)(o,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",null,"TL;DR"),Object(n.b)("p",null,"Always Use ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"- (void)XCA_notify:(XCTAsyncTestCaseStatus)status withDelay:(NSTimeInterval)delay")," in async test."),Object(n.b)("h1",null,"Do async."),Object(n.b)("p",null,"Most opeartion can be an async behavior in objective C.\nSo, you code become js-ed."),Object(n.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"dispatch_async(dispatch_get_global_queue(<#dispatch_queue_priority_t priority#>, <#unsigned long flags#>), ^(void) {\n// bluhbluh codes\n  dispatch_async(dispatch_get_main_queue(), ^(void) {\n  // come back codes\n  });\n});"),Object(n.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"})))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"From Objective C's block I got Why js is called the C's next generation."),"\nAnd, you want to write test?\nWelcome to ",Object(n.b)("em",{parentName:"p"},"pandora"),"."),Object(n.b)("h1",null,"Some operation is too fast to async."),Object(n.b)("p",null,"For better consistency reason, I use  XCAsyncTestCase\nto do async tests, insert ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"[self XCA_notify:XCTAsyncTestCaseStatusSucceeded];"),"\nand wait in the end of the test ",Object(n.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"[self XCA_waitForStatus:XCTAsyncTestCaseStatusSucceeded timeout:1];"),"\n",Object(n.b)("strong",{parentName:"p"},"BUT"),", if you run test like this:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"objectivec"},Object(n.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-objectivec line-numbers"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-objectivec"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token operator"}),"-")," ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"void"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"testAsyncWhatWhat ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"self")," XCA_notify",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"XCTAsyncTestCaseStatusSucceeded",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n    ",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"self")," XCA_waitForStatus",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),"XCTAsyncTestCaseStatusSucceeded timeout",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),":"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token number"}),"1"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")),Object(n.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"})))),Object(n.b)("p",null,"Timeout Exception!"),Object(n.b)("p",null,"use the following instead:"),Object(n.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(n.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"- (void)testAsyncWhatWhat\n{\n  [self XCA_notify:XCTAsyncTestCaseStatusSucceeded withDelay:0.01];\n  [self XCA_waitForStatus:XCTAsyncTestCaseStatusSucceeded timeout:1];\n}"),Object(n.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"}),Object(n.b)("span",{parentName:"span"})))),Object(n.b)("p",null,"Because this operation is so fast.\nFor an illustration, if you fetch something from core data, Its will raise an exception. Your code don't raise? Good, you got a heinsensbug."),Object(n.b)("h1",null,"Internal of ",Object(n.b)("code",Object.assign({parentName:"h1"},{className:"language-text"}),"AsyncTestCase")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"XCA")," set two property to check async status"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"_notified"),"\nIt will set ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"_notified")," to ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"no")," at first when call ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"XCA_waitForStatus:timeout:"),".\nSet ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"_notified")," to ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"no")," means to initialize the next async test. It helps to test async status multiple times.\nif ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"XCA_notify:")," called before ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"XCAwaitForStatus:timeout:"),", Then ",Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"XCAwaitForStatus:timeout:")," will initialize at wrong time, and can't detect async."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("code",Object.assign({parentName:"li"},{className:"language-text"}),"_expectedStatus"))),Object(n.b)("h1",null,"Concurrency bug is always about time!"))}i.isMDXComponent=!0},rzlk:function(e,t,a){"use strict";a.r(t);a("jm62"),a("ioFf"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("q1tI"),c=a.n(n),s=a("IOVJ");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}t.default=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(s.a,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({location:t,pageResources:a},a.json)):null}},sgoq:function(e,t,a){a("pIFo"),a("Oyvg");var n=a("asDA"),c=a("TKrE"),s=a("6nK8"),r=RegExp("['’]","g");e.exports=function(e){return function(t){return n(s(c(t).replace(r,"")),e,"")}}},zoYe:function(e,t,a){a("a1Th"),a("h7Nl"),a("Btvt");var n=a("nmnc"),c=a("eUgh"),s=a("Z0cm"),r=a("/9aa"),o=n?n.prototype:void 0,i=o?o.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(s(t))return c(t,e)+"";if(r(t))return i?i.call(t):"";var a=t+"";return"0"==a&&1/t==-1/0?"-0":a}}}]);
//# sourceMappingURL=component---posts-posts-2014-07-24-always-objective-c-asynchronous-operation-more-async-when-in-async-test-markdown-0f4e5e713b9f6b899c16.js.map