(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{bZV1:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",(function(){return s})),n.d(a,"default",(function(){return c}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var t=n("7ljp"),p=n("7xGc");var s={},r={_frontmatter:s},b=p.a;function c(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,p={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,["components"]);return Object(t.b)(b,Object.assign({},r,n,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h1",null,"python3 yield from skills up",Object(t.b)("a",{id:"sec-1"})),Object(t.b)("p",null,"The explanation that yield from g is equivalent to for v in g: yield v does not even begin to do justice to what yield from is all about. Because, let's face it, if all yield from does is expand the for loop, then it does not warrant adding yield from to the language and preclude a whole bunch of new features from being implemented in Python 2.x.\nThink of yield from as providing a transparent two-way channel from the caller to the sub-generator."),Object(t.b)("h2",null,"sending data to a generator using yield from",Object(t.b)("a",{id:"sec-1-1"})),Object(t.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(t.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),'def generator():\n    """\n    A generator(coroutine) that writes data *sent* to it to fd, socket, etc.\n    """\n    while True:\n        w = (yield)\n        print(\'>> %s\' % w)\n\n\ndef gen_wrapper(c):          # c for coroutine\n    yield from c\n\nif __name__ == \'__main__\':\n    gen = generator()\n    wrap = gen_wrapper(gen)\n    wrap.send(None)  # initialize the coroutine\n    for i in range(4):\n        gen.send(i)'),Object(t.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"})))),Object(t.b)("h2",null,"exception handling for yield from",Object(t.b)("a",{id:"sec-1-2"})),Object(t.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(t.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"class TransactionException(Exception):\n    pass\n\n\ndef generator():\n    while True:\n        try:\n            w = (yield)\n        except TransactionException:\n            print('******')\n        else:\n            print('>> ', w)\n\n\ndef gen_wrapper(c):          # c for coroutine\n    yield from c\n\n\nif __name__ == '__main__':\n    gen = generator()\n    wrap = gen_wrapper(gen)\n    wrap.send(None)\n    for i in [0, 1, 2, 3, 'exc', 4]:\n        if i == 'exc':\n            wrap.throw(TransactionException)\n        else:\n            wrap.send(i)"),Object(t.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"})))),Object(t.b)("h2",null,"close outside of block",Object(t.b)("a",{id:"sec-1-3"})),Object(t.b)("div",{className:"gatsby-highlight","data-language":"text"},Object(t.b)("pre",Object.assign({parentName:"div"},{style:{counterReset:"linenumber NaN"},className:"language-text line-numbers"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"language-text"}),"def generator():\n    while True:\n        w = (yield)\n        print('>> ', w)\n\n\ndef gen_wrapper(c):          # c for coroutine\n    yield from c\n\n\nif __name__ == '__main__':\n    gen = generator()\n    wrap = gen_wrapper(gen)\n    wrap.send(None)\n    for i in [0, 1, 2, 3, 'close', 4]:\n        if i == 'close':\n            wrap.close()\n        else:\n            wrap.send(i)"),Object(t.b)("span",Object.assign({parentName:"pre"},{"aria-hidden":"true",className:"line-numbers-rows",style:{whiteSpace:"normal",width:"auto",left:"0"}}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"}),Object(t.b)("span",{parentName:"span"})))),Object(t.b)("h2",null,"benefits of yield",Object(t.b)("a",{id:"sec-1-4"})),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Using a generalization of the StopIteration exception makes it easy for other kinds of iterators to participate in the protocol without having to grow an extra attribute or a close() method."),Object(t.b)("li",{parentName:"ul"},"It simplifies the implementation, because the point at which the return value from the subgenerator becomes available is the same point at which the exception is raised. Delaying until any later time would require storing the return value somewhere."),Object(t.b)("li",{parentName:"ul"},"the primary benefits of yield from come when you've written a generator that uses these techniques and when it needs to be refactored.")),Object(t.b)("p",null,"and especially this part: ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://www.python.org/dev/peps/pep-0380/#generators-as-threads"}),"https://www.python.org/dev/peps/pep-0380/#generators-as-threads")),Object(t.b)("h2",null,Object(t.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"coroutine")," is not a ",Object(t.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"callback")," (which is ",Object(t.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"yield")," is not a ",Object(t.b)("code",Object.assign({parentName:"h2"},{className:"language-text"}),"function"),")",Object(t.b)("a",{id:"sec-1-5"})),Object(t.b)("p",null,'The difference is that whenever the generator "yields" a value the execution of the generator is paused and the code continues where the generator was called.'),Object(t.b)("h1",null,"reference",Object(t.b)("a",{id:"sec-2"})),Object(t.b)("p",null,Object(t.b)("a",Object.assign({parentName:"p"},{href:"http://legacy.python.org/dev/peps/pep-0380/"}),"http://legacy.python.org/dev/peps/pep-0380/"),"\n",Object(t.b)("a",Object.assign({parentName:"p"},{href:"http://legacy.python.org/dev/peps/pep-0342/"}),"http://legacy.python.org/dev/peps/pep-0342/"),"\n",Object(t.b)("a",Object.assign({parentName:"p"},{href:"http://stackoverflows.com"}),"http://stackoverflows.com")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"speacial great thanks to ",Object(t.b)("a",Object.assign({parentName:"li"},{href:"about.me/fantix"}),"@Fantix King"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---posts-posts-2014-12-04-python-3-yield-from-skills-up-markdown-9c0c6e9c7d247779a301.js.map