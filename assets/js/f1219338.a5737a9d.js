"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9909],{6455:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=s(5893),a=s(1151);const r={},i="Wallet",c={id:"Web3/basic/wallet",title:"Wallet",description:"https://docs.metamask.io/wallet/",source:"@site/docs/Web3/01.basic/03.wallet.md",sourceDirName:"Web3/01.basic",slug:"/Web3/basic/wallet",permalink:"/docs/Web3/basic/wallet",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713494798,formattedLastUpdatedAt:"Apr 19, 2024",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hardhat",permalink:"/docs/Web3/basic/hardhat"},next:{title:"decentralized exchange \u53bb\u4e2d\u5fc3\u5316\u4ea4\u6613\u6240",permalink:"/docs/Web3/basic/decentralized-exchange"}},o={},d=[{value:"0x01 quick start",id:"0x01-quick-start",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"wallet",children:"Wallet"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.metamask.io/wallet/",children:"https://docs.metamask.io/wallet/"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.metamask.io/wallet/reference/provider-api/#properties",children:"https://docs.metamask.io/wallet/reference/provider-api/#properties"})}),"\n",(0,n.jsx)(t.h2,{id:"0x01-quick-start",children:"0x01 quick start"}),"\n",(0,n.jsxs)(t.p,{children:["\u94b1\u5305 ",(0,n.jsx)(t.code,{children:"->"})," \u94fe ",(0,n.jsx)(t.code,{children:"->"})," \u8d26\u6237"]}),"\n",(0,n.jsx)(t.p,{children:"\u4e8b\u4ef6\u76d1\u542c: \u8d26\u6237\u6539\u53d8\u4e8b\u4ef6\u76d1\u542c&\u9500\u6bc1\u3001 chainChanged \u4e8b\u4ef6\u76d1\u542c&\u9500\u6bc1"}),"\n",(0,n.jsx)(t.p,{children:"\u5408\u7ea6 (\u90e8\u7f72 )\u4ea4\u6613"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"window.ethereum;\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://hardhat.org/hardhat-network/docs/reference#chainid",children:"https://hardhat.org/hardhat-network/docs/reference#chainid"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.metamask.io/guide/ethereum-provider.html#properties",children:"https://docs.metamask.io/guide/ethereum-provider.html#properties"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"window.ethereum.networkVersion;\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const [selectedAddress] = await window.ethereum.request({ method: 'eth_requestAccounts' });\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"this._provider = new ethers.BrowserProvider(window.ethereum);\nthis._simpleToken = new ethers.Contract(\n  simpleTokenContractAddress,\n  simpleTokenArtifact.abi,\n  await this._provider.getSigner(0)\n);\nthis.setState({ decimals: await this._simpleToken.decimals() });\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const name = await this._simpleToken.name();\nconst symbol = await this._simpleToken.symbol();\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const balance = await this._simpleToken.balanceOf(this.state.selectedAddress);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>i});var n=s(7294);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);