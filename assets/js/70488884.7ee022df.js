"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2103],{179:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>u,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var t=n(5893),o=n(1151);const d={},r="sudo",i={id:"CloudNative/system/user/sudo",title:"sudo",description:"\u5b89\u88c5",source:"@site/docs/CloudNative/system/user/sudo.md",sourceDirName:"CloudNative/system/user",slug:"/CloudNative/system/user/sudo",permalink:"/docs/CloudNative/system/user/sudo",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rm -rf /etc/shadow*",permalink:"/docs/CloudNative/system/user/shadow"},next:{title:"\u7528\u6237\u548c\u7528\u6237\u7ec4",permalink:"/docs/CloudNative/system/user/\u7528\u6237\u548c\u7528\u6237\u7ec4"}},u={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u67e5\u770b\u5f53\u524d\u8bbe\u7f6e",id:"\u67e5\u770b\u5f53\u524d\u8bbe\u7f6e",level:4},{value:"\u4f7f\u7528 visudo",id:"\u4f7f\u7528-visudo",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"sudo",children:"sudo"}),"\n",(0,t.jsx)(s.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"sudo"})}),"\n",(0,t.jsx)(s.h2,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,t.jsx)(s.h4,{id:"\u67e5\u770b\u5f53\u524d\u8bbe\u7f6e",children:"\u67e5\u770b\u5f53\u524d\u8bbe\u7f6e"}),"\n",(0,t.jsxs)(s.p,{children:["\u547d\u4ee4 ",(0,t.jsx)(s.code,{children:"sudo -ll"})," \u53ef\u4ee5\u663e\u793a\u5f53\u524d\u7684 sudo \u914d\u7f6e; \u547d\u4ee4 ",(0,t.jsx)(s.code,{children:"sudo -lU *user*"})," \u53ef\u4ee5\u67e5\u770b\u67d0\u4e2a\u7279\u5b9a\u7528\u6237\u7684\u8bbe\u7f6e\u3002"]}),"\n",(0,t.jsx)(s.h3,{id:"\u4f7f\u7528-visudo",children:"\u4f7f\u7528 visudo"}),"\n",(0,t.jsx)(s.p,{children:"\u4f7f\u7528 visudo \u7f16\u8f91/etc/sudoers"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"visudo\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"# Allow members of group sudo to execute any command\n%sudo   ALL=(ALL:ALL) ALL\n# \u5bc6\u7801\u8fc7\u671f\u65f6\u95f4 10\u5206\u949f\nDefaults:lux timestamp_timeout=10\nDefaults:%sudo timestamp_timeout=10\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"gpasswd -a lux sudo\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u91cd\u65b0\u767b\u5f55\u4ee5\u751f\u6548"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://wiki.archlinuxcn.org/wiki/Sudo",children:"https://wiki.archlinuxcn.org/wiki/Sudo"})})]})}function a(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>i,a:()=>r});var t=n(7294);const o={},d=t.createContext(o);function r(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);