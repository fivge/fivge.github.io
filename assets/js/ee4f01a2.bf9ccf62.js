"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70],{3905:function(e,t,n){n.d(t,{Zo:function(){return i},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),k=c(n),m=l,d=k["".concat(s,".").concat(m)]||k[m]||u[m]||a;return n?r.createElement(d,o(o({ref:t},i),{},{components:n})):r.createElement(d,o({ref:t},i))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9258:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var r=n(3117),l=n(102),a=(n(7294),n(3905)),o=["components"],p={title:"OpenStack\u73af\u5883\u914d\u7f6e"},s=void 0,c={unversionedId:"CloudNative/devops/openstack/errors",id:"CloudNative/devops/openstack/errors",title:"OpenStack\u73af\u5883\u914d\u7f6e",description:"0x01 \u914d\u7f6e\u7f51\u7edc",source:"@site/docs/CloudNative/devops/openstack/errors.md",sourceDirName:"CloudNative/devops/openstack",slug:"/CloudNative/devops/openstack/errors",permalink:"/docs/CloudNative/devops/openstack/errors",draft:!1,tags:[],version:"current",lastUpdatedAt:1685726734,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"OpenStack\u73af\u5883\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"OpenStack",permalink:"/docs/CloudNative/devops/openstack/"},next:{title:"flavor",permalink:"/docs/CloudNative/devops/openstack/\u521b\u5efa\u5b9e\u4f8b/flavor"}},i={},u=[{value:"0x01 \u914d\u7f6e\u7f51\u7edc",id:"0x01-\u914d\u7f6e\u7f51\u7edc",level:3},{value:"0x02 Controller",id:"0x02-controller",level:3},{value:"0x03 Computer",id:"0x03-computer",level:3},{value:"KeyStone",id:"keystone",level:3},{value:"mariadb<del>(\u672a\u89e3\u51b3)</del>",id:"mariadb\u672a\u89e3\u51b3",level:3},{value:"Glance",id:"glance",level:3},{value:"NOVA",id:"nova",level:3},{value:"mongo",id:"mongo",level:3},{value:"free -m",id:"free--m",level:3},{value:"Network",id:"network",level:3}],k={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"0x01-\u914d\u7f6e\u7f51\u7edc"},"0x01 \u914d\u7f6e\u7f51\u7edc"),(0,a.kt)("p",null,"\u914d\u7f6e\u4e24\u4e2a\u7f51\u7edc,\u4e00\u4e2a\u662f\u7ba1\u7406\u7f51\u7edc10.0.0.0/24,\u53e6\u4e00\u4e2a\u53ef\u8bbf\u95ee\u5916\u90e8\u7f51\u7edc."),(0,a.kt)("p",null,"\u914d\u7f6ehosts,",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# controller\n10.0.0.11       controller\n\n# compute1\n10.0.0.31       compute1\n\n# .....\n")),(0,a.kt)("h3",{id:"0x02-controller"},"0x02 Controller"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NAT)")),(0,a.kt)("p",null,"\u4f60\u5e94\u8be5\u5b89\u88c5Chrony\uff0c\u4e00\u4e2a\u5728\u4e0d\u540c\u8282\u70b9\u540c\u6b65\u670d\u52a1\u5b9e\u73b0 :term:",(0,a.kt)("a",{parentName:"p",href:"https://docs.openstack.org/mitaka/zh_CN/install-guide-ubuntu/environment-ntp.html#id1"},"`"),"NTP`\u7684\u65b9\u6848\u3002\u6211\u4eec\u5efa\u8bae\u4f60\u914d\u7f6e\u63a7\u5236\u5668\u8282\u70b9\u5f15\u7528\u66f4\u51c6\u786e\u7684(lower stratum)NTP\u670d\u52a1\u5668\uff0c\u7136\u540e\u5176\u4ed6\u8282\u70b9\u5f15\u7528\u63a7\u5236\u8282\u70b9\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"apt-get install chrony\nvim /etc/chrony/chrony.conf \n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server NTP_SERVER iburst\n")),(0,a.kt)("p",null,"\u4f7f\u7528NTP\u670d\u52a1\u5668\u7684\u4e3b\u673a\u540d\u6216\u8005IP\u5730\u5740\u66ff\u6362 ",(0,a.kt)("inlineCode",{parentName:"p"},"NTP_SERVER")," \u3002\u914d\u7f6e\u652f\u6301\u8bbe\u7f6e\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u503c\u3002"),(0,a.kt)("p",null,"\u63a7\u5236\u8282\u70b9\u9ed8\u8ba4\u8ddf\u516c\u5171\u670d\u52a1\u5668\u6c60\u540c\u6b65\u65f6\u95f4\u3002\u4f46\u662f\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u6027\u914d\u7f6e\u5176\u4ed6\u670d\u52a1\u5668\uff0c\u6bd4\u5982\u4f60\u7ec4\u7ec7\u4e2d\u63d0\u4f9b\u7684\u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"}," service chrony restart\n")),(0,a.kt)("h3",{id:"0x03-computer"},"0x03 Computer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," \u7f51\u7edc\u65f6\u95f4\u534f\u8bae(NAT)")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.pool.ntp.org/zone/cn"},"http://www.pool.ntp.org/zone/cn")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"apt-get install chrony\n")),(0,a.kt)("p",null,"\u7f16\u8f91",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/chrony/chrony.conf")," \u6587\u4ef6\u5e76\u6ce8\u91ca\u9664",(0,a.kt)("inlineCode",{parentName:"p"},"server")," \u503c\u5916\u7684\u6240\u6709\u5185\u5bb9\u3002\u4fee\u6539\u5b83\u5f15\u7528\u63a7\u5236\u8282\u70b9\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"server controller iburst\n\n")),(0,a.kt)("p",null,"\u91cd\u542f NTP \u670d\u52a1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# service chrony restart\n")),(0,a.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u7ee7\u7eed\u8fdb\u4e00\u6b65\u7684\u64cd\u4f5c\u4e4b\u524d\u9a8c\u8bc1 NTP \u7684\u540c\u6b65\u3002\u6709\u4e9b\u8282\u70b9\uff0c\u7279\u522b\u662f\u54ea\u4e9b\u5f15\u7528\u4e86\u63a7\u5236\u8282\u70b9\u7684\uff0c\u9700\u8981\u82b1\u8d39\u4e00\u4e9b\u65f6\u95f4\u53bb\u540c\u6b65\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u63a7\u5236\u8282\u70b9\u4e0a\u6267\u884c\u8fd9\u4e2a\u547d\u4ee4\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# chronyc sources\n  210 Number of sources = 2\n  MS Name/IP address         Stratum Poll Reach LastRx Last sample\n  ===============================================================================\n  ^- 192.0.2.11                    2   7    12   137  -2814us[-3000us] +/-   43ms\n  ^* 192.0.2.12                    2   6   177    46    +17us[  -23us] +/-   68ms\n\n")),(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("em",{parentName:"p"},"Name/IP address")," \u5217\u7684\u5185\u5bb9\u5e94\u663e\u793aNTP\u670d\u52a1\u5668\u7684\u4e3b\u673a\u540d\u6216\u8005IP\u5730\u5740\u3002\u5728 ",(0,a.kt)("em",{parentName:"p"},"S")," \u5217\u7684\u5185\u5bb9\u5e94\u8be5\u5728NTP\u670d\u52a1\u76ee\u524d\u540c\u6b65\u7684\u4e0a\u6e38\u670d\u52a1\u5668\u524d\u663e\u793a ***\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5728\u6240\u6709\u5176\u4ed6\u8282\u70b9\u6267\u884c\u76f8\u540c\u547d\u4ee4\uff1a"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"# chronyc sources\n  210 Number of sources = 1\n  MS Name/IP address         Stratum Poll Reach LastRx Last sample\n  ===============================================================================\n  ^* controller                    3    9   377   421    +15us[  -87us] +/-   15ms\n")),(0,a.kt)("p",{parentName:"li"},"\u5728 ",(0,a.kt)("em",{parentName:"p"},"Name/IP address")," \u5217\u7684\u5185\u5bb9\u5e94\u663e\u793a\u63a7\u5236\u8282\u70b9\u7684\u4e3b\u673a\u540d\u3002"))),(0,a.kt)("h3",{id:"keystone"},"KeyStone"),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u540c\u6b65 nova / keystone \u6570\u636e\u5e93\u65f6"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ws2.sinaimg.cn/large/006tNc79ly1fh9fyt0lybj31h90d2ag0.jpg",alt:null})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER SCHEMA keystone DEFAULT CHARACTER SET utf8 ;\n")),(0,a.kt)("p",null," flush privileges"),(0,a.kt)("h3",{id:"mariadb\u672a\u89e3\u51b3"},"mariadb",(0,a.kt)("del",{parentName:"h3"},"(\u672a\u89e3\u51b3)")),(0,a.kt)("p",null,(0,a.kt)("del",{parentName:"p"},"computer \u65e0\u6cd5\u8fde\u63a5 controller \u7684",(0,a.kt)("inlineCode",{parentName:"del"},"3306"),"\u7aef\u53e3")),(0,a.kt)("h3",{id:"glance"},"Glance"),(0,a.kt)("p",null,"\u955c\u50cf\u670d\u52a1"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Caused by: com.rabbitmq.client.AuthenticationFailureException: ACCESS_REFUSED - Login was refused using authentication mechanism PLAIN. For details see the\n\n\n\n")),(0,a.kt)("h3",{id:"nova"},"NOVA"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","nova-api")),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","nova-conductor")),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","nova-consoleauth"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","nova-manage"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","nova-novncproxy"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","nova-scheduler ")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"rabbitmqctl list_permissions "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mongo"},"mongo"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ws2.sinaimg.cn/large/006tKfTcly1fhfxvohqkdj30td073q45.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/reference/method/db.createUser/#create-administrative-user-with-roles"},"https://docs.mongodb.com/manual/reference/method/db.createUser/#create-administrative-user-with-roles")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'mongo --host controller --eval \'\n  db = db.getSiblingDB("ceilometer");\n  db.addUser({user: "ceilometer",\n  pwd: "1234",\n  roles: [ "readWrite", "dbAdmin" ]})\'\n\n')),(0,a.kt)("p",null,"to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'mongo --host controller --eval \'\ndb = db.getSiblingDB("ceilometer");  \ndb.createUser({user: "ceilometer",\npwd: "1234",\nroles: [ "readWrite", "dbAdmin" ]})\'\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u279c  local ll"),(0,a.kt)("p",null,"total 52K"),(0,a.kt)("p",null,"-rw-rw-r-- 1 root root    0 3\u6708  20 22:45 ",(0,a.kt)("em",{parentName:"p"},"build_horizon-j0U_ef_horizon-11.0.1_openstack_dashboard_local"),".secret_key_store.lock"),(0,a.kt)("p",null,"drwxr-xr-x 2 root root 4.0K 7\u6708   9 19:01 enabled"),(0,a.kt)("p",null,"-rw-r--r-- 1 root root    0 3\u6708  11 04:49 ",(0,a.kt)("strong",{parentName:"p"},"init"),".py"),(0,a.kt)("p",null,"-rw-r--r-- 1 root root  155 7\u6708   9 19:01 ",(0,a.kt)("strong",{parentName:"p"},"init"),".pyc"),(0,a.kt)("p",null,"drwxr-xr-x 2 root root 4.0K 7\u6708   9 18:58 local_settings.d"),(0,a.kt)("p",null,"lrwxrwxrwx 1 root root   42 3\u6708  20 22:45 local_settings.py -> /etc/openstack-dashboard/local_settings.py"),(0,a.kt)("p",null,"-rw-r--r-- 1 root root 5.5K 7\u6708   9 19:01 local_settings.pyc"),(0,a.kt)("p",null,"-rw-r--r-- 1 root root  32K 3\u6708  20 22:45 local_settings.py.example"),(0,a.kt)("p",null,"\u279c  local "),(0,a.kt)("p",null,"\u279c  local pwd"),(0,a.kt)("p",null,"/usr/share/openstack-dashboard/openstack_dashboard/local"),(0,a.kt)("p",null,"\u279c  local ls     "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"build_horizon-j0U_ef_horizon-11.0.1_openstack_dashboard_local"),".secret_key_store.lock  ",(0,a.kt)("strong",{parentName:"p"},"init"),".py   local_settings.d   local_settings.pyc"),(0,a.kt)("p",null,"enabled                                                                                ",(0,a.kt)("strong",{parentName:"p"},"init"),".pyc  local_settings.py  local_settings.py.example"),(0,a.kt)("p",null,"\u279c  local rm -rf ",(0,a.kt)("em",{parentName:"p"},"build_horizon-j0U_ef_horizon-11.0.1_openstack_dashboard_local"),".secret_key_store.lock "),(0,a.kt)("p",null,"\u279c  local ls"),(0,a.kt)("p",null,"enabled  ",(0,a.kt)("strong",{parentName:"p"},"init"),".py  ",(0,a.kt)("strong",{parentName:"p"},"init"),".pyc  local_settings.d  local_settings.py  local_settings.pyc  local_settings.py.example"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u8bbf\u95eecontroller/horizon\u51fa\u9519500\uff1ainternal server error"),(0,a.kt)("p",null,"\u8bbf\u95eecontroller/horizon\u51fa\u9519504\uff1ainternal server error  gateway timeout"),(0,a.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"WSGIApplicationGroup %{GLOBAL}\n\n")),(0,a.kt)("p",null,"\u628a\u4e0a\u9762\u8fd9\u884c\u6dfb\u52a0\u5230/etc/apache2/conf-available/openstack-dashboard.conf"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"free--m"},"free -m"),(0,a.kt)("p",null,"ps auxw|head -1;ps auxw|sort -rn -k4|head -20 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ps auxw|head -1;ps auxw|sort -rn -k4|head -20 \n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("p",null,"\u63a7\u5236\u8282\u70b9\u4e0e\u8ba1\u7b97\u8282\u70b9\u7684\u7f51\u7edc\u65e0\u6cd5\u8fde\u63a5"),(0,a.kt)("p",null,"\u53ea\u6709\u63a7\u5236\u8282\u70b9\u7684\u4ee3\u7406"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://ws3.sinaimg.cn/large/006tKfTcly1fhjmipl32fj30u20tyjt4.jpg",alt:null})),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"openstack image list\n")))}m.isMDXComponent=!0}}]);