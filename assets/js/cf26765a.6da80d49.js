"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1860],{9586:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>t});var o=s(5893),c=s(1151);const r={title:"Docker Compose"},d=void 0,l={id:"CloudNative/devops/docker-compose",title:"Docker Compose",description:"0x01 \u5b89\u88c5",source:"@site/docs/CloudNative/devops/docker-compose.md",sourceDirName:"CloudNative/devops",slug:"/CloudNative/devops/docker-compose",permalink:"/docs/CloudNative/devops/docker-compose",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{title:"Docker Compose"},sidebar:"tutorialSidebar",previous:{title:"ssm",permalink:"/docs/BE/Java/ssm"},next:{title:"docker-with-mysql",permalink:"/docs/CloudNative/devops/docker-with-mysql"}},i={},t=[{value:"0x01 \u5b89\u88c5",id:"0x01-\u5b89\u88c5",level:3},{value:"0x02 \u4f7f\u7528",id:"0x02-\u4f7f\u7528",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"network",id:"network",level:4},{value:"quick start",id:"quick-start",level:5},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:5},{value:"links",id:"links",level:5},{value:"networks \u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc",id:"networks-\u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc",level:5},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"0x01-\u5b89\u88c5",children:"0x01 \u5b89\u88c5"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/docker/compose",children:"https://github.com/docker/compose"})}),"\n",(0,o.jsxs)(n.p,{children:["\u4ece ",(0,o.jsx)(n.a,{href:"https://github.com/docker/compose/releases",children:"github"})," \u4e0b\u8f7d\u5b89\u88c5"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"aria2c https://github.com/docker/compose/releases/xxxx\ncp docker-compose-linux-x86_64 ~/.docker/cli-plugins/docker-compose\n"})}),"\n",(0,o.jsx)(n.h3,{id:"0x02-\u4f7f\u7528",children:"0x02 \u4f7f\u7528"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# docker-compose up -d\n# \u65b0\u547d\u4ee4\ndocker compose up -d\n"})}),"\n",(0,o.jsx)(n.h4,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"up down"}),"\n",(0,o.jsx)(n.p,{children:"\u542f\u52a8\u505c\u6b62"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"pull"}),"\n",(0,o.jsx)(n.p,{children:"\u66f4\u65b0\u955c\u50cf"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"-f"}),"\n",(0,o.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a ",(0,o.jsx)(n.code,{children:"docker-compose.yml"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/reference/#use--f-to-specify-name-and-path-of-one-or-more-compose-files",children:"https://docs.docker.com/compose/reference/#use--f-to-specify-name-and-path-of-one-or-more-compose-files"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"--env-file"}),"\n",(0,o.jsxs)(n.p,{children:["\u73af\u5883\u53d8\u91cf\u6587\u4ef6\uff0c\u9ed8\u8ba4\u4e3a\u9879\u76ee\u76ee\u5f55(\u4e0e",(0,o.jsx)(n.code,{children:"docker-compose.yml"}),"\u540c\u7ea7)\u4e2d\u7684 ",(0,o.jsx)(n.code,{children:".env"}),"\u6587\u4ef6"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with---env-file",children:"https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with---env-file"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"network",children:"network"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/compose/networking/",children:"https://docs.docker.com/compose/networking/"})}),"\n",(0,o.jsx)(n.h5,{id:"quick-start",children:"quick start"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u76ee\u5f55 ",(0,o.jsx)(n.code,{children:"mysapp"}),"\u4e0b\uff0c\u901a\u8fc7 ",(0,o.jsx)(n.code,{children:"docker compose up"}),"\u542f\u52a8\u670d\u52a1\uff0c\u5c06\u9ed8\u8ba4\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a ",(0,o.jsx)(n.code,{children:"myapp_default"}),"\u7684\u7f51\u7edc\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u53ef\u4ee5\u901a\u8fc7",(0,o.jsx)(n.code,{children:"docker network ls"}),"\u67e5\u770b"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"\u279c  ~ sudo docker network ls\n\nNETWORK ID     NAME             DRIVER    SCOPE\ne3ffe522bdaa   myapp_default\xb7   bridge    local\n"})}),"\n",(0,o.jsx)(n.h5,{id:"\u8fde\u63a5",children:"\u8fde\u63a5"}),"\n",(0,o.jsxs)(n.p,{children:["\u5728\u540c\u4e00\u4e2a ",(0,o.jsx)(n.code,{children:"docker compose"}),"\u6587\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,o.jsx)(n.code,{children:"service"}),"\u4e0b\u7684\u670d\u52a1\u540d\u76f4\u63a5\u8fde\u63a5\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u4f8b\u5982:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"services:\n  db:\n    image: postgres\n    ports:\n      - '8001:5432'\n  web:\n    build: .\n    ports:\n      - '8000:8000'\n    environment:\n      - POSTGRES_PORT=5432\n      - POSTGRES_HOST=db\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"web"}),"\u670d\u52a1\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,o.jsx)(n.code,{children:"postgres://db:5432"}),"\u8fde\u63a5\u5230`db\xb7\u670d\u52a1"]}),"\n",(0,o.jsx)(n.h5,{id:"links",children:"links"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u521b\u5efa\u522b\u540d"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"services:\n  db:\n    image: postgres\n    ports:\n      - '8001:5432'\n  web:\n    build: .\n    ports:\n      - '8000:8000'\n    links:\n      - 'db:database'\n    environment:\n      - POSTGRES_PORT=5432\n      - POSTGRES_HOST=database\n"})}),"\n",(0,o.jsx)(n.h5,{id:"networks-\u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc",children:"networks \u6307\u5b9a\u81ea\u5b9a\u4e49\u7f51\u7edc"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"services:\n  # ...\nnetworks:\n  network1:\n    name: my-pre-existing-network\n    external: true\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"external: true"}),"\u4e0d\u4f1a\u521b\u5efa\u7f51\u7edc\uff0c\u800c\u4f1a\u67e5\u627e\u5b58\u5728\u7684\u7f51\u7edc"]}),"\n",(0,o.jsx)(n.h4,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# \u542f\u52a8\nsudo docker compose -f foo-docker-compose.yml --env-file .env.prod up -d\n# \u505c\u6b62\nsudo docker compose -f foo-docker-compose.yml down\n"})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>d});var o=s(7294);const c={},r=o.createContext(c);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);