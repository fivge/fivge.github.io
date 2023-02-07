"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6420],{6620:function(n,e,t){t.r(e),t.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(3117),o=t(102),a=(t(7294),t(3905)),c=["components"],l={},i=void 0,s={unversionedId:"OS/archlinux/install",id:"OS/archlinux/install",title:"install",description:"",source:"@site/docs/OS/archlinux/install.md",sourceDirName:"OS/archlinux",slug:"/OS/archlinux/install",permalink:"/docs/OS/archlinux/install",draft:!1,tags:[],version:"current",lastUpdatedAt:1663070314,formattedLastUpdatedAt:"Sep 13, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"desktop",permalink:"/docs/OS/archlinux/desktop"},next:{title:"pacman",permalink:"/docs/OS/archlinux/pacman"}},u={},p=[],m={toc:p};function f(n){var e=n.components,t=(0,o.Z)(n,c);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wifi-menu\nping 163.com\nlsblk -l\nmount /dev/sda5 /mnt\nmkdir -p /mnt/boot\nmount /dev/sdb1 /mnt/boot\n\nvim /etc/pacman.d/mirrorlist\n/China\n2dd\nCrrl + o\np\ndG\n\npacman -Syy\npacstrap -i /mnt base base-devel\ngenfstab -U /mnt >> /mnt/etc/fstab\n\narch-chroot /mnt /bin/bash\nln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\nhwclock --systohc --utc\n\nnano /etc/locale.gen\nen_US.UTF-8 UTF-8\nzh_CN.UTF-8 UTF-8\nzh_TW.UTF-8 UTF-8\n\nlocale-gen\necho LANG=en_US.UTF-8 > /etc/locale.conf\necho myhostname > /etc/hostname\n\nvim /etc/hosts\n127.0.0.1   localhost.localdomain   localhost\n::1     localhost.localdomain   localhost\n127.0.1.1   myhostname.localdomain  myhostname\n\nInternet\n\npasswd\nexit\nreboot\n")))}f.isMDXComponent=!0},3905:function(n,e,t){t.d(e,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var i=r.createContext({}),s=function(n){var e=r.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},u=function(n){var e=s(n.components);return r.createElement(i.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,i=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=s(t),f=o,d=m["".concat(i,".").concat(f)]||m[f]||p[f]||a;return t?r.createElement(d,c(c({ref:e},u),{},{components:t})):r.createElement(d,c({ref:e},u))}));function f(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,c=new Array(a);c[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l.mdxType="string"==typeof n?n:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);