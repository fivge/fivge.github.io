"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9149],{6523:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var l=s(5893),t=s(1151);const i={title:"macOS System",date:new Date("2017-06-29T19:48:42.000Z"),updated:new Date("2018-04-21T00:00:00.000Z"),tags:["macOS"],categories:["macOS"]},a=void 0,c={id:"OS/macos/tips",title:"macOS System",description:"1. \u6302\u8f7d NTFS \u5206\u533a",source:"@site/docs/OS/macos/tips.md",sourceDirName:"OS/macos",slug:"/OS/macos/tips",permalink:"/docs/OS/macos/tips",draft:!1,unlisted:!1,tags:[{label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",lastUpdatedAt:1713494798,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{title:"macOS System",date:"2017-06-29T19:48:42.000Z",updated:"2018-04-21T00:00:00.000Z",tags:["macOS"],categories:["macOS"]},sidebar:"tutorialSidebar",previous:{title:"term",permalink:"/docs/OS/macos/term"},next:{title:"archlinux.arm",permalink:"/docs/OS/pi/archlinux.arm"}},r={},o=[{value:"1. \u6302\u8f7d NTFS \u5206\u533a",id:"1-\u6302\u8f7d-ntfs-\u5206\u533a",level:3},{value:"2. ...\u5df2\u88ab\u5360\u7528",id:"2-\u5df2\u88ab\u5360\u7528",level:3},{value:"4.mac \u6c47\u7f16\u8bed\u8a00",id:"4mac-\u6c47\u7f16\u8bed\u8a00",level:3},{value:"5.\u5b57\u4f53",id:"5\u5b57\u4f53",level:3},{value:"6.\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",id:"6\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",level:3},{value:"7.\u663e\u793a\u9690\u85cf\u6587\u4ef6",id:"7\u663e\u793a\u9690\u85cf\u6587\u4ef6",level:3},{value:"\u5982\u4f55\u786e\u5b9a\u5df2\u7ecf\u5f53\u524d SIP \u7684\u5f00\u5173\u72b6\u6001\uff1f\u53ef\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528\u5b98\u65b9\u7684 csrutil \u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u67e5\u8be2\uff1a",id:"\u5982\u4f55\u786e\u5b9a\u5df2\u7ecf\u5f53\u524d-sip-\u7684\u5f00\u5173\u72b6\u6001\u53ef\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528\u5b98\u65b9\u7684-csrutil-\u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u67e5\u8be2",level:5}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",h3:"h3",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"1-\u6302\u8f7d-ntfs-\u5206\u533a",children:"1. \u6302\u8f7d NTFS \u5206\u533a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'Mac:~ x$ ls /Volumes/\nApp\t\t\tOS X\t\t\tWin10 OS\nMac\t\t\tTuxera NTFS 2014\t\u7528\u6237\nMac:~ x$ diskutil info /Volumes/\u7528\u6237 | grep UUID\n   Volume UUID:              47C13D50-07B9-4D48-AEA0-6B1543F8339E\n   Disk / Partition UUID:    427F3E08-3EFD-4D57-8B8D-4A5C0DD8FDF4\nMac:~ x$ echo "UUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse" | sudo tee -a /etc/fstab\n'})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"UUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse\n"})}),"\n",(0,l.jsx)(n.h3,{id:"2-\u5df2\u88ab\u5360\u7528",children:"2. ...\u5df2\u88ab\u5360\u7528"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\u2692 xattr -l /Volumes/App/\u3010\u5b89\u88c5\u5305\u3011/Mac/\u786c\u4ef6\u6982\u8981.md                            ~\ncom.apple.FinderInfo:\n00000000  62 72 6F 6B 4D 41 43 53 00 00 00 00 00 00 00 00  |brokMACS........|\n00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  |................|\n00000020\ncom.apple.TextEncoding: utf-8;134217984\n\u2692 xattr -d com.apple.FinderInfo /Volumes/App/\u3010\u5b89\u88c5\u5305\u3011/Mac/\u786c\u4ef6\u6982\u8981.md\n"})}),"\n",(0,l.jsx)(n.h3,{id:"4mac-\u6c47\u7f16\u8bed\u8a00",children:"4.mac \u6c47\u7f16\u8bed\u8a00"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"brew install nasm\n"})}),"\n",(0,l.jsx)(n.h3,{id:"5\u5b57\u4f53",children:"5.\u5b57\u4f53"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["~/\u8d44\u6e90\u5e93/Fonts/","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"/\u8d44\u6e90\u5e93/Fonts/"}),"\n",(0,l.jsx)(n.li,{children:"/\u7cfb\u7edf/\u8d44\u6e90\u5e93/Fonts/"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"6\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",children:"6.\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"OS X \u7cfb\u7edf\u4e0b:"}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u6253\u5f00\u78c1\u76d8\u5de5\u5177\uff0c\u9009\u62e9 U \u76d8\uff0c\u8fdb\u884c\u5206\u533a\uff1b"}),"\n",(0,l.jsx)(n.li,{children:"\u5206\u4e3a\u4e00\u4e2a 300MB \u5de6\u53f3\u7684\u540d\u4e3a EFI \u7684 FAT \u7c7b\u578b\u7684\u76d8\uff0c\u5269\u4e0b\u7684\u90fd\u4e3a OS X \u6269\u5c55\uff0c\u547d\u540d\u4e3a Install OS X El Capitan"}),"\n",(0,l.jsx)(n.li,{children:"\u53f3\u51fb Install OS X El Capitan.app -> \u663e\u793a\u5305\u5185\u5bb9 -> Contents -> Resources ->\ncreateinstallmedia , \u590d\u5236\u8be5\u6587\u4ef6\u81f3\u684c\u9762"}),"\n",(0,l.jsx)(n.li,{children:"\u6253\u5f00\u7ec8\u7aef"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"diskutil list  ### \u5217\u51fa\u78c1\u76d8\nsudo su\n/Users/x/Desktop/createinstallmedia --volume /Volumes/Install/ --applicationpath /Applications/Install\\ OS\\ X\\ El\\ Capitan.app [--force]\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f00\u59cb\u5199\u5165\u955c\u50cf"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u523b\u5f55\u5b8c\u6bd5"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"7\u663e\u793a\u9690\u85cf\u6587\u4ef6",children:"7.\u663e\u793a\u9690\u85cf\u6587\u4ef6"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.del,{children:"\u663e\u793a\u9690\u85cf\u6587\u4ef6"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.del,{children:"\u6062\u590d"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"new"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5728 macOS 10.12 \u4e2d\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5feb\u6377\u952e\u6765\u5f00\u5173"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"Command-Shift-G"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"directory-not-empty-sudo-rm-r-i-file-name-not-working"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://apple.stackexchange.com/questions/116217/directory-not-empty-sudo-rm-r-i-file-name-not-working",children:"https://apple.stackexchange.com/questions/116217/directory-not-empty-sudo-rm-r-i-file-name-not-working"})}),"\n",(0,l.jsx)(n.p,{children:"file"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'find / -name "Adobe Application Manager"\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u5217\u51fa\u78c1\u76d8"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"diskutil list"}),"\n",(0,l.jsx)(n.h5,{id:"\u5982\u4f55\u786e\u5b9a\u5df2\u7ecf\u5f53\u524d-sip-\u7684\u5f00\u5173\u72b6\u6001\u53ef\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528\u5b98\u65b9\u7684-csrutil-\u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u67e5\u8be2",children:"\u5982\u4f55\u786e\u5b9a\u5df2\u7ecf\u5f53\u524d SIP \u7684\u5f00\u5173\u72b6\u6001\uff1f\u53ef\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528\u5b98\u65b9\u7684 csrutil \u547d\u4ee4\u884c\u5de5\u5177\u8fdb\u884c\u67e5\u8be2\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"csrutil status"}),"\n",(0,l.jsx)(n.p,{children:"\u4ece 10.11 DB5/PB3 \u7248\u5f00\u59cb\uff0crootless=0 \u4ee5\u53ca kext-dev-mode=1 \u542f\u52a8\u53c2\u6570\u5df2\u7ecf\u88ab\u5e9f\u9664\uff0c\u8bf7\u4e0d\u8981\u518d\u4f7f\u7528\u3002\u7b2c\u4e09\u65b9 kext \u63a8\u8350\u5b89\u88c5\u81f3/Library/Extensions/\uff0c\u5c3d\u91cf\u907f\u514d\u5bf9 SLE \u4e0b\u7684\u539f\u7248 kext \u8fdb\u884c\u76f4\u63a5\u4fee\u6539"})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>a});var l=s(7294);const t={},i=l.createContext(t);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);