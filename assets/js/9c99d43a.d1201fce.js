"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9],{2168:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=n(5893),s=n(1151);const r={},a=void 0,c={id:"OS/macos/OSX/ntfs",title:"ntfs",description:"Command-Shift-G",source:"@site/docs/OS/macos/OSX/ntfs.md",sourceDirName:"OS/macos/OSX",slug:"/OS/macos/OSX/ntfs",permalink:"/docs/OS/macos/OSX/ntfs",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706703253,formattedLastUpdatedAt:"Jan 31, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"kexts",permalink:"/docs/OS/macos/OSX/kexts"},next:{title:"pkg",permalink:"/docs/OS/macos/OSX/pkg"}},i={},d=[];function u(t){const e={code:"code",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:'Mac:~ x$ ls /Volumes/\nApp\t\t\tOS X\t\t\tWin10 OS\nMac\t\t\tTuxera NTFS 2014\t\u7528\u6237\nMac:~ x$ diskutil info /Volumes/\u7528\u6237 | grep UUID\n   Volume UUID:              47C13D50-07B9-4D48-AEA0-6B1543F8339E\n   Disk / Partition UUID:    427F3E08-3EFD-4D57-8B8D-4A5C0DD8FDF4\nMac:~ x$ echo "UUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse" | sudo tee -a /etc/fstab \nUUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse\n'})}),"\n",(0,o.jsx)(e.p,{children:"Command-Shift-G"})]})}function m(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(u,{...t})}):u(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>a});var o=n(7294);const s={},r=o.createContext(s);function a(t){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:a(t.components),o.createElement(r.Provider,{value:e},t.children)}}}]);