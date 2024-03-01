"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4893],{1561:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=s(5893),a=s(1151);const l={},t=void 0,i={id:"FE/angular/basics/get-start",title:"get-start",description:"angular/cli",source:"@site/docs/FE/angular/basics/get-start.md",sourceDirName:"FE/angular/basics",slug:"/FE/angular/basics/get-start",permalink:"/docs/FE/angular/basics/get-start",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"di",permalink:"/docs/FE/angular/basics/di"},next:{title:"http",permalink:"/docs/FE/angular/basics/http"}},o={},c=[{value:"angular/cli",id:"angularcli",level:2},{value:"ng",id:"ng",level:3},{value:"module",id:"module",level:3},{value:"component",id:"component",level:3},{value:"service",id:"service",level:3},{value:"pipe",id:"pipe",level:3},{value:"angular.json",id:"angularjson",level:2},{value:"tslint",id:"tslint",level:2},{value:"tsconfig",id:"tsconfig",level:2},{value:"\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u7684\u8def\u5f84\u6620\u5c04\u8868",id:"\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u7684\u8def\u5f84\u6620\u5c04\u8868",level:3},{value:"angular6,7",id:"angular67",level:4},{value:"angular8+",id:"angular8",level:4},{value:"package.json",id:"packagejson",level:2},{value:"Component",id:"component-1",level:2},{value:"AntDesign",id:"antdesign",level:3},{value:"material",id:"material",level:3},{value:"BootStrap",id:"bootstrap",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:4},{value:"\u5f15\u7528",id:"\u5f15\u7528",level:4},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:4},{value:"http",id:"http",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"angularcli",children:"angular/cli"}),"\n",(0,r.jsx)(e.h3,{id:"ng",children:"ng"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"### \u5168\u5c40\u5b89\u88c5 angular\nyarn global add @angular/cli\n\n### \u5b89\u88c5\u7279\u5b9a\u7248\u672c\nyarn init\nyarn add @angular/cli@6.1.8\n\n###\nng help\n\nng new --help\n\n### with ivy\nng new ng-ivy --enable-ivy=true --inline-style=true --minimal=true --routing=true --skip-install=true --skip-tests=true\n\n### without ivy\nng new ng-demo --inline-style=true --minimal=true --routing=true --skip-install=true --skip-tests=true\n"})}),"\n",(0,r.jsx)(e.h3,{id:"module",children:"module"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ng g m core\n\nng g m shared\n\nng g m routes --routing\n\n### \u4f7f\u7528 RoutesModule \u66ff\u6362\u9ed8\u8ba4\u751f\u6210\u7684 AppRoutingModule\n\n### \u521b\u5efa\u4e1a\u52a1\u6a21\u5757\nng g m routes/user-info --routing\n"})}),"\n",(0,r.jsx)(e.h3,{id:"component",children:"component"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ng g c routes/user-info/user-name\n"})}),"\n",(0,r.jsx)(e.h3,{id:"service",children:"service"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ng g s routes/user-info/user-info\n"})}),"\n",(0,r.jsx)(e.h3,{id:"pipe",children:"pipe"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/FE/angular/excel/pipe",children:"see more..."})}),"\n",(0,r.jsx)(e.h2,{id:"angularjson",children:"angular.json"}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"tslint",children:"tslint"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"yarn add codelyzer -D\n"})}),"\n",(0,r.jsx)(e.h2,{id:"tsconfig",children:"tsconfig"}),"\n",(0,r.jsx)(e.h3,{id:"\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u7684\u8def\u5f84\u6620\u5c04\u8868",children:"\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u7684\u8def\u5f84\u6620\u5c04\u8868"}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["\u9879\u76ee\u7684 ",(0,r.jsx)(e.code,{children:"tsconfig.json"})," \u4e2d\u5fc5\u987b\u914d\u7f6e\u597d ",(0,r.jsx)(e.code,{children:"baseUrl"})," \u548c ",(0,r.jsx)(e.code,{children:"paths"})," \u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"angular67",children:"angular6,7"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"tsconfig.json"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'compilerOptions: {\n    "baseUrl": "src/",\n    "paths": {\n      "@shared": ["app/shared"],\n      "@shared/*": ["app/shared/*"],\n      "@env": ["environments"],\n      "@env/*": ["environments/*"],\n      "@core": ["app/core"],\n      "@core/*": ["app/core/*"]\n    }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"tsconfig.app.json"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'compilerOptions: {\n    "paths": {\n      "@shared": ["app/shared"],\n      "@shared/*": ["app/shared/*"],\n      "@env": ["environments"],\n      "@env/*": ["environments/*"],\n      "@core": ["app/core"],\n      "@core/*": ["app/core/*"]\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h4,{id:"angular8",children:"angular8+"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"tsconfig.app.json"})," \u548c ",(0,r.jsx)(e.code,{children:"tsconfig.spec.json"})," \u65e0\u987b\u518d\u5355\u72ec\u8bbe\u5b9a ",(0,r.jsx)(e.code,{children:"paths"})," \u5c5e\u6027"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"tsconfig.app.json"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'{\n  "extends": "./tsconfig.json",\n  "compilerOptions": {\n    "outDir": "./out-tsc/app",\n    "types": []\n  },\n  "include": ["src/**/*.ts"],\n  "exclude": ["src/test.ts", "src/**/*.spec.ts"]\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"packagejson",children:"package.json"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'  "scripts": {\n    "ng": "ng",\n    "start": "ng serve --port 8071",\n    "build": "ng build --prod --build-optimizer"\n  },\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"component-1",children:"Component"}),"\n",(0,r.jsx)(e.h3,{id:"antdesign",children:"AntDesign"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ng add ng-zorro-antd\n"})}),"\n",(0,r.jsx)(e.h3,{id:"material",children:"material"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://material.angular.cn/",children:"https://material.angular.cn/"})}),"\n",(0,r.jsx)(e.h3,{id:"bootstrap",children:"BootStrap"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://github.com/valor-software/ngx-bootstrap",children:"https://github.com/valor-software/ngx-bootstrap"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://valor-software.com/ngx-bootstrap/#/documentation#getting-started",children:"https://valor-software.com/ngx-bootstrap/#/documentation#getting-started"})}),"\n",(0,r.jsx)(e.h4,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"yarn add ngx-bootstrap\nyarn add bootstrap\n"})}),"\n",(0,r.jsx)(e.h4,{id:"\u5f15\u7528",children:"\u5f15\u7528"}),"\n",(0,r.jsx)(e.p,{children:"angular.json \u4e2d\u6dfb\u52a0 css"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"angular.json"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'            "styles": [\n              "node_modules/bootstrap/dist/css/bootstrap.min.css",\n              "src/styles.css"\n            ],\n'})}),"\n",(0,r.jsx)(e.h4,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,r.jsx)(e.p,{children:"\u6309\u9700\u5f15\u7528\uff0c\u4f7f\u7528\u54ea\u4e2a\u7ec4\u4ef6\uff0c\u5728 module \u4e2d\u5f15\u5165\u76f8\u5e94\u7684\u6a21\u5757\u5e76\u6ce8\u518c\u4e3a\u6839\u7ec4\u4ef6"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:".module.ts"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:'import { TooltipModule } from "ngx-bootstrap";\nimport { ButtonsModule } from "ngx-bootstrap";\n\n  imports: [\n    TooltipModule.forRoot(),\n    ButtonsModule.forRoot()\n  ],\n'})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:".component.html"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-html",children:'<button type="button" class="btn btn-primary" tooltip="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n  Simple demo\n</button>\n'})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.h2,{id:"http",children:"http"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"/docs/FE/angular/basics/http",children:"see more..."})})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>t});var r=s(7294);const a={},l=r.createContext(a);function t(n){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:t(n.components),r.createElement(l.Provider,{value:e},n.children)}}}]);