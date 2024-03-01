"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9004],{1155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var s=t(5893),a=t(1151);const d={id:"date-fns",title:"date-fns"},r=void 0,o={id:"FE/npm/pkgs/date-fns",title:"date-fns",description:"format",source:"@site/docs/FE/npm/pkgs/date-fns.md",sourceDirName:"FE/npm/pkgs",slug:"/FE/npm/pkgs/date-fns",permalink:"/docs/FE/npm/pkgs/date-fns",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{id:"date-fns",title:"date-fns"},sidebar:"tutorialSidebar",previous:{title:"cli-tools",permalink:"/docs/FE/npm/pkgs/cli-tools"},next:{title:"dexie",permalink:"/docs/FE/npm/pkgs/dexie"}},l={},i=[{value:"format",id:"format",level:3},{value:"day week month year",id:"day-week-month-year",level:3},{value:"day",id:"day",level:4},{value:"week",id:"week",level:4},{value:"month",id:"month",level:4},{value:"year",id:"year",level:4},{value:"More",id:"more",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",li:"li",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import * as fns from "date-fns";\n'})}),"\n",(0,s.jsx)(n.h3,{id:"format",children:"format"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'// \u5e74\u6708\u65e5\u65f6\u5206\u79d2\nfns.format(new Date(), "YYYY-MM-DD HH:mm:ss");\n\n// \u65f6\u95f4\u6233 Timestamp\nfns.format(new Date(), "X");\nfns.format(new Date(), "x"); // string\n// <=>\nfns.getTime(new Date()); // number\n'})}),"\n",(0,s.jsx)(n.h3,{id:"day-week-month-year",children:"day week month year"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h4,{id:"day",children:"day"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Add Days\nfns.addDays(new Date(), -10);\n\n// Get the number of calendar days between the given dates.\nfns.differenceInCalendarDays(new Date(), date);\n// Get the number of full days between the given dates.\nfns.differenceInDays(new Date(), date);\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h4,{id:"week",children:"week"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Add Weeks\nfns.addWeeks(new Date(), 10);\nfns.addWeeks(new Date(), -2);\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h4,{id:"month",children:"month"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'let date;\ndate = fns.addMonths(new Date(2019, 0, 31), 1);\nconsole.log(fns.format(new Date(2019, 0, 31), "YYYY-MM-DD HH:mm:ss")); // 2019-01-31 00:00:00\ndate = fns.format(date, "YYYY-MM-DD HH:mm:ss");\nconsole.log(date); // 2019-02-28 00:00:00\n\n// Add Months\nfns.addMonths(new Date(2019, 0, 31), 1);\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.h4,{id:"year",children:"year"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"fns.addYears(new Date(2019, 0, 31), 1);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"more",children:"More"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://date-fns.org/v1.30.1/docs",children:"https://date-fns.org/v1.30.1/docs"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const a={},d=s.createContext(a);function r(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);