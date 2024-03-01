"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2611],{7414:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>l});var o=r(5893),a=r(1151);const t={},s=void 0,i={id:"CloudNative/devops/docker",title:"docker",description:"0x01 install",source:"@site/docs/CloudNative/devops/docker.md",sourceDirName:"CloudNative/devops",slug:"/CloudNative/devops/docker",permalink:"/docs/CloudNative/devops/docker",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker-with-mysql",permalink:"/docs/CloudNative/devops/docker-with-mysql"},next:{title:"faas",permalink:"/docs/CloudNative/devops/faas"}},c={},l=[{value:"0x01 install",id:"0x01-install",level:3},{value:"0x02 \u66f4\u6539 docker hub \u6e90",id:"0x02-\u66f4\u6539-docker-hub-\u6e90",level:3},{value:"0x03 image",id:"0x03-image",level:3},{value:"0x04 container",id:"0x04-container",level:3},{value:"\u542f\u52a8\u955c\u50cf",id:"\u542f\u52a8\u955c\u50cf",level:5},{value:"\u5bb9\u5668\u7ba1\u7406",id:"\u5bb9\u5668\u7ba1\u7406",level:5},{value:"\u6784\u5efa",id:"\u6784\u5efa",level:5},{value:"0x05 Dockerfile",id:"0x05-dockerfile",level:3},{value:"0x06 config",id:"0x06-config",level:3},{value:"\u6269\u5bb9",id:"\u6269\u5bb9",level:5},{value:"ref",id:"ref",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"0x01-install",children:"0x01 install"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"debian"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/install/debian/",children:"https://docs.docker.com/engine/install/debian/"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker --help\n\n  attach      Attach local standard input, output, and error streams to a running container\n  build       Build an image from a Dockerfile\n  commit      Create a new image from a container's changes\n  cp          Copy files/folders between a container and the local filesystem\n  create      Create a new container\n  diff        Inspect changes to files or directories on a container's filesystem\n  events      Get real time events from the server\n  exec        Run a command in a running container\n  export      Export a container's filesystem as a tar archive\n  history     Show the history of an image\n  images      List images\n  import      Import the contents from a tarball to create a filesystem image\n  info        Display system-wide information\n  inspect     Return low-level information on Docker objects\n  kill        Kill one or more running containers\n  load        Load an image from a tar archive or STDIN\n  login       Log in to a Docker registry\n  logout      Log out from a Docker registry\n  logs        Fetch the logs of a container\n  pause       Pause all processes within one or more containers\n  port        List port mappings or a specific mapping for the container\n  ps          List containers\n  pull        Pull an image or a repository from a registry\n  push        Push an image or a repository to a registry\n  rename      Rename a container\n  restart     Restart one or more containers\n  rm          Remove one or more containers\n  rmi         Remove one or more images\n  run         Run a command in a new container\n  save        Save one or more images to a tar archive (streamed to STDOUT by default)\n  search      Search the Docker Hub for images\n  start       Start one or more stopped containers\n  stats       Display a live stream of container(s) resource usage statistics\n  stop        Stop one or more running containers\n  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE\n  top         Display the running processes of a container\n  unpause     Unpause all processes within one or more containers\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### \u67e5\u770b\u4fe1\u606f\ndocker info\n"})}),"\n",(0,o.jsx)(n.h3,{id:"0x02-\u66f4\u6539-docker-hub-\u6e90",children:"0x02 \u66f4\u6539 docker hub \u6e90"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://mirrors.ustc.edu.cn/help/dockerhub.html",children:"https://mirrors.ustc.edu.cn/help/dockerhub.html"})}),"\n",(0,o.jsxs)(n.p,{children:["docker \u9ed8\u8ba4\u4f7f\u7528 ",(0,o.jsx)(n.code,{children:"sudo"})]}),"\n",(0,o.jsx)(n.h3,{id:"0x03-image",children:"0x03 image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### \u67e5\u627e\u6307\u5b9a\u955c\u50cf\ndocker search ubuntu\n### \u62c9\u53d6\u955c\u50cf\ndocker pull ubuntu\n### \u67e5\u770b\u955c\u50cf\u5217\u8868\ndocker images\n### \u5220\u9664\u955c\u50cf\ndocker rmi 7aa3095f0856\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u5220\u9664\u955c\u50cf\u9700\u8981\u5148\u5220\u9664\u4f7f\u7528\u955c\u50cf\u7684\u5bb9\u5668"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"0x04-container",children:"0x04 container"}),"\n",(0,o.jsx)(n.h5,{id:"\u542f\u52a8\u955c\u50cf",children:"\u542f\u52a8\u955c\u50cf"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### \u4ee5\u540d\u79f0+\u6807\u7b7e\u5f62\u5f0f\u542f\u52a8\ndocker run -t -i ubuntu:latest /bin/bash\ndocker run hello-world /hello\n### \u4ee5ID\u542f\u52a8\ndocker run fce289e99eb9 /hello\n"})}),"\n",(0,o.jsx)(n.p,{children:"-t\uff1a\u5728\u8be5\u5bb9\u5668\u4e2d\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u7ec8\u7aef\n-i\uff1a\u901a\u8fc7\u5bb9\u5668\u4e2d\u7684\u6807\u51c6\u8f93\u5165\u6d41\u5efa\u7acb\u4ea4\u4e92\u5f0f\u8fde\u63a5"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"\u5982\u679c\u60f3\u8981\u9000\u56de\u5230\u5bbf\u4e3b\u673a\u7684\u7ec8\u7aef\uff0c\u5e76\u4e14\u4e0d\u4e2d\u65ad\u8be5\u5bb9\u5668\u7684\u6267\u884c\uff0c\u53ef\u4ee5\u6309\u4e0b CTRL+P\uff0c\u518d\u6309\u4e0b CTRL+Q\u3002\u73b0\u5728\uff0c\u4f60\u5c31\u5b89\u5168\u7684\u8fd4\u56de\u5230\u4e86\u4f60\u7684\u5bbf\u4e3b\u673a\u7cfb\u7edf\u4e2d\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cDocker \u5bb9\u5668\u4ecd\u7136\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u6211\u4eec\u5e76\u6ca1\u6709\u4e2d\u65ad\u5b83\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.h5,{id:"\u5bb9\u5668\u7ba1\u7406",children:"\u5bb9\u5668\u7ba1\u7406"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### \u67e5\u770b\u542f\u52a8\u7684\u5bb9\u5668\u5217\u8868\ndocker ps\n### \u67e5\u770b\u5bb9\u5668\u5217\u8868\ndocker ps -a\n### \u542f\u52a8\ndocker start 90cb8a003744\n### \u91cd\u65b0\u8fdb\u5165\u542f\u52a8\u7684\u5bb9\u5668\ndocker attach 90cb8a003744\n### \u505c\u6b62\ndocker stop 90cb8a003744\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### \u5220\u9664\u5df2\u505c\u6b62\u7684\u5bb9\u5668\ndocker rm 2ff3cd0cec61\n### \u5220\u9664\u6240\u6709\u7684\u5df2\u7ecf\u505c\u6b62\u7684\u5bb9\u5668\ndocker container prune\n"})}),"\n",(0,o.jsx)(n.h5,{id:"\u6784\u5efa",children:"\u6784\u5efa"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"### \u4ece\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u4e2d\u521b\u5efa Docker \u955c\u50cf\ndocker commit 90cb8a003744 luanxt/ubuntu-bak\n"})}),"\n",(0,o.jsx)(n.h3,{id:"0x05-dockerfile",children:"0x05 Dockerfile"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/engine/reference/builder/",children:"https://docs.docker.com/engine/reference/builder/"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.jianshu.com/p/10ed530766af",children:"https://www.jianshu.com/p/10ed530766af"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://www.cnblogs.com/boshen-hzb/p/6400272.html",children:"https://www.cnblogs.com/boshen-hzb/p/6400272.html"})}),"\n",(0,o.jsx)(n.h3,{id:"0x06-config",children:"0x06 config"}),"\n",(0,o.jsx)(n.h5,{id:"\u6269\u5bb9",children:"\u6269\u5bb9"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'    "graph": "/data/docker"\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u6302\u8f7d\u65b0\u76ee\u5f55\u5230docker\u6839\u76ee\u5f55\nmount -o bind /var/lib/docker /opt/docker\n\n\n\u6c38\u4e45\u4fee\u6539\u5728\u9700\u8981\u5728 /etc/fatab \u6dfb\u52a0:\n\n/opt/docker /var/lib/docker none bind 0 0\n"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h3,{id:"ref",children:"ref"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://linux.cn/article-10940-1.html",children:"https://linux.cn/article-10940-1.html"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>s});var o=r(7294);const a={},t=o.createContext(a);function s(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);