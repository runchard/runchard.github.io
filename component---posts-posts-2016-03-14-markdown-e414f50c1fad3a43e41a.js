(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/9aa":function(t,e,n){var r=n("NykK"),u=n("ExA7");t.exports=function(t){return"symbol"==typeof t||u(t)&&"[object Symbol]"==r(t)}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){n("SRfc");var r=n("dVn5"),u=n("fo6e"),a=n("dt0z"),o=n("9NmV");t.exports=function(t,e,n){return t=a(t),void 0===(e=n?void 0:e)?u(t)?o(t):r(t):t.match(e)||[]}},"7xGc":function(t,e,n){"use strict";var r=n("q1tI"),u=n.n(r),a=n("L12J"),o=n("j9UF"),c=n("N1om");e.a=function(t){var e=t.children,n=t.pageContext,r=new Date(n.frontmatter.date).toLocaleDateString();return u.a.createElement(a.a,{id:"mdx"},u.a.createElement("h1",null,n.frontmatter.title),u.a.createElement("span",null,n.frontmatter.author),n.frontmatter.tags&&n.frontmatter.tags.map((function(t){return u.a.createElement(o.a,{to:"/tags/"+c(t)+"/"},t)})),u.a.createElement("div",{class:"right"},"at ",u.a.createElement("time",null,r)),u.a.createElement("hr",null),e)}},"9NmV":function(t,e,n){n("SRfc"),n("Oyvg");var r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+r+"]",a="\\d+",o="[\\u2700-\\u27bf]",c="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+r+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",b="(?:"+c+"|"+l+")",p="(?:"+s+"|"+l+")",d="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+d+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",i,f].join("|")+")[\\ufe0e\\ufe0f]?"+d+")*"),x="(?:"+[o,i,f].join("|")+")"+m,O=RegExp([s+"?"+c+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[u,s,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[u,s+b,"$"].join("|")+")",s+"?"+b+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,x].join("|"),"g");t.exports=function(t){return t.match(O)||[]}},AP2z:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),u=Object.prototype,a=u.hasOwnProperty,o=u.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(l){}var u=o.call(t);return r&&(e?t[c]=n:delete t[c]),u}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),u="object"==typeof self&&self&&self.Object===Object&&self,a=r||u||Function("return this")();t.exports=a},L12J:function(t,e,n){"use strict";var r=n("q1tI"),u=n.n(r),a=n("Wbzz"),o=function(t){var e=t.to,n=t.children;return u.a.createElement(a.a,{className:"no-underline text-teal-dark uppercase tracking-wide font-bold text-xl mr-8",to:e},n)},c=function(){return u.a.createElement("header",{className:"main-container mx-auto my-5"},u.a.createElement("nav",{className:"flex justify-end"},u.a.createElement(o,{to:"/"},"Home"),u.a.createElement(o,{to:"/tags"},"Tags"),u.a.createElement(o,{to:"/posts"},"Blogs"),u.a.createElement(o,{to:"/about"},"About")))};n("93Eu"),e.a=function(t){var e=t.children,n=(t.setHtmlAttributes,t.id);return u.a.createElement("div",{className:"antialiased leading-tight min-h-screen w-full bg-white"},u.a.createElement(c,null),u.a.createElement("div",{className:"main-container mx-auto"},u.a.createElement("main",{id:n,className:"mt-4 md:mt-0 mx-2 mb-24"},e)))}},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NykK:function(t,e,n){var r=n("nmnc"),u=n("AP2z"),a=n("KfNM"),o=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?u(t):a(t)}},Oyvg:function(t,e,n){var r=n("dyZX"),u=n("Xbzi"),a=n("hswa").f,o=n("kJMx").f,c=n("quPj"),l=n("C/va"),i=r.RegExp,f=i,s=i.prototype,b=/a/g,p=/a/g,d=new i(b)!==b;if(n("nh4g")&&(!d||n("eeVq")((function(){return p[n("K0xU")("match")]=!1,i(b)!=b||i(p)==p||"/a/i"!=i(b,"i")})))){i=function(t,e){var n=this instanceof i,r=c(t),a=void 0===e;return!n&&r&&t.constructor===i&&a?t:u(d?new f(r&&!a?t.source:t,e):f((r=t instanceof i)?t.source:t,r&&a?l.call(t):e),n?this:s,i)};for(var m=function(t){t in i||a(i,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},x=o(f),O=0;x.length>O;)m(x[O++]);s.constructor=i,i.prototype=s,n("KroJ")(r,"RegExp",i)}n("elZq")("RegExp")},TKrE:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("qRkn"),u=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=u(t))&&t.replace(a,r).replace(o,"")}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Wbzz:function(t,e,n){"use strict";var r=n("q1tI"),u=n.n(r),a=n("+ZDr"),o=n.n(a);n.d(e,"a",(function(){return o.a}));n("lw3w"),n("emEt").default.enqueue,u.a.createContext({})},Z0cm:function(t,e,n){n("LK8F");var r=Array.isArray;t.exports=r},asDA:function(t,e){t.exports=function(t,e,n,r){var u=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++u]);++u<a;)n=e(n,t[u],u,t);return n}},dVn5:function(t,e,n){n("SRfc");var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(r)||[]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,u=Array(r);++n<r;)u[n]=e(t[n],n,t);return u}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},j9UF:function(t,e,n){"use strict";var r=n("q1tI"),u=n.n(r),a=n("Wbzz");e.a=function(t){var e=t.to,n=t.children;return u.a.createElement(a.a,{to:e},u.a.createElement("span",{class:"inline-block bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2"},n))}},lw3w:function(t,e,n){var r;t.exports=(r=n("rzlk"))&&r.default||r},nYlc:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return a})),n.d(e,"default",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var r=n("7ljp"),u=n("7xGc");var a={},o={_frontmatter:a},c=u.a;function l(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,r,u={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(u[n]=t[n]);return u}(t,["components"]);return Object(r.b)(c,Object.assign({},o,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"今天早上, 遭到了 False-consensus bias 的暴击, 感觉有必要稍微聊聊我对高效交流的理解."),Object(r.b)("h2",null,"马屁和实话"),Object(r.b)("p",null,"如果对方说了一些内容, 你感觉茅塞顿开, 但你的心情是很愉悦的, 往往可能因为他只是换了一种方式说了你早认同或者潜意识认同的话.\n但如果对方说了一些内容, 你觉着这人是脑残, 情商暴露的话可能还会吵起来. 心里暗下决定, 下次再也不要跟这个人聊天了吧. 那极有可能他提供了有价值的东西给你了. 而你的智力, 情商, 视角受到局限, 完全无从理解."),Object(r.b)("p",null,"你可能感受到, 某种程度上, 茅塞顿开就是马屁的一种. 对于各路面试官, boss很容易收到奇效.\n能够认知冲突, 并理解冲突才是诤友和进步."),Object(r.b)("h2",null,"说者尽力再说, 听者尽力在听."),Object(r.b)("p",null,"高效的交流, 并非是这个人谈论一些让你感觉好新鲜, 甚至顿时茅塞顿开的东西.\n而是在这基础之上, 说者尽力在说, 他知道听者需要的东西, 努力的表达. 听者尽力在听, 思考上下文, 批判论据是否可靠, 斟酌是否字如其言, 乃至如何利用和加强在自身身上."),Object(r.b)("h2",null,"Both side need in empathic way."),Object(r.b)("p",null,"有一个小方式可以判断各自到底是什么程度."),Object(r.b)("p",null,"ignoring listen: 人在这里, 但是听的是哪里, 我不知道.\npretending listen: 假装在听, 其实并没有明白对方到底说了什么."),Object(r.b)("h2",null,"眼睛不离开手机."),Object(r.b)("p",null,"selective listen: 捡有用的去听, 随时都可能打断对方, 表达自己的观点."),Object(r.b)("h2",null,"随时打开手机看一下."),Object(r.b)("p",null," (最常见, 最危险)\nattentive listen: 认真的听, 但是不太理解, 或者没有反复的思考里面的内容.\nempathic listen: 完全能够感受到对方的上下文, 为何会有这样的结论, 我能如何做. 如何反映."),Object(r.b)("p",null,"blah-blah talk: 就是想发发声音.\nrandom talk: 缺乏重点, 想哪说哪. 几个观点时间随时跳跃, 感受不到核心在哪里. (大多数)\npreparative talk: 有准确的目的和想表达的内容. (一部分)\nmotivative talk: 或结合实践, 或有策略, 或皆有之, 能根据自身的特点去表达.\nempathic talk: 能够完全理解对方的心思, 以及如何让对方理解自己想表达的内容. (可参考, 触龙说赵太后)"),Object(r.b)("h2",null,"持续成长"),Object(r.b)("p",null,"那现在的问题是, 如何达到这些?\n每个人的倾向不同, 想说一下我认为最重要的一个原则和几个容易忽视的小习惯."),Object(r.b)("h2",null,"meta"),Object(r.b)("p",null,"这是最重要的一点.\n如果有人推荐你一些东西, 比如书, 比如内容, 你认为也很有价值. 你有会不会去看?\n如果一个人提到了一个关键字, 比如上文的 ",Object(r.b)("code",Object.assign({parentName:"p"},{className:"language-text"}),"False consensus"),", 或者下面的reference, 你会不会去主动去查一下?\n最重要的一点, 是自身去主动的观察, 是由内到外的改善."),Object(r.b)("h2",null,"过滤噪音"),Object(r.b)("p",null,"这个世界太奇怪, 看两下朋友圈, 刷两个小时微博, 就自以为可以掌控世界的真理了.\n学习控制自己对于信息的摄入太重要了."),Object(r.b)("p",null,"在统治下被蒙蔽的两种方式:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"不允许你接触任何信息, 无知即力量."),Object(r.b)("li",{parentName:"ol"},"让无效内容充斥你的视野, 让你无从分辨.")),Object(r.b)("p",null,"在电视被关闭了之后, 我们的实现被朋友圈接管了. 本质上对待信息的态度并没有什么本质的变化.\n每天保持这样的习惯会给自己一种全知全能的误觉(omniscient)."),Object(r.b)("p",null,"不可否认有很多人提供了很多价值, 但作为朋友圈牛鬼蛇神什么都有, 微信给我们提供了过滤这样的功能. 我们要理解并且利用他."),Object(r.b)("h2",null,"有恒"),Object(r.b)("p",null,"有计划, 并且持续的长期的读些价值的东西, 做些有价值的事情.\n在我健身前, 我其实不太看的起那些健身, 或者很健壮的人. 但是我真正开始健身之后才发现, 这是一场从内到外的改变. 从吃到各路习惯, 包括些许酸爽的锻炼, 甚至按时睡觉, 都是锻炼意志, 迫使你进步的源泉. 健身到大块比减脂要难的多的多. 看到太多人整天叫唤着要减肥, 结果夏天还是三层游泳圈的. 心里面怎么着对这些人都有点鄙视了."),Object(r.b)("p",null,"持续的做好一件事情, 才能对对方的成就理解和敬畏."),Object(r.b)("h2",null,"看好书前不读别人总结"),Object(r.b)("p",null,"否则会带着傲慢和满足感去看书.\n如果你爱人设想的浪漫场景被透漏, 你不会有很深的触动, 感觉变淡, 也不会觉着对方真用心, 你在破坏这个游戏.\n书也一样."),Object(r.b)("p",null,"为什么说上面几个? 满招损, 谦受益, 与人交流最忌讳就是先用傲气压别人一等."),Object(r.b)("p",null,"最后, 这篇博客的程度, 最多也就motivative."))}l.isMDXComponent=!0},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qRkn:function(t,e,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},rzlk:function(t,e,n){"use strict";n.r(e);n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("q1tI"),u=n.n(r),a=n("IOVJ");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.default=function(t){var e=t.location,n=t.pageResources;return n?u.a.createElement(a.a,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({location:e,pageResources:n},n.json)):null}},sgoq:function(t,e,n){n("pIFo"),n("Oyvg");var r=n("asDA"),u=n("TKrE"),a=n("6nK8"),o=RegExp("['’]","g");t.exports=function(t){return function(e){return r(a(u(e).replace(o,"")),t,"")}}},zoYe:function(t,e,n){n("a1Th"),n("h7Nl"),n("Btvt");var r=n("nmnc"),u=n("eUgh"),a=n("Z0cm"),o=n("/9aa"),c=r?r.prototype:void 0,l=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return u(e,t)+"";if(o(e))return l?l.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---posts-posts-2016-03-14-markdown-e414f50c1fad3a43e41a.js.map