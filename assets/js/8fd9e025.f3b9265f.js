"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9668],{9630:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=l(5893),r=l(1151);const s={},t=void 0,c={id:"FE/angular/excel/directive",title:"directive",description:"\u6307\u4ee4",source:"@site/docs/FE/angular/excel/directive.md",sourceDirName:"FE/angular/excel",slug:"/FE/angular/excel/directive",permalink:"/docs/FE/angular/excel/directive",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ci-cd",permalink:"/docs/FE/angular/excel/ci-cd"},next:{title:"dynamic-components",permalink:"/docs/FE/angular/excel/dynamic-components"}},h={},o=[{value:"\u6307\u4ee4",id:"\u6307\u4ee4",level:2},{value:"\u5c5e\u6027\u578b\u6307\u4ee4",id:"\u5c5e\u6027\u578b\u6307\u4ee4",level:3},{value:"0x01 \u6784\u5efa\u4e00\u4e2a\u5c5e\u6027\u578b\u6307\u4ee4\uff0c\u5b83\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u5143\u7d20\u7684\u884c\u4e3a",id:"0x01-\u6784\u5efa\u4e00\u4e2a\u5c5e\u6027\u578b\u6307\u4ee4\u5b83\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u5143\u7d20\u7684\u884c\u4e3a",level:4},{value:"0x02 \u628a\u4e00\u4e2a\u6307\u4ee4\u5e94\u7528\u5230\u6a21\u677f\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\u4e0a",id:"0x02-\u628a\u4e00\u4e2a\u6307\u4ee4\u5e94\u7528\u5230\u6a21\u677f\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\u4e0a",level:4},{value:"ElementRef",id:"elementref",level:4},{value:"0x03 \u751f\u6548\u5468\u671f",id:"0x03-\u751f\u6548\u5468\u671f",level:4},{value:"1.\u6784\u9020\u51fd\u6570\u4e2d\u4f7f\u7528",id:"1\u6784\u9020\u51fd\u6570\u4e2d\u4f7f\u7528",level:5},{value:"2.\u54cd\u5e94\u4e8b\u4ef6\u4ee5\u6539\u53d8\u6307\u4ee4\u7684\u884c\u4e3a",id:"2\u54cd\u5e94\u4e8b\u4ef6\u4ee5\u6539\u53d8\u6307\u4ee4\u7684\u884c\u4e3a",level:5},{value:"@HostListener",id:"hostlistener",level:4},{value:"3.\u6307\u4ee4\u751f\u547d\u5468\u671f",id:"3\u6307\u4ee4\u751f\u547d\u5468\u671f",level:5},{value:"0x04 \u628a\u503c\u7ed1\u5b9a\u5230\u6307\u4ee4\u4e2d",id:"0x04-\u628a\u503c\u7ed1\u5b9a\u5230\u6307\u4ee4\u4e2d",level:4},{value:"\u7ed3\u6784\u578b\u6307\u4ee4",id:"\u7ed3\u6784\u578b\u6307\u4ee4",level:3},{value:"\u6269\u5c55",id:"\u6269\u5c55",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u6307\u4ee4",children:"\u6307\u4ee4"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Angular \u4e2d\u6709\u4e09\u79cd\u7c7b\u578b\u7684\u6307\u4ee4\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u7ec4\u4ef6 \u2014 \u62e5\u6709\u6a21\u677f\u7684\u6307\u4ee4"}),"\n",(0,i.jsx)(n.li,{children:"\u7ed3\u6784\u578b\u6307\u4ee4 \u2014 \u901a\u8fc7\u6dfb\u52a0\u548c\u79fb\u9664 DOM \u5143\u7d20\u6539\u53d8 DOM \u5e03\u5c40\u7684\u6307\u4ee4"}),"\n",(0,i.jsx)(n.li,{children:"\u5c5e\u6027\u578b\u6307\u4ee4 \u2014 \u6539\u53d8\u5143\u7d20\u3001\u7ec4\u4ef6\u6216\u5176\u5b83\u6307\u4ee4\u7684\u5916\u89c2\u548c\u884c\u4e3a\u7684\u6307\u4ee4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u7ec4\u4ef6"}),"\u662f\u8fd9\u4e09\u79cd\u6307\u4ee4\u4e2d\u6700\u5e38\u7528\u7684\u3002\u7ec4\u4ef6\u53ef\u4ee5\u5728\u539f\u751f HTML \u5143\u7d20\u4e2d\u7ba1\u7406\u4e00\u5c0f\u7247\u533a\u57df\u7684 HTML\u3002\u4ece\u6280\u672f\u89d2\u5ea6\u8bf4\uff0c\u5b83\u5c31\u662f\u4e00\u4e2a\u5e26\u6a21\u677f\u7684\u6307\u4ee4\u3002\n",(0,i.jsx)(n.strong,{children:"\u7ed3\u6784\u578b"}),"\u6307\u4ee4\u4fee\u6539\u89c6\u56fe\u7684\u7ed3\u6784\u3002\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"NgFor"})," \u548c ",(0,i.jsx)(n.code,{children:"NgIf"})," \u3002\n",(0,i.jsx)(n.strong,{children:"\u5c5e\u6027\u578b"}),"\u6307\u4ee4\u6539\u53d8\u4e00\u4e2a\u5143\u7d20\u7684\u5916\u89c2\u6216\u884c\u4e3a\u3002\u4f8b\u5982\uff0c\u5185\u7f6e\u7684 ",(0,i.jsx)(n.code,{children:"NgStyle"})," \u6307\u4ee4\u53ef\u4ee5\u540c\u65f6\u4fee\u6539\u5143\u7d20\u7684\u591a\u4e2a\u6837\u5f0f\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5c5e\u6027\u578b\u6307\u4ee4",children:"\u5c5e\u6027\u578b\u6307\u4ee4"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"appHighlight"})," / ",(0,i.jsx)(n.code,{children:'[appHighlight]="color"'})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'@Directive({ selector: "[appHighlight]" })'})}),"\n",(0,i.jsx)(n.p,{children:"\u6539\u53d8\u4e00\u4e2a\u5143\u7d20\u7684\u5916\u89c2\u6216\u884c\u4e3a"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"0x01-\u6784\u5efa\u4e00\u4e2a\u5c5e\u6027\u578b\u6307\u4ee4\u5b83\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u5143\u7d20\u7684\u884c\u4e3a",children:"0x01 \u6784\u5efa\u4e00\u4e2a\u5c5e\u6027\u578b\u6307\u4ee4\uff0c\u5b83\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u5143\u7d20\u7684\u884c\u4e3a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ng generate directive highlight\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c5e\u6027\u578b\u6307\u4ee4\u81f3\u5c11\u9700\u8981\u4e00\u4e2a\u5e26\u6709 ",(0,i.jsx)(n.code,{children:"@Directive"})," \u88c5\u9970\u5668\u7684\u63a7\u5236\u5668\u7c7b\u3002\u8be5\u88c5\u9970\u5668\u6307\u5b9a\u4e86\u4e00\u4e2a\u7528\u4e8e\u6807\u8bc6\u5c5e\u6027\u7684\u9009\u62e9\u5668\u3002 \u63a7\u5236\u5668\u7c7b\u5b9e\u73b0\u4e86\u6307\u4ee4\u9700\u8981\u7684\u6307\u4ee4\u884c\u4e3a\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u548c\u7ec4\u4ef6\u4e00\u6837\uff0c\u6307\u4ee4\u4e5f\u5fc5\u987b\u5728 Angular \u6a21\u5757\u4e2d\u8fdb\u884c\u58f0\u660e\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:".directive.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'import { Directive, ElementRef, HostListener, Input } from "@angular/core";\n\n@Directive({\n  selector: "[appHighlight]"\n})\nexport class HighlightDirective {\n  constructor(private el: ElementRef) {\n    el.nativeElement.style.backgroundColor = "yellow";\n  }\n\n  @Input("appHighlight") highlightColor: string;\n  @Input() defaultColor: string;\n\n  @HostListener("mouseenter") onMouseEnter() {\n    this.highlight(this.highlightColor || this.defaultColor || "red");\n  }\n\n  @HostListener("mouseleave") onMouseLeave() {\n    this.highlight(null);\n  }\n\n  private highlight(color: string) {\n    this.el.nativeElement.style.backgroundColor = color;\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:".component.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<p appHighlight>Highlight me!</p>\n\n<p [appHighlight]="color" defaultColor="violet">Highlight me!</p>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:".module.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"@NgModule({\n  declarations: [HighlightComponent, HighlightDirective]\n})\nexport class DocumentModule {}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"0x02-\u628a\u4e00\u4e2a\u6307\u4ee4\u5e94\u7528\u5230\u6a21\u677f\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\u4e0a",children:"0x02 \u628a\u4e00\u4e2a\u6307\u4ee4\u5e94\u7528\u5230\u6a21\u677f\u4e2d\u7684\u67d0\u4e2a\u5143\u7d20\u4e0a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@Directive"})," \u88c5\u9970\u5668\u7684\u914d\u7f6e\u5c5e\u6027\u4e2d\u6307\u5b9a\u4e86\u8be5\u6307\u4ee4\u7684",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors",children:"CSS \u5c5e\u6027\u578b\u9009\u62e9\u5668"})," ",(0,i.jsx)(n.code,{children:"[appHighlight]"})]}),"\n",(0,i.jsxs)(n.p,{children:["\u8fd9\u91cc\u7684\u65b9\u62ec\u53f7",(0,i.jsx)(n.code,{children:"[]"}),"\u8868\u793a\u5b83\u7684\u5c5e\u6027\u578b\u9009\u62e9\u5668\u3002 Angular \u4f1a\u5728\u6a21\u677f\u4e2d\u5b9a\u4f4d\u6bcf\u4e2a\u62e5\u6709\u540d\u53eb ",(0,i.jsx)(n.code,{children:"appHighlight"})," \u5c5e\u6027\u7684\u5143\u7d20\uff0c\u5e76\u4e14\u4e3a\u8fd9\u4e9b\u5143\u7d20\u52a0\u4e0a\u672c\u6307\u4ee4\u7684\u903b\u8f91\u3002\u6b63\u56e0\u5982\u6b64\uff0c\u8fd9\u7c7b\u6307\u4ee4\u88ab\u79f0\u4e3a ",(0,i.jsx)(n.strong,{children:"\u5c5e\u6027\u9009\u62e9\u5668"})," \u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:".component.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<p appHighlight>Highlight me!</p>\n\n<p [appHighlight]="color" defaultColor="violet">Highlight me!</p>\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h4,{id:"elementref",children:"ElementRef"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6307\u4ee4\u7684\u6784\u9020\u51fd\u6570\u4e2d\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"ElementRef"})," \u6765",(0,i.jsx)(n.code,{children:"\u6ce8\u5165"}),"\u5bbf\u4e3b DOM \u5143\u7d20\u7684\u5f15\u7528\uff0c\u4e5f\u5c31\u662f\u653e\u7f6e ",(0,i.jsx)(n.code,{children:"appHighlight"})," \u7684\u90a3\u4e2a\u5143\u7d20\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ElementRef"})," \u901a\u8fc7\u5176 ",(0,i.jsx)(n.code,{children:"nativeElement"})," \u5c5e\u6027\u7ed9\u4e88\u76f4\u63a5\u8bbf\u95ee\u5bbf\u4e3b DOM \u5143\u7d20\u7684\u80fd\u529b\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'  constructor(private el: ElementRef) {\n    el.nativeElement.style.backgroundColor = "yellow";\n  }\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\ud83c\udfaf \u5b8c\u5584 ElementRef ElementRef .nativeElement \u5e38\u7528\u7528\u6cd5"}),"\n",(0,i.jsx)(n.p,{children:"style style.backgroundColor"}),"\n",(0,i.jsx)(n.p,{children:"a \u6807\u7b7e href target"}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"0x03-\u751f\u6548\u5468\u671f",children:"0x03 \u751f\u6548\u5468\u671f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6784\u9020\u51fd\u6570\u4e2d\u4f7f\u7528"}),"\n",(0,i.jsx)(n.li,{children:"\u54cd\u5e94\u7528\u6237\u5f15\u53d1\u7684\u4e8b\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u6307\u4ee4\u751f\u547d\u5468\u671f"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"1\u6784\u9020\u51fd\u6570\u4e2d\u4f7f\u7528",children:"1.\u6784\u9020\u51fd\u6570\u4e2d\u4f7f\u7528"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'  constructor(el: ElementRef) {\n    el.nativeElement.style.backgroundColor = "yellow";\n  }\n'})}),"\n",(0,i.jsx)(n.h5,{id:"2\u54cd\u5e94\u4e8b\u4ef6\u4ee5\u6539\u53d8\u6307\u4ee4\u7684\u884c\u4e3a",children:"2.\u54cd\u5e94\u4e8b\u4ef6\u4ee5\u6539\u53d8\u6307\u4ee4\u7684\u884c\u4e3a"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@HostListener"})," \u88c5\u9970\u5668\u8ba2\u9605\u67d0\u4e2a\u5c5e\u6027\u578b\u6307\u4ee4\u6240\u5728\u7684\u5bbf\u4e3b DOM \u5143\u7d20\u7684\u4e8b\u4ef6"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.h4,{id:"hostlistener",children:"@HostListener"}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@HostListener"})," \u88c5\u9970\u5668\u8ba2\u9605\u67d0\u4e2a\u5c5e\u6027\u578b\u6307\u4ee4\u6240\u5728\u7684\u5bbf\u4e3b DOM \u5143\u7d20\u7684\u4e8b\u4ef6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'  @HostListener("mouseenter") onMouseEnter() {\n    this.highlight(this.highlightColor || this.defaultColor || "red");\n  }\n\n  @HostListener("mouseleave") onMouseLeave() {\n    this.highlight(null);\n  }\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u6807\u51c6\u7684 JavaScript \u65b9\u5f0f\u624b\u52a8\u7ed9\u5bbf\u4e3b DOM \u5143\u7d20\u9644\u52a0\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\u3002 \u4f46\u8fd9\u79cd\u65b9\u6cd5\u81f3\u5c11\u6709\u4e09\u4e2a\u95ee\u9898\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5fc5\u987b\u6b63\u786e\u7684\u4e66\u5199\u4e8b\u4ef6\u76d1\u542c\u5668\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u5f53\u6307\u4ee4\u88ab\u9500\u6bc1\u7684\u65f6\u5019\uff0c\u5fc5\u987b",(0,i.jsx)(n.em,{children:"\u62c6\u5378"}),"\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u5fc5\u987b\u76f4\u63a5\u548c DOM API \u6253\u4ea4\u9053\uff0c\u5e94\u8be5\u907f\u514d\u8fd9\u6837\u505a\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\ud83c\udfaf \u5b8c\u5584 HostListener \u4f7f\u7528"}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u683c\u9ad8\u5ea6\u81ea\u9002\u5e94\uff1f"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"3\u6307\u4ee4\u751f\u547d\u5468\u671f",children:"3.\u6307\u4ee4\u751f\u547d\u5468\u671f"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'  constructor(private el: ElementRef) {}\n\n  ngAfterViewInit() {\n    this.el.nativeElement.style.backgroundColor = "yellow";\n  }\n'})}),"\n",(0,i.jsx)(n.h4,{id:"0x04-\u628a\u503c\u7ed1\u5b9a\u5230\u6307\u4ee4\u4e2d",children:"0x04 \u628a\u503c\u7ed1\u5b9a\u5230\u6307\u4ee4\u4e2d"}),"\n",(0,i.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"@Input"})," \u6570\u636e\u7ed1\u5b9a\u5411\u6307\u4ee4\u4f20\u9012\u503c"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'// \u5728 @Input \u7684\u53c2\u6570\u4e2d\u628a\u8be5\u9009\u62e9\u5668\u6307\u5b9a\u4e3a\u522b\u540d\uff0c\u8fd9\u662f\u6e05\u723d\u3001\u7b80\u7ea6\u7684\u8bed\u6cd5\u3002\n@Input("appHighlight") highlightColor: string;\n@Input() defaultColor: string;\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<p appHighlight [highlightColor]="color">Highlight me!</p>\n\x3c!-- \u6e05\u723d\u3001\u7b80\u7ea6 --\x3e\n<p [appHighlight]="color">Highlight me!</p>\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u7ed3\u6784\u578b\u6307\u4ee4",children:"\u7ed3\u6784\u578b\u6307\u4ee4"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"*ngIf"}),"\nxx"]}),"\n",(0,i.jsx)(n.p,{children:"\u7ed3\u6784\u578b\u6307\u4ee4\u7684\u804c\u8d23\u662f HTML \u5e03\u5c40\u3002 \u5b83\u4eec\u5851\u9020\u6216\u91cd\u5851 DOM \u7684\u7ed3\u6784\uff0c\u6bd4\u5982\u6dfb\u52a0\u3001\u79fb\u9664\u6216\u7ef4\u62a4\u8fd9\u4e9b\u5143\u7d20"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83c\udfaf",(0,i.jsx)(n.a,{href:"https://angular.cn/guide/structural-directives",children:"https://angular.cn/guide/structural-directives"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u4e00\u4e2a\u5bbf\u4e3b\u5143\u7d20\u4e0a\u53ef\u4ee5\u5e94\u7528\u591a\u4e2a\u5c5e\u6027\u578b\u6307\u4ee4\uff0c\u4f46\u53ea\u80fd\u5e94\u7528\u4e00\u4e2a\u7ed3\u6784\u578b\u6307\u4ee4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u53c2\u8003 ",(0,i.jsx)(n.code,{children:"ngIf"})," \u5b9e\u73b0",(0,i.jsx)(n.a,{href:"https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_if.ts",children:"https://github.com/angular/angular/blob/master/packages/common/src/directives/ng_if.ts"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\u6269\u5c55",children:"\u6269\u5c55"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/arkon/ng-inline-svg",children:"https://github.com/arkon/ng-inline-svg"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>t});var i=l(7294);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);