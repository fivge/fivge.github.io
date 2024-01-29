"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3130],{9667:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>a,toc:()=>i});var n=l(5893),r=l(1151);const t={title:"mysql\u66f4\u6539root\u5bc6\u7801",date:new Date("2017-07-08T22:51:09.000Z"),tags:["Server","mysql"]},o=void 0,a={id:"CloudNative/middleware/mysql\u66f4\u6539root\u5bc6\u7801",title:"mysql\u66f4\u6539root\u5bc6\u7801",description:"### \u95ee\u9898\u63cf\u8ff0",source:"@site/docs/CloudNative/middleware/mysql\u66f4\u6539root\u5bc6\u7801.md",sourceDirName:"CloudNative/middleware",slug:"/CloudNative/middleware/mysql\u66f4\u6539root\u5bc6\u7801",permalink:"/docs/CloudNative/middleware/mysql\u66f4\u6539root\u5bc6\u7801",draft:!1,unlisted:!1,tags:[{label:"Server",permalink:"/docs/tags/server"},{label:"mysql",permalink:"/docs/tags/mysql"}],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{title:"mysql\u66f4\u6539root\u5bc6\u7801",date:"2017-07-08T22:51:09.000Z",tags:["Server","mysql"]},sidebar:"tutorialSidebar",previous:{title:"mongo",permalink:"/docs/CloudNative/middleware/mongo"},next:{title:"nginx",permalink:"/docs/CloudNative/middleware/nginx"}},d={},i=[{value:"\u95ee\u9898\u63cf\u8ff0",id:"\u95ee\u9898\u63cf\u8ff0",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:3},{value:"1. \u66f4\u65b0mysql\u5bc6\u7801",id:"1-\u66f4\u65b0mysql\u5bc6\u7801",level:4},{value:"2. \u8fdb\u5165\u5b89\u5168\u6a21\u5f0f",id:"2-\u8fdb\u5165\u5b89\u5168\u6a21\u5f0f",level:4},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.h3,{id:"\u95ee\u9898\u63cf\u8ff0",children:"\u95ee\u9898\u63cf\u8ff0"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u5728\u5c1d\u8bd5\u767b\u9646mysql\u65f6,\u65e0\u6cd5\u767b\u9646,\u63d0\u793a:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"ERROR 1045 (28000): Access denied for user 'root'@'localhost' (using password: YES)\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://ws4.sinaimg.cn/large/006tNc79ly1fhcv7tb680j30rp02eaab.jpg",alt:""})}),"\n",(0,n.jsxs)(s.p,{children:["\u82e5\u4e0d\u52a0",(0,n.jsx)(s.code,{children:"-p"}),"\u53c2\u6570,",(0,n.jsx)(s.code,{children:"using password: NO"})]}),"\n",(0,n.jsx)(s.p,{children:"\u800c\u5176\u4ed6\u8d26\u6237\u53ef\u4ee5\u767b\u9646"}),"\n",(0,n.jsx)(s.p,{children:"\u6545\u66f4\u6539root\u5bc6\u7801"}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.h3,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"1-\u66f4\u65b0mysql\u5bc6\u7801",children:"1. \u66f4\u65b0mysql\u5bc6\u7801"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"\u279c  ~ mysqladmin -u root password  1234\nmysqladmin: connect to server at 'localhost' failed\nerror: 'Access denied for user 'root'@'localhost' (using password: NO)'\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:"https://ws2.sinaimg.cn/large/006tNc79ly1fhcvf69vxwj30mc02eglw.jpg",alt:""})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"\u5931\u8d25"})}),"\n",(0,n.jsx)(s.h4,{id:"2-\u8fdb\u5165\u5b89\u5168\u6a21\u5f0f",children:"2. \u8fdb\u5165\u5b89\u5168\u6a21\u5f0f"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"systemctl stop mariadb\nmysqld_safe --skip-grant-tables    ### \u6301\u7eed\u8fd0\u884c\nmysql -u root\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-mysql",children:"UPDATE mysql.user SET Password=PASSWORD('password') WHERE User='root';   ### password \u5373\u4e3a\u8bbe\u7f6e\u7684\u5bc6\u7801\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-shell",children:"systemctl start mariadb\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u5bc6\u7801\u66f4\u6539\u6210\u529f"}),"\n",(0,n.jsx)(s.h3,{id:"\u53c2\u8003\u94fe\u63a5",children:"\u53c2\u8003\u94fe\u63a5"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://stackoverflow.com/questions/21944936/error-1045-28000-access-denied-for-user-rootlocalhost-using-password-y",children:"https://stackoverflow.com/questions/21944936/error-1045-28000-access-denied-for-user-rootlocalhost-using-password-y"})}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,s,l)=>{l.d(s,{Z:()=>a,a:()=>o});var n=l(7294);const r={},t=n.createContext(r);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);