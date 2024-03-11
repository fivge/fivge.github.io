"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[568],{5312:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>i});var o=t(5893),s=t(1151);const c={},a="nc",r={id:"CloudNative/term/nc",title:"nc",description:"nc -- arbitrary TCP and UDP connections and listens",source:"@site/docs/CloudNative/term/nc.md",sourceDirName:"CloudNative/term",slug:"/CloudNative/term/nc",permalink:"/docs/CloudNative/term/nc",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710142821,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mycli",permalink:"/docs/CloudNative/term/mycli"},next:{title:"net-tools",permalink:"/docs/CloudNative/term/net-tools"}},l={},i=[{value:"0x01 \u5b89\u88c5",id:"0x01-\u5b89\u88c5",level:4},{value:"0x02 \u4f7f\u7528",id:"0x02-\u4f7f\u7528",level:4},{value:"0x03 example",id:"0x03-example",level:4},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"nc",children:"nc"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"nc -- arbitrary TCP and UDP connections and listens"}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"0x01-\u5b89\u88c5",children:"0x01 \u5b89\u88c5"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"netcat-openbsd"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://packages.debian.org/sid/netcat-openbsd",children:"https://packages.debian.org/sid/netcat-openbsd"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### archlinux\n# https://archlinux.org/packages/community/x86_64/openbsd-netcat/\n### OpenSUSE\nzypper install netcat-openbsd\n"})}),"\n",(0,o.jsx)(n.h4,{id:"0x02-\u4f7f\u7528",children:"0x02 \u4f7f\u7528"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'# To open a TCP connection to port 42 of host.example.com, using port 31337 as the source port, with a timeout of 5 seconds:\nnc -p 31337 -w 5 host.example.com 42\n\n# To open a UDP connection to port 53 of host.example.com:\nnc -u host.example.com 53\n\n# To open a TCP connection to port 42 of host.example.com using 10.1.2.3 as the IP for the local end of the connection:\nnc -s 10.1.2.3 host.example.com 42\n\n# To create and listen on a UNIX-domain stream socket:\nnc -lU /var/tmp/dsocket\n\n# To connect to port 42 of host.example.com via an HTTP proxy at 10.2.3.4, port 8080. This example could also be used by ssh(1); see the ProxyCommand directive in ssh_config(5) for more information.\nnc -x10.2.3.4:8080 -Xconnect host.example.com 42\n\n# The same example again, this time enabling proxy authentication with username "ruser" if the proxy requires it:\nnc -x10.2.3.4:8080 -Xconnect -Pruser host.example.com 42\n\n# To choose the source IP for the testing using the -s option\nnc -zv -s source_IP target_IP Port\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u67e5\u770b\u7aef\u53e3\u53f7\u5f00\u542f\u60c5\u51b5"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"### UDP\nnetstat -nupl\n### TCP\nnetstat -ntpl\n###\nlsof -i:80\n"})}),"\n",(0,o.jsx)(n.h4,{id:"0x03-example",children:"0x03 example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### server\u5f00\u542fTCP\u7aef\u53e3\nnc -l -p 22\n### server\u5f00\u542fUDP\u7aef\u53e3\nnc -ul -p 123\n### server\u67e5\u770bTCP\u5f00\u542f\u60c5\u51b5\nnetstat -ntpl\n### server\u67e5\u770bUDP\u5f00\u542f\u60c5\u51b5\nnetstat -nupl\n### h1/h2\u68c0\u9a8cserver\u7aef\u53e3\u8fde\u901a\u6027\n### TCP\nnc -vz 10.0.0.3 22\n### UDP\nnc -u -vz 10.0.0.1 123\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"telnet 10.0.0.1 344\n### \u5f00\u542fTCP\u7aef\u53e3\nnc -l -p 344\nnc 10.0.0.1 344\n### \u5f00\u542fUDP\u7aef\u53e3\nnc -ul -p 344\n### \u68c0\u6d4b\u7aef\u53e3\u4fe1\u606f\nnc -v 10.0.0.1 344\n-z => \u626b\u63cf\u6a21\u5f0f\u3002\u4e0d\u505a\u8f93\u5165\u8f93\u51fa\u3002\n\n\u53ef\u4ee5\u4e3a\u7aef\u53e3\u53f7,\u4e5f\u53ef\u4ee5\u4e3a\u8303\u56f4,\u5982 341-348\n"})}),"\n",(0,o.jsx)(n.h4,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://linux.cn/article-9190-1.html",children:"https://linux.cn/article-9190-1.html"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var o=t(7294);const s={},c=o.createContext(s);function a(e){const n=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(c.Provider,{value:n},e.children)}}}]);