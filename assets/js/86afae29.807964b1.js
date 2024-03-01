"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5147],{9085:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var t=r(5893),o=r(1151);const a={},c="react router",s={id:"FE/react/react-router",title:"react router",description:"\u8def\u7531\u914d\u7f6e",source:"@site/docs/FE/react/react-router.md",sourceDirName:"FE/react",slug:"/FE/react/react-router",permalink:"/docs/FE/react/react-router",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prettire",permalink:"/docs/FE/prettire"},next:{title:"react-native",permalink:"/docs/FE/react-native"}},i={},l=[];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",hr:"hr",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"react-router",children:"react router"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8def\u7531\u914d\u7f6e"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["create a ",(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/routers/create-browser-router",children:"Browser Router"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { createBrowserRouter, RouterProvider } from "react-router-dom";\n\nconst router = createBrowserRouter([\n  {\n    path: "/",\n    element: <Home />,\n  },\n  {\n    path: "contact",\n    element: <ContactRoot />,\n    errorElement: <ErrorPage />,\n    children: [\n      { index: true, element: <ContactHome /> },\n      {\n        path: ":contactId",\n        element: <Contact />,\n      },\n      {\n        path: ":contactId/edit",\n        element: <EditContact />,\n        action: editAction,\n      },\n    ],\n  },\n]);\n\n<RouterProvider router={router} />;\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"error page component"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{\n    errorElement: <ErrorPage />,\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"index route"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"{ index: true, element: <ContactHome /> }\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Note the",(0,t.jsx)(n.code,{children:"{ index:true }"})," instead of",(0,t.jsx)(n.code,{children:'{ path: "" }'})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"pathless routes"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'createBrowserRouter([\n  {\n    path: "/",\n    element: <Root />,\n    loader: rootLoader,\n    action: rootAction,\n    errorElement: <ErrorPage />,\n    children: [\n      {\n        errorElement: <ErrorPage />,\n        children: [\n          { index: true, element: <Index /> },\n          {\n            path: "contacts/:contactId",\n            element: <Contact />,\n            loader: contactLoader,\n            action: contactAction,\n          },\n          /* the rest of the routes */\n        ],\n      },\n    ],\n  },\n]);\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"lazy"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/route/lazy",children:"https://reactrouter.com/en/main/route/lazy"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8def\u7531\u51fa\u53e3"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://angular.cn/generated/images/guide/router/shell-and-outlet.gif",alt:""})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { Outlet } from "react-router-dom";\n\n<Outlet />;\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8def\u7531\u8df3\u8f6c"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"useNavigate"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { Link, NavLink } from "react-router-dom";\n\n<Link to="/contacts/foo">link</Link>\n\n<NavLink to="/contacts/foo" className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}>\n\tnavlink\n</NavLink>\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { useNavigate } from "react-router-dom";\n\nconst navigate = useNavigate();\n\nnavigate("/foo");\nnavigate(-1);\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"action"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { redirect } from "react-router-dom";\n\nexport async function action() {\n  return redirect("/foo");\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8def\u7531\u72b6\u6001"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { useNavigation } from "react-router-dom";\n\nconst navigation = useNavigation();\n\nnavigation.state === "loading" ? "loading" : "";\nnavigation.location;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["navigation: ",(0,t.jsx)(n.code,{children:'"idle" | "submitting" | "loading"'})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8def\u7531\u53c2\u6570"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"params(URL Params)"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/contracts/1234"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:":contactId"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'      {\n        path: "contacts/:contactId",\n        element: <Contact />,\n      },\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { useParams } from "react-router-dom";\n\nconst { contactId } = useParams();\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"loader"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { useLoaderData } from "react-router-dom";\n\nconst contact = useLoaderData();\n\nexport async function loader({ params }) {\n  return getContact(params.contactId);\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"URLSearchParams"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"/contracts?name=foo"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'import { useSearchParams } from "react-router-dom";\n\nlet [searchParams, setSearchParams] = useSearchParams();\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8def\u7531\u5b88\u536b"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://reactrouter.com/en/main/start/tutorial",children:"https://reactrouter.com/en/main/start/tutorial"})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>c});var t=r(7294);const o={},a=t.createContext(o);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);