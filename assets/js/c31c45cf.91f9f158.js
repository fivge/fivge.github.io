"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3534],{7607:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var l=r(5893),s=r(1151);const t={},i="Start",d={id:"OS/vm/init",title:"Start",description:"win11 + virtualbox|vmware + opensuse + vscode",source:"@site/docs/OS/vm/init.md",sourceDirName:"OS/vm",slug:"/OS/vm/init",permalink:"/docs/OS/vm/init",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713500218,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"VirtualBox",permalink:"/docs/OS/vm/VirtualBox"},next:{title:"vagrant",permalink:"/docs/OS/vm/vagrant"}},o={},a=[{value:"0x00 \u5b89\u88c5\u914d\u7f6e\u865a\u62df\u673a",id:"0x00-\u5b89\u88c5\u914d\u7f6e\u865a\u62df\u673a",level:2},{value:"virtualbox",id:"virtualbox",level:3},{value:"vmware",id:"vmware",level:3},{value:"0x01 \u8054\u901a\u5bbf\u4e3b\u673a\u548c\u865a\u62df\u673a",id:"0x01-\u8054\u901a\u5bbf\u4e3b\u673a\u548c\u865a\u62df\u673a",level:2},{value:"\u4f7f\u7528\u5bbf\u4e3b\u673a\u4ee3\u7406",id:"\u4f7f\u7528\u5bbf\u4e3b\u673a\u4ee3\u7406",level:3},{value:"0x02 \u521d\u59cb\u5316",id:"0x02-\u521d\u59cb\u5316",level:2},{value:"\u521b\u5efa\u7528\u6237",id:"\u521b\u5efa\u7528\u6237",level:5},{value:"sudo",id:"sudo",level:5},{value:"proxy",id:"proxy",level:5},{value:"\u955c\u50cf",id:"\u955c\u50cf",level:5},{value:"apps",id:"apps",level:5},{value:"0x03 \u5f00\u53d1\u73af\u5883\u642d\u5efa",id:"0x03-\u5f00\u53d1\u73af\u5883\u642d\u5efa",level:2},{value:"git",id:"git",level:3},{value:"node",id:"node",level:3},{value:"0x04 \u5176\u4ed6\u914d\u7f6e",id:"0x04-\u5176\u4ed6\u914d\u7f6e",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"start",children:"Start"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"win11 + virtualbox|vmware + opensuse + vscode"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"0x00-\u5b89\u88c5\u914d\u7f6e\u865a\u62df\u673a",children:"0x00 \u5b89\u88c5\u914d\u7f6e\u865a\u62df\u673a"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://get.opensuse.org/tumbleweed/",children:"https://get.opensuse.org/tumbleweed/"})}),"\n",(0,l.jsx)(n.h3,{id:"virtualbox",children:"virtualbox"}),"\n",(0,l.jsx)(n.h3,{id:"vmware",children:"vmware"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"1.\t\u2060in the boot menu, edit the default boot entry\n2.\t\u2060append `init=/bin/sh` to the `linux` line\n3.\t\u2060boot with Ctrl+X and wait for the shell\n4.\t\u2060`mount -o remount,rw /`\n5.\t\u2060`passwd`\n6.\t\u2060Set a new passphrase and reset (restart) the machine\n"})}),"\n",(0,l.jsx)(n.h2,{id:"0x01-\u8054\u901a\u5bbf\u4e3b\u673a\u548c\u865a\u62df\u673a",children:"0x01 \u8054\u901a\u5bbf\u4e3b\u673a\u548c\u865a\u62df\u673a"}),"\n",(0,l.jsx)(n.h3,{id:"\u4f7f\u7528\u5bbf\u4e3b\u673a\u4ee3\u7406",children:"\u4f7f\u7528\u5bbf\u4e3b\u673a\u4ee3\u7406"}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u770b\u8def\u7531"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ip route\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"default via 10.0.2.2 dev enp0s3 proto dhcp src 10.0.2.15 metric 101\n10.0.0.0/24 dev enp0s8 proto kernel scope link src 10.0.0.3 metric 100\n10.0.2.0/24 dev enp0s3 proto kernel scope link src 10.0.2.15 metric 101\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u914d\u7f6e\u4ee3\u7406"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'export all_proxy="http://10.0.2.2:23333"\n# \u53d6\u6d88\u914d\u7f6e\nunset all_proxy\n'})}),"\n",(0,l.jsx)(n.h2,{id:"0x02-\u521d\u59cb\u5316",children:"0x02 \u521d\u59cb\u5316"}),"\n",(0,l.jsx)(n.h5,{id:"\u521b\u5efa\u7528\u6237",children:"\u521b\u5efa\u7528\u6237"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"passwd -l root\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"useradd -m x\npasswd x\n"})}),"\n",(0,l.jsx)(n.h5,{id:"sudo",children:"sudo"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"visudo\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"#includedir /etc/sudoers.d\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"/etc/sudoers/default"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"x ALL=(ALL) NOPASSWD:ALL\n"})}),"\n",(0,l.jsx)(n.h5,{id:"proxy",children:"proxy"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"x@localhost:~> ip route show\n\ndefault via 10.0.3.2 dev ens33 proto dhcp src 10.0.3.3 metric 100\n10.0.2.0/24 dev ens37 proto kernel scope link src 10.0.2.1 metric 101\n10.0.3.0/24 dev ens33 proto kernel scope link src 10.0.3.3 metric 100\n\nx@localhost:~> ip a\n\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n    inet 127.0.0.1/8 scope host lo\n       valid_lft forever preferred_lft forever\n    inet6 ::1/128 scope host noprefixroute\n       valid_lft forever preferred_lft forever\n2: ens33: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:66:c3:b3 brd ff:ff:ff:ff:ff:ff\n    altname enp2s1\n    inet 10.0.3.3/24 brd 10.0.3.255 scope global dynamic noprefixroute ens33\n       valid_lft 1292sec preferred_lft 1292sec\n    inet6 fe80::acd8:e694:ab17:b145/64 scope link noprefixroute\n       valid_lft forever preferred_lft forever\n3: ens37: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000\n    link/ether 00:0c:29:66:c3:bd brd ff:ff:ff:ff:ff:ff\n    altname enp2s5\n    inet 10.0.2.1/24 brd 10.0.2.255 scope global dynamic noprefixroute ens37\n       valid_lft 77792sec preferred_lft 77792sec\n    inet6 fe80::88a4:9e1a:d61f:d241/64 scope link noprefixroute\n       valid_lft forever preferred_lft forever\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'export all_proxy="http://10.0.3.1:23333"\n'})}),"\n",(0,l.jsx)(n.h5,{id:"\u955c\u50cf",children:"\u955c\u50cf"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/help/opensuse/",children:"https://mirrors.tuna.tsinghua.edu.cn/help/opensuse/"})}),"\n",(0,l.jsx)(n.h5,{id:"apps",children:"apps"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"zsh"}),"\n",(0,l.jsx)(n.li,{children:"git"}),"\n",(0,l.jsx)(n.li,{children:"oh-my-zsh"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"0x03-\u5f00\u53d1\u73af\u5883\u642d\u5efa",children:"0x03 \u5f00\u53d1\u73af\u5883\u642d\u5efa"}),"\n",(0,l.jsx)(n.h3,{id:"git",children:"git"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"GCM"})," ",(0,l.jsx)(n.code,{children:"GPG"})," ",(0,l.jsx)(n.code,{children:"pass"})]}),"\n",(0,l.jsx)(n.h3,{id:"node",children:"node"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# nodejs\nsudo zypper install nodejs21\n# yarn\nsudo npm --proxy http://10.0.2.2:23333  install -g corepack\ncorepack enable\nyarn -v\n"})}),"\n",(0,l.jsx)(n.h2,{id:"0x04-\u5176\u4ed6\u914d\u7f6e",children:"0x04 \u5176\u4ed6\u914d\u7f6e"})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var l=r(7294);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);