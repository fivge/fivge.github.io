"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8743],{7242:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var i=s(5893),l=s(1151);const t={},r=void 0,c={id:"CloudNative/middleware/nginx",title:"nginx",description:"0x01 Install",source:"@site/docs/CloudNative/middleware/nginx.md",sourceDirName:"CloudNative/middleware",slug:"/CloudNative/middleware/nginx",permalink:"/docs/CloudNative/middleware/nginx",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"mysql\u66f4\u6539root\u5bc6\u7801",permalink:"/docs/CloudNative/middleware/mysql\u66f4\u6539root\u5bc6\u7801"},next:{title:"shadwosocks",permalink:"/docs/CloudNative/middleware/shadwosocks"}},d={},o=[{value:"0x01 Install",id:"0x01-install",level:3},{value:"0x02 modules",id:"0x02-modules",level:3},{value:"gzip",id:"gzip",level:4},{value:"ssl",id:"ssl",level:4},{value:"h2",id:"h2",level:4},{value:"br",id:"br",level:4},{value:"onion",id:"onion",level:4},{value:"h3",id:"h3",level:4},{value:"ngx_http_stub_status_module",id:"ngx_http_stub_status_module",level:4},{value:"0x03 config",id:"0x03-config",level:3},{value:"default_server",id:"default_server",level:4},{value:"OCSP stapling",id:"ocsp-stapling",level:4},{value:"\u6b63\u5411\u4ee3\u7406",id:"\u6b63\u5411\u4ee3\u7406",level:4},{value:"fe",id:"fe",level:5},{value:"be",id:"be",level:5},{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",level:4},{value:"\u8d1f\u8f7d\u5747\u8861",id:"\u8d1f\u8f7d\u5747\u8861",level:4},{value:"0x04 \u7ba1\u7406",id:"0x04-\u7ba1\u7406",level:3},{value:"\u4f7f\u7528 sysytemd \u7ba1\u7406",id:"\u4f7f\u7528-sysytemd-\u7ba1\u7406",level:4},{value:"TODO",id:"todo",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"0x01-install",children:"0x01 Install"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"wget http://nginx.org/download/nginx-1.19.2.tar.gz\nsudo tar -xvzf nginx-1.19.2.tar.gz\nsudo apt install gcc libpcre3 libpcre3-dev openssl zlib-devel/zlib1g-dev\n./configure --prefix=/srv/nginx\n# \u6700\u7ec8\u914d\u7f6e\n# ./configure --prefix=/srv/nginx --with-http_ssl_module --with-http_v2_module --add-module=/srv/src/ngx_brotli\nmake && make install\nsudo ln -s /srv/nginx/sbin/nginx /usr/local/bin\nnginx -V\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://nginx.org/en/docs/configure.html",children:"https://nginx.org/en/docs/configure.html"})}),"\n",(0,i.jsx)(n.h3,{id:"0x02-modules",children:"0x02 modules"}),"\n",(0,i.jsx)(n.h4,{id:"gzip",children:"gzip"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u9ed8\u8ba4\u542f\u7528"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"# gizp\ngzip on;\ngzip_vary on;\ngzip_proxied any;\ngzip_comp_level 6;\ngzip_types text/plain text/css text/xml application/json application/javascript application/rss+xml application/atom+xml image/svg+xml;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ssl",children:"ssl"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--with-http_ssl_module\n"})}),"\n",(0,i.jsx)(n.h4,{id:"h2",children:"h2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"--with-http_v2_module\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u5c3d\u7ba1 HTTP2 \u5e76\u4e0d\u8981\u6c42\u4f7f\u7528\u52a0\u5bc6\uff0c\u4f46\u662f\u5bf9\u4e8e\u73b0\u4ee3\u6d4f\u89c8\u5668\u6765\u8bf4\u5982 Google Chrome \u548c Mozilla Firefox \u9ed8\u8ba4 HTTP2 \u548c HTTPS \u662f\u4e00\u8d77\u4f7f\u7528\u7684\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u60f3\u914d\u7f6e HTTP2 \u7684\u8bdd\uff0c\u8fd8\u662f\u9700\u8981\u540c\u65f6\u914d\u7f6e SSL\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"listen       443 ssl http2;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"br",children:"br"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/google/ngx_brotli",children:"https://github.com/google/ngx_brotli"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5b89\u88c5"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo git clone https://github.com/google/ngx_brotli.git\ncd ngx_brotli &&  sudo git submodule update --init\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Dynamically loaded"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd nginx-1.x.x\n./configure --with-compat --add-dynamic-module=/srv/src/ngx_brotli\nmake modules\nsudo cp objs/ngx_http_brotli_static_module.so objs/ngx_http_brotli_filter_module.so /srv/nginx/modules\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"nginx.conf"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"load_module modules/ngx_http_brotli_filter_module.so;\nload_module modules/ngx_http_brotli_static_module.so;\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Statically compiled"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./configure --add-module=/path/to/ngx_brotli\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"#br\nbrotli on;\nbrotli_comp_level 6;\nbrotli_types text/plain text/css text/markdown application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript application/javascript image/svg+xml;\n"})}),"\n",(0,i.jsx)(n.h4,{id:"onion",children:"onion"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://community.torproject.org/onion-services/",children:"https://community.torproject.org/onion-services/"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/alecmuffett/eotk/blob/master/docs.d/HOW-TO-INSTALL.md",children:"https://github.com/alecmuffett/eotk/blob/master/docs.d/HOW-TO-INSTALL.md"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"# ?\nngx_http_substitutions_filter_module\n"})}),"\n",(0,i.jsx)(n.h4,{id:"h3",children:"h3"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://quic.nginx.org/README",children:"https://quic.nginx.org/README"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/cloudflare/quiche/tree/master/nginx",children:"https://github.com/cloudflare/quiche/tree/master/nginx"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://boringssl.googlesource.com/boringssl/+/HEAD/BUILDING.md",children:"https://boringssl.googlesource.com/boringssl/+/HEAD/BUILDING.md"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://iostreamx.com/build-nginx-quic/",children:"https://iostreamx.com/build-nginx-quic/"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo apt install mercurial cmake ninja-build golang\nhg clone -b quic https://hg.nginx.org/nginx-quic\nmkdir build\ncd build\ncmake -GNinja ..\nninja\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"--with-http_v3_module     - enable QUIC and HTTP/3\n--with-stream_quic_module - enable QUIC in Stream\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u26a0 \u6ce8\u610f\uff1anginx \u7684 OCSP Stapling \u662f\u7531 OpenSSL \u5b9e\u73b0\uff0c\u4f7f\u7528 BoringSSL \u4f1a\u5bfc\u81f4\u8be5\u529f\u80fd\u65e0\u6cd5\u4f7f\u7528\u3002\u5b9e\u9645\u4f7f\u7528\u4f53\u9a8c\u4e0a\u6765\u8bf4\u611f\u89c9\u65e0\u4f24\u5927\u96c5\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"ngx_http_stub_status_module",children:"ngx_http_stub_status_module"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"nginx \u670d\u52a1\u5668\u72b6\u6001\u76d1\u63a7"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://nginx.org/en/docs/http/ngx_http_stub_status_module.html",children:"http://nginx.org/en/docs/http/ngx_http_stub_status_module.html"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:" --with-http_stub_status_module\n"})}),"\n",(0,i.jsx)(n.h3,{id:"0x03-config",children:"0x03 config"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://ssl-config.mozilla.org/",children:"https://ssl-config.mozilla.org/"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN",children:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN"})}),"\n",(0,i.jsx)(n.h4,{id:"default_server",children:"default_server"}),"\n",(0,i.jsx)(n.p,{children:"nginx \u7684 default_server \u6307\u4ee4\u53ef\u4ee5\u5b9a\u4e49\u9ed8\u8ba4\u7684 server \u53bb\u5904\u7406\u4e00\u4e9b\u6ca1\u6709\u5339\u914d\u5230 server_name \u7684\u8bf7\u6c42\uff0c\u5982\u679c\u6ca1\u6709\u663e\u5f0f\u5b9a\u4e49\uff0c\u5219\u4f1a\u9009\u53d6\u7b2c\u4e00\u4e2a\u5b9a\u4e49\u7684 server \u4f5c\u4e3a default_server"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"server {\n    listen 80 default_server;\n    server_name _; # _ \u5e76\u4e0d\u662f\u91cd\u70b9 __ \u4e5f\u53ef\u4ee5 ___\u4e5f\u53ef\u4ee5\n    return 403;\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"ocsp-stapling",children:"OCSP stapling"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5c06\u539f\u672c\u9700\u8981\u5ba2\u6237\u7aef\u5b9e\u65f6\u53d1\u8d77\u7684 OCSP \u8bf7\u6c42\u8f6c\u5ac1\u7ed9\u670d\u52a1\u7aef"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u7ebf\u8bc1\u4e66\u72b6\u6001\u534f\u8bae\uff08Online Certificate Status Protocol\uff09\uff0c\u7b80\u79f0 OCSP"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.cnblogs.com/cangqinglang/p/13823213.html",children:"https://www.cnblogs.com/cangqinglang/p/13823213.html"})}),"\n",(0,i.jsx)(n.h4,{id:"\u6b63\u5411\u4ee3\u7406",children:"\u6b63\u5411\u4ee3\u7406"}),"\n",(0,i.jsx)(n.h5,{id:"fe",children:"fe"}),"\n",(0,i.jsx)(n.p,{children:"rewrite"}),"\n",(0,i.jsx)(n.h5,{id:"be",children:"be"}),"\n",(0,i.jsx)(n.p,{children:"302 301"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"301"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:'server {\n\n...\n\n# 301\n   if ($scheme != "https") {\n      return 301 https://$host$request_uri;\n   }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\u53cd\u5411\u4ee3\u7406",children:"\u53cd\u5411\u4ee3\u7406"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"location /example {\n    proxy_pass https://example.com;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06",(0,i.jsx)(n.code,{children:"httpd_can_network_connect"}),"SELinux \u5e03\u5c14\u503c\u53c2\u6570\u8bbe\u7f6e\u4e3a",(0,i.jsx)(n.code,{children:"1"}),"\uff0c\u4ee5\u4fbf\u5c06 SELinux \u8bbe\u7f6e\u4e3a\u5141\u8bb8 NGINX \u8f6c\u53d1\u6d41\u91cf\uff1a"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"setsebool -P httpd_can_network_connect 1\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/8/html/deploying_different_types_of_servers/configuring-nginx-as-a-reverse-proxy-for-the-http-traffic_setting-up-and-configuring-nginx",children:"https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/8/html/deploying_different_types_of_servers/configuring-nginx-as-a-reverse-proxy-for-the-http-traffic_setting-up-and-configuring-nginx"})}),"\n",(0,i.jsx)(n.h4,{id:"\u8d1f\u8f7d\u5747\u8861",children:"\u8d1f\u8f7d\u5747\u8861"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",children:"http {\n    upstream backend {\n        least_conn;\n        server server1.example.com;\n        server server2.example.com;\n        server server3.example.com backup;\n    }\n\n    server {\n        location / {\n            proxy_pass http://backend;\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u200b \u5728\u540d\u4e3a",(0,i.jsx)(n.code,{children:"backend"}),"\u7684\u4e3b\u673a\u7ec4\u4e2d\u7684",(0,i.jsx)(n.code,{children:"least_conn"}),"\u6307\u4ee4\u5b9a\u4e49\u4e86 NGINX \u5c06\u8bf7\u6c42\u53d1\u9001\u5230",(0,i.jsx)(n.code,{children:"server1.example.com"}),"\u6216",(0,i.jsx)(n.code,{children:"server2.example.com"}),"\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u54ea\u4e2a\u4e3b\u673a\u5177\u6709\u6700\u5c11\u7684\u6d3b\u52a8\u8fde\u63a5\u6570\u3002NGINX \u4ec5\u5728\u5176\u4ed6\u4e24\u4e2a\u4e3b\u673a\u4e0d\u53ef\u7528\u65f6\u4f7f\u7528",(0,i.jsx)(n.code,{children:"server3.example.com"}),"\u4f5c\u4e3a\u5907\u4efd\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u200b ",(0,i.jsx)(n.code,{children:"proxy_pass"}),"\u6307\u4ee4\u8bbe\u7f6e\u4e3a",(0,i.jsx)(n.code,{children:"http://backend"})," \u65f6\uff0cNGINX \u5145\u5f53\u53cd\u5411\u4ee3\u7406\uff0c\u5e76\u4f7f\u7528",(0,i.jsx)(n.code,{children:"backend"}),"\u4e3b\u673a\u7ec4\u6839\u636e\u8be5\u7ec4\u7684\u8bbe\u7f6e\u5206\u53d1\u8bf7\u6c42\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u200b \u60a8\u8fd8\u53ef\u4ee5\u6307\u5b9a\u5176\u4ed6\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f",(0,i.jsx)(n.code,{children:"least_conn"}),"\u8d1f\u8f7d\u5747\u8861\u65b9\u6cd5\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u200b \u4e0d\u6307\u5b9a\u65b9\u6cd5\uff0c\u4f7f\u7528\u8f6e\u8be2\u7684\u65b9\u5f0f\u5728\u670d\u52a1\u5668\u95f4\u5e73\u5747\u5206\u53d1\u8bf7\u6c42\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u200b ",(0,i.jsx)(n.code,{children:"ip_hash"}),"\u6839\u636e\u4ece IPv4 \u5730\u5740\u7684\u524d\u4e09\u4e2a\u516b\u4f4d\u5b57\u8282\u6216\u5ba2\u6237\u7aef\u7684\u6574\u4e2a IPv6 \u5730\u5740\u8ba1\u7b97\u7684\u54c8\u5e0c\u503c\u5c06\u6765\u81ea\u4e00\u4e2a\u5ba2\u6237\u7aef\u5730\u5740\u7684\u8bf7\u6c42\u53d1\u9001\u5230\u540c\u4e00\u53f0\u670d\u52a1\u5668\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u200b ",(0,i.jsx)(n.code,{children:"hash"}),"\uff0c\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684\u5bc6\u94a5\uff08\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u3001\u53d8\u91cf\u6216\u4e24\u8005\u7684\u7ec4\u5408\uff09\u6765\u786e\u5b9a\u670d\u52a1\u5668\u3002\u7528",(0,i.jsx)(n.code,{children:"consistent"}),"\u53c2\u6570\u6765\u8fdb\u884c\u914d\u7f6e\uff0cNGINX \u53ef\u6839\u636e\u7528\u6237\u5b9a\u4e49\u7684\u54c8\u5e0c\u5bc6\u94a5\u503c\u5411\u6240\u6709\u7684\u670d\u52a1\u5668\u5206\u53d1\u8bf7\u6c42\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u200b ",(0,i.jsx)(n.code,{children:"random"}),"\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u968f\u673a\u6311\u9009\u7684\u670d\u52a1\u5668\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/8/html/deploying_different_types_of_servers/configuring-nginx-as-an-http-load-balancer_setting-up-and-configuring-nginx",children:"https://access.redhat.com/documentation/zh-cn/red_hat_enterprise_linux/8/html/deploying_different_types_of_servers/configuring-nginx-as-an-http-load-balancer_setting-up-and-configuring-nginx"})}),"\n",(0,i.jsx)(n.h3,{id:"0x04-\u7ba1\u7406",children:"0x04 \u7ba1\u7406"}),"\n",(0,i.jsx)(n.h4,{id:"\u4f7f\u7528-sysytemd-\u7ba1\u7406",children:"\u4f7f\u7528 sysytemd \u7ba1\u7406"}),"\n",(0,i.jsx)(n.p,{children:"TODO"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'mkdir -p /etc/systemd/system/nginx.service.d\nprintf "[Service]\\nExecStartPost=/bin/sleep 0.1\\n" > /etc/systemd/system/nginx.service.d/override.conf\n\nsystemctl daemon-reload\nsystemctl restart nginx.service\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"/lib/systemd/system/nginx.service"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"nginx.service"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[Unit]\nDescription=The NGINX HTTP and reverse proxy server\nAfter=syslog.target network-online.target remote-fs.target nss-lookup.target\nWants=network-online.target\n\n[Service]\nType=forking\nPIDFile=/srv/nginx/logs/nginx.pid\nExecStartPre=/usr/local/bin/nginx -t\nExecStart=/usr/local/bin/nginx\nExecReload=/usr/local/bin/nginx -s reload\nExecStop=/bin/kill -s QUIT $MAINPID\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"todo",children:"TODO"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"h3"}),"\n",(0,i.jsx)(n.li,{children:"\u6d0b\u8471\u7f51\u7edc"}),"\n",(0,i.jsx)(n.li,{children:"\u540c\u6b65\u914d\u7f6e"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(7294);const l={},t=i.createContext(l);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);