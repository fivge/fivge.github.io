"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2484],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7523:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={title:"KVM\u865a\u62df\u5316",date:new Date("2017-06-29T10:25:19.000Z"),tags:["KVM","SDN"]},u=void 0,c={unversionedId:"CloudNative/system/KVM\u865a\u62df\u5316",id:"CloudNative/system/KVM\u865a\u62df\u5316",title:"KVM\u865a\u62df\u5316",description:"libvirt",source:"@site/docs/CloudNative/system/KVM\u865a\u62df\u5316.md",sourceDirName:"CloudNative/system",slug:"/CloudNative/system/KVM\u865a\u62df\u5316",permalink:"/docs/CloudNative/system/KVM\u865a\u62df\u5316",draft:!1,tags:[{label:"KVM",permalink:"/docs/tags/kvm"},{label:"SDN",permalink:"/docs/tags/sdn"}],version:"current",lastUpdatedAt:1690668988,formattedLastUpdatedAt:"Jul 29, 2023",frontMatter:{title:"KVM\u865a\u62df\u5316",date:"2017-06-29T10:25:19.000Z",tags:["KVM","SDN"]},sidebar:"tutorialSidebar",previous:{title:"SSL \u8bc1\u4e66",permalink:"/docs/CloudNative/network/ssl"},next:{title:"Ubuntu disable ipv6",permalink:"/docs/CloudNative/system/Ubuntu-disable-ipv6"}},s={},p=[{value:"\u672a\u6765\u53d1\u5c55\u8d8b\u52bf",id:"\u672a\u6765\u53d1\u5c55\u8d8b\u52bf",level:3}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"libvirt"),(0,a.kt)("p",null,"kvm"),(0,a.kt)("p",null,"OpenStack"),(0,a.kt)("p",null,"Nova"),(0,a.kt)("p",null,"Docker"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ibm.com/developerworks/cn/linux/l-using-kvm/index.html"},"\u4f7f\u7528 KVM \u865a\u62df\u5316\u6280\u672f",(0,a.kt)("em",{parentName:"a"},"\u4e86\u89e3\u6700\u65b0\u4e00\u4ee3\u7684 Linux \u865a\u62df\u5316\u6280\u672f Kernel Virtual Machine"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\u672a\u6765\u53d1\u5c55\u8d8b\u52bf"},"\u672a\u6765\u53d1\u5c55\u8d8b\u52bf"),(0,a.kt)("p",null,"\u73b0\u5728\u597d\u591a\u865a\u62df\u673a\u90fd\u662f\u7528\u7684 Docker,\u53ef\u4ee5\u8003\u8651 docker \u548c OpenStack \u7ed3\u5408,\u5229\u7528 Nova \u52a8\u6001\u8fc1\u79fb docker \u5bb9\u5668."))}f.isMDXComponent=!0}}]);