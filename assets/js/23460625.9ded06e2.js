"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2693],{3325:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var s=i(5893),o=i(1151);const a={},l=void 0,t={id:"FE/npm/yarn",title:"yarn",description:"yarn \u79bb\u7ebf\u955c\u50cf",source:"@site/docs/FE/npm/yarn.md",sourceDirName:"FE/npm",slug:"/FE/npm/yarn",permalink:"/docs/FE/npm/yarn",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Yarn 2",permalink:"/docs/FE/npm/yarn-v2"},next:{title:"prettire",permalink:"/docs/FE/prettire"}},r={},c=[{value:"<code>~</code>\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u914d\u7f6e",id:"\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u914d\u7f6e",level:5},{value:"\u6548\u679c\u5982\u4e0b",id:"\u6548\u679c\u5982\u4e0b",level:5},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:5}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h5:"h5",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"yarn \u79bb\u7ebf\u955c\u50cf"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://yarnpkg.com/blog/2016/11/24/offline-mirror/",children:"https://yarnpkg.com/blog/2016/11/24/offline-mirror/"})}),"\n",(0,s.jsxs)(e.h5,{id:"\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u914d\u7f6e",children:[(0,s.jsx)(e.code,{children:"~"}),"\u7528\u6237\u6839\u76ee\u5f55\u4e0b\u914d\u7f6e"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"yarn config set yarn-offline-mirror ./npm-packages-offline-cache\nyarn config set yarn-offline-mirror-pruning true\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsxs)(e.em,{children:[(0,s.jsx)(e.code,{children:"./npm-packages-offline-cache"})," is an example location relative to home folder where all the source",(0,s.jsx)(e.code,{children:".tar.gz"})," files will be downloaded to from the registry."]})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:".yarnrc"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-vbscript",children:'# THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.\n# yarn lockfile v1\n\n\nregistry "https://registry.npmjs.org/"\nlastUpdateCheck 1563440647543\nyarn-offline-mirror npm-packages-offline-cache\n\n'})}),"\n",(0,s.jsx)(e.h5,{id:"\u6548\u679c\u5982\u4e0b",children:"\u6548\u679c\u5982\u4e0b"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'### \u7b2c\u4e00\u6b21\u5b89\u88c5\n$ yarn\nyarn install v1.13.0\ninfo No lockfile found.\n[1/4] Resolving packages...\n[2/4] Fetching packages...\ninfo fsevents@2.0.7: The platform "win32" is incompatible with this module.\ninfo "fsevents@2.0.7" is an optional dependency and failed compatibility check. Excluding it from installation.\ninfo fsevents@1.2.9: The platform "win32" is incompatible with this module.\ninfo "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.\n[3/4] Linking dependencies...\n[4/4] Building fresh packages...\nsuccess Saved lockfile.\nDone in 117.93s.\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'### \u5220\u9664\u6389 node_modules yarn.lock\n$ rm -rf node_modules/\n$ rm yarn.lock\n\n$ yarn\nyarn install v1.13.0\ninfo No lockfile found.\n[1/4] Resolving packages...\n[2/4] Fetching packages...\ninfo fsevents@2.0.7: The platform "win32" is incompatible with this module.\ninfo "fsevents@2.0.7" is an optional dependency and failed compatibility check. Excluding it from installation.\ninfo fsevents@1.2.9: The platform "win32" is incompatible with this module.\ninfo "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.\n[3/4] Linking dependencies...\n[4/4] Building fresh packages...\nsuccess Saved lockfile.\nDone in 99.45s.\n\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:'### \u4ec5\u5220\u9664 node_modules/\n$ rm -rf node_modules/\n\n$ yarn\nyarn install v1.13.0\n[1/4] Resolving packages...\n[2/4] Fetching packages...\ninfo fsevents@2.0.7: The platform "win32" is incompatible with this module.\ninfo "fsevents@2.0.7" is an optional dependency and failed compatibility check. Excluding it from installation.\ninfo fsevents@1.2.9: The platform "win32" is incompatible with this module.\ninfo "fsevents@1.2.9" is an optional dependency and failed compatibility check. Excluding it from installation.\n[3/4] Linking dependencies...\n[4/4] Building fresh packages...\nDone in 51.58s.\n\n### \u4e0d\u518d\u6267\u884c\u7b2c\u4e00\u6b65 Resolving packages\n'})}),"\n",(0,s.jsx)(e.h5,{id:"\u8981\u6c42",children:"\u8981\u6c42"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://yarnpkg.com/blog/2016/11/24/lockfiles-for-all/",children:"https://yarnpkg.com/blog/2016/11/24/lockfiles-for-all/"})}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsxs)(e.strong,{children:["\u6240\u6709 ",(0,s.jsx)(e.code,{children:"yarn.lock"})," \u6587\u4ef6\u5e94\u8be5\u88ab\u63d0\u4ea4\u5230\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff08\u4f8b\u5982 git \u6216\u8005 mercurial\uff09"]}),"\u3002 \u8fd9\u5141\u8bb8 Yarn \u8de8\u6240\u6709\u673a\u5668\u5b89\u88c5\u76f8\u540c\u7684\u4f9d\u8d56\u6811\uff0c\u65e0\u8bba\u5b83\u662f\u4f60\u540c\u4e8b\u7684\u7b14\u8bb0\u672c\u8fd8\u662f CI \u670d\u52a1\u5668\u3002"]})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>l});var s=i(7294);const o={},a=s.createContext(o);function l(n){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),s.createElement(a.Provider,{value:e},n.children)}}}]);