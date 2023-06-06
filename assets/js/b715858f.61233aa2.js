"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7953],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),m=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=r,k=c["".concat(u,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6027:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return s}});var a=n(3117),r=n(102),l=(n(7294),n(3905)),i=["components"],o={title:"Tmux",date:new Date("2016-11-19T20:47:12.000Z"),tags:["Tmux","Term"],categories:["Term"]},u=void 0,m={unversionedId:"CloudNative/term/tmux",id:"CloudNative/term/tmux",title:"Tmux",description:"\u5b89\u88c5",source:"@site/docs/CloudNative/term/tmux.md",sourceDirName:"CloudNative/term",slug:"/CloudNative/term/tmux",permalink:"/docs/CloudNative/term/tmux",draft:!1,tags:[{label:"Tmux",permalink:"/docs/tags/tmux"},{label:"Term",permalink:"/docs/tags/term"}],version:"current",lastUpdatedAt:1685726734,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"Tmux",date:"2016-11-19T20:47:12.000Z",tags:["Tmux","Term"],categories:["Term"]},sidebar:"tutorialSidebar",previous:{title:"Termux",permalink:"/docs/CloudNative/term/termux"},next:{title:"\u7ec8\u7aef\u4e0b\u8f7d\u5de5\u5177",permalink:"/docs/CloudNative/term/tool.download"}},p={},s=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u57fa\u7840",id:"\u57fa\u7840",level:3},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:3},{value:"Windows \u64cd\u4f5c",id:"windows-\u64cd\u4f5c",level:6},{value:"Pane \u64cd\u4f5c",id:"pane-\u64cd\u4f5c",level:6},{value:"Session \u64cd\u4f5c",id:"session-\u64cd\u4f5c",level:6},{value:"\u7f8e\u5316",id:"\u7f8e\u5316",level:3}],c={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# CentOS\nsudo yum install tmux\n# macOS\nbrew install tmux\n")),(0,l.kt)("h3",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"### \u8fd0\u884c\ntmux\n### \u5173\u95ed\nCtrl + d\n### \u6216\u9000\u51fa\nexit\n")),(0,l.kt)("h3",{id:"\u5feb\u6377\u952e"},"\u5feb\u6377\u952e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Tmux \u7684\u5feb\u6377\u952e\u7684\u89e6\u53d1\u4e3a",(0,l.kt)("inlineCode",{parentName:"strong"},"Ctrl+b"),"\uff0c\u4e0b\u6587\u7b80\u8bb0\u4e3a",(0,l.kt)("inlineCode",{parentName:"strong"},"C-b"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u67e5\u770b\u5e2e\u52a9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"d")," detach \u5f53\u524d\u4f1a\u8bdd,\u8f93\u5165",(0,l.kt)("inlineCode",{parentName:"li"},"tmux attach"),"\u53ef\u91cd\u65b0\u8fdb\u5165")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://ww1.sinaimg.cn/large/006tKfTcly1femc4u97z4j31kw0qwe84.jpg",alt:null})),(0,l.kt)("h6",{id:"windows-\u64cd\u4f5c"},"Windows \u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"c")," \u65b0\u5efa\u7a97\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"&")," \u5173\u95ed\u5f53\u524d\u7a97\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"w")," \u5217\u51fa\u6240\u6709\u7a97\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"p")," \u5207\u6362\u5230\u4e0a\u4e00\u4e2a\u7a97\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"n"),"\u5207\u6362\u5230\u4e0b\u4e00\u4e2a\u7a97\u53e3"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"{0-n}")," \u5207\u6362\u5230\u7a97\u53e3\u53f7"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},",")," \u91cd\u547d\u540d\u5f53\u524d\u7a97\u53e3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u65b0\u7684\u4f1a\u8bdd\u754c\u9762\uff0c\u60a8\u53ef\u4ee5\u5728\u5e95\u90e8\u770b\u5230\u7eff\u8272\u7684 Tmux \u4f1a\u8bdd\u8bb0\u5f55\uff0c","*"," \u53f7\u6807\u8bb0\u7684\u4f1a\u8bdd\u8868\u793a\u5f53\u524d\u7684\u4f1a\u8bdd\u3002")),(0,l.kt)("h6",{id:"pane-\u64cd\u4f5c"},"Pane \u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"%")," \u6a2a\u5411\u5206\u5c4f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'"')," \u7eb5\u5411\u5206\u5c4f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u65b9\u5411\u952e")," \u9009\u62e9\u4e2a\u9762\u677f"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"q")," \u663e\u793a\u9762\u677f\u7f16\u53f7")),(0,l.kt)("h6",{id:"session-\u64cd\u4f5c"},"Session \u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"s")," \u9009\u62e9\u5e76\u5207\u6362\u4f1a\u8bdd")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521b\u5efa\u4e00\u4e2a\u65b0\u7684session\n$ tmux new -s <name-of-my-session>\n# \u5728\u5f53\u524dsession\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684Session, \u5e76\u4fdd\u8bc1\u4e4b\u524dsession\u4f9d\u7136\u5b58\u5728\n# C-b : \u7136\u540e\u8f93\u5165\u4e0b\u9762\u547d\u4ee4\nnew -s <name-of-my-new-session>\n# \u8fdb\u5165\u540d\u4e3atest\u7684session\n$ tmux attach -t test\n")),(0,l.kt)("h3",{id:"\u7f8e\u5316"},"\u7f8e\u5316"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/gpakosz/.tmux"},"https://github.com/gpakosz/.tmux")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd\ngit clone https://github.com/gpakosz/.tmux.git\nln -s .tmux/.tmux.conf\ncp .tmux/.tmux.conf.local .\n")),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u7ae0:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linux.cn/article-5399-1.html"},"https://linux.cn/article-5399-1.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linux.cn/article-5666-1.html"},"https://linux.cn/article-5666-1.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linux.cn/article-3952-1.html"},"https://linux.cn/article-3952-1.html")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tmuxinator/tmuxinator"},"https://github.com/tmuxinator/tmuxinator")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"http://skwp.github.io/dotfiles/"},"http://skwp.github.io/dotfiles/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/benmills/vimux"},"https://github.com/benmills/vimux")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/antono/shelr"},"https://github.com/antono/shelr")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/altercation/solarized"},"https://github.com/altercation/solarized")),(0,l.kt)("li",{parentName:"ul"},"<",(0,l.kt)("a",{parentName:"li",href:"https://github.com/jimeh/tmuxifier"},"https://github.com/jimeh/tmuxifier"))))}d.isMDXComponent=!0}}]);