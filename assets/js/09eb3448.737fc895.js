"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5093],{9146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var i=t(5893),a=t(1151);const c={title:"macOS \u6587\u4ef6 \u7528vim\u6253\u5f00",date:new Date("2017-04-09T11:30:02.000Z"),tags:["macOSTerm","vim"],categories:["macOS"]},s=void 0,o={id:"OS/macos/macOS/macOS\u6587\u4ef6\u7528vim\u6253\u5f00",title:"macOS \u6587\u4ef6 \u7528vim\u6253\u5f00",description:"macOS\u6587\u4ef6\u7528vim\u6253\u5f00",source:"@site/docs/OS/macos/macOS/macOS\u6587\u4ef6\u7528vim\u6253\u5f00.md",sourceDirName:"OS/macos/macOS",slug:"/OS/macos/macOS/macOS\u6587\u4ef6\u7528vim\u6253\u5f00",permalink:"/docs/OS/macos/macOS/macOS\u6587\u4ef6\u7528vim\u6253\u5f00",draft:!1,unlisted:!1,tags:[{label:"macOSTerm",permalink:"/docs/tags/mac-os-term"},{label:"vim",permalink:"/docs/tags/vim"}],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{title:"macOS \u6587\u4ef6 \u7528vim\u6253\u5f00",date:"2017-04-09T11:30:02.000Z",tags:["macOSTerm","vim"],categories:["macOS"]},sidebar:"tutorialSidebar",previous:{title:"macOS\u5b89\u88c5pip",permalink:"/docs/OS/macos/macOS/macOS\u5b89\u88c5pip"},next:{title:"macOS-Term",permalink:"/docs/OS/macos/macOS-Term"}},m={},r=[{value:"macOS\u6587\u4ef6\u7528vim\u6253\u5f00",id:"macos\u6587\u4ef6\u7528vim\u6253\u5f00",level:3},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:3}];function l(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"macos\u6587\u4ef6\u7528vim\u6253\u5f00",children:"macOS\u6587\u4ef6\u7528vim\u6253\u5f00"}),"\n",(0,i.jsxs)(n.p,{children:["Automator -> \u5e94\u7528\u7a0b\u5e8f -> \u8fd0\u884cAppleScript -> \u4fdd\u5b58\u4e3a",(0,i.jsx)(n.code,{children:"vim.app"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"vim.app"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'on run {input}\n   set the_path to POSIX path of input\n   set cmd to "vim " & quoted form of the_path\n   tell application "System Events" to set terminalIsRunning to exists application process "Terminal"\n   tell application "Terminal"\n      activate\n      if terminalIsRunning is true then\n         do script with command cmd\n      else\n         do script with command cmd in window 1\n      end if\n   end tell\nend run\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.zhihu.com/question/21435176/answer/80670940",children:"https://www.zhihu.com/question/21435176/answer/80670940"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://superuser.com/questions/139352/mac-os-x-how-to-open-vim-in-terminal-when-double-click-on-a-file",children:"https://superuser.com/questions/139352/mac-os-x-how-to-open-vim-in-terminal-when-double-click-on-a-file"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(7294);const a={},c=i.createContext(a);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);