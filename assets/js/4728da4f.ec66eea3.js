"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[123],{2248:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>a,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var s=r(5893),l=r(1151);const t={},c=void 0,i={id:"FE/typescript/decorators",title:"decorators",description:"\u88c5\u9970\u5668",source:"@site/docs/FE/typescript/decorators.md",sourceDirName:"FE/typescript",slug:"/FE/typescript/decorators",permalink:"/docs/FE/typescript/decorators",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1706552096,formattedLastUpdatedAt:"Jan 29, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tree",permalink:"/docs/FE/tree"},next:{title:"tslint-eslint",permalink:"/docs/FE/typescript/tslint-eslint"}},d={},o=[{value:"\u88c5\u9970\u5668",id:"\u88c5\u9970\u5668",level:3},{value:"\u88c5\u9970\u5668\u5de5\u5382",id:"\u88c5\u9970\u5668\u5de5\u5382",level:4},{value:"\u88c5\u9970\u5668\u7ec4\u5408",id:"\u88c5\u9970\u5668\u7ec4\u5408",level:4},{value:"\u88c5\u9970\u5668\u6c42\u503c",id:"\u88c5\u9970\u5668\u6c42\u503c",level:4},{value:"\u7c7b\u88c5\u9970\u5668",id:"\u7c7b\u88c5\u9970\u5668",level:4},{value:"\u65b9\u6cd5\u88c5\u9970\u5668",id:"\u65b9\u6cd5\u88c5\u9970\u5668",level:4},{value:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668",id:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668",level:4},{value:"\u5c5e\u6027\u88c5\u9970\u5668",id:"\u5c5e\u6027\u88c5\u9970\u5668",level:4},{value:"\u53c2\u6570\u88c5\u9970\u5668",id:"\u53c2\u6570\u88c5\u9970\u5668",level:4},{value:"\u5143\u6570\u636e",id:"\u5143\u6570\u636e",level:4},{value:"ref",id:"ref",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"\u88c5\u9970\u5668",children:"\u88c5\u9970\u5668"}),"\n",(0,s.jsx)(n.p,{children:"\u88c5\u9970\u5668\uff08Decorators\uff09\u4e3a\u6211\u4eec\u5728\u7c7b\u7684\u58f0\u660e\u53ca\u6210\u5458\u4e0a\u901a\u8fc7\u5143\u7f16\u7a0b\u8bed\u6cd5\u6dfb\u52a0\u6807\u6ce8\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u5f0f\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u82e5\u8981\u542f\u7528\u5b9e\u9a8c\u6027\u7684\u88c5\u9970\u5668\u7279\u6027\uff0c\u5fc5\u987b\u542f\u7528 experimentalDecorators \u7f16\u8bd1\u5668\u9009\u9879"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u88c5\u9970\u5668\u662f\u4e00\u79cd\u7279\u6b8a\u7c7b\u578b\u7684\u58f0\u660e\uff0c\u5b83\u80fd\u591f\u88ab\u9644\u52a0\u5230\u7c7b\u58f0\u660e\uff0c\u65b9\u6cd5\uff0c \u8bbf\u95ee\u7b26\uff0c\u5c5e\u6027\u6216\u53c2\u6570\u4e0a\u3002 \u88c5\u9970\u5668\u4f7f\u7528 @expression \u8fd9\u79cd\u5f62\u5f0f\uff0cexpression \u6c42\u503c\u540e\u5fc5\u987b\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u5b83\u4f1a\u5728\u8fd0\u884c\u65f6\u88ab\u8c03\u7528\uff0c\u88ab\u88c5\u9970\u7684\u58f0\u660e\u4fe1\u606f\u505a\u4e3a\u53c2\u6570\u4f20\u5165\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'function sealed(target) {\n  // do something with "target" ...\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u88c5\u9970\u5668\u5de5\u5382",children:"\u88c5\u9970\u5668\u5de5\u5382"}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u6211\u4eec\u8981\u5b9a\u5236\u4e00\u4e2a\u4fee\u9970\u5668\u5982\u4f55\u5e94\u7528\u5230\u4e00\u4e2a\u58f0\u660e\u4e0a\uff0c\u6211\u4eec\u5f97\u5199\u4e00\u4e2a\u88c5\u9970\u5668\u5de5\u5382\u51fd\u6570\u3002 \u88c5\u9970\u5668\u5de5\u5382\u5c31\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u51fd\u6570\uff0c\u5b83\u8fd4\u56de\u4e00\u4e2a\u8868\u8fbe\u5f0f\uff0c\u4ee5\u4f9b\u88c5\u9970\u5668\u5728\u8fd0\u884c\u65f6\u8c03\u7528\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u5f0f\u6765\u5199\u4e00\u4e2a\u88c5\u9970\u5668\u5de5\u5382\u51fd\u6570\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'function color(value: string) {\n  // \u8fd9\u662f\u4e00\u4e2a\u88c5\u9970\u5668\u5de5\u5382\n  return function (target) {\n    //  \u8fd9\u662f\u88c5\u9970\u5668\n    // do something with "target" and "value"...\n  };\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u88c5\u9970\u5668\u7ec4\u5408",children:"\u88c5\u9970\u5668\u7ec4\u5408"}),"\n",(0,s.jsx)(n.p,{children:"\u591a\u4e2a\u88c5\u9970\u5668\u53ef\u4ee5\u540c\u65f6\u5e94\u7528\u5230\u4e00\u4e2a\u58f0\u660e\u4e0a\uff0c\u5c31\u50cf\u4e0b\u9762\u7684\u793a\u4f8b\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e66\u5199\u5728\u540c\u4e00\u884c\u4e0a\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@f @g x\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e66\u5199\u5728\u591a\u884c\u4e0a\uff1a"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"@f\n@g\nx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u591a\u4e2a\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u4e00\u4e2a\u58f0\u660e\u4e0a\uff0c\u5b83\u4eec\u6c42\u503c\u65b9\u5f0f\u4e0e\u590d\u5408\u51fd\u6570\u76f8\u4f3c\u3002\u5728\u8fd9\u4e2a\u6a21\u578b\u4e0b\uff0c\u5f53\u590d\u5408",(0,s.jsx)(n.em,{children:"f"}),"\u548c",(0,s.jsx)(n.em,{children:"g"}),"\u65f6\uff0c\u590d\u5408\u7684\u7ed3\u679c(",(0,s.jsx)(n.em,{children:"f"})," \u2218 ",(0,s.jsx)(n.em,{children:"g"}),")(",(0,s.jsx)(n.em,{children:"x"}),")\u7b49\u540c\u4e8e",(0,s.jsx)(n.em,{children:"f"}),"(",(0,s.jsx)(n.em,{children:"g"}),"(",(0,s.jsx)(n.em,{children:"x"}),"))\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u540c\u6837\u7684\uff0c\u5728 TypeScript \u91cc\uff0c\u5f53\u591a\u4e2a\u88c5\u9970\u5668\u5e94\u7528\u5728\u4e00\u4e2a\u58f0\u660e\u4e0a\u65f6\u4f1a\u8fdb\u884c\u5982\u4e0b\u6b65\u9aa4\u7684\u64cd\u4f5c\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u7531\u4e0a\u81f3\u4e0b\u4f9d\u6b21\u5bf9\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u6c42\u503c\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6c42\u503c\u7684\u7ed3\u679c\u4f1a\u88ab\u5f53\u4f5c\u51fd\u6570\uff0c\u7531\u4e0b\u81f3\u4e0a\u4f9d\u6b21\u8c03\u7528\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'function f() {\n  console.log("f(): evaluated");\n  return function (\n    target,\n    propertyKey: string,\n    descriptor: PropertyDescriptor\n  ) {\n    console.log("f(): called");\n  };\n}\n\nfunction g() {\n  console.log("g(): evaluated");\n  return function (\n    target,\n    propertyKey: string,\n    descriptor: PropertyDescriptor\n  ) {\n    console.log("g(): called");\n  };\n}\n\nclass C {\n  @f()\n  @g()\n  method() {}\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u63a7\u5236\u53f0\u91cc\u4f1a\u6253\u5370\u51fa\u5982\u4e0b\u7ed3\u679c\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"f(): evaluated\ng(): evaluated\ng(): called\nf(): called\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u88c5\u9970\u5668\u6c42\u503c",children:"\u88c5\u9970\u5668\u6c42\u503c"}),"\n",(0,s.jsx)(n.p,{children:"\u7c7b\u4e2d\u4e0d\u540c\u58f0\u660e\u4e0a\u7684\u88c5\u9970\u5668\u5c06\u6309\u4ee5\u4e0b\u89c4\u5b9a\u7684\u987a\u5e8f\u5e94\u7528\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"\u53c2\u6570\u88c5\u9970\u5668"}),"\uff0c\u7136\u540e\u4f9d\u6b21\u662f",(0,s.jsx)(n.em,{children:"\u65b9\u6cd5\u88c5\u9970\u5668"}),"\uff0c",(0,s.jsx)(n.em,{children:"\u8bbf\u95ee\u7b26\u88c5\u9970\u5668"}),"\uff0c\u6216",(0,s.jsx)(n.em,{children:"\u5c5e\u6027\u88c5\u9970\u5668"}),"\u5e94\u7528\u5230\u6bcf\u4e2a\u5b9e\u4f8b\u6210\u5458\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"\u53c2\u6570\u88c5\u9970\u5668"}),"\uff0c\u7136\u540e\u4f9d\u6b21\u662f",(0,s.jsx)(n.em,{children:"\u65b9\u6cd5\u88c5\u9970\u5668"}),"\uff0c",(0,s.jsx)(n.em,{children:"\u8bbf\u95ee\u7b26\u88c5\u9970\u5668"}),"\uff0c\u6216",(0,s.jsx)(n.em,{children:"\u5c5e\u6027\u88c5\u9970\u5668"}),"\u5e94\u7528\u5230\u6bcf\u4e2a\u9759\u6001\u6210\u5458\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"\u53c2\u6570\u88c5\u9970\u5668"}),"\u5e94\u7528\u5230\u6784\u9020\u51fd\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"\u7c7b\u88c5\u9970\u5668"}),"\u5e94\u7528\u5230\u7c7b\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"\u7c7b\u88c5\u9970\u5668",children:"\u7c7b\u88c5\u9970\u5668"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u7c7b\u88c5\u9970\u5668"}),"\u5728\u7c7b\u58f0\u660e\u4e4b\u524d\u88ab\u58f0\u660e\uff08\u7d27\u9760\u7740\u7c7b\u58f0\u660e\uff09\u3002 \u7c7b\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u7c7b\u6784\u9020\u51fd\u6570\uff0c\u53ef\u4ee5\u7528\u6765\u76d1\u89c6\uff0c\u4fee\u6539\u6216\u66ff\u6362\u7c7b\u5b9a\u4e49\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u7c7b\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c",(0,s.jsx)(n.strong,{children:"\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4f5c\u4e3a\u5176\u552f\u4e00\u7684\u53c2\u6570"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u7c7b\u88c5\u9970\u5668\u8fd4\u56de\u4e00\u4e2a\u503c\uff0c\u5b83\u4f1a\u4f7f\u7528\u63d0\u4f9b\u7684\u6784\u9020\u51fd\u6570\u6765\u66ff\u6362\u7c7b\u7684\u58f0\u660e\u3002"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u4f60\u8981\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6784\u9020\u51fd\u6570\uff0c\u4f60\u5fc5\u987b\u6ce8\u610f\u5904\u7406\u597d\u539f\u6765\u7684\u539f\u578b\u94fe\u3002 \u5728\u8fd0\u884c\u65f6\u7684\u88c5\u9970\u5668\u8c03\u7528\u903b\u8f91\u4e2d\u4e0d\u4f1a\u4e3a\u4f60\u505a\u8fd9\u4e9b\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4e0b\u9762\u662f\u4e00\u4e2a\u91cd\u8f7d\u6784\u9020\u51fd\u6570\u7684\u4f8b\u5b50\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'function classDecorator<T extends { new (...args: any[]): {} }>(\n  constructor: T\n) {\n  return class extends constructor {\n    newProperty = "new property";\n    hello = "override";\n  };\n}\n\n@classDecorator\nclass Greeter {\n  property = "property";\n  hello: string;\n  constructor(m: string) {\n    this.hello = m;\n  }\n}\n\nconsole.log(new Greeter("world"));\n'})}),"\n",(0,s.jsx)(n.h4,{id:"\u65b9\u6cd5\u88c5\u9970\u5668",children:"\u65b9\u6cd5\u88c5\u9970\u5668"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u65b9\u6cd5\u88c5\u9970\u5668"}),"\u58f0\u660e\u5728\u4e00\u4e2a\u65b9\u6cd5\u7684\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u65b9\u6cd5\u58f0\u660e\uff09\u3002 \u5b83\u4f1a\u88ab\u5e94\u7528\u5230\u65b9\u6cd5\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u4e0a\uff0c\u53ef\u4ee5\u7528\u6765\u76d1\u89c6\uff0c\u4fee\u6539\u6216\u8005\u66ff\u6362\u65b9\u6cd5\u5b9a\u4e49\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u65b9\u6cd5\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u4f20\u5165\u4e0b\u5217 3 \u4e2a\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u9759\u6001\u6210\u5458\u6765\u8bf4\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5bf9\u4e8e\u5b9e\u4f8b\u6210\u5458\u662f\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6210\u5458\u7684\u540d\u5b57\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u6210\u5458\u7684",(0,s.jsx)(n.em,{children:"\u5c5e\u6027\u63cf\u8ff0\u7b26"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u65b9\u6cd5\u88c5\u9970\u5668\u8fd4\u56de\u4e00\u4e2a\u503c\uff0c\u5b83\u4f1a\u88ab\u7528\u4f5c\u65b9\u6cd5\u7684",(0,s.jsx)(n.em,{children:"\u5c5e\u6027\u63cf\u8ff0\u7b26"}),"\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668",children:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668"}),"\u58f0\u660e\u5728\u4e00\u4e2a\u8bbf\u95ee\u5668\u7684\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u8bbf\u95ee\u5668\u58f0\u660e\uff09\u3002 \u8bbf\u95ee\u5668\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u8bbf\u95ee\u5668\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26\u5e76\u4e14\u53ef\u4ee5\u7528\u6765\u76d1\u89c6\uff0c\u4fee\u6539\u6216\u66ff\u6362\u4e00\u4e2a\u8bbf\u95ee\u5668\u7684\u5b9a\u4e49"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f \u2003 TypeScript \u4e0d\u5141\u8bb8\u540c\u65f6\u88c5\u9970\u4e00\u4e2a\u6210\u5458\u7684",(0,s.jsx)(n.code,{children:"get"}),"\u548c",(0,s.jsx)(n.code,{children:"set"}),"\u8bbf\u95ee\u5668\u3002\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\uff0c\u4e00\u4e2a\u6210\u5458\u7684\u6240\u6709\u88c5\u9970\u7684\u5fc5\u987b\u5e94\u7528\u5728\u6587\u6863\u987a\u5e8f\u7684\u7b2c\u4e00\u4e2a\u8bbf\u95ee\u5668\u4e0a\u3002\u8fd9\u662f\u56e0\u4e3a\uff0c\u5728\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u4e00\u4e2a",(0,s.jsx)(n.em,{children:"\u5c5e\u6027\u63cf\u8ff0\u7b26"}),"\u65f6\uff0c\u5b83\u8054\u5408\u4e86",(0,s.jsx)(n.code,{children:"get"}),"\u548c",(0,s.jsx)(n.code,{children:"set"}),"\u8bbf\u95ee\u5668\uff0c\u800c\u4e0d\u662f\u5206\u5f00\u58f0\u660e\u7684\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u8bbf\u95ee\u5668\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u4f20\u5165\u4e0b\u5217 3 \u4e2a\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u9759\u6001\u6210\u5458\u6765\u8bf4\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5bf9\u4e8e\u5b9e\u4f8b\u6210\u5458\u662f\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6210\u5458\u7684\u540d\u5b57\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6210\u5458\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u8bbf\u95ee\u5668\u88c5\u9970\u5668\u8fd4\u56de\u4e00\u4e2a\u503c\uff0c\u5b83\u4f1a\u88ab\u7528\u4f5c\u65b9\u6cd5\u7684\u5c5e\u6027\u63cf\u8ff0\u7b26"}),"\n",(0,s.jsx)(n.h4,{id:"\u5c5e\u6027\u88c5\u9970\u5668",children:"\u5c5e\u6027\u88c5\u9970\u5668"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u5c5e\u6027\u88c5\u9970\u5668"}),"\u58f0\u660e\u5728\u4e00\u4e2a\u5c5e\u6027\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u5c5e\u6027\u58f0\u660e\uff09"]}),"\n",(0,s.jsx)(n.p,{children:"\u5c5e\u6027\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u4f20\u5165\u4e0b\u5217 2 \u4e2a\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u9759\u6001\u6210\u5458\u6765\u8bf4\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5bf9\u4e8e\u5b9e\u4f8b\u6210\u5458\u662f\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6210\u5458\u7684\u540d\u5b57\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\u6ce8\u610f \u2003 ",(0,s.jsx)(n.em,{children:"\u5c5e\u6027\u63cf\u8ff0\u7b26"}),"\u4e0d\u4f1a\u505a\u4e3a\u53c2\u6570\u4f20\u5165\u5c5e\u6027\u88c5\u9970\u5668\uff0c\u8fd9\u4e0e TypeScript \u662f\u5982\u4f55\u521d\u59cb\u5316\u5c5e\u6027\u88c5\u9970\u5668\u7684\u6709\u5173\u3002 \u56e0\u4e3a\u76ee\u524d\u6ca1\u6709\u529e\u6cd5\u5728\u5b9a\u4e49\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\u7684\u6210\u5458\u65f6\u63cf\u8ff0\u4e00\u4e2a\u5b9e\u4f8b\u5c5e\u6027\uff0c\u5e76\u4e14\u6ca1\u529e\u6cd5\u76d1\u89c6\u6216\u4fee\u6539\u4e00\u4e2a\u5c5e\u6027\u7684\u521d\u59cb\u5316\u65b9\u6cd5\u3002\u8fd4\u56de\u503c\u4e5f\u4f1a\u88ab\u5ffd\u7565\u3002\u56e0\u6b64\uff0c\u5c5e\u6027\u63cf\u8ff0\u7b26\u53ea\u80fd\u7528\u6765\u76d1\u89c6\u7c7b\u4e2d\u662f\u5426\u58f0\u660e\u4e86\u67d0\u4e2a\u540d\u5b57\u7684\u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u7528\u5b83\u6765\u8bb0\u5f55\u8fd9\u4e2a\u5c5e\u6027\u7684\u5143\u6570\u636e\uff0c\u5982\u4e0b\u4f8b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'class Greeter {\n  @format("Hello, %s")\n  greeting: string;\n\n  constructor(message: string) {\n    this.greeting = message;\n  }\n  greet() {\n    let formatString = getFormat(this, "greeting");\n    return formatString.replace("%s", this.greeting);\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u7136\u540e\u5b9a\u4e49",(0,s.jsx)(n.code,{children:"@format"}),"\u88c5\u9970\u5668\u548c",(0,s.jsx)(n.code,{children:"getFormat"}),"\u51fd\u6570\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import "reflect-metadata";\n\nconst formatMetadataKey = Symbol("format");\n\nfunction format(formatString: string) {\n  return Reflect.metadata(formatMetadataKey, formatString);\n}\n\nfunction getFormat(target: any, propertyKey: string) {\n  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a",(0,s.jsx)(n.code,{children:'@format("Hello, %s")'}),"\u88c5\u9970\u5668\u662f\u4e2a\u88c5\u9970\u5668\u5de5\u5382\u3002 \u5f53 ",(0,s.jsx)(n.code,{children:'@format("Hello, %s")'}),"\u88ab\u8c03\u7528\u65f6\uff0c\u5b83\u6dfb\u52a0\u4e00\u6761\u8fd9\u4e2a\u5c5e\u6027\u7684\u5143\u6570\u636e\uff0c\u901a\u8fc7",(0,s.jsx)(n.code,{children:"reflect-metadata"}),"\u5e93\u91cc\u7684",(0,s.jsx)(n.code,{children:"Reflect.metadata"}),"\u51fd\u6570\u3002 \u5f53 ",(0,s.jsx)(n.code,{children:"getFormat"}),"\u88ab\u8c03\u7528\u65f6\uff0c\u5b83\u8bfb\u53d6\u683c\u5f0f\u7684\u5143\u6570\u636e\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u53c2\u6570\u88c5\u9970\u5668",children:"\u53c2\u6570\u88c5\u9970\u5668"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"\u53c2\u6570\u88c5\u9970\u5668"}),"\u58f0\u660e\u5728\u4e00\u4e2a\u53c2\u6570\u58f0\u660e\u4e4b\u524d\uff08\u7d27\u9760\u7740\u53c2\u6570\u58f0\u660e\uff09\u3002 \u53c2\u6570\u88c5\u9970\u5668\u5e94\u7528\u4e8e\u7c7b\u6784\u9020\u51fd\u6570\u6216\u65b9\u6cd5\u58f0\u660e"]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u88c5\u9970\u5668\u8868\u8fbe\u5f0f\u4f1a\u5728\u8fd0\u884c\u65f6\u5f53\u4f5c\u51fd\u6570\u88ab\u8c03\u7528\uff0c\u4f20\u5165\u4e0b\u5217 3 \u4e2a\u53c2\u6570\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u5bf9\u4e8e\u9759\u6001\u6210\u5458\u6765\u8bf4\u662f\u7c7b\u7684\u6784\u9020\u51fd\u6570\uff0c\u5bf9\u4e8e\u5b9e\u4f8b\u6210\u5458\u662f\u7c7b\u7684\u539f\u578b\u5bf9\u8c61\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u6210\u5458\u7684\u540d\u5b57\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u53c2\u6570\u5728\u51fd\u6570\u53c2\u6570\u5217\u8868\u4e2d\u7684\u7d22\u5f15\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u6ce8\u610f \u2003 \u53c2\u6570\u88c5\u9970\u5668\u53ea\u80fd\u7528\u6765\u76d1\u89c6\u4e00\u4e2a\u65b9\u6cd5\u7684\u53c2\u6570\u662f\u5426\u88ab\u4f20\u5165\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u88c5\u9970\u5668\u7684\u8fd4\u56de\u503c\u4f1a\u88ab\u5ffd\u7565\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u5143\u6570\u636e",children:"\u5143\u6570\u636e"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e9b\u4f8b\u5b50\u4f7f\u7528\u4e86",(0,s.jsx)(n.code,{children:"reflect-metadata"}),"\u5e93\u6765\u652f\u6301",(0,s.jsx)(n.a,{href:"https://github.com/rbuckton/ReflectDecorators",children:"\u5b9e\u9a8c\u6027\u7684 metadata API"}),"\u3002 \u8fd9\u4e2a\u5e93\u8fd8\u4e0d\u662f ECMAScript (JavaScript)\u6807\u51c6\u7684\u4e00\u90e8\u5206\u3002 \u7136\u800c\uff0c\u5f53\u88c5\u9970\u5668\u88ab ECMAScript \u5b98\u65b9\u6807\u51c6\u91c7\u7eb3\u540e\uff0c\u8fd9\u4e9b\u6269\u5c55\u4e5f\u5c06\u88ab\u63a8\u8350\u7ed9 ECMAScript \u4ee5\u91c7\u7eb3"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"yarn add reflect-metadata\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["TypeScript \u652f\u6301\u4e3a\u5e26\u6709\u88c5\u9970\u5668\u7684\u58f0\u660e\u751f\u6210\u5143\u6570\u636e\u3002 \u9700\u8981\u542f\u7528",(0,s.jsx)(n.code,{children:"emitDecoratorMetadata"}),"\u7f16\u8bd1\u5668\u9009\u9879"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5f53\u542f\u7528\u540e\uff0c\u53ea\u8981",(0,s.jsx)(n.code,{children:"reflect-metadata"}),"\u5e93\u88ab\u5f15\u5165\u4e86\uff0c\u8bbe\u8ba1\u9636\u6bb5\u6dfb\u52a0\u7684\u7c7b\u578b\u4fe1\u606f\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u4f7f\u7528"]}),"\n",(0,s.jsx)(n.h4,{id:"ref",children:"ref"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.tslang.cn/docs/handbook/decorators.html",children:"https://www.tslang.cn/docs/handbook/decorators.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/decorators.html",children:"https://www.typescriptlang.org/docs/handbook/decorators.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.mls-tech.info/web/angular/angular-typescript-decorator/",children:"https://www.mls-tech.info/web/angular/angular-typescript-decorator/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/22277764",children:"https://zhuanlan.zhihu.com/p/22277764"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.cnblogs.com/dashnowords/p/10158537.html",children:"https://www.cnblogs.com/dashnowords/p/10158537.html"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.jianshu.com/p/e280d916495b",children:"https://www.jianshu.com/p/e280d916495b"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.zhihu.com/question/68257128",children:"https://www.zhihu.com/question/68257128"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.im/post/5b41f76be51d4518f140f9e4",children:"https://juejin.im/post/5b41f76be51d4518f140f9e4"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var s=r(7294);const l={},t=s.createContext(l);function c(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);