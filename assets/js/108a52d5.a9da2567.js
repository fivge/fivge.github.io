"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1384],{361:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>r});var s=o(5893),t=o(1151);const i={},a=void 0,c={id:"CloudNative/devops/faas",title:"faas",description:"https://mp.weixin.qq.com/s/7WeUUXWIdxWrC70NwBOivg",source:"@site/docs/CloudNative/devops/faas.md",sourceDirName:"CloudNative/devops",slug:"/CloudNative/devops/faas",permalink:"/docs/CloudNative/devops/faas",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"docker",permalink:"/docs/CloudNative/devops/docker"},next:{title:"k3s",permalink:"/docs/CloudNative/devops/k3s"}},l={},r=[];function d(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/7WeUUXWIdxWrC70NwBOivg",children:"https://mp.weixin.qq.com/s/7WeUUXWIdxWrC70NwBOivg"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'kubectl create namespace fission\n\nkubectl -n fission apply -f https://github.com/fission/fission/releases/download/1.7.1/fission-all-1.7.1-minikube.yaml\n\n\ncurl -Lo fission https://github.com/fission/fission/releases/download/1.7.1/fission-cli-linux && chmod +x fission && sudo mv fission /usr/local/bin/\n\nkubectl --namespace fission get svc\n\n\n\nfission env create --name nodejs --image fission/node-env:1.7.1\n\n\nfission env create --name nodejs --image fission/node-env\n\nfission function create --name hello --env nodejs --code hello.js\n\nfission function test --name hello\n\nfission route create --method GET --url /hello --function hello\n\ncurl http://localhost:8888/hello\n\ncurl http://localhost:32783/hello\n\ncurl http://localhost:80/hello\n\nfission function create --name weather --env nodejs --code weather.js\nfission function create --name world --env nodejs --code world.js\n\nfission route create --method POST --url /weather --function weather\n\n\ncurl -qs -H "Content-Type: application/json" -X POST -d \'{"location":"Sieteiglesias, Spain"}\' http://127.0.0.1:31314/weather|jq\n\ncurl -qs -H "Content-Type: application/json" -X POST -d \'{"location":"Sieteiglesias, Spain"}\' http://127.0.0.1:31314/weather|jq\n'})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>a});var s=o(7294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);