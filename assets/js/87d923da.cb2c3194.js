"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8779],{1021:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=l(5893),s=l(1151);const i={title:"macOS System",date:new Date("2017-06-29T19:48:42.000Z"),updated:new Date("2018-04-21T00:00:00.000Z"),tags:["macOS"],categories:["macOS"]},t=void 0,c={id:"OS/macos/macOS/macOS-System",title:"macOS System",description:"1. \u6302\u8f7d NTFS \u5206\u533a",source:"@site/docs/OS/macos/macOS/macOS-System.md",sourceDirName:"OS/macos/macOS",slug:"/OS/macos/macOS/macOS-System",permalink:"/docs/OS/macos/macOS/macOS-System",draft:!1,unlisted:!1,tags:[{label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{title:"macOS System",date:"2017-06-29T19:48:42.000Z",updated:"2018-04-21T00:00:00.000Z",tags:["macOS"],categories:["macOS"]},sidebar:"tutorialSidebar",previous:{title:"XQuartz",permalink:"/docs/OS/macos/macOS/XQuartz"},next:{title:"macOS\u4e2dvim\u4f7f\u7528\u7cfb\u7edf\u526a\u8d34\u677f",permalink:"/docs/OS/macos/macOS/macOS\u4e2dvim\u4f7f\u7528\u7cfb\u7edf\u526a\u8d34\u677f"}},r={},d=[{value:"1. \u6302\u8f7d NTFS \u5206\u533a",id:"1-\u6302\u8f7d-ntfs-\u5206\u533a",level:3},{value:"2. ...\u5df2\u88ab\u5360\u7528",id:"2-\u5df2\u88ab\u5360\u7528",level:3},{value:"3.pkg",id:"3pkg",level:3},{value:"Term",id:"term",level:4},{value:"(1) \u663e\u793a\u5305\u5217\u8868",id:"1-\u663e\u793a\u5305\u5217\u8868",level:5},{value:"(2)\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6",id:"2\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6",level:5},{value:"UninstallPKG(\u8981\u94b1\u7684)",id:"uninstallpkg\u8981\u94b1\u7684",level:4},{value:"pkg_uninstaller(\u8c8c\u4f3c\u6ca1\u7528)",id:"pkg_uninstaller\u8c8c\u4f3c\u6ca1\u7528",level:4},{value:"Installation",id:"installation",level:5},{value:"Installing package file",id:"installing-package-file",level:5},{value:"Uninstalling single packages by name.",id:"uninstalling-single-packages-by-name",level:5},{value:"Using internally in package to build uninstaller",id:"using-internally-in-package-to-build-uninstaller",level:5},{value:"4.mac \u6c47\u7f16\u8bed\u8a00",id:"4mac-\u6c47\u7f16\u8bed\u8a00",level:3},{value:"5.\u5b57\u4f53",id:"5\u5b57\u4f53",level:3},{value:"6.\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",id:"6\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",level:3},{value:"7.\u663e\u793a\u9690\u85cf\u6587\u4ef6",id:"7\u663e\u793a\u9690\u85cf\u6587\u4ef6",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"1-\u6302\u8f7d-ntfs-\u5206\u533a",children:"1. \u6302\u8f7d NTFS \u5206\u533a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'Mac:~ x$ ls /Volumes/\nApp\t\t\tOS X\t\t\tWin10 OS\nMac\t\t\tTuxera NTFS 2014\t\u7528\u6237\nMac:~ x$ diskutil info /Volumes/\u7528\u6237 | grep UUID\n   Volume UUID:              47C13D50-07B9-4D48-AEA0-6B1543F8339E\n   Disk / Partition UUID:    427F3E08-3EFD-4D57-8B8D-4A5C0DD8FDF4\nMac:~ x$ echo "UUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse" | sudo tee -a /etc/fstab\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"UUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse\n"})}),"\n",(0,a.jsx)(n.h3,{id:"2-\u5df2\u88ab\u5360\u7528",children:"2. ...\u5df2\u88ab\u5360\u7528"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"\u2692 xattr -l /Volumes/App/\u3010\u5b89\u88c5\u5305\u3011/Mac/\u786c\u4ef6\u6982\u8981.md                            ~\ncom.apple.FinderInfo:\n00000000  62 72 6F 6B 4D 41 43 53 00 00 00 00 00 00 00 00  |brokMACS........|\n00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  |................|\n00000020\ncom.apple.TextEncoding: utf-8;134217984\n\u2692 xattr -d com.apple.FinderInfo /Volumes/App/\u3010\u5b89\u88c5\u5305\u3011/Mac/\u786c\u4ef6\u6982\u8981.md\n"})}),"\n",(0,a.jsx)(n.h3,{id:"3pkg",children:"3.pkg"}),"\n",(0,a.jsx)(n.h4,{id:"term",children:"Term"}),"\n",(0,a.jsx)(n.h5,{id:"1-\u663e\u793a\u5305\u5217\u8868",children:"(1) \u663e\u793a\u5305\u5217\u8868"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pkgutil --pkgs\n"})}),"\n",(0,a.jsx)(n.h5,{id:"2\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6",children:"(2)\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pkgutil --files com.Hackintosh.voodoohda287.Voodoo.pkg\n"})}),"\n",(0,a.jsx)(n.h4,{id:"uninstallpkg\u8981\u94b1\u7684",children:"UninstallPKG(\u8981\u94b1\u7684)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"http://www.corecode.at/uninstallpkg/",children:"UninstallPKG"})}),"\n",(0,a.jsx)(n.h4,{id:"pkg_uninstaller\u8c8c\u4f3c\u6ca1\u7528",children:"pkg_uninstaller(\u8c8c\u4f3c\u6ca1\u7528)"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpapis/pkg_uninstaller",children:"pkg_uninstaller"})}),"\n",(0,a.jsx)(n.h5,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.p,{children:"Installation is as simple as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"[sudo] bash < <(curl -sL https://raw.github.com/mpapis/pkg_uninstaller/master/pkg-install)\n"})}),"\n",(0,a.jsx)(n.p,{children:"Adding to PATH, for system installation (with sudo):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo 'PATH=$PATH:/opt/pkg_uninstaller' >> /etc/profile\n"})}),"\n",(0,a.jsx)(n.p,{children:"Adding PATH when installed as user (without sudo):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"echo 'PATH=$PATH:$HOME/.pkg_uninstaller' >> $HOME/.bash_profile\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note the single quotes are important in both cases."}),"\n",(0,a.jsx)(n.h5,{id:"installing-package-file",children:"Installing package file"}),"\n",(0,a.jsx)(n.p,{children:"Install packages with:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pkg-install <package_file.pkg>\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will create ",(0,a.jsx)(n.code,{children:"uninstall_<package_file_pkg>.sh"})," in current directory."]}),"\n",(0,a.jsxs)(n.p,{children:["To uninstall this package just execute ",(0,a.jsx)(n.code,{children:"./uninstall_<package_file_pkg>.sh"}),"."]}),"\n",(0,a.jsx)(n.h5,{id:"uninstalling-single-packages-by-name",children:"Uninstalling single packages by name."}),"\n",(0,a.jsx)(n.p,{children:"List available package names (possibly filtering by [name]):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pkg-list [name]\n"})}),"\n",(0,a.jsx)(n.p,{children:"Uninstall package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pkg-uninstall <name>\n"})}),"\n",(0,a.jsx)(n.h5,{id:"using-internally-in-package-to-build-uninstaller",children:"Using internally in package to build uninstaller"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["You have to bundle ",(0,a.jsx)(n.code,{children:"pkg-wrapper"})," with your application\nand install it to disk before executing the hook bellow."]}),"\n",(0,a.jsx)(n.li,{children:"In before installing hook call this script:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\n\npkg-wrapper before "your package name"\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In after installing hook call this script:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:'#!/bin/bash\n\npkg-wrapper before "your package name" /path/to/uninstaller_name.sh\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In uninstall hook call:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"#!/bin/bash\n\n/path/to/uninstaller_name.sh\nrm /path/to/uninstaller_name.sh\n"})}),"\n",(0,a.jsx)(n.h3,{id:"4mac-\u6c47\u7f16\u8bed\u8a00",children:"4.mac \u6c47\u7f16\u8bed\u8a00"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"brew install nasm\n"})}),"\n",(0,a.jsx)(n.h3,{id:"5\u5b57\u4f53",children:"5.\u5b57\u4f53"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["~/\u8d44\u6e90\u5e93/Fonts/","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"/\u8d44\u6e90\u5e93/Fonts/"}),"\n",(0,a.jsx)(n.li,{children:"/\u7cfb\u7edf/\u8d44\u6e90\u5e93/Fonts/"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"6\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",children:"6.\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"OS X \u7cfb\u7edf\u4e0b:"}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u6253\u5f00\u78c1\u76d8\u5de5\u5177\uff0c\u9009\u62e9 U \u76d8\uff0c\u8fdb\u884c\u5206\u533a\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u5206\u4e3a\u4e00\u4e2a 300MB \u5de6\u53f3\u7684\u540d\u4e3a EFI \u7684 FAT \u7c7b\u578b\u7684\u76d8\uff0c\u5269\u4e0b\u7684\u90fd\u4e3a OS X \u6269\u5c55\uff0c\u547d\u540d\u4e3a Install OS X El Capitan"}),"\n",(0,a.jsx)(n.li,{children:"\u53f3\u51fb Install OS X El Capitan.app -> \u663e\u793a\u5305\u5185\u5bb9 -> Contents -> Resources ->\ncreateinstallmedia , \u590d\u5236\u8be5\u6587\u4ef6\u81f3\u684c\u9762"}),"\n",(0,a.jsx)(n.li,{children:"\u6253\u5f00\u7ec8\u7aef"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"diskutil list  ### \u5217\u51fa\u78c1\u76d8\nsudo su\n/Users/x/Desktop/createinstallmedia --volume /Volumes/Install/ --applicationpath /Applications/Install\\ OS\\ X\\ El\\ Capitan.app [--force]\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f00\u59cb\u5199\u5165\u955c\u50cf"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"\u523b\u5f55\u5b8c\u6bd5"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"7\u663e\u793a\u9690\u85cf\u6587\u4ef6",children:"7.\u663e\u793a\u9690\u85cf\u6587\u4ef6"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.del,{children:"\u663e\u793a\u9690\u85cf\u6587\u4ef6"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.del,{children:"\u6062\u590d"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"new"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u5728 macOS 10.12 \u4e2d\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5feb\u6377\u952e\u6765\u5f00\u5173"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>t});var a=l(7294);const s={},i=a.createContext(s);function t(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);