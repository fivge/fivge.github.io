"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2906],{1170:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),s=["components"],i={title:"rm -rf /etc/shadow*",date:new Date("2016-09-27T00:04:34.000Z"),tags:["linux","shadow"]},l=void 0,c={unversionedId:"CloudNative/system/shadow",id:"CloudNative/system/shadow",title:"rm -rf /etc/shadow*",description:"rm -rf /etc/shadow\\*",source:"@site/docs/CloudNative/system/shadow.md",sourceDirName:"CloudNative/system",slug:"/CloudNative/system/shadow",permalink:"/docs/CloudNative/system/shadow",draft:!1,tags:[{label:"linux",permalink:"/docs/tags/linux"},{label:"shadow",permalink:"/docs/tags/shadow"}],version:"current",lastUpdatedAt:1621792464,formattedLastUpdatedAt:"May 23, 2021",frontMatter:{title:"rm -rf /etc/shadow*",date:"2016-09-27T00:04:34.000Z",tags:["linux","shadow"]},sidebar:"tutorialSidebar",previous:{title:"Swap-libvirt",permalink:"/docs/CloudNative/system/libvirt"},next:{title:"ssh",permalink:"/docs/CloudNative/system/ssh/"}},u={},p=[{value:"rm -rf /etc/shadow*",id:"rm--rf-etcshadow",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"rm--rf-etcshadow"},"rm -rf /etc/shadow","*"),(0,a.kt)("p",null,"\u5b89\u88c5 shadowsocks \u65f6\u9047\u5230\u5341\u5206\u5c34\u5c2c\u7684\u4e8b\u60c5"),(0,a.kt)("p",null,"\u5b89\u88c5 shadowsocks \u65f6\uff0c\u88c5\u4e86\u597d\u51e0\u6b21\u90fd\u6ca1\u6709\u6210\u529f.\u4ee5\u4e3a\u662f\u914d\u7f6e\u6587\u4ef6\u54ea\u91cc\u4e0d\u5bf9\uff0c\u5c31\u5220\u4e86\u914d\u7f6e\u6587\u4ef6(rm -rf /etc/shadow","*",")."),(0,a.kt)("p",null,"\u7ed3\u679c\u7b2c\u4e8c\u5929\uff0cssh \u6b7b\u6d3b\u8fde\u63a5\u4e0d\u4e0a\uff0c\u65e0\u5948\u4ece\u7ba1\u7406\u7aef\u91cd\u7f6e\u4e86 root \u5bc6\u7801\u624d\u767b\u4e0a"),(0,a.kt)("p",null,"\u7136\u540e\u5404\u79cd\u641c\u7d22\uff0c\u53d1\u73b0\u4e00\u6761\u795e\u5947\u7684\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pwconv\n")),(0,a.kt)("p",null,"\u867d\u7136\u5bc6\u7801\u4e0d\u80fd\u5168\u90e8\u627e\u56de\uff0c\u4f46\u53ef\u4ee5\u66f4\u6539\u5bc6\u7801\u4e86"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"passwd ghost\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u6062\u590d shadow \u6587\u4ef6\u4e86"))}f.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);