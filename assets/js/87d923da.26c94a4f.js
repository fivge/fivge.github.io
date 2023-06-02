"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8779],{7222:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var n=t(3117),l=t(102),r=(t(7294),t(3905)),i=["components"],s={title:"macOS System",date:new Date("2017-06-29T19:48:42.000Z"),updated:new Date("2018-04-21T00:00:00.000Z"),tags:["macOS"],categories:["macOS"]},p=void 0,o={unversionedId:"OS/macos/macOS/macOS-System",id:"OS/macos/macOS/macOS-System",title:"macOS System",description:"1. \u6302\u8f7d NTFS \u5206\u533a",source:"@site/docs/OS/macos/macOS/macOS-System.md",sourceDirName:"OS/macos/macOS",slug:"/OS/macos/macOS/macOS-System",permalink:"/docs/OS/macos/macOS/macOS-System",draft:!1,tags:[{label:"macOS",permalink:"/docs/tags/mac-os"}],version:"current",lastUpdatedAt:1683217433,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{title:"macOS System",date:"2017-06-29T19:48:42.000Z",updated:"2018-04-21T00:00:00.000Z",tags:["macOS"],categories:["macOS"]},sidebar:"tutorialSidebar",previous:{title:"XQuartz",permalink:"/docs/OS/macos/macOS/XQuartz"},next:{title:"macOS\u4e2dvim\u4f7f\u7528\u7cfb\u7edf\u526a\u8d34\u677f",permalink:"/docs/OS/macos/macOS/macOS\u4e2dvim\u4f7f\u7528\u7cfb\u7edf\u526a\u8d34\u677f"}},u={},c=[{value:"1. \u6302\u8f7d NTFS \u5206\u533a",id:"1-\u6302\u8f7d-ntfs-\u5206\u533a",level:3},{value:"2. ...\u5df2\u88ab\u5360\u7528",id:"2-\u5df2\u88ab\u5360\u7528",level:3},{value:"3.pkg",id:"3pkg",level:3},{value:"Term",id:"term",level:4},{value:"(1) \u663e\u793a\u5305\u5217\u8868",id:"1-\u663e\u793a\u5305\u5217\u8868",level:5},{value:"(2)\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6",id:"2\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6",level:5},{value:"UninstallPKG(\u8981\u94b1\u7684)",id:"uninstallpkg\u8981\u94b1\u7684",level:4},{value:"pkg_uninstaller(\u8c8c\u4f3c\u6ca1\u7528)",id:"pkg_uninstaller\u8c8c\u4f3c\u6ca1\u7528",level:4},{value:"Installation",id:"installation",level:5},{value:"Installing package file",id:"installing-package-file",level:5},{value:"Uninstalling single packages by name.",id:"uninstalling-single-packages-by-name",level:5},{value:"Using internally in package to build uninstaller",id:"using-internally-in-package-to-build-uninstaller",level:5},{value:"4.mac \u6c47\u7f16\u8bed\u8a00",id:"4mac-\u6c47\u7f16\u8bed\u8a00",level:3},{value:"5.\u5b57\u4f53",id:"5\u5b57\u4f53",level:3},{value:"6.\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",id:"6\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8",level:3},{value:"7.\u663e\u793a\u9690\u85cf\u6587\u4ef6",id:"7\u663e\u793a\u9690\u85cf\u6587\u4ef6",level:3}],m={toc:c};function k(e){var a=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"1-\u6302\u8f7d-ntfs-\u5206\u533a"},"1. \u6302\u8f7d NTFS \u5206\u533a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Mac:~ x$ ls /Volumes/\nApp         OS X            Win10 OS\nMac         Tuxera NTFS 2014    \u7528\u6237\nMac:~ x$ diskutil info /Volumes/\u7528\u6237 | grep UUID\n   Volume UUID:              47C13D50-07B9-4D48-AEA0-6B1543F8339E\n   Disk / Partition UUID:    427F3E08-3EFD-4D57-8B8D-4A5C0DD8FDF4\nMac:~ x$ echo "UUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse" | sudo tee -a /etc/fstab\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"UUID=47C13D50-07B9-4D48-AEA0-6B1543F8339E none ntfs rw,auto,nobrowse\n")),(0,r.kt)("h3",{id:"2-\u5df2\u88ab\u5360\u7528"},"2. ...\u5df2\u88ab\u5360\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u2692 xattr -l /Volumes/App/\u3010\u5b89\u88c5\u5305\u3011/Mac/\u786c\u4ef6\u6982\u8981.md                            ~\ncom.apple.FinderInfo:\n00000000  62 72 6F 6B 4D 41 43 53 00 00 00 00 00 00 00 00  |brokMACS........|\n00000010  00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  |................|\n00000020\ncom.apple.TextEncoding: utf-8;134217984\n\u2692 xattr -d com.apple.FinderInfo /Volumes/App/\u3010\u5b89\u88c5\u5305\u3011/Mac/\u786c\u4ef6\u6982\u8981.md\n")),(0,r.kt)("h3",{id:"3pkg"},"3.pkg"),(0,r.kt)("h4",{id:"term"},"Term"),(0,r.kt)("h5",{id:"1-\u663e\u793a\u5305\u5217\u8868"},"(1) \u663e\u793a\u5305\u5217\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pkgutil --pkgs\n")),(0,r.kt)("h5",{id:"2\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6"},"(2)\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pkgutil --files com.Hackintosh.voodoohda287.Voodoo.pkg\n")),(0,r.kt)("h4",{id:"uninstallpkg\u8981\u94b1\u7684"},"UninstallPKG(\u8981\u94b1\u7684)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://www.corecode.at/uninstallpkg/"},"UninstallPKG")),(0,r.kt)("h4",{id:"pkg_uninstaller\u8c8c\u4f3c\u6ca1\u7528"},"pkg_uninstaller(\u8c8c\u4f3c\u6ca1\u7528)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpapis/pkg_uninstaller"},"pkg_uninstaller")),(0,r.kt)("h5",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Installation is as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[sudo] bash < <(curl -sL https://raw.github.com/mpapis/pkg_uninstaller/master/pkg-install)\n")),(0,r.kt)("p",null,"Adding to PATH, for system installation (with sudo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'PATH=$PATH:/opt/pkg_uninstaller' >> /etc/profile\n")),(0,r.kt)("p",null,"Adding PATH when installed as user (without sudo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'PATH=$PATH:$HOME/.pkg_uninstaller' >> $HOME/.bash_profile\n")),(0,r.kt)("p",null,"Note the single quotes are important in both cases."),(0,r.kt)("h5",{id:"installing-package-file"},"Installing package file"),(0,r.kt)("p",null,"Install packages with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pkg-install <package_file.pkg>\n")),(0,r.kt)("p",null,"This will create ",(0,r.kt)("inlineCode",{parentName:"p"},"uninstall_<package_file_pkg>.sh")," in current directory."),(0,r.kt)("p",null,"To uninstall this package just execute ",(0,r.kt)("inlineCode",{parentName:"p"},"./uninstall_<package_file_pkg>.sh"),"."),(0,r.kt)("h5",{id:"uninstalling-single-packages-by-name"},"Uninstalling single packages by name."),(0,r.kt)("p",null,"List available package names (possibly filtering by ","[name]","):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pkg-list [name]\n")),(0,r.kt)("p",null,"Uninstall package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pkg-uninstall <name>\n")),(0,r.kt)("h5",{id:"using-internally-in-package-to-build-uninstaller"},"Using internally in package to build uninstaller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You have to bundle ",(0,r.kt)("inlineCode",{parentName:"li"},"pkg-wrapper")," with your application\nand install it to disk before executing the hook bellow."),(0,r.kt)("li",{parentName:"ul"},"In before installing hook call this script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\npkg-wrapper before "your package name"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In after installing hook call this script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\npkg-wrapper before "your package name" /path/to/uninstaller_name.sh\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In uninstall hook call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n\n/path/to/uninstaller_name.sh\nrm /path/to/uninstaller_name.sh\n")),(0,r.kt)("h3",{id:"4mac-\u6c47\u7f16\u8bed\u8a00"},"4.mac \u6c47\u7f16\u8bed\u8a00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install nasm\n")),(0,r.kt)("h3",{id:"5\u5b57\u4f53"},"5.\u5b57\u4f53"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"~/\u8d44\u6e90\u5e93/Fonts/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/\u8d44\u6e90\u5e93/Fonts/"),(0,r.kt)("li",{parentName:"ul"},"/\u7cfb\u7edf/\u8d44\u6e90\u5e93/Fonts/")))),(0,r.kt)("h3",{id:"6\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8"},"6.\u523b\u5236\u539f\u7248\u5b89\u88c5\u76d8"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"OS X \u7cfb\u7edf\u4e0b:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u78c1\u76d8\u5de5\u5177\uff0c\u9009\u62e9 U \u76d8\uff0c\u8fdb\u884c\u5206\u533a\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u4e3a\u4e00\u4e2a 300MB \u5de6\u53f3\u7684\u540d\u4e3a EFI \u7684 FAT \u7c7b\u578b\u7684\u76d8\uff0c\u5269\u4e0b\u7684\u90fd\u4e3a OS X \u6269\u5c55\uff0c\u547d\u540d\u4e3a Install OS X El Capitan"),(0,r.kt)("li",{parentName:"ul"},"\u53f3\u51fb Install OS X El Capitan.app -> \u663e\u793a\u5305\u5185\u5bb9 -> Contents -> Resources ->\ncreateinstallmedia , \u590d\u5236\u8be5\u6587\u4ef6\u81f3\u684c\u9762"),(0,r.kt)("li",{parentName:"ul"},"\u6253\u5f00\u7ec8\u7aef")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"diskutil list  ### \u5217\u51fa\u78c1\u76d8\nsudo su\n/Users/x/Desktop/createinstallmedia --volume /Volumes/Install/ --applicationpath /Applications/Install\\ OS\\ X\\ El\\ Capitan.app [--force]\n")),(0,r.kt)("p",null,"\u5f00\u59cb\u5199\u5165\u955c\u50cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u523b\u5f55\u5b8c\u6bd5")),(0,r.kt)("h3",{id:"7\u663e\u793a\u9690\u85cf\u6587\u4ef6"},"7.\u663e\u793a\u9690\u85cf\u6587\u4ef6"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("del",{parentName:"p"},"\u663e\u793a\u9690\u85cf\u6587\u4ef6"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("del",{parentName:"p"},"\u6062\u590d"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"defaults write com.apple.finder AppleShowAllFiles -boolean false ; killall Finder\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"new")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728 macOS 10.12 \u4e2d\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7\u5feb\u6377\u952e\u6765\u5f00\u5173")))}k.isMDXComponent=!0},3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return k}});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),o=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=o(t),k=l,g=m["".concat(p,".").concat(k)]||m[k]||c[k]||r;return t?n.createElement(g,i(i({ref:a},u),{},{components:t})):n.createElement(g,i({ref:a},u))}));function k(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:l,i[1]=s;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);