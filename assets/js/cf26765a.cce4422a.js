"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1860],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,p(p({ref:t},s),{},{components:n})):r.createElement(k,p({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8105:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),p=["components"],l={title:"Docker Compose"},i=void 0,c={unversionedId:"CloudNative/devops/docker-compose",id:"CloudNative/devops/docker-compose",title:"Docker Compose",description:"0x01 \u5b89\u88c5",source:"@site/docs/CloudNative/devops/docker-compose.md",sourceDirName:"CloudNative/devops",slug:"/CloudNative/devops/docker-compose",permalink:"/docs/CloudNative/devops/docker-compose",draft:!1,tags:[],version:"current",lastUpdatedAt:1690668988,formattedLastUpdatedAt:"Jul 29, 2023",frontMatter:{title:"Docker Compose"},sidebar:"tutorialSidebar",previous:{title:"ssm",permalink:"/docs/BE/Java/ssm"},next:{title:"docker-with-mysql",permalink:"/docs/CloudNative/devops/docker-with-mysql"}},s={},m=[{value:"0x01 \u5b89\u88c5",id:"0x01-\u5b89\u88c5",level:3},{value:"0x02 \u4f7f\u7528",id:"0x02-\u4f7f\u7528",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"network",id:"network",level:4},{value:"quick start",id:"quick-start",level:5},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:5},{value:"links",id:"links",level:5},{value:"networks \u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc",id:"networks-\u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc",level:5},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"0x01-\u5b89\u88c5"},"0x01 \u5b89\u88c5"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/compose"},"https://github.com/docker/compose")),(0,a.kt)("p",null,"\u4ece ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/docker/compose/releases"},"github")," \u4e0b\u8f7d\u5b89\u88c5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aria2c https://github.com/docker/compose/releases/xxxx\ncp docker-compose-linux-x86_64 ~/.docker/cli-plugins/docker-compose\n")),(0,a.kt)("h3",{id:"0x02-\u4f7f\u7528"},"0x02 \u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# docker-compose up -d\n# \u65b0\u547d\u4ee4\ndocker compose up -d\n")),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"up down"),(0,a.kt)("p",{parentName:"li"},"\u542f\u52a8\u505c\u6b62")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"pull"),(0,a.kt)("p",{parentName:"li"},"\u66f4\u65b0\u955c\u50cf")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"-f"),(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/reference/#use--f-to-specify-name-and-path-of-one-or-more-compose-files"},"https://docs.docker.com/compose/reference/#use--f-to-specify-name-and-path-of-one-or-more-compose-files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"--env-file"),(0,a.kt)("p",{parentName:"li"},"\u73af\u5883\u53d8\u91cf\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a\u9879\u76ee\u76ee\u5f55(\u4e0e",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),"\u540c\u7ea7)\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),"\u6587\u4ef6"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with---env-file"},"https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with---env-file")))),(0,a.kt)("h4",{id:"network"},"network"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/networking/"},"https://docs.docker.com/compose/networking/")),(0,a.kt)("h5",{id:"quick-start"},"quick start"),(0,a.kt)("p",null,"\u5728\u76ee\u5f55 ",(0,a.kt)("inlineCode",{parentName:"p"},"mysapp"),"\u4e0b\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose up"),"\u542f\u52a8\u670d\u52a1\uff0c\u5c06\u9ed8\u8ba4\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"myapp_default"),"\u7684\u7f51\u7edc\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"docker network ls"),"\u67e5\u770b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ sudo docker network ls\n\nNETWORK ID     NAME             DRIVER    SCOPE\ne3ffe522bdaa   myapp_default\xb7   bridge    local\n")),(0,a.kt)("h5",{id:"\u8fde\u63a5"},"\u8fde\u63a5"),(0,a.kt)("p",null,"\u5728\u540c\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose"),"\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"service"),"\u4e0b\u7684\u670d\u52a1\u540d\u76f4\u63a5\u8fde\u63a5\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  db:\n    image: postgres\n    ports:\n      - '8001:5432'\n  web:\n    build: .\n    ports:\n      - '8000:8000'\n    environment:\n      - POSTGRES_PORT=5432\n      - POSTGRES_HOST=db\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"web"),"\u670d\u52a1\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"postgres://db:5432"),"\u8fde\u63a5\u5230`db\xb7\u670d\u52a1"),(0,a.kt)("h5",{id:"links"},"links"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u521b\u5efa\u522b\u540d")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"services:\n  db:\n    image: postgres\n    ports:\n      - '8001:5432'\n  web:\n    build: .\n    ports:\n      - '8000:8000'\n    links:\n      - 'db:database'\n    environment:\n      - POSTGRES_PORT=5432\n      - POSTGRES_HOST=database\n")),(0,a.kt)("h5",{id:"networks-\u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc"},"networks \u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"services:\n  # ...\nnetworks:\n  network1:\n    name: my-pre-existing-network\n    external: true\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"external: true"),"\u4e0d\u4f1a\u521b\u5efa\u7f51\u7edc\uff0c\u800c\u4f1a\u67e5\u627e\u5b58\u5728\u7684\u7f51\u7edc"),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# \u542f\u52a8\nsudo docker compose -f foo-docker-compose.yml --env-file .env.prod up -d\n# \u505c\u6b62\nsudo docker compose -f foo-docker-compose.yml down\n")))}d.isMDXComponent=!0}}]);