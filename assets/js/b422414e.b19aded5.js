"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3956],{6230:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var a=t(3117),r=t(102),o=(t(7294),t(3905)),i=["components"],l={},p=void 0,c={unversionedId:"FE/node/webpack",id:"FE/node/webpack",title:"webpack",description:"webpack",source:"@site/docs/FE/node/webpack.md",sourceDirName:"FE/node",slug:"/FE/node/webpack",permalink:"/docs/FE/node/webpack",draft:!1,tags:[],version:"current",lastUpdatedAt:1597161159,formattedLastUpdatedAt:"Aug 11, 2020",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"roolupjs",permalink:"/docs/FE/node/roolupjs"},next:{title:"npm",permalink:"/docs/FE/npm/"}},u={},s=[{value:"webpack",id:"webpack",level:2},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:3},{value:"\u5404\u4e2a\u6d41\u7a0b",id:"\u5404\u4e2a\u6d41\u7a0b",level:3},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:3},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:3},{value:"\u5e95\u5c42\u539f\u7406",id:"\u5e95\u5c42\u539f\u7406",level:3},{value:"babel \u914d\u7f6e",id:"babel-\u914d\u7f6e",level:3},{value:"babel AST",id:"babel-ast",level:3},{value:"webpack",id:"webpack-1",level:2},{value:"init",id:"init",level:4},{value:"asset-management",id:"asset-management",level:4}],d={toc:s};function b(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"webpack"},"webpack"),(0,o.kt)("h3",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u5165\u53e3(entry)\n\u8f93\u51fa(output)\nloader\n\u63d2\u4ef6(plugin)\n\u6a21\u5f0f(mode)\n\u6d4f\u89c8\u5668\u517c\u5bb9\u6027(browser compatibility)\n\n\u5165\u53e3\u8d77\u70b9(entry point)\u6307\u793a webpack \u5e94\u8be5\u4f7f\u7528\u54ea\u4e2a\u6a21\u5757\uff0c\u6765\u4f5c\u4e3a\u6784\u5efa\u5176\u5185\u90e8 \u4f9d\u8d56\u56fe(dependency graph) \u7684\u5f00\u59cb\u3002\u8fdb\u5165\u5165\u53e3\u8d77\u70b9\u540e\uff0cwebpack \u4f1a\u627e\u51fa\u6709\u54ea\u4e9b\u6a21\u5757\u548c\u5e93\u662f\u5165\u53e3\u8d77\u70b9\uff08\u76f4\u63a5\u548c\u95f4\u63a5\uff09\u4f9d\u8d56\u7684\u3002\n\noutput \u5c5e\u6027\u544a\u8bc9 webpack \u5728\u54ea\u91cc\u8f93\u51fa\u5b83\u6240\u521b\u5efa\u7684 bundle\uff0c\u4ee5\u53ca\u5982\u4f55\u547d\u540d\u8fd9\u4e9b\u6587\u4ef6\u3002\n\nwebpack \u53ea\u80fd\u7406\u89e3 JavaScript \u548c JSON \u6587\u4ef6\uff0c\u8fd9\u662f webpack \u5f00\u7bb1\u53ef\u7528\u7684\u81ea\u5e26\u80fd\u529b\u3002loader \u8ba9 webpack \u80fd\u591f\u53bb\u5904\u7406\u5176\u4ed6\u7c7b\u578b\u7684\u6587\u4ef6\uff0c\u5e76\u5c06\u5b83\u4eec\u8f6c\u6362\u4e3a\u6709\u6548 \u6a21\u5757\uff0c\u4ee5\u4f9b\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\uff0c\u4ee5\u53ca\u88ab\u6dfb\u52a0\u5230\u4f9d\u8d56\u56fe\u4e2d\u3002\n\nloader \u7528\u4e8e\u8f6c\u6362\u67d0\u4e9b\u7c7b\u578b\u7684\u6a21\u5757\uff0c\u800c\u63d2\u4ef6\u5219\u53ef\u4ee5\u7528\u4e8e\u6267\u884c\u8303\u56f4\u66f4\u5e7f\u7684\u4efb\u52a1\u3002\u5305\u62ec\uff1a\u6253\u5305\u4f18\u5316\uff0c\u8d44\u6e90\u7ba1\u7406\uff0c\u6ce8\u5165\u73af\u5883\u53d8\u91cf\u3002\n\n\u901a\u8fc7\u9009\u62e9 development, production \u6216 none \u4e4b\u4e2d\u7684\u4e00\u4e2a\uff0c\u6765\u8bbe\u7f6e mode \u53c2\u6570\uff0c\u4f60\u53ef\u4ee5\u542f\u7528 webpack \u5185\u7f6e\u5728\u76f8\u5e94\u73af\u5883\u4e0b\u7684\u4f18\u5316\u3002\u5176\u9ed8\u8ba4\u503c\u4e3a production\u3002\n\nwebpack \u652f\u6301\u6240\u6709\u7b26\u5408 ES5 \u6807\u51c6 \u7684\u6d4f\u89c8\u5668\uff08\u4e0d\u652f\u6301 IE8 \u53ca\u4ee5\u4e0b\u7248\u672c\uff09\u3002webpack \u7684 import() \u548c require.ensure() \u9700\u8981 Promise\u3002\u5982\u679c\u4f60\u60f3\u8981\u652f\u6301\u65e7\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u5728\u4f7f\u7528\u8fd9\u4e9b\u8868\u8fbe\u5f0f\u4e4b\u524d\uff0c\u8fd8\u9700\u8981 \u63d0\u524d\u52a0\u8f7d polyfill\u3002\n")),(0,o.kt)("h3",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,o.kt)("h3",{id:"\u5404\u4e2a\u6d41\u7a0b"},"\u5404\u4e2a\u6d41\u7a0b"),(0,o.kt)("h3",{id:"\u5e38\u7528\u914d\u7f6e"},"\u5e38\u7528\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u63d2\u4ef6"},"\u63d2\u4ef6"),(0,o.kt)("h3",{id:"\u5e95\u5c42\u539f\u7406"},"\u5e95\u5c42\u539f\u7406"),(0,o.kt)("h3",{id:"babel-\u914d\u7f6e"},"babel \u914d\u7f6e"),(0,o.kt)("h3",{id:"babel-ast"},"babel AST"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"webpack-1"},"webpack"),(0,o.kt)("h4",{id:"init"},"init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn webpack\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Hash: b1f0becdf0cd9299e4d1\nVersion: webpack 4.42.1\nTime: 1668ms\nBuilt at: 2020-03-30 21:45:30\n  Asset      Size  Chunks             Chunk Names\nmain.js  72.1 KiB       0  [emitted]  main\nEntrypoint main = main.js\n[1] ./src/index.js 226 bytes {0} [built]\n[2] (webpack)/buildin/global.js 472 bytes {0} [built]\n[3] (webpack)/buildin/module.js 497 bytes {0} [built]\n    + 1 hidden module\n\nWARNING in configuration\nThe 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production'\nto enable defaults for each environment.\nYou can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/\nDone in 2.87s.\n")),(0,o.kt)("h4",{id:"asset-management"},"asset-management"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  module: {\n    rules: [\n      {\n        test: /\\.css$/,\n        use: ["style-loader", "css-loader"]\n      }\n    ]\n  }\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"webpack \u6839\u636e\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u6765\u786e\u5b9a\u5e94\u8be5\u67e5\u627e\u54ea\u4e9b\u6587\u4ef6\uff0c\u5e76\u5c06\u5176\u63d0\u4f9b\u7ed9\u6307\u5b9a\u7684 loader\u3002\u5728\u8fd9\u4e2a\u793a\u4f8b\u4e2d\uff0c\u6240\u6709\u4ee5")," ",(0,o.kt)("inlineCode",{parentName:"p"},".css")," ",(0,o.kt)("em",{parentName:"p"},"\u7ed3\u5c3e\u7684\u6587\u4ef6\uff0c\u90fd\u5c06\u88ab\u63d0\u4f9b\u7ed9")," ",(0,o.kt)("inlineCode",{parentName:"p"},"style-loader")," ",(0,o.kt)("em",{parentName:"p"},"\u548c")," ",(0,o.kt)("inlineCode",{parentName:"p"},"css-loader"),(0,o.kt)("em",{parentName:"p"},"\u3002")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/output-management/"},"https://webpack.docschina.org/guides/output-management/")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/FormidableLabs/webpack-dashboard"},"https://github.com/FormidableLabs/webpack-dashboard")))}b.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return b}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),b=r,m=d["".concat(p,".").concat(b)]||d[b]||s[b]||o;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);