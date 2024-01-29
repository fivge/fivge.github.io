"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[126],{188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var s=t(5893),i=t(1151);const r={},d=void 0,l={id:"CloudNative/term/iproute2",title:"iproute2",description:"ipreote2",source:"@site/docs/CloudNative/term/iproute2.md",sourceDirName:"CloudNative/term",slug:"/CloudNative/term/iproute2",permalink:"/docs/CloudNative/term/iproute2",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"history",permalink:"/docs/CloudNative/term/history"},next:{title:"C++ with Libcurl",permalink:"/docs/CloudNative/term/libcurl"}},c={},a=[{value:"ipreote2",id:"ipreote2",level:3},{value:"ip",id:"ip",level:4},{value:"example",id:"example",level:5},{value:"ss",id:"ss",level:4},{value:"\u9644\u6ce8",id:"\u9644\u6ce8",level:4},{value:"\u67e5\u770b ip",id:"\u67e5\u770b-ip",level:4}];function o(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"ipreote2",children:"ipreote2"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u7528\u9014"}),(0,s.jsx)(n.th,{children:"net-tool\uff08\u88ab\u6dd8\u6c70\uff09"}),(0,s.jsx)(n.th,{children:"iproute2"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u5730\u5740\u548c\u94fe\u8def\u914d\u7f6e"}),(0,s.jsx)(n.td,{children:"ifconfig"}),(0,s.jsx)(n.td,{children:"ip addr, ip link"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u8def\u7531\u8868"}),(0,s.jsx)(n.td,{children:"route"}),(0,s.jsx)(n.td,{children:"ip route"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u90bb\u5c45"}),(0,s.jsx)(n.td,{children:"arp"}),(0,s.jsx)(n.td,{children:"ip neigh"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"VLAN"}),(0,s.jsx)(n.td,{children:"vconfig"}),(0,s.jsx)(n.td,{children:"ip link"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u96a7\u9053"}),(0,s.jsx)(n.td,{children:"iptunnel"}),(0,s.jsx)(n.td,{children:"ip tunnel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u7ec4\u64ad"}),(0,s.jsx)(n.td,{children:"ipmaddr"}),(0,s.jsx)(n.td,{children:"ip maddr"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\u7edf\u8ba1"}),(0,s.jsx)(n.td,{children:"netstat"}),(0,s.jsx)(n.td,{children:"ss"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ip",children:"ip"}),"\n",(0,s.jsxs)(n.p,{children:["\u66ff\u4ee3 ",(0,s.jsx)(n.code,{children:"ifconfig"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\u279c  ~ cheat ip\n# Display all interfaces with addresses\nip addr\n\n# Take down / up the wireless adapter\nip link set dev wlan0 {up|down}\n\n# Set a static IP and netmask\nip addr add 192.168.1.100/32 dev eth0\n\n# Remove a IP from an interface\nip addr del 192.168.1.100/32 dev eth0\n\n# Remove all IPs from an interface\nip address flush dev eth0\n\n# Display all routes\nip route\n\n# Display all routes for IPv6\nip -6 route\n\n# Add default route via gateway IP\nip route add default via 192.168.1.1\n\n# Add route via interface\nip route add 192.168.0.0/24 dev eth0\n\n# Change your mac address\nip link set dev eth0 address aa:bb:cc:dd:ee:ff\n\n# View neighbors (using ARP and NDP)\nip neighbor show\n"})}),"\n",(0,s.jsx)(n.h5,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip link\nip link set eth0 down\nip link set eth0 up\nip addr add 172.20.41.198/24 dev eth0\nip route add default via 172.20.41.254\necho 'nameserver 211.87.191.66' > /etc/resolv.conf\necho 'nameserver 211.87.191.77' >> /etc/resolv.conf\n\niw dev wlan0 scan | less\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip addr flush dev interface\nip route flush dev interface\nip link set interface down\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip monitor all\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://zh.wikipedia.org/wiki/%E6%97%A0%E7%B1%BB%E5%88%AB%E5%9F%9F%E9%97%B4%E8%B7%AF%E7%94%B1",children:"https://zh.wikipedia.org/wiki/\u65e0\u7c7b\u522b\u57df\u95f4\u8def\u7531"})}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u52a8\u8fde\u63a5\u5230\u5df2\u77e5\u7f51\u7edc\n\u8b66\u544a: \u4e0d\u8981\u540c\u65f6\u4f7f\u7528\u8be5\u65b9\u6848\u548c\u5df2\u542f\u7528\u7684\u65e0\u7ebf\u8fde\u63a5\u914d\u7f6e\u6587\u4ef6 profile, \u6bd4\u5982 netctl enable profile.\n\u5b89\u88c5 wpa_actiond, netctl-auto \u8981\u7528\u5230\u5b83\uff1a"}),"\n",(0,s.jsx)(n.h4,{id:"ss",children:"ss"}),"\n",(0,s.jsxs)(n.p,{children:["\u66ff\u4ee3 ",(0,s.jsx)(n.code,{children:"netstat"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ss\nUtility to investigate sockets\n\nArgs\n-4/-6 list ipv4/ipv6 sockets\n-n numeric addresses instead of hostnames\n-l list listing sockets\n-u/-t/-x list udp/tcp/unix sockets\n-p Show process(es) that using socket\n\n# show all listing tcp sockets including the corresponding process\nss -tlp\n\n# show all sockets connecting to 192.168.2.1 on port 80\nss -t dst 192.168.2.1:80\n\n# show all ssh related connection\nss -t state established '( dport = :ssh or sport = :ssh )'\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u67e5\u770b\u5f53\u524d\u670d\u52a1\u5668\u7684\u7f51\u7edc\u8fde\u63a5\u7edf\u8ba1\nss -s\n# \u67e5\u770b\u6240\u6709\u6253\u5f00\u7684\u7f51\u7edc\u7aef\u53e3\nss -l\nss -pl ### \u5217\u51fa\u5177\u4f53\u7684\u7a0b\u5e8f\u540d\u79f0\n# \u67e5\u770b\u6240\u6709\u7684socket\u8fde\u63a5\nss -a\nss -ta ### \u53ea\u60f3\u67e5\u770bTCP sockets\nss -ua ### \u53ea\u60f3\u67e5\u770bUDP sockets\nss -wa ### \u53ea\u60f3\u67e5\u770bRAW sockets\nss -xa ### \u53ea\u60f3\u67e5\u770bUNIX sockets\n# \u67e5\u770bTCP\u76f8\u5173\u5b9a\u65f6\u5668\u4fe1\u606f\nss -to\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u9644\u6ce8",children:"\u9644\u6ce8"}),"\n",(0,s.jsx)(n.h4,{id:"\u67e5\u770b-ip",children:"\u67e5\u770b ip"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl icanhazip.com\ncurl ifconfig.me\ncurl curlmyip.com\ncurl ip.appspot.com\ncurl ipinfo.io/ip\ncurl ipecho.net/plain\ncurl www.trackip.net/i\n### json\ncurl ipinfo.io/json\ncurl ifconfig.me/all.json\ncurl www.trackip.net/ip?json\n### xml\ncurl ifconfig.me/all.xml\n### curl \u5f97\u5230\u6240\u6709 IP \u7ec6\u8282 \uff08\u6316\u6398\u673a\uff09\ncurl ifconfig.me/all\n### \u4f7f\u7528 DYDNS \uff08\u5f53\u4f60\u4f7f\u7528 DYDNS \u670d\u52a1\u65f6\u6709\u7528\uff09\ncurl -s 'http://checkip.dyndns.org' | sed 's/.*Current IP Address: \\([0-9\\.]*\\).*/\\1/g'\ncurl -s http://checkip.dyndns.org/ | grep -o \"[[:digit:].]\\+\"\n### \u4f7f\u7528 Wget \u4ee3\u66ff Curl\nwget http://ipecho.net/plain -O - -q ; echo\nwget http://observebox.com/ip -O - -q ; echo\n### \u4f7f\u7528 host \u548c dig \u547d\u4ee4\n### \u5982\u679c\u6709\u7684\u8bdd\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 host \u548c dig \u547d\u4ee4\u3002\nhost -t a dartsclink.com | sed 's/.*has address //'\ndig +short myip.opendns.com @resolver1.opendns.com\n### bash \u811a\u672c\u793a\u4f8b:\n#!/bin/bash\nPUBLIC_IP=`wget http://ipecho.net/plain -O - -q ; echo`\necho $PUBLIC_IP\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"pacman -S wpa_actiond"}),"\n",(0,s.jsx)(n.p,{children:"\u6fc0\u6d3b netctl-auto \u670d\u52a1\uff0c\u5b83\u4f1a\u81ea\u52a8\u8fde\u63a5\u5230\u5df2\u77e5\u7f51\u7edc\uff0c\u5e76\u4e14\u51fa\u8272\u5730\u5904\u7406\u91cd\u65b0\u8fde\u63a5\u4e8e\u6f2b\u6e38\uff1a"}),"\n",(0,s.jsxs)(n.p,{children:["systemctl enable ",(0,s.jsx)(n.a,{href:"mailto:netctl-auto@interface_name.service",children:"netctl-auto@interface_name.service"})]}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u793a: Netctl \u4ea6\u63d0\u4f9b netctl-ifplugd, \u5b83\u53ef\u4ee5\u548c netctl-auto \u540c\u65f6\u4f7f\u7528\uff0c\u4ee5\u5904\u7406\u81ea\u52a8\u6709\u7ebf\u8fde\u63a5\u3002"}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>d});var s=t(7294);const i={},r=s.createContext(i);function d(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);