"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8278],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(i,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5197:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),l=["components"],c={title:"\u66f4\u6539Apache\u6839\u76ee\u5f55",date:new Date("2016-11-17T14:58:49.000Z"),tags:["Server","Apache"]},i=void 0,p={unversionedId:"CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55",id:"CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55",title:"\u66f4\u6539Apache\u6839\u76ee\u5f55",description:"\u66f4\u6539Apache\u6839\u76ee\u5f55",source:"@site/docs/CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55.md",sourceDirName:"CloudNative/middleware",slug:"/CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55",permalink:"/docs/CloudNative/middleware/\u66f4\u6539Apache\u6839\u76ee\u5f55",draft:!1,tags:[{label:"Server",permalink:"/docs/tags/server"},{label:"Apache",permalink:"/docs/tags/apache"}],version:"current",lastUpdatedAt:1685726734,formattedLastUpdatedAt:"Jun 2, 2023",frontMatter:{title:"\u66f4\u6539Apache\u6839\u76ee\u5f55",date:"2016-11-17T14:58:49.000Z",tags:["Server","Apache"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5\u914d\u7f6eShadowsocks",permalink:"/docs/CloudNative/middleware/\u5b89\u88c5\u914d\u7f6eShadowsocks"},next:{title:"h2",permalink:"/docs/CloudNative/network/http/h2"}},u={},s=[{value:"\u66f4\u6539Apache\u6839\u76ee\u5f55",id:"\u66f4\u6539apache\u6839\u76ee\u5f55",level:3}],d={toc:s};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u66f4\u6539apache\u6839\u76ee\u5f55"},"\u66f4\u6539Apache\u6839\u76ee\u5f55"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd  /etc/apache2/sites-available/\ncp 000-default.conf wp-blog.conf\nvim wp-blog.conf\n")),(0,o.kt)("p",null,"\u6587\u4ef6\u914d\u7f6e\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'<VirtualHost *:80>  \n        ServerAdmin webmaster@localhost  \n  \n          \n  \n        DocumentRoot /var/www/XXXX \n        <Directory /var/www/XXXX>  \n                Options Indexes FollowSymLinks MultiViews  \n                AllowOverride None  \n                Order allow,deny  \n                allow from all  \n        </Directory>  \n  \n        ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/  \n        <Directory "/usr/lib/cgi-bin">  \n                AllowOverride None  \n                Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch  \n                Order allow,deny  \n                Allow from all  \n        </Directory>  \n  \n        ErrorLog ${APACHE_LOG_DIR}/error.log  \n  \n        # Possible values include: debug, info, notice, warn, error, crit,  \n        # alert, emerg.  \n        LogLevel warn\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ln -s /etc/apache2/sites-available/wp-blog.conf /etc/apache2/sites-enabled/wp-blog.conf  ### \u5efa\u7acb\u94fe\u63a5\nrm -rf 000-default.conf ../sites-enabled/000-default.conf\n/etc/init.d/apache2 restart ### \u91cd\u542fApache\u670d\u52a1\u5668 \n")))}f.isMDXComponent=!0}}]);