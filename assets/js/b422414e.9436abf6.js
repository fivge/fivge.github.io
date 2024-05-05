"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3956],{9135:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var t=a(5893),i=a(1151);const s={},l=void 0,d={id:"FE/node/webpack",title:"webpack",description:"webpack",source:"@site/docs/FE/node/webpack.md",sourceDirName:"FE/node",slug:"/FE/node/webpack",permalink:"/docs/FE/node/webpack",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"roolupjs",permalink:"/docs/FE/node/roolupjs"},next:{title:"npm",permalink:"/docs/FE/npm/"}},o={},c=[{value:"webpack",id:"webpack",level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3},{value:"\u5404\u4e2a\u6d41\u7a0b",id:"\u5404\u4e2a\u6d41\u7a0b",level:3},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:3},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:3},{value:"\u5e95\u5c42\u539f\u7406",id:"\u5e95\u5c42\u539f\u7406",level:3},{value:"babel \u914d\u7f6e",id:"babel-\u914d\u7f6e",level:3},{value:"babel AST",id:"babel-ast",level:3},{value:"webpack",id:"webpack-1",level:2},{value:"init",id:"init",level:4},{value:"asset-management",id:"asset-management",level:4}];function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"webpack",children:"webpack"}),"\n",(0,t.jsx)(n.h3,{id:"\u5de5\u4f5c\u6d41\u7a0b",children:"\u5de5\u4f5c\u6d41\u7a0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\u5165\u53e3(entry)\n\u8f93\u51fa(output)\nloader\n\u63d2\u4ef6(plugin)\n\u6a21\u5f0f(mode)\n\u6d4f\u89c8\u5668\u517c\u5bb9\u6027(browser compatibility)\n\n\u5165\u53e3\u8d77\u70b9(entry point)\u6307\u793a webpack \u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\uff0c\u6765\u4f5c\u4e3a\u6784\u5efa\u5176\u5185\u90e8 \u4f9d\u8d56\u56fe(dependency graph) \u7684\u5f00\u59cb\u3002\u8fdb\u5165\u5165\u53e3\u8d77\u70b9\u540e\uff0cwebpack \u4f1a\u627e\u51fa\u6709\u54ea\u4e9b\u6a21\u5757\u548c\u5e93\u662f\u5165\u53e3\u8d77\u70b9\uff08\u76f4\u63a5\u548c\u95f4\u63a5\uff09\u4f9d\u8d56\u7684\u3002\n\noutput \u5c5e\u6027\u544a\u8bc9 webpack \u5728\u54ea\u91cc\u8f93\u51fa\u5b83\u6240\u521b\u5efa\u7684 bundle\uff0c\u4ee5\u53ca\u5982\u4f55\u547d\u540d\u8fd9\u4e9b\u6587\u4ef6\u3002\n\nwebpack \u53ea\u80fd\u7406\u89e3 JavaScript \u548c JSON \u6587\u4ef6\uff0c\u8fd9\u662f webpack \u5f00\u7bb1\u53ef\u7528\u7684\u81ea\u5e26\u80fd\u529b\u3002loader \u8ba9 webpack \u80fd\u591f\u53bb\u5904\u7406\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u5e76\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u6709\u6548 \u6a21\u5757\uff0c\u4ee5\u4f9b\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\uff0c\u4ee5\u53ca\u88ab\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\u3002\n\nloader \u7528\u4e8e\u8f6c\u6362\u67d0\u4e9b\u7c7b\u578b\u7684\u6a21\u5757\uff0c\u800c\u63d2\u4ef6\u5219\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\u3002\u5305\u62ec\uff1a\u6253\u5305\u4f18\u5316\uff0c\u8d44\u6e90\u7ba1\u7406\uff0c\u6ce8\u5165\u73af\u5883\u53d8\u91cf\u3002\n\n\u901a\u8fc7\u9009\u62e9 development, production \u6216 none \u4e4b\u4e2d\u7684\u4e00\u4e2a\uff0c\u6765\u8bbe\u7f6e mode \u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u542f\u7528 webpack \u5185\u7f6e\u5728\u76f8\u5e94\u73af\u5883\u4e0b\u7684\u4f18\u5316\u3002\u5176\u9ed8\u8ba4\u503c\u4e3a production\u3002\n\nwebpack \u652f\u6301\u6240\u6709\u7b26\u5408 ES5 \u6807\u51c6 \u7684\u6d4f\u89c8\u5668\uff08\u4e0d\u652f\u6301 IE8 \u53ca\u4ee5\u4e0b\u7248\u672c\uff09\u3002webpack \u7684 import() \u548c require.ensure() \u9700\u8981 Promise\u3002\u5982\u679c\u4f60\u60f3\u8981\u652f\u6301\u65e7\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u5728\u4f7f\u7528\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u4e4b\u524d\uff0c\u8fd8\u9700\u8981 \u63d0\u524d\u52a0\u8f7d polyfill\u3002\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u6b65\u9aa4",children:"\u6b65\u9aa4"}),"\n",(0,t.jsx)(n.h3,{id:"\u5404\u4e2a\u6d41\u7a0b",children:"\u5404\u4e2a\u6d41\u7a0b"}),"\n",(0,t.jsx)(n.h3,{id:"\u5e38\u7528\u914d\u7f6e",children:"\u5e38\u7528\u914d\u7f6e"}),"\n",(0,t.jsx)(n.h3,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,t.jsx)(n.h3,{id:"\u5e95\u5c42\u539f\u7406",children:"\u5e95\u5c42\u539f\u7406"}),"\n",(0,t.jsx)(n.h3,{id:"babel-\u914d\u7f6e",children:"babel \u914d\u7f6e"}),"\n",(0,t.jsx)(n.h3,{id:"babel-ast",children:"babel AST"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"webpack-1",children:"webpack"}),"\n",(0,t.jsx)(n.h4,{id:"init",children:"init"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn webpack\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Hash: b1f0becdf0cd9299e4d1\nVersion: webpack 4.42.1\nTime: 1668ms\nBuilt at: 2020-03-30 21:45:30\n  Asset      Size  Chunks             Chunk Names\nmain.js  72.1 KiB       0  [emitted]  main\nEntrypoint main = main.js\n[1] ./src/index.js 226 bytes {0} [built]\n[2] (webpack)/buildin/global.js 472 bytes {0} [built]\n[3] (webpack)/buildin/module.js 497 bytes {0} [built]\n    + 1 hidden module\n\nWARNING in configuration\nThe 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production'\nto enable defaults for each environment.\nYou can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/\nDone in 2.87s.\n"})}),"\n",(0,t.jsx)(n.h4,{id:"asset-management",children:"asset-management"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: ["style-loader", "css-loader"]\n      }\n    ]\n  }\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"webpack \u6839\u636e\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u6765\u786e\u5b9a\u5e94\u8be5\u67e5\u627e\u54ea\u4e9b\u6587\u4ef6\uff0c\u5e76\u5c06\u5176\u63d0\u4f9b\u7ed9\u6307\u5b9a\u7684 loader\u3002\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6240\u6709\u4ee5"})," ",(0,t.jsx)(n.code,{children:".css"})," ",(0,t.jsx)(n.em,{children:"\u7ed3\u5c3e\u7684\u6587\u4ef6\uff0c\u90fd\u5c06\u88ab\u63d0\u4f9b\u7ed9"})," ",(0,t.jsx)(n.code,{children:"style-loader"})," ",(0,t.jsx)(n.em,{children:"\u548c"})," ",(0,t.jsx)(n.code,{children:"css-loader"}),(0,t.jsx)(n.em,{children:"\u3002"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://webpack.docschina.org/guides/output-management/",children:"https://webpack.docschina.org/guides/output-management/"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/FormidableLabs/webpack-dashboard",children:"https://github.com/FormidableLabs/webpack-dashboard"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>l});var t=a(7294);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);