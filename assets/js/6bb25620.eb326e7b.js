"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1430],{9825:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var s=e(5893),r=e(1151);const o={},i=void 0,c={id:"OS/linux/proxy",title:"proxy",description:"- https://github.com/jiangxufeng/v2rayL",source:"@site/docs/OS/linux/proxy.md",sourceDirName:"OS/linux",slug:"/OS/linux/proxy",permalink:"/docs/OS/linux/proxy",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pacman",permalink:"/docs/OS/linux/pacman"},next:{title:"XQuartz",permalink:"/docs/OS/macos/XQuartz"}},h={},p=[{value:"socks5 to https/http",id:"socks5-to-httpshttp",level:4},{value:"https/http proxy",id:"httpshttp-proxy",level:4},{value:"socks5 proxy",id:"socks5-proxy",level:4},{value:"https://github.com/tinyproxy/tinyproxy",id:"httpsgithubcomtinyproxytinyproxy",level:4}];function l(t){const n={a:"a",code:"code",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/jiangxufeng/v2rayL",children:"https://github.com/jiangxufeng/v2rayL"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/trancx/vmess-cli",children:"https://github.com/trancx/vmess-cli"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/v2rayA/v2rayA",children:"https://github.com/v2rayA/v2rayA"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"base64 -d\n\nCTRL D\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"... => v2ray => socks5 10808 && https/http 10809"}),"\n",(0,s.jsx)(n.h4,{id:"socks5-to-httpshttp",children:"socks5 to https/http"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"privoxy"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"/etc/privoxy/config"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-config",children:"forward-socks5   /               127.0.0.1:10808  .\nlisten-address [::1]:10809\nlisten-address  127.0.0.1:10809\n"})}),"\n",(0,s.jsx)(n.h4,{id:"httpshttp-proxy",children:"https/http proxy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export http_proxy=http://localhost:8035/ https_proxy=http://localhost:8035/\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"git"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git config --global https.proxy http://127.0.0.1:10809\ngit config --global http.proxy http://127.0.0.1:10809\n\ngit config --global --unset https.proxy\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"ssh"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"https_proxy=http://localhost:8123 ssh root@123.123.123.123\n"})}),"\n",(0,s.jsx)(n.h4,{id:"socks5-proxy",children:"socks5 proxy"}),"\n",(0,s.jsx)(n.h4,{id:"httpsgithubcomtinyproxytinyproxy",children:(0,s.jsx)(n.a,{href:"https://github.com/tinyproxy/tinyproxy",children:"https://github.com/tinyproxy/tinyproxy"})})]})}function a(t={}){const{wrapper:n}={...(0,r.a)(),...t.components};return n?(0,s.jsx)(n,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>c,a:()=>i});var s=e(7294);const r={},o=s.createContext(r);function i(t){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function c(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:i(t.components),s.createElement(o.Provider,{value:n},t.children)}}}]);