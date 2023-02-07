"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6109],{7547:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return g},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c}});var a=t(3117),l=t(102),r=(t(7294),t(3905)),i=["components"],p={},o=void 0,s={unversionedId:"OS/macos/OS X/pkg (2)",id:"OS/macos/OS X/pkg (2)",title:"pkg (2)",description:"(1) \u663e\u793a\u5305\u5217\u8868",source:"@site/docs/OS/macos/OS X/pkg (2).md",sourceDirName:"OS/macos/OS X",slug:"/OS/macos/OS X/pkg (2)",permalink:"/docs/OS/macos/OS X/pkg (2)",draft:!1,tags:[],version:"current",lastUpdatedAt:1663070314,formattedLastUpdatedAt:"Sep 13, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ntfs",permalink:"/docs/OS/macos/OS X/ntfs"},next:{title:"pkg",permalink:"/docs/OS/macos/OS X/pkg"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"Installing package file",id:"installing-package-file",level:2},{value:"Uninstalling single packages by name.",id:"uninstalling-single-packages-by-name",level:2},{value:"Using internally in package to build uninstaller",id:"using-internally-in-package-to-build-uninstaller",level:2}],k={toc:c};function g(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"#1.Term\n###(1) \u663e\u793a\u5305\u5217\u8868\npkgutil --pkgs\n###(2)\u5217\u51fa\u6240\u5173\u8054\u7684\u6587\u4ef6\npkgutil --files com.Hackintosh.voodoohda287.Voodoo.pkg\n##2.UninstallPKG(\u8981\u94b1\u7684)\n",(0,r.kt)("a",{parentName:"p",href:"http://www.corecode.at/uninstallpkg/"},"UninstallPKG"),"\n#3.pkg_uninstaller(\u8c8c\u4f3c\u6ca1\u7528)\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpapis/pkg_uninstaller"},"pkg_uninstaller")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Installation is as simple as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[sudo] bash < <(curl -sL https://raw.github.com/mpapis/pkg_uninstaller/master/pkg-install)\n")),(0,r.kt)("p",null,"Adding to PATH, for system installation (with sudo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo 'PATH=$PATH:/opt/pkg_uninstaller' >> /etc/profile\n")),(0,r.kt)("p",null,"Adding PATH when installed as user (without sudo):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"echo 'PATH=$PATH:$HOME/.pkg_uninstaller' >> $HOME/.bash_profile\n")),(0,r.kt)("p",null,"Note the single quotes are important in both cases."),(0,r.kt)("h2",{id:"installing-package-file"},"Installing package file"),(0,r.kt)("p",null,"Install packages with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pkg-install <package_file.pkg>\n")),(0,r.kt)("p",null,"This will create ",(0,r.kt)("inlineCode",{parentName:"p"},"uninstall_<package_file_pkg>.sh")," in current directory."),(0,r.kt)("p",null,"To uninstall this package just execute ",(0,r.kt)("inlineCode",{parentName:"p"},"./uninstall_<package_file_pkg>.sh"),"."),(0,r.kt)("h2",{id:"uninstalling-single-packages-by-name"},"Uninstalling single packages by name."),(0,r.kt)("p",null,"List available package names (possibly filtering by ","[name]","):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pkg-list [name]\n")),(0,r.kt)("p",null,"Uninstall package:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pkg-uninstall <name>\n")),(0,r.kt)("h2",{id:"using-internally-in-package-to-build-uninstaller"},"Using internally in package to build uninstaller"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"You have to bundle ",(0,r.kt)("inlineCode",{parentName:"p"},"pkg-wrapper")," with your application\nand install it to disk before executing the hook bellow.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In before installing hook call this script:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#!/bin/bash\n\npkg-wrapper before "your package name"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In after installing hook call this script:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#!/bin/bash\n\npkg-wrapper before "your package name" /path/to/uninstaller_name.sh\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In uninstall hook call:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!/bin/bash\n\n/path/to/uninstaller_name.sh\nrm /path/to/uninstaller_name.sh\n")))}g.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=s(t),g=l,m=k["".concat(o,".").concat(g)]||k[g]||c[g]||r;return t?a.createElement(m,i(i({ref:n},u),{},{components:t})):a.createElement(m,i({ref:n},u))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"}}]);