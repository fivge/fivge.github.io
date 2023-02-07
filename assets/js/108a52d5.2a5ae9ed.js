"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1384],{5560:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=t(3117),r=t(102),i=(t(7294),t(3905)),a=["components"],s={},c=void 0,l={unversionedId:"CloudNative/devops/faas",id:"CloudNative/devops/faas",title:"faas",description:"",source:"@site/docs/CloudNative/devops/faas.md",sourceDirName:"CloudNative/devops",slug:"/CloudNative/devops/faas",permalink:"/docs/CloudNative/devops/faas",draft:!1,tags:[],version:"current",lastUpdatedAt:1621792464,formattedLastUpdatedAt:"May 23, 2021",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/docs/CloudNative/devops/docker"},next:{title:"k3s",permalink:"/docs/CloudNative/devops/k3s"}},u={},p=[],f={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/7WeUUXWIdxWrC70NwBOivg"},"https://mp.weixin.qq.com/s/7WeUUXWIdxWrC70NwBOivg")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl create namespace fission\n\nkubectl -n fission apply -f https://github.com/fission/fission/releases/download/1.7.1/fission-all-1.7.1-minikube.yaml\n\n\ncurl -Lo fission https://github.com/fission/fission/releases/download/1.7.1/fission-cli-linux && chmod +x fission && sudo mv fission /usr/local/bin/\n\nkubectl --namespace fission get svc\n\n\n\nfission env create --name nodejs --image fission/node-env:1.7.1\n\n\nfission env create --name nodejs --image fission/node-env\n\nfission function create --name hello --env nodejs --code hello.js\n\nfission function test --name hello\n\nfission route create --method GET --url /hello --function hello\n\ncurl http://localhost:8888/hello\n\ncurl http://localhost:32783/hello\n\ncurl http://localhost:80/hello\n\nfission function create --name weather --env nodejs --code weather.js\nfission function create --name world --env nodejs --code world.js\n\nfission route create --method POST --url /weather --function weather\n\n\ncurl -qs -H "Content-Type: application/json" -X POST -d \'{"location":"Sieteiglesias, Spain"}\' http://127.0.0.1:31314/weather|jq\n\ncurl -qs -H "Content-Type: application/json" -X POST -d \'{"location":"Sieteiglesias, Spain"}\' http://127.0.0.1:31314/weather|jq\n')))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),d=r,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||i;return t?o.createElement(m,a(a({ref:n},u),{},{components:t})):o.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);