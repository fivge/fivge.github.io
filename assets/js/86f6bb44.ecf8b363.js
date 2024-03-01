"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8333],{7301:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(5893),s=t(1151);const o={},i=void 0,a={id:"FE/javascript/esnexts/optional-chaining",title:"optional-chaining",description:"\u53ef\u9009\u94fe",source:"@site/docs/FE/javascript/esnexts/optional-chaining.md",sourceDirName:"FE/javascript/esnexts",slug:"/FE/javascript/esnexts/optional-chaining",permalink:"/docs/FE/javascript/esnexts/optional-chaining",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"generator-function",permalink:"/docs/FE/javascript/esnexts/generator-function"},next:{title:"yield",permalink:"/docs/FE/javascript/esnexts/yield"}},c={},l=[{value:"\u53ef\u9009\u94fe",id:"\u53ef\u9009\u94fe",level:3},{value:"\u5bf9\u8c61\u5c5e\u6027",id:"\u5bf9\u8c61\u5c5e\u6027",level:4},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:4},{value:"\u6570\u7ec4\u5143\u7d20",id:"\u6570\u7ec4\u5143\u7d20",level:4}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"\u53ef\u9009\u94fe",children:"\u53ef\u9009\u94fe"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E5%8F%AF%E9%80%89%E9%93%BE",children:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/%E5%8F%AF%E9%80%89%E9%93%BE"})}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u9009\u94fe\u64cd\u4f5c\u7b26?.\u80fd\u591f\u53bb\u8bfb\u53d6\u4e00\u4e2a\u88ab\u8fde\u63a5\u5bf9\u8c61\u7684\u6df1\u5c42\u6b21\u7684\u5c5e\u6027\u7684\u503c\u800c\u65e0\u9700\u660e\u786e\u6821\u9a8c\u94fe\u6761\u4e0a\u6bcf\u4e00\u4e2a\u5f15\u7528\u7684\u6709\u6548\u6027\u3002?.\u8fd0\u7b97\u7b26\u529f\u80fd\u7c7b\u4f3c\u4e8e.\u8fd0\u7b97\u7b26\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5982\u679c\u94fe\u6761\u4e0a\u7684\u4e00\u4e2a\u5f15\u7528\u662f nullish (null \u6216 undefined)\uff0c.\u64cd\u4f5c\u7b26\u4f1a\u5f15\u8d77\u4e00\u4e2a\u9519\u8bef\uff0c?.\u64cd\u4f5c\u7b26\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u4f1a\u6309\u7167\u77ed\u8def\u8ba1\u7b97\u7684\u65b9\u5f0f\u8fd4\u56de\u4e00\u4e2a undefined\u3002\u5f53?.\u64cd\u4f5c\u7b26\u7528\u4e8e\u51fd\u6570\u8c03\u7528\u65f6\uff0c\u5982\u679c\u8be5\u51fd\u6570\u4e0d\u5b58\u5728\u4e5f\u5c06\u4f1a\u8fd4\u56de undefined\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u5bf9\u8c61\u5c5e\u6027",children:"\u5bf9\u8c61\u5c5e\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u8fc7\u4f7f\u7528?.\u64cd\u4f5c\u7b26\u53d6\u4ee3.\u64cd\u4f5c\u7b26\u3002JavaScript \u77e5\u9053\u5728\u5c1d\u8bd5\u8bbf\u95ee obj.first.second \u4e4b\u524d\u5148\u660e\u786e\u7684\u6821\u9a8c\u5e76\u786e\u5b9a obj.firstt \u662f\u975e null \u4e14\u975e undefined\u3002\u5982\u679c obj.first \u662f null \u6216 undefined\uff0c\u8868\u8fbe\u5f0f\u5c06\u4f1a\u77ed\u8def\u8ba1\u7b97\u76f4\u63a5\u8fd4\u56de undefined\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"\u51fd\u6570",children:"\u51fd\u6570"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let result = someInterface.customMethod?.();\n"})}),"\n",(0,r.jsx)(n.h4,{id:"\u6570\u7ec4\u5143\u7d20",children:"\u6570\u7ec4\u5143\u7d20"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"let arrayItem = arr?.[42];\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'let obj =\n  Math.random() < 0.5\n    ? null\n    : {\n        first: {\n          second: "value",\n        },\n        arr: [\n          {\n            times: "10",\n          },\n        ],\n        customMethod() {\n          return "custom function";\n        },\n      };\n\nlet name, times, arr4, fun;\n\n// before\n\n// if (obj && obj.first && obj.first.second) {\n//   name = obj.first.second;\n// }\n\n// if (obj && obj.arr && obj.arr.length > 0 && obj.arr[0].times) {\n//   times = obj.arr[0].times;\n// }\n\n// if (obj && obj.customMethod()) {\n//   fun = obj.customMethod();\n// }\n\n// after\n\nname = obj?.first?.second;\n\ntimes = obj?.arr[0]?.times;\n\narr4 = obj?.arr?.[3];\n\nfun = obj?.customMethod?.();\n\nconsole.log(name, times, arr4, fun);\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);