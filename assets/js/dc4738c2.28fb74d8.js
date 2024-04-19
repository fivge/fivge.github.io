"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2826],{2559:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=l(5893),o=l(1151);const t={},c=void 0,r={id:"CloudNative/devops/docker-with-mysql",title:"docker-with-mysql",description:"Docker",source:"@site/docs/CloudNative/devops/docker-with-mysql.md",sourceDirName:"CloudNative/devops",slug:"/CloudNative/devops/docker-with-mysql",permalink:"/docs/CloudNative/devops/docker-with-mysql",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713494798,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker Compose",permalink:"/docs/CloudNative/devops/docker-compose"},next:{title:"docker",permalink:"/docs/CloudNative/devops/docker"}},i={},d=[{value:"Docker",id:"docker",level:3},{value:"mysql",id:"mysql",level:3},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:6},{value:"\u5bb9\u5668\u5185\u8bbf\u95ee",id:"\u5bb9\u5668\u5185\u8bbf\u95ee",level:6},{value:"mycli",id:"mycli",level:3},{value:"\u8fde\u63a5\u6570\u636e\u5e93",id:"\u8fde\u63a5\u6570\u636e\u5e93",level:6},{value:"\u6548\u679c\u56fe",id:"\u6548\u679c\u56fe",level:6},{value:"Connector to asp.net",id:"connector-to-aspnet",level:3},{value:"lamp",id:"lamp",level:3},{value:"mysql error",id:"mysql-error",level:3},{value:"mysql",id:"mysql-1",level:3},{value:"\u66f4\u6539\u5bc6\u7801",id:"\u66f4\u6539\u5bc6\u7801",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h6:"h6",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://yeasy.gitbooks.io/docker_practice/content/introduction/what.html",children:"https://yeasy.gitbooks.io/docker_practice/content/introduction/what.html"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker search ubuntu   ### \u67e5\u627e\u955c\u50cf\ndocker pull ubuntu     ### \u5b89\u88c5\u955c\u50cf\ndocker images / docker image ls    ### \u5217\u51fa\u955c\u50cf\ndocker image rm +id    ### \u5220\u9664\u955c\u50cf\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run <image id>  -i -t /bin/bash  # -i \u540c\u6b65\u8f93\u5165  -t \u540c\u6b65\u8f93\u51fa -d \u6301\u7eed\u8fd0\u884c\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mysql",children:"mysql"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"######\u5b89\u88c5"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker pull hub.c.163.com/library/mysql:latest\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h6,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mkdir -p ~/mysql/data\n\ndocker run -p 3306:3306 --name mysql -v ~/mysql/data/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -d hub.c.163.com/library/mysql:latest\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.jianshu.com/p/d9b6bbc7fd77",children:"https://www.jianshu.com/p/d9b6bbc7fd77"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h6,{id:"\u5bb9\u5668\u5185\u8bbf\u95ee",children:"\u5bb9\u5668\u5185\u8bbf\u95ee"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker exec -it mysql bash\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mycli",children:"mycli"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A Terminal Client for MySQL with AutoCompletion and Syntax Highlighting."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"brew install mycli\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/dbcli/mycli",children:"https://github.com/dbcli/mycli"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h6,{id:"\u8fde\u63a5\u6570\u636e\u5e93",children:"\u8fde\u63a5\u6570\u636e\u5e93"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"mycli -h localhost -p 3306 -u root -p 1234\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h6,{id:"\u6548\u679c\u56fe",children:"\u6548\u679c\u56fe"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"connector-to-aspnet",children:"Connector to asp.net"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://dev.mysql.com/downloads/connector/net/",children:"https://dev.mysql.com/downloads/connector/net/"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://dev.mysql.com/doc/connector-net/en/connector-net-installation-unix.html",children:"https://dev.mysql.com/doc/connector-net/en/connector-net-installation-unix.html"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"gacutil /i MySql.Data.dll\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://lazynight.me/2612.html",children:"http://lazynight.me/2612.html"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/43263509/asp-net-core-how-to-create-a-connectionstring-on-macbook-pro/43267227",children:"https://stackoverflow.com/questions/43263509/asp-net-core-how-to-create-a-connectionstring-on-macbook-pro/43267227"})}),"\n",(0,s.jsx)(n.h3,{id:"lamp",children:"lamp"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker run -itd -p 8989:80 -p 3306:3306 --name lamp -v ~/Docker/lamp:/var/www/html 14e0318d2c44\n\ndocker run -d -p 8080:80 -p 3306:3306 tutum/lamp\n#\u542f\u52a8\u5e94\u7528\u5e76\u6620\u5c04 8080 \u7aef\u53e3\u548c 3306 \u7aef\u53e3\n\n\ndocker run -p 3306:3306 --name mysql -v ~/mysql/data/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -d hub.c.163.com/library/mysql:latest\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"mysql-error",children:"mysql error"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"[root@localhost ~]# mysql -u root -h 172.17.0.2 -p123456\nERROR 1130 (HY000): Host '172.17.0.1' is not allowed to connect to this MySQL server\n\u51fa\u73b0\u9519\u8bef\u7684\u539f\u56e0\uff1a\n\u5bb9\u5668\u7684\u7f51\u7edcip\u662f\u6839\u636e\u5bbf\u4e3b\u673a\u7684\u865a\u62df\u6865\u63a5\u7f51\u5361docker0\u81ea\u52a8\u5206\u914d\u7684\uff0c\u800cdocker0\u7684ip\u9ed8\u8ba4\u662f172.17.0.1.\n\u5bb9\u5668\u7684mysql\u5185\u9700\u8981\u7ed9\u8fd9\u4e2aip\u6388\u6743\u3002\n[root@localhost ~]# ifconfig\ndocker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 0.0.0.0\n..........\n\n\u767b\u9646\u5bb9\u5668\u5185\u7684mysql\uff0c\u8fdb\u884c\u6388\u6743\n[root@a02f56c3e731 /]# /usr/local/mysql/bin/mysql -p123456\n.......\nmysql> select host,user,password from mysql.user;\n+--------------+------+-------------------------------------------+\n| host         | user | password                                  |\n+--------------+------+-------------------------------------------+\n| localhost    | root | *6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9 |\n| 2ccd29e52286 | root |                                           |\n| 127.0.0.1    | root |                                           |\n| ::1          | root |                                           |\n| localhost    |      |                                           |\n| 2ccd29e52286 |      |                                           |\n+--------------+------+-------------------------------------------+\n6 rows in set (0.00 sec)\n\nmysql> grant all privileges on *.* to root@'%' identified by \"123456\";\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> flush privileges;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select host,user,password from mysql.user;\n+--------------+------+-------------------------------------------+\n| host         | user | password                                  |\n+--------------+------+-------------------------------------------+\n| localhost    | root | *6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9 |\n| 2ccd29e52286 | root |                                           |\n| 127.0.0.1    | root |                                           |\n| ::1          | root |                                           |\n| localhost    |      |                                           |\n| 2ccd29e52286 |      |                                           |\n| %            | root | *6BB4837EB74329105EE4568DDA7DC67ED2CA2AD9 |\n+--------------+------+-------------------------------------------+\n8 rows in set (0.00 sec)\n\n\u518d\u6b21\u5728\u5bbf\u4e3b\u673a\u672c\u673a\u5c1d\u8bd5\u8fde\u63a5\u5bb9\u5668\u7684mysql\uff0c\u53d1\u73b0\u53ef\u4ee5\u6b63\u5e38\u8fde\u63a5\uff01\n[root@localhost ~]# mysql -u root -h 172.17.0.2 -p123456\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"http://www.cnblogs.com/kevingrace/p/6425424.html",children:"http://www.cnblogs.com/kevingrace/p/6425424.html"})}),"\n",(0,s.jsx)(n.h3,{id:"mysql-1",children:"mysql"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h3,{id:"\u66f4\u6539\u5bc6\u7801",children:"\u66f4\u6539\u5bc6\u7801"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"\u7528UPDATE\u76f4\u63a5\u7f16\u8f91user\u8868\n\nmysql -u root\n\nmysql> use mysql;\n\nmysql> UPDATE user SET Password = PASSWORD('newpass') WHERE user = 'root';\n\nmysql> FLUSH PRIVILEGES;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>r,a:()=>c});var s=l(7294);const o={},t=s.createContext(o);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);