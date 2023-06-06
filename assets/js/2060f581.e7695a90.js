"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9606],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,b=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(b,u(u({ref:t},p),{},{components:n})):r.createElement(b,u({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var c=2;c<a;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),u=["components"],l={},i=void 0,c={unversionedId:"git/submodule",id:"git/submodule",title:"submodule",description:"\u521b\u5efa submodule",source:"@site/docs/git/submodule.md",sourceDirName:"git",slug:"/git/submodule",permalink:"/docs/git/submodule",draft:!1,tags:[],version:"current",lastUpdatedAt:1685726734,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"proxy",permalink:"/docs/git/proxy"},next:{title:"keychron-k8",permalink:"/docs/hardware/keychron-k8"}},p={},d=[{value:"\u521b\u5efa submodule",id:"\u521b\u5efa-submodule",level:4}],s={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"\u521b\u5efa-submodule"},"\u521b\u5efa submodule"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git submodule add git@github.com:jjz/pod-library.git pod-library\n\ngit submodule add https://github.com/fivge/doc.git docs\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u5176\u5b9e\u5c31\u662f\u521b\u5efa\u4e86\u4e2a ",(0,a.kt)("inlineCode",{parentName:"em"},".gitmodules")," \u53ca\u5bf9\u5e94\u7684\u76ee\u5f55 \u6587\u4ef6")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".gitmodules")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[submodule "docs"]\n    path = docs\n    url = https://github.com/fivge/doc.git\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"docs")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"diff --git a/docs b/docs\nnew file mode 160000\nindex 0000000..ac54805\n--- /dev/null\n+++ b/docs\n@@ -0,0 +1 @@\n+Subproject commit ac54805c60f48bb4d727c31e08d671a5a449c4b5\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"\u4ec5\u62c9\u53d6"},"\u4ec5\u62c9\u53d6")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git pull && git submodule update\n")),(0,a.kt)("blockquote",null,(0,a.kt)("h4",{parentName:"blockquote",id:"\u540c\u6b65"},"\u540c\u6b65")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'git submodule foreach git pull\n\ngit add docs/ && git commit -m "update git submodule" && git push\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git rm --cached pod-library\n")),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/nicksheng/p/6201711.html"},"Git Submodule \u7ba1\u7406\u9879\u76ee\u5b50\u6a21\u5757")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://segmentfault.com/a/1190000003076028"},"\u4f7f\u7528 Git Submodule \u7ba1\u7406\u5b50\u6a21\u5757"))))}m.isMDXComponent=!0}}]);