"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1918],{1281:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(3117),s=n(102),a=(n(7294),n(3905)),o=["components"],l={title:"ssh\u81ea\u52a8\u767b\u5f55",tags:["ssh","Term"],date:new Date("2016-09-30T20:15:03.000Z"),categories:["Term"]},i=void 0,u={unversionedId:"CloudNative/system/ssh/ssh\u81ea\u52a8\u767b\u5f55",id:"CloudNative/system/ssh/ssh\u81ea\u52a8\u767b\u5f55",title:"ssh\u81ea\u52a8\u767b\u5f55",description:"\u4f7f\u7528\u516c\u94a5\u8ba4\u8bc1",source:"@site/docs/CloudNative/system/ssh/ssh\u81ea\u52a8\u767b\u5f55.md",sourceDirName:"CloudNative/system/ssh",slug:"/CloudNative/system/ssh/ssh\u81ea\u52a8\u767b\u5f55",permalink:"/docs/CloudNative/system/ssh/ssh\u81ea\u52a8\u767b\u5f55",draft:!1,tags:[{label:"ssh",permalink:"/docs/tags/ssh"},{label:"Term",permalink:"/docs/tags/term"}],version:"current",lastUpdatedAt:1681154148,formattedLastUpdatedAt:"Apr 10, 2023",frontMatter:{title:"ssh\u81ea\u52a8\u767b\u5f55",tags:["ssh","Term"],date:"2016-09-30T20:15:03.000Z",categories:["Term"]},sidebar:"tutorialSidebar",previous:{title:"ssh\u6700\u4f73\u547d\u4ee4",permalink:"/docs/CloudNative/system/ssh/ssh\u6700\u4f73\u547d\u4ee4"},next:{title:"rm -rf /etc/shadow*",permalink:"/docs/CloudNative/system/user/shadow"}},p={},c=[{value:"\u4f7f\u7528\u516c\u94a5\u8ba4\u8bc1",id:"\u4f7f\u7528\u516c\u94a5\u8ba4\u8bc1",level:3},{value:"\u7f16\u8f91 sshd_config \u6587\u4ef6",id:"\u7f16\u8f91-sshd_config-\u6587\u4ef6",level:3},{value:"\u624b\u52a8\u589e\u52a0\u7ba1\u7406\u7528\u6237",id:"\u624b\u52a8\u589e\u52a0\u7ba1\u7406\u7528\u6237",level:3}],d={toc:c};function h(e){var t=e.components,n=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u4f7f\u7528\u516c\u94a5\u8ba4\u8bc1"},"\u4f7f\u7528\u516c\u94a5\u8ba4\u8bc1"),(0,a.kt)("p",null,"\u516c\u94a5\u8ba4\u8bc1\u6bd4\u5bc6\u7801\u767b\u5f55\u5b89\u5168\u591a\u4e86\uff0c\u56e0\u4e3a\u5b83\u4e0d\u53d7\u66b4\u529b\u5bc6\u7801\u653b\u51fb\u7684\u5f71\u54cd\uff0c\u4f46\u662f\u5e76\u4e0d\u65b9\u4fbf\u56e0\u4e3a\u5b83\u4f9d\u8d56\u4e8e RSA \u5bc6\u94a5\u5bf9\u3002\u9996\u5148\uff0c\u4f60\u8981\u521b\u5efa\u4e00\u4e2a\u516c\u94a5/\u79c1\u94a5\u5bf9\u3002\u4e0b\u4e00\u6b65\uff0c\u79c1\u94a5\u653e\u4e8e\u4f60\u7684\u5ba2\u6237\u7aef\u7535\u8111\uff0c\u5e76\u4e14\u590d\u5236\u516c\u94a5\u5230\u4f60\u60f3\u767b\u5f55\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\u4f60\u53ea\u80fd\u4ece\u62e5\u6709\u79c1\u94a5\u7684\u7535\u8111\u767b\u5f55\u624d\u80fd\u767b\u5f55\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\u4f60\u7684\u79c1\u94a5\u5c31\u548c\u4f60\u7684\u5bb6\u95e8\u94a5\u5319\u4e00\u6837\u654f\u611f\uff1b\u4efb\u4f55\u4eba\u83b7\u53d6\u5230\u4e86\u79c1\u94a5\u5c31\u53ef\u4ee5\u83b7\u53d6\u4f60\u7684\u8d26\u53f7\u3002\u4f60\u53ef\u4ee5\u7ed9\u4f60\u7684\u79c1\u94a5\u52a0\u4e0a\u5bc6\u7801\u6765\u589e\u52a0\u4e00\u4e9b\u5f3a\u5316\u4fdd\u62a4\u89c4\u5219\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 RSA \u5bc6\u94a5\u5bf9\u7ba1\u7406\u591a\u4e2a\u7528\u6237\u662f\u4e00\u79cd\u597d\u7684\u65b9\u6cd5\u3002\u5f53\u4e00\u4e2a\u7528\u6237\u79bb\u5f00\u4e86\uff0c\u53ea\u8981\u4ece\u670d\u52a1\u5668\u5220\u4e86\u4ed6\u7684\u516c\u94a5\u5c31\u80fd\u53d6\u6d88\u4ed6\u7684\u767b\u5f55\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4f8b\u5b50\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 3072 \u4f4d\u957f\u5ea6\u7684\u5bc6\u94a5\u5bf9\uff0c\u5b83\u6bd4\u9ed8\u8ba4\u7684 2048 \u4f4d\u66f4\u5b89\u5168\uff0c\u800c\u4e14\u4e3a\u5b83\u8d77\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684\u540d\u5b57\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u77e5\u9053\u5b83\u5c5e\u4e8e\u54ea\u4e2a\u670d\u52a1\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ssh-keygen -t rsa -b 3072 -f id_mailserver\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u521b\u5efa\u4e24\u4e2a\u65b0\u7684\u5bc6\u94a5, ",(0,a.kt)("inlineCode",{parentName:"p"},"id_mailserver")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"id_mailserver.pub"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"id_mailserver")," \u662f\u4f60\u7684\u79c1\u94a5--\u4e0d\u8981\u4f20\u64ad\u5b83\uff01"),(0,a.kt)("p",null,"\u73b0\u5728\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh-copy-id")," \u547d\u4ee4\u5b89\u5168\u5730\u590d\u5236\u4f60\u7684\u516c\u94a5\u5230\u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\u4f60\u5fc5\u987b\u786e\u4fdd\u5728\u8fdc\u7a0b\u670d\u52a1\u5668\u4e0a\u6709\u53ef\u7528\u7684 SSH \u767b\u5f55\u65b9\u5f0f\u3002"),(0,a.kt)("hr",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"What!Mac \u4e0a\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"ssh-copy-id"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -L https://raw.githubusercontent.com/beautifulcode/ssh-copy-id-for-OSX/master/install.sh | sh\n")),(0,a.kt)("p",null,"\u8be6\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://github.com/beautifulcode/ssh-copy-id-for-OSX"},"https://github.com/beautifulcode/ssh-copy-id-for-OSX")),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-copy-id -i  id_rsa.pub user@remoteserver\n\n/usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed\nuser@remoteserver's password:\nNumber of key(s) added: 1\nNow try logging into the machine, with:   \"ssh 'user@remoteserver'\"\nand check to make sure that only the key(s) you wanted were added.\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ssh-copy-id")," \u4f1a\u786e\u4fdd\u4f60\u4e0d\u4f1a\u65e0\u610f\u95f4\u590d\u5236\u4e86\u4f60\u7684\u79c1\u94a5\u3002\u4ece\u4e0a\u8ff0\u8f93\u51fa\u4e2d\u590d\u5236\u767b\u5f55\u547d\u4ee4\uff0c\u8bb0\u5f97\u5e26\u4e0a\u5176\u4e2d\u7684\u5355\u5f15\u53f7\uff0c\u4ee5\u6d4b\u8bd5\u4f60\u7684\u65b0\u7684\u5bc6\u94a5\u767b\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### \u6dfb\u52a0\u79c1\u94a5\u5230 ssh-agent\nssh-add ~/.ssh/id_rsa\n### \u82e5\u6267\u884c\u5931\u8d25\uff0c\u63d0\u793a\n### Could not open a connection to your authentication agent\n### \u5219\u6267\u884c\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"eval `ssh-agent`\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"### \u767b\u5f55\nssh 'user@remoteserver'\n")),(0,a.kt)("p",null,"\u5b83\u5c06\u7528\u4f60\u7684\u65b0\u5bc6\u94a5\u767b\u5f55\uff0c\u5982\u679c\u4f60\u4e3a\u4f60\u7684\u79c1\u94a5\u8bbe\u7f6e\u4e86\u5bc6\u7801\uff0c\u5b83\u4f1a\u63d0\u793a\u4f60\u8f93\u5165\u3002"),(0,a.kt)("h3",{id:"\u7f16\u8f91-sshd_config-\u6587\u4ef6"},"\u7f16\u8f91 sshd_config \u6587\u4ef6"),(0,a.kt)("p",null,"\u4e00\u65e6\u4f60\u5df2\u7ecf\u6d4b\u8bd5\u5e76\u4e14\u9a8c\u8bc1\u4e86\u4f60\u7684\u516c\u94a5\u53ef\u4ee5\u767b\u5f55\uff0c\u5c31\u53ef\u4ee5\u53d6\u6d88\u5bc6\u7801\u767b\u5f55\uff0c\u8fd9\u6837\u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u5c31\u4e0d\u4f1a\u88ab\u66b4\u529b\u5bc6\u7801\u653b\u51fb\u3002\u5982\u4e0b\u8bbe\u7f6e\u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config")," \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#\u4fee\u6539\u7aef\u53e3\nPort 2222\n#\u7981\u7528\u5bc6\u7801\u9a8c\u8bc1\nPasswordAuthentication no\n#\u542f\u7528\u5bc6\u94a5\u9a8c\u8bc1\nRSAAuthentication yes\nPubkeyAuthentication yes\n#\u6307\u5b9a\u516c\u94a5\u6570\u636e\u5e93\u6587\u4ef6\nAuthorsizedKeysFile .ssh/authorized_keys\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u542f SSH \u670d\u52a1\u524d\u5efa\u8bae\u591a\u4fdd\u7559\u4e00\u4e2a\u4f1a\u8bdd\u4ee5\u9632\u4e0d\u6d4b")),(0,a.kt)("p",null,"\u7136\u540e\u91cd\u542f\u670d\u52a1\u5668\u4e0a\u7684 SSH \u5b88\u62a4\u8fdb\u7a0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl restart sshd\n")),(0,a.kt)("p",null,"\u4ee5\u540e\u767b\u5f55\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -p 2222 root@servers\n")),(0,a.kt)("h3",{id:"\u624b\u52a8\u589e\u52a0\u7ba1\u7406\u7528\u6237"},"\u624b\u52a8\u589e\u52a0\u7ba1\u7406\u7528\u6237"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u5728== \u540e\u52a0\u5165\u7528\u6237\u6ce8\u91ca\u6807\u8bc6\u65b9\u4fbf\u7ba1\u7406")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo 'ssh-rsa XXXX' >>/root/.ssh/authorized_keys\n# \u590d\u67e5\ncat /root/.ssh/authorized_keys\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u53c2\u8003\u6587\u7ae0:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://linux.cn/article-7683-1.html"},"https://linux.cn/article-7683-1.html")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://linux.cn/article-5776-1.html"},"https://linux.cn/article-5776-1.html"))))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=s,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);