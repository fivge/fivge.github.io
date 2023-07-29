"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4716],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(n),k=o,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||s;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(3117),o=n(102),s=(n(7294),n(3905)),i=["components"],a={},u=void 0,l={unversionedId:"CloudNative/devops/k8s",id:"CloudNative/devops/k8s",title:"k8s",description:"\u5728 MAC \u4e0a\u5b89\u88c5 K8S (kubernets) for Docker Desktop",source:"@site/docs/CloudNative/devops/k8s.md",sourceDirName:"CloudNative/devops",slug:"/CloudNative/devops/k8s",permalink:"/docs/CloudNative/devops/k8s",draft:!1,tags:[],version:"current",lastUpdatedAt:1690668988,formattedLastUpdatedAt:"Jul 29, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"k3s",permalink:"/docs/CloudNative/devops/k3s"},next:{title:"microk8s",permalink:"/docs/CloudNative/devops/microk8s"}},c={},p=[{value:"k8s",id:"k8s",level:4},{value:"minikube",id:"minikube",level:4},{value:"fussion",id:"fussion",level:4}],m={toc:p};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/65559363"},"\u5728 MAC \u4e0a\u5b89\u88c5 K8S (kubernets) for Docker Desktop")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/gotok8s/k8s-docker-desktop-for-mac"},"https://github.com/gotok8s/k8s-docker-desktop-for-mac")),(0,s.kt)("h4",{id:"k8s"},"k8s"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl\n\n\ncurl -LO https://storage.googleapis.com/kubernetes-release/release/v1.17.0/bin/linux/amd64/kubectl\n\n\ncurl -LO https://storage.googleapis.com/kubernetes-release/release/v1.16.4/bin/linux/amd64/kubectl\n\ncurl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl\n")),(0,s.kt)("h4",{id:"minikube"},"minikube"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/linux/"},"https://minikube.sigs.k8s.io/docs/start/linux/")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/minikube/issues/6167"},"https://github.com/kubernetes/minikube/issues/6167")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"\nminikube start  --cpus=2 --disk-size='10g' --image-mirror-country='cn' --image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers'\n\nsudo minikube start --vm-driver=none\n\nsudo minikube start --vm-driver=none --image-mirror-country='cn' --image-repository='registry.cn-hangzhou.aliyuncs.com/google_containers' --kubernetes-version='v1.16.4'\n\nsudo minikube start --vm-driver=none --image-mirror-country='cn' --kubernetes-version='v1.16.4'\n\n\n\n--kubernetes-version v1.12.1\n\n--kubernetes-version='': The k\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"* Configuring local host environment ...\n*\n! The 'none' driver provides limited isolation and may reduce system security and reliability.\n! For more information, see:\n  - https://minikube.sigs.k8s.io/docs/reference/drivers/none/\n*\n! kubectl and minikube configuration will be stored in /root\n! To use kubectl or minikube commands as your own user, you may need to relocate them. For example, to overwrite your own settings, run:\n*\n  - sudo mv /root/.kube /root/.minikube $HOME\n  - sudo chown -R $USER $HOME/.kube $HOME/.minikube\n*\n* This can also be done automatically by setting the env var CHANGE_MINIKUBE_NONE_USER=true\n* Done! kubectl is now configured to use \"minikube\"\n* For best results, install kubectl: https://kubernetes.io/docs/tasks/tools/install-kubectl/\n")),(0,s.kt)("h4",{id:"fussion"},"fussion"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/fission/fission"},"https://github.com/fission/fission")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://docs.fission.io/docs/installation/#install-fission"},"https://docs.fission.io/docs/installation/#install-fission")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://juejin.im/post/5b70da49f265da281b642153"},"\u57fa\u4e8e K8S \u90e8\u7f72 fission \u51fd\u6570\u5373\u670d\u52a1")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/7WeUUXWIdxWrC70NwBOivg"},"https://mp.weixin.qq.com/s/7WeUUXWIdxWrC70NwBOivg")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create namespace fission\n\n\n\n")))}k.isMDXComponent=!0}}]);