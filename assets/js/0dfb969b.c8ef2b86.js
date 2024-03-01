"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2947],{3686:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>o});var l=r(5893),i=r(1151);const c={},s=void 0,t={id:"FE/angular/basics/di",title:"di",description:"\u5bfc\u5165\u6a21\u5757 import Module",source:"@site/docs/FE/angular/basics/di.md",sourceDirName:"FE/angular/basics",slug:"/FE/angular/basics/di",permalink:"/docs/FE/angular/basics/di",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"architecture",permalink:"/docs/FE/angular/basics/architecture"},next:{title:"get-start",permalink:"/docs/FE/angular/basics/get-start"}},d={},o=[{value:"\u5bfc\u5165\u6a21\u5757 import Module",id:"\u5bfc\u5165\u6a21\u5757-import-module",level:4},{value:"\u6ce8\u5165\u670d\u52a1",id:"\u6ce8\u5165\u670d\u52a1",level:4},{value:"\u63d0\u4f9b\u670d\u52a1",id:"\u63d0\u4f9b\u670d\u52a1",level:4},{value:"\u58f0\u660e\u7ec4\u4ef6\u3001\u6307\u4ee4",id:"\u58f0\u660e\u7ec4\u4ef6\u6307\u4ee4",level:4},{value:"\ud83c\udfaf \u547d\u540d\u7a7a\u95f4",id:"-\u547d\u540d\u7a7a\u95f4",level:4},{value:"Dom",id:"dom",level:4},{value:"\u6a21\u677f\u5f15\u7528\u53d8\u91cf",id:"\u6a21\u677f\u5f15\u7528\u53d8\u91cf",level:4},{value:"ng-template ng-container",id:"ng-template-ng-container",level:4},{value:"\u4f9d\u8d56\u6ce8\u5165",id:"\u4f9d\u8d56\u6ce8\u5165",level:2},{value:"construct",id:"construct",level:3},{value:"provider",id:"provider",level:3},{value:"\u591a\u7ea7\u6ce8\u5165",id:"\u591a\u7ea7\u6ce8\u5165",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h4,{id:"\u5bfc\u5165\u6a21\u5757-import-module",children:"\u5bfc\u5165\u6a21\u5757 import Module"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"import { HttpClientModule } from '@angular/common/http';\n\n@NgModule({\n  imports: [HttpClientModule],\n})\nexport class AppModule {}\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u670d\u52a1\u6a21\u5757 \u8def\u7531\u6a21\u5757"}),"\n",(0,l.jsxs)(n.p,{children:["\u7279\u6027\u6a21\u5757 ",(0,l.jsx)(n.em,{children:"feature modules"})]}),"\n",(0,l.jsx)(n.h4,{id:"\u6ce8\u5165\u670d\u52a1",children:"\u6ce8\u5165\u670d\u52a1"}),"\n",(0,l.jsxs)(n.p,{children:["\u6784\u9020\u51fd\u6570\u53ea\u8d1f\u8d23\u58f0\u660e\u8981\u6ce8\u5165\u7684\u5143\u7d20 ",(0,l.jsx)(n.code,{children:"el"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"constructor(private http: HttpClient) { }\nconstructor(private el: ElementRef) { }\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u63d0\u4f9b\u670d\u52a1",children:"\u63d0\u4f9b\u670d\u52a1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// \u7279\u5b9a\u6a21\u5757\n@NgModule({\n  providers: [DocumentService],\n})\nexport class DocumentModule {}\n\n// \u5168\u5c40\n@Injectable({\n  providedIn: 'root',\n})\nexport class DocumentService {\n  constructor() {}\n}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"\u58f0\u660e\u7ec4\u4ef6\u6307\u4ee4",children:"\u58f0\u660e\u7ec4\u4ef6\u3001\u6307\u4ee4"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"@NgModule({\n  declarations: [NziDocumentCenterDirective, DockerComponent],\n})\nexport class DocumentModule {}\n"})}),"\n",(0,l.jsx)(n.h4,{id:"-\u547d\u540d\u7a7a\u95f4",children:"\ud83c\udfaf \u547d\u540d\u7a7a\u95f4"}),"\n",(0,l.jsx)(n.h4,{id:"dom",children:"Dom"}),"\n",(0,l.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u7684 JavaScript \u65b9\u5f0f\u624b\u52a8\u7ed9\u5bbf\u4e3b DOM \u5143\u7d20\u9644\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\u3002 \u4f46\u8fd9\u79cd\u65b9\u6cd5\u81f3\u5c11\u6709\u4e09\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5fc5\u987b\u6b63\u786e\u7684\u4e66\u5199\u4e8b\u4ef6\u76d1\u542c\u5668\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5f53\u6307\u4ee4\u88ab\u9500\u6bc1\u7684\u65f6\u5019\uff0c\u5fc5\u987b",(0,l.jsx)(n.em,{children:"\u62c6\u5378"}),"\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u5fc5\u987b\u76f4\u63a5\u548c DOM API \u6253\u4ea4\u9053\uff0c\u5e94\u8be5\u907f\u514d\u8fd9\u6837\u505a\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u6a21\u677f\u5f15\u7528\u53d8\u91cf",children:"\u6a21\u677f\u5f15\u7528\u53d8\u91cf"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"\u6a21\u677f\u8f93\u5165\u53d8\u91cf"}),"\u662f\u8fd9\u6837\u4e00\u79cd\u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5",(0,l.jsx)(n.em,{children:"\u5728\u5355\u4e2a\u5b9e\u4f8b\u7684\u6a21\u677f\u4e2d"}),"\u5f15\u7528\u5b83\u7684\u503c\u3002 \u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u6709\u597d\u51e0\u4e2a\u6a21\u677f\u8f93\u5165\u53d8\u91cf\uff1a",(0,l.jsx)(n.code,{children:"hero"}),"\u3001",(0,l.jsx)(n.code,{children:"i"})," \u548c ",(0,l.jsx)(n.code,{children:"odd"}),"\u3002 \u5b83\u4eec\u90fd\u662f\u7528 ",(0,l.jsx)(n.code,{children:"let"})," \u4f5c\u4e3a\u524d\u5bfc\u5173\u952e\u5b57\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"\u6a21\u677f\u8f93\u5165\u53d8\u91cf"}),"\u548c",(0,l.jsx)(n.a,{href:"https://angular.cn/guide/template-syntax#ref-vars",children:"\u6a21\u677f\u5f15\u7528\u53d8\u91cf"}),"\u662f",(0,l.jsx)(n.strong,{children:"\u4e0d\u540c\u7684"}),"\uff0c\u65e0\u8bba\u662f\u5728",(0,l.jsx)(n.em,{children:"\u8bed\u4e49"}),"\u4e0a\u8fd8\u662f",(0,l.jsx)(n.em,{children:"\u8bed\u6cd5"}),"\u4e0a\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u4f60\u4f7f\u7528 ",(0,l.jsx)(n.code,{children:"let"})," \u5173\u952e\u5b57\uff08\u5982 ",(0,l.jsx)(n.code,{children:"let hero"}),"\uff09\u5728\u6a21\u677f\u4e2d\u58f0\u660e\u4e00\u4e2a\u6a21\u677f",(0,l.jsx)(n.em,{children:"\u8f93\u5165"}),"\u53d8\u91cf\u3002 \u8fd9\u4e2a\u53d8\u91cf\u7684\u8303\u56f4\u88ab\u9650\u5236\u5728\u6240\u91cd\u590d\u6a21\u677f\u7684",(0,l.jsx)(n.em,{children:"\u5355\u4e00\u5b9e\u4f8b"}),"\u4e0a\u3002 \u4e8b\u5b9e\u4e0a\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u5b83\u7ed3\u6784\u578b\u6307\u4ee4\u4e2d\u4f7f\u7528\u540c\u6837\u7684\u53d8\u91cf\u540d\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u800c\u58f0\u660e\u6a21\u677f",(0,l.jsx)(n.em,{children:"\u5f15\u7528"}),"\u53d8\u91cf\u4f7f\u7528\u7684\u662f\u7ed9\u53d8\u91cf\u540d\u52a0 ",(0,l.jsx)(n.code,{children:"#"})," \u524d\u7f00\u7684\u65b9\u5f0f\uff08",(0,l.jsx)(n.code,{children:"#var"}),"\uff09\u3002 \u4e00\u4e2a",(0,l.jsx)(n.em,{children:"\u5f15\u7528"}),"\u53d8\u91cf\u5f15\u7528\u7684\u662f\u5b83\u6240\u9644\u7740\u5230\u7684\u5143\u7d20\u3001\u7ec4\u4ef6\u6216\u6307\u4ee4\u3002\u5b83\u53ef\u4ee5\u5728",(0,l.jsx)(n.em,{children:"\u6574\u4e2a\u6a21\u677f"}),"\u7684",(0,l.jsx)(n.em,{children:"\u4efb\u610f\u4f4d\u7f6e"}),"\u8bbf\u95ee\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6a21\u677f",(0,l.jsx)(n.em,{children:"\u8f93\u5165"}),"\u53d8\u91cf\u548c",(0,l.jsx)(n.em,{children:"\u5f15\u7528"}),"\u53d8\u91cf\u5177\u6709\u5404\u81ea\u72ec\u7acb\u7684\u547d\u540d\u7a7a\u95f4\u3002",(0,l.jsx)(n.code,{children:"let hero"})," \u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"hero"})," \u548c ",(0,l.jsx)(n.code,{children:"#hero"})," \u4e2d\u7684 ",(0,l.jsx)(n.code,{children:"hero"})," \u5e76\u4e0d\u662f\u540c\u4e00\u4e2a\u53d8\u91cf\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"ng-template-ng-container",children:"ng-template ng-container"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"\u63d0\u4f9b\u5728\u540c\u4e00\u4e2a module \u7684 sercice \u5171\u4eab\u540c\u4e00\u4f5c\u7528\u57df\uff0c\u4e0d\u540c module \u7684\u63d0\u4f9b\u4e0d\u540c\u4f5c\u7528\u57df"}),"\n",(0,l.jsx)(n.p,{children:"\u9ed8\u8ba4 provider: root"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"\u4f9d\u8d56\u6ce8\u5165",children:"\u4f9d\u8d56\u6ce8\u5165"}),"\n",(0,l.jsx)(n.h3,{id:"construct",children:"construct"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u6784\u9020\u51fd\u6570\u5165\u53c2\u4e2d\u6ce8\u5165\uff0c\u800c\u4e0d\u9700\u8981\u5728\u6784\u9020\u51fd\u6570\u4e2d\u6ce8\u5165\uff0cangular \u81ea\u52a8\u5e2e\u52a9\u5b8c\u6210\u8fd9\u4e2a\u64cd\u4f5c \u2014\u2014 \u5728\u5b9e\u4f8b\u5316 component \u65f6\u5019\uff0c\u6ce8\u5165\u670d\u52a1"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd9\u6837\u4e5f\u4e0d\u9700\u8981\u5b9e\u4f8b\u5316\u51fd\u6570"}),"\n",(0,l.jsx)(n.h3,{id:"provider",children:"provider"}),"\n",(0,l.jsx)(n.p,{children:"\u5728 provider \u4e2d\uff0c\u63d0\u4f9b\u8fd9\u4e2a\u670d\u52a1"}),"\n",(0,l.jsx)(n.p,{children:"\u901a\u5e38\u5728 module \u4e2d\uff0c\u4e5f\u53ef\u5728 component \u4e2d\uff0c\u6216\u8005 service \u4e2d\uff08\u4e00\u822c\u4e0d\u4f1a\u8fd9\u6837\u505a\u7684\uff09"}),"\n",(0,l.jsx)(n.h3,{id:"\u591a\u7ea7\u6ce8\u5165",children:"\u591a\u7ea7\u6ce8\u5165"}),"\n",(0,l.jsx)(n.p,{children:"\u670d\u52a1\u4e2d\u6ce8\u5165\u670d\u52a1\u518d\u6ce8\u5165\u670d\u52a1"})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>t,a:()=>s});var l=r(7294);const i={},c=l.createContext(i);function s(e){const n=l.useContext(c);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(c.Provider,{value:n},e.children)}}}]);