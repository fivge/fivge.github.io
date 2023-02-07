"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8762],{2772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return s}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={},c=void 0,u={unversionedId:"CloudNative/term/net-tools",id:"CloudNative/term/net-tools",title:"net-tools",description:"net-tools",source:"@site/docs/CloudNative/term/net-tools.md",sourceDirName:"CloudNative/term",slug:"/CloudNative/term/net-tools",permalink:"/docs/CloudNative/term/net-tools",draft:!1,tags:[],version:"current",lastUpdatedAt:1621792464,formattedLastUpdatedAt:"May 23, 2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"nc",permalink:"/docs/CloudNative/term/nc"},next:{title:"pwd",permalink:"/docs/CloudNative/term/pwd"}},p={},s=[{value:"net-tools",id:"net-tools",level:3},{value:"ifconfig",id:"ifconfig",level:4},{value:"netstat",id:"netstat",level:4}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"net-tools"},"net-tools"),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"net-tools \u5df2\u5f03\u7528"))),(0,a.kt)("blockquote",null,(0,a.kt)("blockquote",{parentName:"blockquote"},(0,a.kt)("p",{parentName:"blockquote"},"\u63a8\u8350 ",(0,a.kt)("inlineCode",{parentName:"p"},"iproute2")))),(0,a.kt)("h4",{id:"ifconfig"},"ifconfig"),(0,a.kt)("h4",{id:"netstat"},"netstat"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"### UDP\nnetstat -nupl\n### TCP\nnetstat -ntpl\n###\nlsof -i:80\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  docker netstat\n\nThe program 'netstat' can be found in following packages:\n  * net-tools-deprecated [ path: /bin/netstat, repository: zypp (repo-oss) ]\n  * net-tools-deprecated [ path: /usr/bin/netstat, repository: zypp (repo-oss) ]\n\nTry installing with:\n    zypper install net-tools-deprecated\n")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);