"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8936],{87:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(5893),s=n(1151);const i={},a=void 0,o={id:"FE/rxjs/rxjs\u5b9e\u6218",title:"rxjs\u5b9e\u6218",description:"\u9632\u6296&\u8282\u6d41",source:"@site/docs/FE/rxjs/rxjs\u5b9e\u6218.md",sourceDirName:"FE/rxjs",slug:"/FE/rxjs/rxjs\u5b9e\u6218",permalink:"/docs/FE/rxjs/rxjs\u5b9e\u6218",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710142821,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rxjs_angular",permalink:"/docs/FE/rxjs/rxjs_angular"},next:{title:"PostCSS",permalink:"/docs/FE/style/PostCSS"}},c={},l=[{value:"\u9632\u6296&amp;\u8282\u6d41",id:"\u9632\u6296\u8282\u6d41",level:4},{value:"\u8282\u6d41",id:"\u8282\u6d41",level:4},{value:"\u91cd\u8bd5",id:"\u91cd\u8bd5",level:4},{value:"rxjs \u9ad8\u7ea7\u7f13\u5b58",id:"rxjs-\u9ad8\u7ea7\u7f13\u5b58",level:4}];function d(e){const t={code:"code",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h4,{id:"\u9632\u6296\u8282\u6d41",children:"\u9632\u6296&\u8282\u6d41"}),"\n",(0,r.jsx)(t.p,{children:"3.js"}),"\n",(0,r.jsx)(t.h4,{id:"\u8282\u6d41",children:"\u8282\u6d41"}),"\n",(0,r.jsx)(t.h4,{id:"\u91cd\u8bd5",children:"\u91cd\u8bd5"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:" /** \u91cd\u8bd5\n   *  .pipe(this.backoff(3, 250));\n   */\n  backoff(maxTries, ms) {\n    return pipe(\n      retryWhen(attempts =>\n        zip(range(1, maxTries), attempts).pipe(\n          map(([i]) => i * i),\n          mergeMap(i => timer(i * ms))\n        )\n      )\n    );\n  }\n"})}),"\n",(0,r.jsx)(t.h4,{id:"rxjs-\u9ad8\u7ea7\u7f13\u5b58",children:"rxjs \u9ad8\u7ea7\u7f13\u5b58"})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(7294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);