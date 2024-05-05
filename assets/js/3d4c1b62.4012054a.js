"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3082],{2365:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var c=n(5893),l=n(1151);const o={},r="wsl",i={id:"OS/windows/wsl2",title:"wsl",description:"1. \u5b89\u88c5",source:"@site/docs/OS/windows/wsl2.md",sourceDirName:"OS/windows",slug:"/OS/windows/wsl2",permalink:"/docs/OS/windows/wsl2",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"wsl",permalink:"/docs/OS/windows/wsl"},next:{title:"\u5305\u7ba1\u7406\u5668",permalink:"/docs/OS/windows/\u5305\u7ba1\u7406\u5668"}},t={},d=[{value:"1. \u5b89\u88c5",id:"1-\u5b89\u88c5",level:3},{value:"2. \u914d\u7f6e",id:"2-\u914d\u7f6e",level:3},{value:"3. \u5e38\u7528\u8f6f\u4ef6",id:"3-\u5e38\u7528\u8f6f\u4ef6",level:3},{value:"4. \u5f00\u53d1\u73af\u5883",id:"4-\u5f00\u53d1\u73af\u5883",level:3},{value:"5. Q&amp;A",id:"5-qa",level:3},{value:"Q1",id:"q1",level:4}];function h(s){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...s.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h1,{id:"wsl",children:"wsl"}),"\n",(0,c.jsx)(e.h3,{id:"1-\u5b89\u88c5",children:"1. \u5b89\u88c5"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://learn.microsoft.com/zh-cn/windows/wsl/install",children:"https://learn.microsoft.com/zh-cn/windows/wsl/install"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"wsl --list --online\n\n"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://docs.microsoft.com/zh-cn/windows/wsl/about",children:"https://docs.microsoft.com/zh-cn/windows/wsl/about"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"install"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/install",children:"https://docs.microsoft.com/en-us/windows/wsl/install"})}),"\n",(0,c.jsx)(e.blockquote,{children:"\n"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-powershell",children:"wsl -l -o\n\nwsl -l -v\n\n\nwsl --set-version distro name 2\nwsl --set-version Debian 2\n"})}),"\n",(0,c.jsx)(e.h3,{id:"2-\u914d\u7f6e",children:"2. \u914d\u7f6e"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"arch"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://wsldl-pg.github.io/ArchW-docs/How-to-Setup/",children:"https://wsldl-pg.github.io/ArchW-docs/How-to-Setup/"})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u53c2\u8003\u7684\u5bf9\u8c61\u7c7b\u578b\u4e0d\u652f\u6301\u5c1d\u8bd5\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://github.com/microsoft/WSL/issues/4194",children:"https://github.com/microsoft/WSL/issues/4194"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://answers.microsoft.com/zh-hans/insider/forum/all/wsl2%E5%AE%89%E8%A3%85kali/b6dd4c62-1130-4a7c-9462-1e9e5f38dab2",children:"https://answers.microsoft.com/zh-hans/insider/forum/all/wsl2%E5%AE%89%E8%A3%85kali/b6dd4c62-1130-4a7c-9462-1e9e5f38dab2"})}),"\n",(0,c.jsx)(e.p,{children:"\u6267\u884c netsh winsock reset ,\u53ef\u4ee5\u542f\u52a8"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u4f7f\u7528\u4ee3\u7406"}),"\n"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:'## \u83b7\u53d6\u4e3b\u673a IP\n## \u4e3b\u673a IP \u4fdd\u5b58\u5728 /etc/resolv.conf \u4e2d\nexport hostip=$(cat /etc/resolv.conf |grep -oP \'(?<=nameserver\\ ).*\')\n\n## \u914d\u7f6e\u4ee3\u7406\nexport http_proxy="socks5://${hostip}:7890"\nexport https_proxy="socks5://${hostip}:7890"\n## \u6216\u8005\nexport all_proxy="socks5://${hostip}:7890"\n\n## \u53d6\u6d88\u914d\u7f6e\nunset all_proxy\n'})}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.p,{children:"\u9ad8\u7ea7\u914d\u7f6e"}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://learn.microsoft.com/zh-CN/windows/wsl/wsl-config",children:"WSL \u4e2d\u7684\u9ad8\u7ea7\u8bbe\u7f6e\u914d\u7f6e"})}),"\n",(0,c.jsx)(e.p,{children:"\u4f8b\u5982: WSL \u662f\u5426\u4f1a\u5c06 Windows \u8def\u5f84\u5143\u7d20\u6dfb\u52a0\u5230 $PATH \u73af\u5883\u53d8\u91cf"}),"\n",(0,c.jsx)(e.h3,{id:"3-\u5e38\u7528\u8f6f\u4ef6",children:"3. \u5e38\u7528\u8f6f\u4ef6"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"screenfetch"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"git"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"zsh"})," ",(0,c.jsx)(e.code,{children:"oh-my-zsh"})]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"vim"})}),"\n",(0,c.jsx)(e.h3,{id:"4-\u5f00\u53d1\u73af\u5883",children:"4. \u5f00\u53d1\u73af\u5883"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"node"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"go"})}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"rust"})}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"c"}),"\u7cfb\u5217"]}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"VS Code"})}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"export PATH=$PATH:/mnt/c/App/Microsoft\\ VS\\ Code/bin\n"})}),"\n",(0,c.jsx)(e.h3,{id:"5-qa",children:"5. Q&A"}),"\n",(0,c.jsx)(e.h4,{id:"q1",children:"Q1"}),"\n",(0,c.jsxs)(e.blockquote,{children:["\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:" \u279c  ~ tmux\n couldn't create directory /run/tmux/1000 (No such file or directory)\n"})}),"\n"]}),"\n",(0,c.jsx)(e.p,{children:"A:"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.a,{href:"https://github.com/microsoft/WSL/issues/2530",children:"https://github.com/microsoft/WSL/issues/2530"})}),"\n",(0,c.jsxs)(e.p,{children:["1\u3001 ",(0,c.jsx)(e.code,{children:"zshrc"})]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"export TMUX_TMPDIR='/tmp'\n"})}),"\n",(0,c.jsx)(e.p,{children:"2\u3001 systemd"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"sudo systemd-tmpfiles --create\n"})})]})}function a(s={}){const{wrapper:e}={...(0,l.a)(),...s.components};return e?(0,c.jsx)(e,{...s,children:(0,c.jsx)(h,{...s})}):h(s)}},1151:(s,e,n)=>{n.d(e,{Z:()=>i,a:()=>r});var c=n(7294);const l={},o=c.createContext(l);function r(s){const e=c.useContext(o);return c.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(l):s.components||l:r(s.components),c.createElement(o.Provider,{value:e},s.children)}}}]);