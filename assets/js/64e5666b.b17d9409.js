"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9354],{6258:function(e,n,t){t.r(n),t.d(n,{assets:function(){return i},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return s}});var r=t(3117),o=t(102),l=(t(7294),t(3905)),a=["components"],p={id:"web-components",title:"Web Components"},u=void 0,m={unversionedId:"FE/brower/web-components",id:"FE/brower/web-components",title:"Web Components",description:"\u539f\u751f\u5e95\u5c42\u7684\u5b9e\u73b0\u65b9\u5f0f",source:"@site/docs/FE/brower/WebComponents.md",sourceDirName:"FE/brower",slug:"/FE/brower/web-components",permalink:"/docs/FE/brower/web-components",draft:!1,tags:[],version:"current",lastUpdatedAt:1581911329,formattedLastUpdatedAt:"Feb 17, 2020",frontMatter:{id:"web-components",title:"Web Components"},sidebar:"tutorialSidebar",previous:{title:"WebAssembly",permalink:"/docs/FE/brower/WebAssembly"},next:{title:"WebGL",permalink:"/docs/FE/brower/WebGL"}},i={},s=[{value:"DOM",id:"dom",level:4},{value:"ShadowDOM",id:"shadowdom",level:4},{value:"Web Components",id:"web-components",level:4},{value:"@angular/Elements",id:"angularelements",level:4},{value:"\u4f5c\u7528&amp;\u597d\u5904",id:"\u4f5c\u7528\u597d\u5904",level:5},{value:"\u9879\u76ee\u521b\u5efa",id:"\u9879\u76ee\u521b\u5efa",level:5},{value:"\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20",id:"\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20",level:5},{value:"\u6253\u5305&amp;\u8fd0\u884c",id:"\u6253\u5305\u8fd0\u884c",level:5}],c={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u539f\u751f\u5e95\u5c42\u7684\u5b9e\u73b0\u65b9\u5f0f")),(0,l.kt)("h4",{id:"dom"},"DOM"),(0,l.kt)("h4",{id:"shadowdom"},"ShadowDOM"),(0,l.kt)("h4",{id:"web-components"},"Web Components"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/Web_Components"},"https://developer.mozilla.org/zh-CN/docs/Web/Web_Components")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mdn/web-components-examples"},"https://github.com/mdn/web-components-examples")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/material-components/material-components-web"},"https://github.com/material-components/material-components-web")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://juejin.im/post/5b780a98e51d4538980bf5cf"},"https://juejin.im/post/5b780a98e51d4538980bf5cf")),(0,l.kt)("h4",{id:"angularelements"},"@angular/Elements"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5728 Angular v6 \u4e2d\u6dfb\u52a0\u4e86\u4e00\u4e2a\u7279\u6027\uff0cAngular Elements \u53c8\u79f0 angular \u5143\u7d20")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@angular/Elements"),"\u662f Angular \u4e2d\u7684\u4e00\u4e2a\u65b0\u5305\uff0c\u5b83\u5e2e\u52a9\u6211\u4eec\u5c06 Angular \u7ec4\u4ef6\u53d1\u5e03\u81ea\u5b9a\u4e49\u5143\u7d20\u3002",(0,l.kt)("strong",{parentName:"p"},"\u5b83\u901a\u8fc7\u5c06 Angular \u7ec4\u4ef6\u8f6c\u5316\u6210",(0,l.kt)("inlineCode",{parentName:"strong"},"web Components"),"\u6765\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u5b83\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684 ",(0,l.kt)("inlineCode",{parentName:"strong"},"Custom Elements API")," \u5b9e\u73b0"),"\u3002\u8ba9\u6211\u4eec\u6765\u770b\u770b\u5982\u4f55\u5408\u7406\u5229\u7528\u8fd9\u4e00\u7279\u6027"),(0,l.kt)("hr",null),(0,l.kt)("h5",{id:"\u4f5c\u7528\u597d\u5904"},"\u4f5c\u7528&\u597d\u5904"),(0,l.kt)("p",null,"\u4f7f\u7528 Angular \u5143\u7d20\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u6211\u4eec\u7684\u7ec4\u4ef6\u771f\u6b63\u5730\u53ef\u91cd\u7528\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4ed6\u67b6\u548c\u5e93\u4e2d\u4f7f\u7528 Angular \u7ec4\u4ef6\uff0c\u6bd4\u5982 React\u3001Vue \u548c Ember!\n\u53ef\u4ee5\u628a Angular \u6dfb\u52a0\u5230\u9879\u76ee\u540e\u7aef"),(0,l.kt)("h5",{id:"\u9879\u76ee\u521b\u5efa"},"\u9879\u76ee\u521b\u5efa"),(0,l.kt)("p",null,"\u786e\u4fdd Angular CLI \u7248\u672c \u5927\u4e8e v6\uff0c\u56e0\u4e3a v6 \u624d\u5f00\u59cb\u652f\u6301",(0,l.kt)("inlineCode",{parentName:"p"},"@angular/Elements"),"\u7684\u3002"),(0,l.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a angular \u7684\u57fa\u7840\u9879\u76ee"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"ng new angular-app\ncd angular-app\nng serve --open\n")),(0,l.kt)("p",null,"\u63a5\u7740\u521b\u5efa\u4e00\u4e2a angular \u7ec4\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"ng g c HelloWorld\n")),(0,l.kt)("p",null,"\u5b89\u88c5@angular/elements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"ng add @angular/elements\nng add @webcomponents/webcomponentsjs\n")),(0,l.kt)("p",null,"\u5b89\u88c5\u597d\u4e4b\u540e\uff0c\u8f6c\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"app.module"),"\u3002\uff0c\u5e76\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"@NgModule"),"\u8fdb\u884c\u4ee5\u4e0b\u66f4\u6539:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-TypeScript"},"import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule, Injector } from '@angular/core';\nimport { createCustomElement } from '@angular/elements';\n\nimport { HelloWorldComponent } from './hello-world/hello-world.component';\n\n@NgModule({\n  declarations: [HelloWorldComponent],\n  imports: [BrowserModule],\n  entryComponents: [HelloWorldComponent],\n  providers: [],\n})\nexport class AppModule {\n  constructor(injector: Injector) {\n    const custom = createCustomElement(HelloWorldComponent, { injector });\n    customElements.define('app-hello-world', custom);\n  }\n\n  ngDoBootstrap() { }\n}\n\n")),(0,l.kt)("h5",{id:"\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20"},"\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u4e00\u4e2a\u9879\u76ee\u6709 N \u4e2a\u7ec4\u4ef6\uff0c\u8981\u4ece\u4e2d\u62bd\u53d6\u4e00\u4e2a\u8f6c\u6362\u6210",(0,l.kt)("inlineCode",{parentName:"p"},"WebComponents"),"\uff0c\u6253\u5305\u7684\u65f6\u5019\u6551\u9700\u8981\u628a\u8fd9\u4e2a\u7ec4\u4ef6\u5355\u72ec\u6253\u5305\uff0c\u5426\u5219\u6587\u4ef6\u4f1a\u6bd4\u5355\u4e2a\u7ec4\u4ef6\u5305\u5927\u3002\u8fd9\u91cc\u5efa\u8bae\u521b\u5efa\u4e00\u4e2a\u72ec\u7acb\u7684\u5143\u7d20\uff08\u6216\u8005\u8be5\u9879\u76ee\u5168\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"webComponents"),"\uff09")),(0,l.kt)("p",null,"\u5728 Angular \u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a preview \u7684\u65b0\u6587\u4ef6\u5939\u3002\u5728\u8fd9\u4e2a\u6587\u4ef6\u5939\u4e2d\uff0c\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a index.html \u7684\u65b0\u6587\u4ef6\uff0c\u5e76\u5728\u5176\u4e2d\u7f16\u5199\u4ee5\u4e0b\u4ee3\u7801:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-HTML"},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <script src="./angularapp.js"><\/script>\n</head>\n\n<body>\n  <app-hello-world></app-hello-world>\n</body>\n\n</html>\n')),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u4e0d\u518d\u9700\u8981 AppComponent \u4e86\uff0c\u53ef\u4ee5\u5220\u9664\u6ca1\u6709\u7528\u7684\u6587\u4ef6:\n",(0,l.kt)("inlineCode",{parentName:"p"},"app.component.css"),"\u3001\n",(0,l.kt)("inlineCode",{parentName:"p"},"app.component.html"),"\u3001\n",(0,l.kt)("inlineCode",{parentName:"p"},"app.component.spec.ts"),"\u3001\n",(0,l.kt)("inlineCode",{parentName:"p"},"app.component.ts"),"\u3001\n",(0,l.kt)("inlineCode",{parentName:"p"},"app.routing.module.ts"),"\uff0c\u4e4b\u9700\u4fdd\u7559",(0,l.kt)("inlineCode",{parentName:"p"},"app.module")),(0,l.kt)("h5",{id:"\u6253\u5305\u8fd0\u884c"},"\u6253\u5305&\u8fd0\u884c"),(0,l.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u6dfb\u52a0\u4e00\u4e2a custombuild.sh \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Shell"),"\u7684\u811a\u672c\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"#!/bin/sh\nng build angular-app --prod --output-hashing=none && cat dist/angular-app/{runtime,polyfills,scripts,main}****.js > preview/angularapp.js\n")),(0,l.kt)("p",null,"shell \u811a\u672c\u4e0d\u652f\u6301 Bash\uff0c\u6240\u4ee5\u52a0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"#!/bin/sh"),",\u7528 git-bash \u8fd0\u884c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u6253\u5305\u6709\u5f88\u591a\u65b9\u5f0f\uff0c\u53ef\u4ee5\u7528 gzip \u538b\u7f29\u4f53\u79ef\uff0c\u5176\u4ed6\u811a\u672c\u5e93\uff0c\u8fd8\u6709 Angular v7 \u66f4\u65b0\u7684 Ivy\uff0cAngular v9 \u90fd\u51fa\u4e86 \ud83d\ude80")),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684\u6253\u5305\u6bd4\u8f83\u7b80\u964b\uff0c\u5b9e\u8d28\u5c31\u662f\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"ng build"),"\u7684\u751f\u6210\u6587\u4ef6\u5408\u5e76\u5230\u4e86 angularapp.js\u3002\u8fd0\u884c\u8fd9\u4e2a\u811a\u672c\uff0cpreview \u4f1a\u591a\u51fa\u4e00\u4e2a angularapp.js \u6587\u4ef6"),(0,l.kt)("p",null,"\u6700\u540e\u4e00\u6b65,\u5728\u6839\u76ee\u5f55\u8fd0\u884c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-Shell"},"npx live-server preview\n")),(0,l.kt)("p",null,"\u9875\u9762\u663e\u793a hello-world works!\u5982\u679c\u53ef\u4ee5\u90a3\u4e2a\u606d\u559c\u521b\u5efa\u6210\u529f\u4e86 \ud83c\udf89\n\u6b64\u5916\u4f60\u53ef\u4ee5\u53bb\u5176\u4ed6\u5c1d\u8bd5\u5f15\u7528 angularapp.js,\u5e76\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"<app-hello-world></app-hello-world>"),"\u5143\u7d20\u3002"),(0,l.kt)("p",null,"\u4f8b\u5b50: (Angualr Elements)","[http://git.inspur.com/WX0qizhen/angualr-elements]"),(0,l.kt)("p",null,"\u53c2\u8003:\n(Building Custom Elements / Web Components with Angular 6)","[https://medium.com/@tomsu/building-web-components-with-angular-elements-746cd2a38d5b]"))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return i},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),m=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},i=function(e){var n=m(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),c=m(t),d=o,b=c["".concat(u,".").concat(d)]||c[d]||s[d]||l;return t?r.createElement(b,a(a({ref:n},i),{},{components:t})):r.createElement(b,a({ref:n},i))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=c;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var m=2;m<l;m++)a[m]=t[m];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"}}]);