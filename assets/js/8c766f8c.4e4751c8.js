"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4927],{7463:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=s(5893),r=s(1151);const o={},i=void 0,c={id:"FE/node/express",title:"express",description:"ws",source:"@site/docs/FE/node/express.md",sourceDirName:"FE/node",slug:"/FE/node/express",permalink:"/docs/FE/node/express",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5c0f\u7a0b\u5e8f",permalink:"/docs/FE/miniprogram/\u5c0f\u7a0b\u5e8f"},next:{title:"javascript",permalink:"/docs/FE/node/javascript"}},a={},l=[{value:"ws",id:"ws",level:3},{value:"assets",id:"assets",level:3},{value:"\u6a21\u677f\u6e32\u67d3",id:"\u6a21\u677f\u6e32\u67d3",level:3},{value:"with ts",id:"with-ts",level:3}];function d(e){const n={code:"code",h3:"h3",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"ws",children:"ws"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  "dependencies": {\n    "ws": "^6.0.0"\n  }\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { Server } from "ws";\n\nconst wsServer = new Server({ port: 8085 });\n\nwsServer.on("connection", (websocket) => {\n  console.log(`WebSocket server listening on port 8085`);\n  websocket.send("This is send by wsserver");\n  websocket.on("message", (message) => {\n    console.log(`get message form angular,message is: ${message}`);\n  });\n});\n\nlet times: number = 0;\n\nsetInterval(() => {\n  if (wsServer.clients) {\n    let num: number = 0;\n    wsServer.clients.forEach((element) => {\n      element.send(\n        `Timeout is 20000, from server You are NO${num}, has ${times}times`\n      );\n      num++;\n      times++;\n    });\n  }\n}, 20000);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"assets",children:"assets"}),"\n",(0,t.jsx)(n.h3,{id:"\u6a21\u677f\u6e32\u67d3",children:"\u6a21\u677f\u6e32\u67d3"}),"\n",(0,t.jsx)(n.h3,{id:"with-ts",children:"with ts"})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(7294);const r={},o=t.createContext(r);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);