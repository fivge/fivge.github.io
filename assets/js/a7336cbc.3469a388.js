"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9944],{9849:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>c,toc:()=>p});var n=s(5893),a=s(1151);const t={},i=void 0,c={id:"FE/rxjs/rxjs_angular",title:"rxjs_angular",description:"map/switchMap",source:"@site/docs/FE/rxjs/rxjs_angular.md",sourceDirName:"FE/rxjs",slug:"/FE/rxjs/rxjs_angular",permalink:"/docs/FE/rxjs/rxjs_angular",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"operators",permalink:"/docs/FE/rxjs/operators"},next:{title:"rxjs\u5b9e\u6218",permalink:"/docs/FE/rxjs/rxjs\u5b9e\u6218"}},o={},p=[{value:"map/switchMap",id:"mapswitchmap",level:3},{value:"Observable",id:"observable",level:3},{value:"unsubscribe",id:"unsubscribe",level:4}];function d(e){const r={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"mapswitchmap",children:"map/switchMap"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"ngOnInit() {\n  this.hero$ = this.route.paramMap.pipe(\n    switchMap((params: ParamMap) =>\n      this.service.getHero(params.get('id')))\n  );\n}\n\nthis.hero$.subscribe(res => console.log(res)); // {id:'1',name:'superman'}\n\nthis.id$ = this.route.paramMap.pipe(map(params => params.get('id')));\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\u4f60\u53ef\u80fd\u60f3\u4f7f\u7528 RxJS \u7684 ",(0,n.jsx)(r.code,{children:"map"})," \u64cd\u4f5c\u7b26\u3002 \u4f46 ",(0,n.jsx)(r.code,{children:"HeroService"})," \u8fd4\u56de\u7684\u662f\u4e00\u4e2a ",(0,n.jsx)(r.code,{children:"Observable"}),"\u3002 \u6240\u4ee5\u4f60\u8981\u6539\u7528 ",(0,n.jsx)(r.code,{children:"switchMap"})," \u64cd\u4f5c\u7b26\u6765\u6253\u5e73\u8fd9\u4e2a ",(0,n.jsx)(r.code,{children:"Observable"})]}),"\n",(0,n.jsx)(r.h3,{id:"observable",children:"Observable"}),"\n",(0,n.jsx)(r.h4,{id:"unsubscribe",children:"unsubscribe"}),"\n",(0,n.jsx)(r.p,{children:"\u5f53\u5728\u7ec4\u4ef6\u4e2d\u8ba2\u9605\u4e00\u4e2a\u53ef\u89c2\u5bdf\u5bf9\u8c61\u65f6\uff0c\u4f60\u901a\u5e38\u603b\u662f\u8981\u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\u53d6\u6d88\u8fd9\u4e2a\u8ba2\u9605\u3002"}),"\n",(0,n.jsxs)(r.p,{children:["\u4f46\u662f\u4e5f\u6709\u5c11\u6570\u4f8b\u5916\u60c5\u51b5\u4e0d\u9700\u8981\u53d6\u6d88\u8ba2\u9605\u3002 ",(0,n.jsx)(r.code,{children:"ActivateRoute"})," \u4e2d\u7684\u5404\u79cd\u53ef\u89c2\u5bdf\u5bf9\u8c61\u5c31\u662f\u5c5e\u4e8e\u8fd9\u79cd\u60c5\u51b5\u3002"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://random-word-api.herokuapp.com/word?number=10",children:"https://random-word-api.herokuapp.com/word?number=10"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://angular.cn/guide/practical-observable-usage",children:"https://angular.cn/guide/practical-observable-usage"})})]})}function l(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,r,s)=>{s.d(r,{Z:()=>c,a:()=>i});var n=s(7294);const a={},t=n.createContext(a);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);