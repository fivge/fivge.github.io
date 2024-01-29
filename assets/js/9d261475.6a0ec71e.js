"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8278],{7012:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(5893),r=a(1151);const o={title:"\u66f4\u6539Apache\u6839\u76ee\u5f55",date:new Date("2016-11-17T14:58:49.000Z"),tags:["Server","Apache"]},c=void 0,l={id:"CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55",title:"\u66f4\u6539Apache\u6839\u76ee\u5f55",description:"\u66f4\u6539Apache\u6839\u76ee\u5f55",source:"@site/docs/CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55.md",sourceDirName:"CloudNative/middleware",slug:"/CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55",permalink:"/docs/CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55",draft:!1,unlisted:!1,tags:[{label:"Server",permalink:"/docs/tags/server"},{label:"Apache",permalink:"/docs/tags/apache"}],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{title:"\u66f4\u6539Apache\u6839\u76ee\u5f55",date:"2016-11-17T14:58:49.000Z",tags:["Server","Apache"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u914d\u7f6eShadowsocks",permalink:"/docs/CloudNative/middleware/\u5b89\u88c5\u914d\u7f6eShadowsocks"},next:{title:"h2",permalink:"/docs/CloudNative/network/http/h2"}},i={},s=[{value:"\u66f4\u6539Apache\u6839\u76ee\u5f55",id:"\u66f4\u6539apache\u6839\u76ee\u5f55",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u66f4\u6539apache\u6839\u76ee\u5f55",children:"\u66f4\u6539Apache\u6839\u76ee\u5f55"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cd  /etc/apache2/sites-available/\ncp 000-default.conf wp-blog.conf\nvim wp-blog.conf\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u6587\u4ef6\u914d\u7f6e\u5982\u4e0b"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'<VirtualHost *:80>  \n        ServerAdmin webmaster@localhost  \n  \n          \n  \n        DocumentRoot /var/www/XXXX \n        <Directory /var/www/XXXX>  \n                Options Indexes FollowSymLinks MultiViews  \n                AllowOverride None  \n                Order allow,deny  \n                allow from all  \n        </Directory>  \n  \n        ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/  \n        <Directory "/usr/lib/cgi-bin">  \n                AllowOverride None  \n                Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch  \n                Order allow,deny  \n                Allow from all  \n        </Directory>  \n  \n        ErrorLog ${APACHE_LOG_DIR}/error.log  \n  \n        # Possible values include: debug, info, notice, warn, error, crit,  \n        # alert, emerg.  \n        LogLevel warn\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ln -s /etc/apache2/sites-available/wp-blog.conf /etc/apache2/sites-enabled/wp-blog.conf  ### \u5efa\u7acb\u94fe\u63a5\nrm -rf 000-default.conf ../sites-enabled/000-default.conf\n/etc/init.d/apache2 restart ### \u91cd\u542fApache\u670d\u52a1\u5668 \n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>l,a:()=>c});var t=a(7294);const r={},o=t.createContext(r);function c(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);