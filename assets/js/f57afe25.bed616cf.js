"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8292],{470:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>h});var r=n(5893),d=n(1151);const i={},c="passwd archie",l={id:"CloudNative/system/user/\u7528\u6237\u548c\u7528\u6237\u7ec4",title:"\u7528\u6237\u548c\u7528\u6237\u7ec4",description:"1.\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a archie \u7684\u7528\u6237\uff0c\u5e76\u4f7f\u7528 zsh \u4f5c\u9ed8\u8ba4 shell",source:"@site/docs/CloudNative/system/user/\u7528\u6237\u548c\u7528\u6237\u7ec4.md",sourceDirName:"CloudNative/system/user",slug:"/CloudNative/system/user/\u7528\u6237\u548c\u7528\u6237\u7ec4",permalink:"/docs/CloudNative/system/user/\u7528\u6237\u548c\u7528\u6237\u7ec4",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"sudo",permalink:"/docs/CloudNative/system/user/sudo"},next:{title:"vim",permalink:"/docs/CloudNative/system/vim/"}},a={},h=[{value:"\u7528\u6237\u7ba1\u7406",id:"\u7528\u6237\u7ba1\u7406",level:2},{value:"\u6743\u9650",id:"\u6743\u9650",level:2}];function t(e){const s={a:"a",h1:"h1",h2:"h2",hr:"hr",p:"p",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"1.\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a archie \u7684\u7528\u6237\uff0c\u5e76\u4f7f\u7528 zsh \u4f5c\u9ed8\u8ba4 shell\n\u2460 # useradd -m -g users -G audio,video,floppy,network,rfkill,scanner,storage,optical,power,wheel,uucp -s /usr/bin/zsh archie"}),"\n",(0,r.jsx)(s.h1,{id:"passwd-archie",children:"passwd archie"}),"\n",(0,r.jsx)(s.p,{children:"\u2461 \u4f7f\u7528 useradd \u547d\u4ee4\u6dfb\u52a0\u7528\u6237\nuseradd -m -g [\u521d\u59cb\u7ec4] -G [\u9644\u52a0\u7ec4] -s [\u767b\u9646 shell] [\u7528\u6237]\n-m\uff1a\u521b\u5efa\u7528\u6237\u4e3b\u76ee\u5f55/home/[\u7528\u6237\u540d]\uff1b\u5728\u81ea\u5df1\u7684\u4e3b\u76ee\u5f55\u5185\uff0c\u5373\u4f7f\u4e0d\u662f root \u7528\u6237\u4e5f\u53ef\u4ee5\u8bfb\u5199\u6587\u4ef6\u3001\u5b89\u88c5\u7a0b\u5e8f\u7b49\u7b49\u3002\n-g\uff1a\u8bbe\u7f6e\u7528\u6237\u521d\u59cb\u7ec4\u7684\u540d\u79f0\u6216\u6570\u5b57 ID\uff1b\u8be5\u7ec4\u5fc5\u987b\u662f\u5b58\u5728\u7684\uff1b\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8be5\u9009\u9879\uff0cuseradd \u4f1a\u6839\u636e/etc/login.defs \u6587\u4ef6\u4e2d\u7684 USERGROUPS_ENAB \u73af\u5883\u53d8\u91cf\u8fdb\u884c\u8bbe\u7f6e\u3002\n-G\uff1a\u7528\u6237\u8981\u52a0\u5165\u7684\u9644\u52a0\u7ec4\u5217\u8868\uff1b\u4f7f\u7528\u9017\u53f7\u5206\u9694\u591a\u4e2a\u7ec4\uff0c\u4e0d\u8981\u6dfb\u52a0\u7a7a\u683c\uff1b\u5982\u679c\u4e0d\u8bbe\u7f6e\uff0c\u7528\u6237\u4ec5\u4ec5\u52a0\u5165\u521d\u59cb\u7ec4\u3002\n-s\uff1a\u7528\u6237\u9ed8\u8ba4\u767b\u5f55 shell \u7684\u8def\u5f84\uff1bArch Linux \u7684 init \u811a\u672c\u4f7f\u7528 bash\uff1b\u542f\u52a8\u8fc7\u7a0b\u7ed3\u675f\u540e\uff0c\u9ed8\u8ba4\u542f\u52a8\u7684\u767b\u5f55 shell \u5728\u6b64\u5904\u8bbe\u5b9a\uff1b\u8bf7\u786e\u4fdd\u4f7f\u7528\u7684 shell \u5df2\u7ecf\u5b89\u88c5\n\u2462 \u8981\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a archie \u7684\u7528\u6237\uff0c\u5e76\u4f7f\u7528 bash \u4f5c\u4e3a\u767b\u5f55 shell\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"useradd--m--g-users--s-binbash-archie",children:"useradd -m -g users -s /bin/bash archie"}),"\n",(0,r.jsx)(s.p,{children:"\u901a\u8fc7\u4e0b\u5217\u547d\u4ee4\u8bbe\u7f6e GECOS \u5b57\u6bb5\uff08\u7528\u6237\u4fe1\u606f\uff0c\u4f8b\u5982\u7528\u6237\u5168\u540d\uff09\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"chfn-\u7528\u6237\u540d",children:"chfn [\u7528\u6237\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\uff08\u8fd9\u6837\u5c06\u4f1a\u4ee5\u4ea4\u4e92\u5f0f\u6a21\u5f0f\u542f\u52a8 chfn\uff09"}),"\n",(0,r.jsx)(s.p,{children:"\u901a\u8fc7\u4e0b\u5217\u547d\u4ee4\u8bbe\u7f6e\u7528\u6237\u5bc6\u7801\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"passwd-\u7528\u6237\u540d",children:"passwd [\u7528\u6237\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\u2463 \u53e6\u4e00\u4e2a\u4ea4\u4e92\u5f0f\u754c\u9762\u7684\u6dfb\u52a0\u7528\u6237\u7684\u5de5\u5177\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"adduser",children:"adduser"}),"\n",(0,r.jsx)(s.p,{children:"adduser \u4f1a\u8be2\u95ee\u4e00\u4e9b\u5e38\u89c1\u7684\u8bbe\u7f6e\uff0c\u5e76\u4f7f\u7528\u5408\u9002\u7684\u9ed8\u8ba4\u503c\uff0c\u8c03\u7528 useradd \u521b\u5efa\u7528\u6237\u3002\u8be5\u547d\u4ee4\u8fd8\u4f1a\u8bbe\u7f6e\u7528\u6237\u4fe1\u606f\u548c\u5bc6\u7801\uff0c\u56ca\u62ec\u4e86 chfn \u548c passwd \u4e24\u4e2a\u547d\u4ee4\u7684\u529f\u80fd\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u2464 \u4f7f\u7528 userdel \u547d\u4ee4\u5220\u9664\u7528\u6237\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"userdel--r-\u7528\u6237\u540d",children:"userdel -r [\u7528\u6237\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"-r \u9009\u9879\u8868\u793a\u4e00\u5e76\u5220\u9664\u7528\u6237\u4e3b\u76ee\u5f55\u548c\u90ae\u4ef6\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u2465 \u7528\u6237\u4fe1\u606f\u5b58\u50a8"}),"\n",(0,r.jsx)(s.p,{children:"\u672c\u5730\u7528\u6237\u4fe1\u606f\u50a8\u5b58\u5728/etc/passwd \u6587\u4ef6\u4e2d\u3002\u8981\u67e5\u770b\u7cfb\u7edf\u4e0a\u6240\u6709\u7528\u6237\u8d26\u6237\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"$ cat /etc/passwd"}),"\n",(0,r.jsx)(s.p,{children:"\u4e00\u884c\u4ee3\u8868\u4e00\u4e2a\u7528\u6237\uff0c\u683c\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsxs)(s.p,{children:["account:password:UID:GID:GECOS:directory",":shell"]}),"\n",(0,r.jsx)(s.p,{children:"\u6b64\u5904\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"account\uff1a\u7528\u6237\u540d\npassword\uff1a\u7528\u6237\u5bc6\u7801\nUID\uff1a\u7528\u6237\u7684\u6570\u5b57ID\nGID\uff1a\u7528\u6237\u6240\u5728\u4e3b\u7ec4\u7684\u6570\u5b57ID\nGECOS\uff1a\u53ef\u9009\u7684\u6ce8\u91ca\u5b57\u6bb5\uff0c\u901a\u5e38\u8bb0\u5f55\u7528\u6237\u5168\u540d\ndirectory\uff1a\u7528\u6237\u7684\u4e3b\u76ee\u5f55\uff08$HOME\uff09\nshell\uff1a\u7528\u6237\u7684\u767b\u9646shell\uff08\u9ed8\u8ba4\u4e3a/bin/sh\uff09"}),"\n",(0,r.jsx)(s.p,{children:"\u6ce8\u610f: Arch Linux \u4f7f\u7528\u5f71\u5b50\u5bc6\u7801\u3002passwd \u6587\u4ef6\u5bf9\u6240\u6709\u4eba\u53ef\u8bfb\uff0c\u5728\u91cc\u9762\u5b58\u50a8\u5bc6\u7801\uff08\u65e0\u8bba\u662f\u5426\u52a0\u5bc6\u8fc7\uff09\u662f\u5f88\u4e0d\u5b89\u5168\u7684\u3002\u5728 password \u5b57\u6bb5\uff0c\u901a\u5e38\u4f7f\u7528\u4e00\u4e2a\u5360\u4f4d\u5b57\u7b26\uff08x\uff09\u4ee3\u66ff\u3002\u52a0\u5bc6\u8fc7\u7684\u5bc6\u7801\u50a8\u5b58\u5728/etc/shadow \u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u5bf9\u666e\u901a\u7528\u6237\u9650\u5236\u8bbf\u95ee\u3002\n\u2466 \u7528\u6237\u7ec4\u7ba1\u7406"}),"\n",(0,r.jsx)(s.p,{children:"/etc/group \u6587\u4ef6\u50a8\u5b58\u4e86\u7cfb\u7edf\u4e2d\u7528\u6237\u7ec4\u7684\u4fe1\u606f\uff0c\u8be6\u60c5\u53c2\u89c1\uff1aman group\u3002"}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528 groups \u547d\u4ee4\u67e5\u770b\u7528\u6237\u6240\u5728\u7ec4\u7684\u540d\u79f0\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"$ groups [\u7528\u6237\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\u82e5\u7701\u7565\u7528\u6237\u540d\uff0c\u9ed8\u8ba4\u663e\u793a\u5f53\u524d\u7528\u6237\u6240\u5728\u7ec4\u3002"}),"\n",(0,r.jsx)(s.p,{children:"id \u547d\u4ee4\u63d0\u4f9b\u989d\u5916\u7684\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237 UID \u4ee5\u53ca\u76f8\u5173\u7528\u6237\u7ec4 GID\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"$ id [\u7528\u6237\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\u67e5\u770b\u6240\u6709\u7ec4\uff1a"}),"\n",(0,r.jsx)(s.p,{children:"$ cat /etc/group"}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528 groupadd \u521b\u5efa\u65b0\u7684\u7ec4\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"groupadd-\u7ec4\u540d",children:"groupadd [\u7ec4\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\u4f7f\u7528 gpasswd \u5c06\u7528\u6237\u6dfb\u52a0\u5230\u7ec4\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"gpasswd--a-\u7528\u6237\u540d-\u7ec4\u540d",children:"gpasswd -a [\u7528\u6237\u540d] [\u7ec4\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\u5220\u9664\u7528\u6237\u7ec4\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"groupdel-\u7ec4\u540d",children:"groupdel [\u7ec4\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\u5c06\u7528\u6237\u4ece\u7ec4\u4e2d\u79fb\u9664\uff1a"}),"\n",(0,r.jsx)(s.h1,{id:"gpasswd--d-\u7528\u6237\u540d-\u7ec4\u540d",children:"gpasswd -d [\u7528\u6237\u540d] [\u7ec4\u540d]"}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u7528\u6237\u5df2\u767b\u5f55\uff0c\u5fc5\u987b\u91cd\u65b0\u767b\u5f55\u4f7f\u66f4\u6539\u751f\u6548\u3002\n\u2467 audio,video,floppy,network,rfkill,scanner,storage,optical,power,wheel,uucp\ncamera disk games locate ip networkmanager sys user\nrfkill \u4e0d\u518d\u4f7f\u7528!\ndisk \u76f4\u63a5\u8bbf\u95ee\u4e0d\u53d7 optical, floppy \u548c storage \u7ec4\u63a7\u5236\u7684\u5757\u8bbe\u5907. \u9664\u975e\u6709\u7279\u6b8a\u9700\u8981, \u5426\u5219\u4e0d\u5efa\u8bae\u5c06\u4e00\u822c\u7528\u6237\u6dfb\u52a0\u81f3\u8be5\u7ec4"}),"\n",(0,r.jsx)(s.p,{children:"\u2468 audio,camera,disk,floppy,games,locate,ip,network,networkmanager,optical,power,scanner,storage,sys,user,uucp,video,wheel"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h1,{id:"\u7528\u6237\u548c\u7528\u6237\u7ec4",children:"\u7528\u6237\u548c\u7528\u6237\u7ec4"}),"\n",(0,r.jsx)(s.h2,{id:"\u7528\u6237\u7ba1\u7406",children:"\u7528\u6237\u7ba1\u7406"}),"\n",(0,r.jsx)(s.h2,{id:"\u6743\u9650",children:"\u6743\u9650"}),"\n",(0,r.jsx)(s.p,{children:"ls -l"}),"\n",(0,r.jsx)(s.p,{children:"chown"}),"\n",(0,r.jsx)(s.p,{children:"chmod"}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"https://wiki.archlinuxcn.org/wiki/%E7%94%A8%E6%88%B7%E5%92%8C%E7%94%A8%E6%88%B7%E7%BB%84",children:"https://wiki.archlinuxcn.org/wiki/%E7%94%A8%E6%88%B7%E5%92%8C%E7%94%A8%E6%88%B7%E7%BB%84"})})]})}function o(e={}){const{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>c});var r=n(7294);const d={},i=r.createContext(d);function c(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);