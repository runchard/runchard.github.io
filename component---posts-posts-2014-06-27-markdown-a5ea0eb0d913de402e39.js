(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/9aa":function(t,e,n){var r=n("NykK"),a=n("ExA7");t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){n("SRfc");var r=n("dVn5"),a=n("fo6e"),o=n("dt0z"),u=n("9NmV");t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?u(t):r(t):t.match(e)||[]}},"7xGc":function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("L12J"),u=n("j9UF"),c=n("N1om");e.a=function(t){var e=t.children,n=t.pageContext,r=new Date(n.frontmatter.date).toLocaleDateString();return a.a.createElement(o.a,{id:"mdx"},a.a.createElement("h1",null,n.frontmatter.title),a.a.createElement("span",null,n.frontmatter.author),n.frontmatter.tags&&n.frontmatter.tags.map((function(t){return a.a.createElement(u.a,{key:c(t),to:"/tags/"+c(t)+"/"},t)})),a.a.createElement("div",{className:"right"},"at ",a.a.createElement("time",null,r)),a.a.createElement("hr",null),e)}},"9NmV":function(t,e,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",a="["+r+"]",o="\\d+",u="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",f="[^\\ud800-\\udfff"+r+o+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",b="(?:"+c+"|"+f+")",p="(?:"+s+"|"+f+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",d="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,i].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),x="(?:"+[u,l,i].join("|")+")"+d,g=RegExp([s+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[a,s,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[a,s+b,"$"].join("|")+")",s+"?"+b+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,x].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},AP2z:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=Object.prototype,o=a.hasOwnProperty,u=a.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(f){}var a=u.call(t);return r&&(e?t[c]=n:delete t[c]),a}},B0Nf:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return o})),n.d(e,"default",(function(){return f}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var r=n("7ljp"),a=n("7xGc");var o={},u={_frontmatter:o},c=a.a;function f(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,["components"]);return Object(r.b)(c,Object.assign({},u,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"什么时候开始, ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"去创业")," 跟 ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"搞IT")," 一样, 成了我们口中烂大街的一个词.\n创业太热潮, 认识的人, 基本一个二个, 都成了大股东小股东."),Object(r.b)("p",null,"创业绝对不是你想的那样, 动动嘴皮子, 人傻钱多速来就好."),Object(r.b)("h1",null,"谈历史"),Object(r.b)("h2",null,"大学的年代"),Object(r.b)("p",null,"在上大学的时候, 当时所有人都说 ",Object(r.b)("em",{parentName:"p"},"C艹是最难的语言"),". Awesome, 不难谁学啊, 学得就是最难的语言. 从C开始, C++, 为了学好C++, 我还跟着一大堆做逆向的家伙学了特别多的assembly lang, 因为C++可以内嵌asm代码.\n实用阶段就开始学习了一大堆算法/数据结构/设计模式之类的东西.\n为了更快的写C++, 随着对windows平台开发理解的深入, 学习了C++/CLI. 但是, 随着发现linux平台对开发者的友好, 开始着手使用emacs/linux C++.\n最后用C++写了关于Python 2.5的解释器. (哦, 当时冠希已经有了相机) 也是这个时候开始, 我发现TDD远比我想想的重要. 变的更有节操了."),Object(r.b)("h2",null,"大学后的打算"),Object(r.b)("p",null,"在大学的时候, 就打算出国学习一下. 不过想着国内MS学位的傻逼程度(读了计算机的MS意味着这个人能力不怎么样), 我实在难以成为这种人. 尽管我考了G, 考了T. US的副本到现在还没有刷."),Object(r.b)("p",null,"毕业后, 我只是一个有节(shi)操(bi)的程序员. 我唯一想做的事情就是, 写出一手好代码, 干出一手好活, 然后出国工作.\n想进步更快, 想感受一下业界巅峰的公司什么样子! ",Object(r.b)("em",{parentName:"p"},"去google"),", 刚刚毕业的大学生事实上一般都不太了解其他公司的特点, 但一般都知道google和微软, google吃的好, 去google.(当然, 现在可能dropbox吃的更好点.)"),Object(r.b)("h2",null,"关于大数据"),Object(r.b)("p",null,"赶上13年, 大数据浪潮袭来. 我知道我理解的是真正的大数据. 什么是data-driven app, 为了做好大数据.\n我会学习和应用很多统计模型, 但是期间本质的数学关系我仍然不甚了解. 所以需要学数学.\n买了近半个书架子的数学书, 我像个数学系的呆瓜一样学数学.\n但是我突然发现, 我虽然可以沉下心来学数学, 但是并没有那么多的天赋.\n第一, 我数学基础本来就不是数学系的, 似乎特别的不牢固. 我需要更加系统的掌握基本数学和统计学.\n第二, 感觉距离Computer Science越来越远了, 似乎到了不可控的深度.\n我突然发现似乎物理可能更适合我.(nonono, 别飞了, 数学已经很远了)"),Object(r.b)("p",null,"我发现似乎大数据这么美, 需要更系统, 更体系化一点才能做好. 所以我想出国读书, 但是家里的一些情况导致我现阶段只想出国工作."),Object(r.b)("h2",null,"现在的决定"),Object(r.b)("p",null,"直到有一天, diana找到我. 我们不如做个startup吧? 看, 我有这样一个idea ","…"),Object(r.b)("h1",null,"出国出国"),Object(r.b)("p",null,"出国是一个看起来很美好的事情.\n可以出国读书/工作的同学确实难免让人羡慕, 毕竟中国只是一个发展中国家, 有着你我都可见的诸多问题.\n但是! 随着心态和见识的增长, 我发现在国内国外对于人而言, 其实并没有本质的不同. 外在表现是对能力和技能的增长, 但是最本质的是对自己心态的磨砺.\n最近效仿先贤, 有恒, 读史, 不晏起, 日知所亡. 格物, 诚意.\n这么大年龄了, 开始学习看起来是小学生学得东西, 惭愧惭愧.\n大道至简, 如果这点都没做好, 绝对不能是人生的赢家."),Object(r.b)("h1",null,"谈理想"),Object(r.b)("p",null,"现代社会物欲横流. 有物欲不代表是坏事, 但是横流就不是好事情了.\n民国时期, 社会也有一段趋于稳定, 征婚广告要求: ",Object(r.b)("em",{parentName:"p"},"不要眼光势力"),", ",Object(r.b)("em",{parentName:"p"},"不要自我太强"),", ",Object(r.b)("em",{parentName:"p"},"不要态度虚浮"),", ",Object(r.b)("em",{parentName:"p"},"长政治、外交，不尚虚荣"),".\n主要要求节操剩余要求外在.\n这可是选择人生伴侣, 可见当时风气之一般. (当然也可能跟当时看报纸的人群有关)\n现在动辄就是要求有房有车高收入. 女的有钱基本都能上手. wtf world. 这个社会有病, 得治.\n不知道什么时候开始以吃货为荣了, 连我也曾经希望做一个资深吃货. 但是我发现这不行, 不说一等人是否琴棋书画. 至少专门做吃货, 感觉怎么都是堕落的表现.\n所以我做event, 有很大一部分, 希望做点有用的东西, 可以更好的改变有兴趣的人走出去, 让电子产品更电子. 然后里面有更有意义的内涵在里面, 是我现在需要做的东西.\n改变这个社会, 哪怕能改变整个行业, 对于现在的我而言确实太难了也太高大上. 不过, 我希望借此弘愿而不被蝇头小利遮目!"),Object(r.b)("h1",null,"别谈理想, 谈赚钱"),Object(r.b)("p",null,"虽然vc大多数都比较(滴~), 但是最终谈到要融钱的时候, 一个二个精的像个猴子一样.\n万幸我的Partner比较擅长这些东西, 或者说可以强迫他自己擅长这些东西. 使得我可以有一个比较良好而纯净的开发环境.\n昨天跟一个其他领域的vc聊, 明显观点不一样, 没有虚的, 别谈理想, 你怎么赚钱, 什么时候盈利, 推广budget什么, 烧多少钱? 什么时候日活能到多少.\n残酷而且一点都不美, 但是毕竟对于vc而言, 这是现实. 终究会回归到钱, 如果干谈情怀如老罗, 但是却无法变现, 那么绝对寸步难行. 还没证明你是乔布斯的时候, 你只是产品经理."),Object(r.b)("h1",null,"加入最早期的startup"),Object(r.b)("p",null,"可能什么都没有, 傻兮兮的做了1年可能还是啥都没有.\n考验人的情操和智商的时机就在于此了.\n多说无益, 继续加油."))}f.isMDXComponent=!0},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},L12J:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),u=function(t){var e=t.to,n=t.children;return a.a.createElement(o.a,{className:"no-underline text-teal-dark uppercase tracking-wide font-bold text-xl mr-8",to:e},n)},c=function(){return a.a.createElement("header",{className:"main-container mx-auto my-5"},a.a.createElement("nav",{className:"flex justify-end"},a.a.createElement(u,{to:"/"},"Home"),a.a.createElement(u,{to:"/tags"},"Tags"),a.a.createElement(u,{to:"/posts"},"Blogs"),a.a.createElement(u,{to:"/about"},"About")))};n("93Eu"),e.a=function(t){var e=t.children,n=(t.setHtmlAttributes,t.id);return a.a.createElement("div",{className:"antialiased leading-tight min-h-screen w-full bg-white"},a.a.createElement(c,null),a.a.createElement("div",{className:"main-container mx-auto"},a.a.createElement("main",{id:n,className:"mt-4 md:mt-0 mx-2 mb-24"},e)))}},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NykK:function(t,e,n){var r=n("nmnc"),a=n("AP2z"),o=n("KfNM"),u=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":u&&u in Object(t)?a(t):o(t)}},Oyvg:function(t,e,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,u=n("kJMx").f,c=n("quPj"),f=n("C/va"),l=r.RegExp,i=l,s=l.prototype,b=/a/g,p=/a/g,m=new l(b)!==b;if(n("nh4g")&&(!m||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,l(b)!=b||l(p)==p||"/a/i"!=l(b,"i")})))){l=function(t,e){var n=this instanceof l,r=c(t),o=void 0===e;return!n&&r&&t.constructor===l&&o?t:a(m?new i(r&&!o?t.source:t,e):i((r=t instanceof l)?t.source:t,r&&o?f.call(t):e),n?this:s,l)};for(var d=function(t){t in l||o(l,t,{configurable:!0,get:function(){return i[t]},set:function(e){i[t]=e}})},x=u(i),g=0;x.length>g;)d(x[g++]);s.constructor=l,l.prototype=s,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},TKrE:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),a=n("dt0z"),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(u,"")}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Wbzz:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("+ZDr"),u=n.n(o);n.d(e,"a",(function(){return u.a}));n("lw3w"),n("emEt").default.enqueue,a.a.createContext({})},Z0cm:function(t,e,n){n("LK8F");var r=Array.isArray;t.exports=r},asDA:function(t,e){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},dVn5:function(t,e,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},j9UF:function(t,e,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz");e.a=function(t){var e=t.to,n=t.children;return a.a.createElement(o.a,{to:e},a.a.createElement("span",{className:"inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},n))}},lw3w:function(t,e,n){var r;t.exports=(r=n("rzlk"))&&r.default||r},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qRkn:function(t,e,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},rzlk:function(t,e,n){"use strict";n.r(e);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),a=n.n(r),o=n("IOVJ");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){var e=t.location,n=t.pageResources;return n?a.a.createElement(o.a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({location:e,pageResources:n},n.json)):null}},sgoq:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("asDA"),a=n("TKrE"),o=n("6nK8"),u=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(u,"")),t,"")}}},zoYe:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),a=n("eUgh"),o=n("Z0cm"),u=n("/9aa"),c=r?r.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(u(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---posts-posts-2014-06-27-markdown-a5ea0eb0d913de402e39.js.map