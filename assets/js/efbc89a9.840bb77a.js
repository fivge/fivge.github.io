"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8157],{4905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var s=t(5893),r=t(1151);const o={},c=void 0,l={id:"FE/angular/basics/http",title:"http",description:"http",source:"@site/docs/FE/angular/basics/http.md",sourceDirName:"FE/angular/basics",slug:"/FE/angular/basics/http",permalink:"/docs/FE/angular/basics/http",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"get-start",permalink:"/docs/FE/angular/basics/get-start"},next:{title:"lifecycle-hooks",permalink:"/docs/FE/angular/basics/lifecycle-hooks"}},a={},i=[{value:"http",id:"http",level:2},{value:"<code>xmlHttpRequset</code>(<code>xhr</code>)",id:"xmlhttprequsetxhr",level:3},{value:"request TODO\ud83d\udc0e",id:"request-todo",level:4},{value:"<code>fetch()</code>",id:"fetch",level:3},{value:"<code>websocket</code>",id:"websocket",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"http",children:"http"}),"\n",(0,s.jsxs)(n.h3,{id:"xmlhttprequsetxhr",children:[(0,s.jsx)(n.code,{children:"xmlHttpRequset"}),"(",(0,s.jsx)(n.code,{children:"xhr"}),")"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://angular.cn/guide/http",children:"https://angular.cn/guide/http"})}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u60f3\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"HttpClient"}),"\uff0c\u5c31\u8981\u5148\u5bfc\u5165 Angular \u7684 ",(0,s.jsx)(n.code,{children:"HttpClientModule"}),"\u3002\u5927\u591a\u6570\u5e94\u7528\u90fd\u4f1a\u5728\u6839\u6a21\u5757 ",(0,s.jsx)(n.code,{children:"AppModule"})," \u4e2d\u5bfc\u5165\u5b83\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { HttpClientModule } from "@angular/common/http";\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    // import HttpClientModule after BrowserModule.\n    HttpClientModule\n  ]\n})\nexport class AppModule {}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"request-todo",children:"request TODO\ud83d\udc0e"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u5b9e\u73b0 get\u3001delete \u8bf7\u6c42\u53d1\u9001 body"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"fetch",children:(0,s.jsx)(n.code,{children:"fetch()"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch",children:"https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:".service.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'import { from } from "rxjs";\n\n// GET\n  fetch() {\n    return from(\n      fetch("http://117.73.12.207:3000/mock/52/users", {\n        method: "GET",\n        headers: {\n          Au: "xx"\n        }\n      })\n    );\n  }\n\n// POST\n  fetchPut() {\n    return from(\n      fetch("http://117.73.12.207:3000/mock/52/user", {\n        method: "PUT",\n        headers: {\n          Au: "xx",\n          "Content-Type": "application/json"\n        },\n        body: JSON.stringify([\n          {\n            userName: "laboris aliquip",\n            phone: "culpa aliqua voluptate"\n          },\n          {\n            userName: "elit nisi sint culpa nostrud",\n            phone: "consectetur non"\n          },\n          {\n            userName: "sint",\n            phone: "Excepteur aute"\n          },\n          {\n            userName: "magna",\n            phone: "non"\n          }\n        ])\n      })\n    );\n  }\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:".component.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"  fetch() {\n    this.service.fetch().subscribe();\n  }\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Q&A"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/36292537/what-is-an-opaque-response-and-what-purpose-does-it-serve",children:"https://stackoverflow.com/questions/36292537/what-is-an-opaque-response-and-what-purpose-does-it-serve"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"'mode': 'no-cors'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"websocket",children:(0,s.jsx)(n.code,{children:"websocket"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:".service.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { Injectable } from "@angular/core";\nimport { Observable } from "rxjs";\n\n@Injectable({\n  providedIn: "root"\n})\nexport class WebSocketService {\n  ws: WebSocket;\n  private wsUrl: string = `ws:localhost:8081`;\n\n  createObservableSocket(): Observable<any> {\n    this.ws = new WebSocket(this.wsUrl);\n\n    return new Observable(observe => {\n      this.ws.onmessage = event => observe.next(event.data);\n      this.ws.onerror = event => observe.error();\n      this.ws.onclose = event => observe.complete();\n    });\n  }\n\n  sendMessage(message: string) {\n    this.ws.send(message);\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:".component.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'  constructor(private ws: WebSocketService) {}\n\n  sendMessageToServer() {\n    this.ws.sendMessage(`send message form angular to express ws server`);\n  }\n\n  ngOnInit() {\n    this.ws.createObservableSocket().subscribe(\n        data => console.log(data),\n        err => console.log(err),\n        () => console.log("ws has ended!")\n      );\n  }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var s=t(7294);const r={},o=s.createContext(r);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);