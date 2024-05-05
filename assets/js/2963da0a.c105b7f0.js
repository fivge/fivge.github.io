"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4971],{8991:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>t,metadata:()=>d,toc:()=>h});var r=a(5893),s=a(1151);const t={},c="Hardhat",d={id:"Web3/basic/hardhat",title:"Hardhat",description:"Hardhat \u662f\u4e00\u4e2a\u7f16\u8bd1\u3001\u90e8\u7f72\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u4ee5\u592a\u574a\u5e94\u7528\u7684\u5f00\u53d1\u73af\u5883\u3002",source:"@site/docs/Web3/01.basic/02.hardhat.md",sourceDirName:"Web3/01.basic",slug:"/Web3/basic/hardhat",permalink:"/docs/Web3/basic/hardhat",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714465809e3,sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start",permalink:"/docs/Web3/basic/start"},next:{title:"Wallet",permalink:"/docs/Web3/basic/wallet"}},l={},h=[{value:"1\u3001quick start",id:"1quick-start",level:3},{value:"a\u3001\u7f16\u8bd1\u5408\u7ea6",id:"a\u7f16\u8bd1\u5408\u7ea6",level:4},{value:"<del>\u6d4b\u8bd5\u5408\u7ea6</del>",id:"\u6d4b\u8bd5\u5408\u7ea6",level:4},{value:"b\u3001\u90e8\u7f72\u5408\u7ea6",id:"b\u90e8\u7f72\u5408\u7ea6",level:4},{value:"c\u3001hardhat \u7f51\u7edc",id:"chardhat-\u7f51\u7edc",level:4},{value:"d\u3001\u9a8c\u8bc1\u5408\u7ea6",id:"d\u9a8c\u8bc1\u5408\u7ea6",level:4},{value:"2\u3001\u914d\u7f6e",id:"2\u914d\u7f6e",level:3},{value:"a\u3001cli",id:"acli",level:4},{value:"<code>help</code>",id:"help",level:5},{value:"<code>--network</code>",id:"--network",level:5},{value:"b\u3001<code>hardhat.config.js</code>",id:"bhardhatconfigjs",level:4},{value:"3\u3001\u4efb\u52a1\u548c\u811a\u672c tasks &amp; scripts",id:"3\u4efb\u52a1\u548c\u811a\u672c-tasks--scripts",level:3},{value:"a\u3001\u4efb\u52a1",id:"a\u4efb\u52a1",level:4},{value:"\u5e26\u53c2\u6570 <code>addParam</code>",id:"\u5e26\u53c2\u6570-addparam",level:5},{value:"\u53ef\u9009\u53c2\u6570 <code>addOptionalParam</code>",id:"\u53ef\u9009\u53c2\u6570-addoptionalparam",level:5},{value:"\u5b50\u4efb\u52a1 <code>subtask</code>",id:"\u5b50\u4efb\u52a1-subtask",level:5},{value:"b\u3001\u811a\u672c",id:"b\u811a\u672c",level:4},{value:"4\u3001hre",id:"4hre",level:3},{value:"5\u3001console",id:"5console",level:3},{value:"6\u3001typescript",id:"6typescript",level:3},{value:"7\u3001Hardhat Ignition",id:"7hardhat-ignition",level:3},{value:"a\u3001start",id:"astart",level:4},{value:"\u5f15\u5165",id:"\u5f15\u5165",level:5},{value:"\u6a21\u5757(module)\u5b9a\u4e49&amp;\u90e8\u7f72",id:"\u6a21\u5757module\u5b9a\u4e49\u90e8\u7f72",level:5},{value:"b\u3001\u521b\u5efa\u6a21\u5757",id:"b\u521b\u5efa\u6a21\u5757",level:4},{value:"\u90e8\u7f72\u5408\u7ea6 m.contract",id:"\u90e8\u7f72\u5408\u7ea6-mcontract",level:5},{value:"\u4f7f\u7528\u73b0\u6709\u5408\u7ea6 m.contractAt",id:"\u4f7f\u7528\u73b0\u6709\u5408\u7ea6-mcontractat",level:5},{value:"\u8c03\u7528\u5408\u7ea6 m.call",id:"\u8c03\u7528\u5408\u7ea6-mcall",level:5},{value:"\u4ece\u5408\u7ea6\u4e2d\u8bfb\u53d6\u503c m.staticCall",id:"\u4ece\u5408\u7ea6\u4e2d\u8bfb\u53d6\u503c-mstaticcall",level:5},{value:"\u4ece Future \u6267\u884c\u671f\u95f4\u53d1\u51fa\u7684\u4e8b\u4ef6\u4e2d\u8bfb\u53d6\u503c \u2753",id:"\u4ece-future-\u6267\u884c\u671f\u95f4\u53d1\u51fa\u7684\u4e8b\u4ef6\u4e2d\u8bfb\u53d6\u503c-",level:5},{value:"\u53d1\u9001 ETH \u6216\u6570\u636e\u5230\u8d26\u6237 \u2753",id:"\u53d1\u9001-eth-\u6216\u6570\u636e\u5230\u8d26\u6237-",level:5},{value:"\u90e8\u7f72\u4e00\u4e2a\u5e93 \u2753",id:"\u90e8\u7f72\u4e00\u4e2a\u5e93-",level:5},{value:"8\u3001[The Graph]",id:"8the-graph",level:3}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",del:"del",h1:"h1",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"hardhat",children:"Hardhat"}),"\n",(0,r.jsx)(n.p,{children:"Hardhat \u662f\u4e00\u4e2a\u7f16\u8bd1\u3001\u90e8\u7f72\u3001\u6d4b\u8bd5\u548c\u8c03\u8bd5\u4ee5\u592a\u574a\u5e94\u7528\u7684\u5f00\u53d1\u73af\u5883\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Hardhat \u5185\u7f6e\u4e86 Hardhat \u7f51\u7edc\uff0c\u8fd9\u662f\u4e00\u4e2a\u4e13\u4e3a\u5f00\u53d1\u8bbe\u8ba1\u7684\u672c\u5730\u4ee5\u592a\u574a\u7f51\u7edc\u3002\u4e3b\u8981\u529f\u80fd\u6709 Solidity \u8c03\u8bd5\uff0c\u8ddf\u8e2a\u8c03\u7528\u5806\u6808\u3001console.log()\u548c\u4ea4\u6613\u5931\u8d25\u65f6\u7684\u660e\u786e\u9519\u8bef\u4fe1\u606f\u63d0\u793a\u7b49\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org",children:"https://hardhat.org"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"code"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/fivge/hardhad-demo",children:"https://github.com/fivge/hardhad-demo"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"1quick-start",children:"1\u3001quick start"}),"\n",(0,r.jsx)(n.h4,{id:"a\u7f16\u8bd1\u5408\u7ea6",children:"a\u3001\u7f16\u8bd1\u5408\u7ea6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat compile\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u60a8\u521b\u5efa\u4e86 TypeScript \u9879\u76ee\uff0c\u6b64\u4efb\u52a1\u8fd8\u5c06\u4f7f\u7528 TypeChain \u751f\u6210 TypeScript \u7ed1\u5b9a\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u5f3a\u5236\u7f16\u8bd1\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"--force"})," \u53c2\u6570\uff0c\u6216\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"npx hardhat clean"})," \u6765\u6e05\u9664\u7f13\u5b58\u5e76\u5220\u9664\u5de5\u4ef6\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"\u6d4b\u8bd5\u5408\u7ea6",children:(0,r.jsx)(n.del,{children:"\u6d4b\u8bd5\u5408\u7ea6"})}),"\n",(0,r.jsx)(n.h4,{id:"b\u90e8\u7f72\u5408\u7ea6",children:"b\u3001\u90e8\u7f72\u5408\u7ea6"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["[TODO] \ud83d\udc96",(0,r.jsx)(n.a,{href:"https://hardhat.org/ignition/docs/getting-started#overview",children:"https://hardhat.org/ignition/docs/getting-started#overview"})]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat run scripts/deploy.ts\n"})}),"\n",(0,r.jsx)(n.h4,{id:"chardhat-\u7f51\u7edc",children:"c\u3001hardhat \u7f51\u7edc"}),"\n",(0,r.jsx)(n.p,{children:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cHardhat \u5c06\u5728\u542f\u52a8\u65f6\u542f\u52a8\u4e00\u4e2a\u65b0\u7684\u5185\u5b58\u4e2d Hardhat \u7f51\u7edc\u5b9e\u4f8b\u3002\u8fd8\u53ef\u4ee5\u4ee5\u72ec\u7acb\u65b9\u5f0f\u8fd0\u884c Hardhat Network\uff0c\u4ee5\u4fbf\u5916\u90e8\u5ba2\u6237\u7aef\u53ef\u4ee5\u8fde\u63a5\u5230\u5b83\u3002\u8fd9\u53ef\u4ee5\u662f\u94b1\u5305\u3001Dapp \u524d\u7aef\u6216\u811a\u672c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat node\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u672c\u5730\u7f51\u7edc\u4e0a\u90e8\u7f72"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat run scripts/deploy.ts --network localhost\n"})}),"\n",(0,r.jsx)(n.h4,{id:"d\u9a8c\u8bc1\u5408\u7ea6",children:"d\u3001\u9a8c\u8bc1\u5408\u7ea6"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/guides/verifying",children:"https://hardhat.org/hardhat-runner/docs/guides/verifying"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify",children:"https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify"})}),"\n",(0,r.jsx)(n.h3,{id:"2\u914d\u7f6e",children:"2\u3001\u914d\u7f6e"}),"\n",(0,r.jsx)(n.h4,{id:"acli",children:"a\u3001cli"}),"\n",(0,r.jsx)(n.h5,{id:"help",children:(0,r.jsx)(n.code,{children:"help"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat help\n"})}),"\n",(0,r.jsx)(n.h5,{id:"--network",children:(0,r.jsx)(n.code,{children:"--network"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--network localhost"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--network hardhat"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"--network sepolia"})}),"\n"]}),"\n",(0,r.jsxs)(n.h4,{id:"bhardhatconfigjs",children:["b\u3001",(0,r.jsx)(n.code,{children:"hardhat.config.js"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"config, plugins and custom tasks"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/config#configuration",children:"https://hardhat.org/hardhat-runner/docs/config#configuration"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["Hardhat \u7684\u914d\u7f6e\u6587\u4ef6\u5c06\u59cb\u7ec8\u5728\u4efb\u4f55\u4efb\u52a1\u4e4b\u524d\u8fd0\u884c\uff0c\u56e0\u6b64\u60a8\u53ef\u4ee5\u4f7f\u7528\u5b83\u4e0e\u5176\u4ed6\u5de5\u5177\u96c6\u6210\uff0c\u4f8b\u5982\u5bfc\u5165 ",(0,r.jsx)(n.code,{children:"@babel/register"})," \u3002"]})}),"\n",(0,r.jsx)(n.h3,{id:"3\u4efb\u52a1\u548c\u811a\u672c-tasks--scripts",children:"3\u3001\u4efb\u52a1\u548c\u811a\u672c tasks & scripts"}),"\n",(0,r.jsx)(n.h4,{id:"a\u4efb\u52a1",children:"a\u3001\u4efb\u52a1"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/advanced/create-task",children:"https://hardhat.org/hardhat-runner/docs/advanced/create-task"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { task } from 'hardhat/config';\n\ntask('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {\n  const accounts = await hre.ethers.getSigners();\n\n  for (const account of accounts) {\n    console.log(account.address);\n  }\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat accounts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5b83\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u4efb\u52a1\u7684\u540d\u79f0\uff0c\u6211\u4eec\u5728\u547d\u4ee4\u884c\u4e2d\u4f7f\u7528\u5b83\u6765\u8fd0\u884c\u5b83\u3002\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u4efb\u52a1\u7684\u63cf\u8ff0\uff0c\u5f53\u60a8\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"npx hardhat help"})," \u65f6\u4f1a\u6253\u5370\u8be5\u63cf\u8ff0\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u5728\u8fd0\u884c\u4efb\u52a1\u65f6\u6267\u884c\u3002\u5b83\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u5e26\u6709\u4efb\u52a1\u53c2\u6570\u7684\u5bf9\u8c61\u3002\u6211\u4eec\u8fd8\u6ca1\u6709\u5b9a\u4e49\u4efb\u4f55\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["Hardhat \u8fd0\u884c\u65f6\u73af\u5883\u6216 HRE\uff0c\u5305\u542b Hardhat \u53ca\u5176\u63d2\u4ef6\u7684\u6240\u6709\u529f\u80fd\u3002\u60a8\u8fd8\u53ef\u4ee5\u627e\u5230\u5728\u4efb\u52a1\u6267\u884c\u671f\u95f4\u6ce8\u5165\u5230 ",(0,r.jsx)(n.code,{children:"global"})," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u5c5e\u6027\u3002"]}),"\n",(0,r.jsxs)(n.h5,{id:"\u5e26\u53c2\u6570-addparam",children:["\u5e26\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"addParam"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { task } from 'hardhat/config';\n\ntask('balance', \"Prints an account's balance\")\n  .addParam('account', \"The account's address\")\n  .setAction(async (taskArgs, hre) => {\n    const balance = await hre.ethers.provider.getBalance(taskArgs.account);\n\n    console.log(hre.ethers.utils.formatEther(balance), 'ETH');\n  });\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat balance --help\nUsage: hardhat [GLOBAL OPTIONS] balance --account <STRING>\n\nOPTIONS:\n\n  --account     The account's address\n\nbalance: Prints an account's balance\n"})}),"\n",(0,r.jsxs)(n.h5,{id:"\u53ef\u9009\u53c2\u6570-addoptionalparam",children:["\u53ef\u9009\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"addOptionalParam"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"task('hello', 'Prints a greeting')\n  .addOptionalParam('greeting', 'The greeting to print', 'Hello, World!')\n  .setAction(async ({ greeting }) => console.log(greeting));\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat hello\n# Hello, World!\n\nyarn hardhat hello --greeting foo\n# foo\n"})}),"\n",(0,r.jsxs)(n.h5,{id:"\u5b50\u4efb\u52a1-subtask",children:["\u5b50\u4efb\u52a1 ",(0,r.jsx)(n.code,{children:"subtask"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { task, subtask } from 'hardhat/config';\n\ntask('hello-world', 'Prints a hello world message').setAction(async (taskArgs, hre) => {\n  await hre.run('print', { message: 'Hello, World!' });\n});\n\nsubtask('print', 'Prints a message')\n  .addParam('message', 'The message to print')\n  .setAction(async taskArgs => {\n    console.log(taskArgs.message);\n  });\n"})}),"\n",(0,r.jsx)(n.h4,{id:"b\u811a\u672c",children:"b\u3001\u811a\u672c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/advanced/scripts",children:"https://hardhat.org/hardhat-runner/docs/advanced/scripts"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"scripts/accounts.ts"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { ethers } from 'hardhat';\n\nasync function main() {\n  const accounts = await ethers.getSigners();\n\n  for (const account of accounts) {\n    console.log(account.address);\n  }\n}\n\nmain().catch(error => {\n  console.error(error);\n  process.exitCode = 1;\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat run scripts/accounts.ts\n"})}),"\n",(0,r.jsx)(n.h3,{id:"4hre",children:"4\u3001hre"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/hardhat-runner/docs/advanced/hardhat-runtime-environment",children:"https://hardhat.org/hardhat-runner/docs/advanced/hardhat-runtime-environment"})}),"\n",(0,r.jsx)(n.h3,{id:"5console",children:"5\u3001console"}),"\n",(0,r.jsx)(n.h3,{id:"6typescript",children:"6\u3001typescript"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0d\u4f7f\u7528 cli\uff0c\u76f4\u63a5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"ts-node"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"yarn ts-node --files scripts/accounts.ts\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This can also be enabled with ",(0,r.jsx)(n.code,{children:"TS_NODE_FILES=true"})]}),"\n",(0,r.jsx)(n.h3,{id:"7hardhat-ignition",children:"7\u3001Hardhat Ignition"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hardhat.org/ignition/docs/guides/creating-modules",children:"https://hardhat.org/ignition/docs/guides/creating-modules"})}),"\n",(0,r.jsx)(n.p,{children:"Hardhat Ignition \u662f\u4e00\u4e2a\u7528\u4e8e\u5728\u4ee5\u592a\u574a\u4e0a\u90e8\u7f72\u667a\u80fd\u5408\u7ea6\u7684\u58f0\u660e\u5f0f\u7cfb\u7edf\u3002\u5b83\u4f7f\u60a8\u80fd\u591f\u5b9a\u4e49\u8981\u90e8\u7f72\u7684\u667a\u80fd\u5408\u7ea6\u5b9e\u4f8b\u4ee5\u53ca\u8981\u5728\u5176\u4e0a\u8fd0\u884c\u7684\u4efb\u4f55\u64cd\u4f5c\u3002\u901a\u8fc7\u63a5\u7ba1\u90e8\u7f72\u548c\u6267\u884c\uff0cHarhat Ignition \u53ef\u8ba9\u60a8\u4e13\u6ce8\u4e8e\u9879\u76ee\uff0c\u800c\u4e0d\u662f\u9677\u5165\u90e8\u7f72\u7ec6\u8282\u4e2d\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"astart",children:"a\u3001start"}),"\n",(0,r.jsx)(n.h5,{id:"\u5f15\u5165",children:"\u5f15\u5165"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import '@nomicfoundation/hardhat-ignition-ethers';\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u6a21\u5757module\u5b9a\u4e49\u90e8\u7f72",children:"\u6a21\u5757(module)\u5b9a\u4e49&\u90e8\u7f72"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ignition/modules"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';\n\nexport default buildModule('Apollo', m => {\n  const apollo = m.contract('Rocket', ['Saturn V']);\n\n  m.call(apollo, 'launch', []);\n\n  return { apollo };\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn hardhat ignition deploy ignition/modules/Apollo.ts --network localhost\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06\u521b\u5efa\u4e00\u4e2a ",(0,r.jsx)(n.code,{children:"ignition/deployments/chain-31337"})," \u6587\u4ef6\u5939\u3002\u8fd9\u5305\u542b\u6709\u5173\u60a8\u7684\u90e8\u7f72\u7684\u6240\u6709\u8be6\u7ec6\u4fe1\u606f\u3002 Hardhat Ignition \u4f7f\u7528\u6b64\u6570\u636e\u4ece\u9519\u8bef\u4e2d\u6062\u590d\u3001\u6062\u590d\u4fee\u6539\u540e\u7684\u90e8\u7f72\u7b49\u7b49\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"b\u521b\u5efa\u6a21\u5757",children:"b\u3001\u521b\u5efa\u6a21\u5757"}),"\n",(0,r.jsx)(n.h5,{id:"\u90e8\u7f72\u5408\u7ea6-mcontract",children:"\u90e8\u7f72\u5408\u7ea6 m.contract"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const token = m.contract('Token', ['My Token', 'TKN', 18]);\n\nconst bar = m.contract('ReceivesETH', [], {\n  value: 1_000_000_000n, // 1gwei\n});\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u4f7f\u7528\u73b0\u6709\u5408\u7ea6-mcontractat",children:"\u4f7f\u7528\u73b0\u6709\u5408\u7ea6 m.contractAt"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const existingToken = m.contractAt('Token', '0x...');\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u8c03\u7528\u5408\u7ea6-mcall",children:"\u8c03\u7528\u5408\u7ea6 m.call"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'m.call(token, "transfer", [receiver, amount]);\n\nm.call(myContract, "receivesEth" [], {\n  value: 1_000_000_000n, // 1gwei\n});\n'})}),"\n",(0,r.jsx)(n.h5,{id:"\u4ece\u5408\u7ea6\u4e2d\u8bfb\u53d6\u503c-mstaticcall",children:"\u4ece\u5408\u7ea6\u4e2d\u8bfb\u53d6\u503c m.staticCall"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u60a8\u9700\u8981\u8c03\u7528\u5408\u7ea6\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"view"})," \u6216 ",(0,r.jsx)(n.code,{children:"pure"})," \u51fd\u6570\u6765\u68c0\u7d22\u503c\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"m.staticCall"})," \u6765\u5b8c\u6210"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const balance = m.staticCall(token, 'balanceOf', [address]);\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u4ece-future-\u6267\u884c\u671f\u95f4\u53d1\u51fa\u7684\u4e8b\u4ef6\u4e2d\u8bfb\u53d6\u503c-",children:"\u4ece Future \u6267\u884c\u671f\u95f4\u53d1\u51fa\u7684\u4e8b\u4ef6\u4e2d\u8bfb\u53d6\u503c \u2753"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const transfer = m.call(token, 'transfer', [receiver, amount]);\n\nconst value = m.readEventArgument(transfer, 'Transfer', '_value');\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u53d1\u9001-eth-\u6216\u6570\u636e\u5230\u8d26\u6237-",children:"\u53d1\u9001 ETH \u6216\u6570\u636e\u5230\u8d26\u6237 \u2753"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const send = m.send('SendingEth', address, 1_000_000n);\nconst send = m.send('SendingData', address, undefined, '0x16417104');\n"})}),"\n",(0,r.jsx)(n.h5,{id:"\u90e8\u7f72\u4e00\u4e2a\u5e93-",children:"\u90e8\u7f72\u4e00\u4e2a\u5e93 \u2753"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const myLib = m.library('MyLib');\n"})}),"\n",(0,r.jsx)(n.h3,{id:"8the-graph",children:"8\u3001[The Graph]"}),"\n",(0,r.jsx)(n.p,{children:"The Graph \u662f\u6355\u6349\u533a\u5757\u94fe\u4e8b\u4ef6\u5e76\u63d0\u4f9b\u4e00\u4e2a\u67e5\u8be2\u4e8b\u4ef6\u7684 GraphQL \u63a5\u53e3\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u8ddf\u8e2a\u6570\u636e\u7684\u53d8\u5316"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://thegraph.com/docs/zh/quick-start/",children:"https://thegraph.com/docs/zh/quick-start/"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'graph init tg-02 tg-02 --protocol ethereum --network sepolia --abi "./ignition/deployments/chain-11155111/artifacts/MTOKEN#SimpleToken.json" --from-contract 0xF887Ac1b01439475bD75904359A4CB741E640b93 --start-block 5441889 --studio\n\ngraph auth --studio\n\ngraph codegen && graph build\n\ngraph deploy --studio tg-01\n'})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"graph auth"})," to authenticate with your deploy key."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Type ",(0,r.jsx)(n.code,{children:"cd tg-02"})," to enter the subgraph."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"yarn deploy"})," to deploy the subgraph."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-text",children:"    \u5728 Goerli \u90e8\u7f72\u4e00\u4e2a\u5408\u7ea6\uff0c\u5e76\u8c03\u7528\u89e6\u53d1\u4e8b\u4ef6\u3002\n    \u521b\u5efa\u5b9a\u4e49\u6570\u636e\u7d22\u5f15\u7684 Subgraph\u3002\n    \u90e8\u7f72 Subgraph \u5230 TheGraph\uff0c\u5b9e\u73b0\u6570\u636e\u7d22\u5f15\u3002\n    \u5728\u524d\u7aef DApp \u4e2d\u67e5\u8be2\u7d22\u5f15\u6570\u636e\u3002\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u5bf9\u5b50\u56fe\u8fdb\u884c\u66f4\u6539\u65f6\uff0c\u5c06\u4e3b\u8981\u4f7f\u7528\u4e09\u4e2a\u6587\u4ef6:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6e05\u5355\uff08subgraph.yaml\uff09--\u6e05\u5355\u5b9a\u4e49\u5b50\u56fe\u5c06\u7d22\u5f15\u54ea\u4e9b\u6570\u636e\u6e90\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6a21\u5f0f\uff08schema.graphql\uff09--GraphQL \u6a21\u5f0f\u5b9a\u4e49\u4ece\u5b50\u56fe\u4e2d\u68c0\u7d22\u5230\u7684\u6570\u636e\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"AssemblyScript \u6620\u5c04\uff08mapping.ts\uff09--\u5c06\u6570\u636e\u6e90\u4e2d\u7684\u6570\u636e\u8f6c\u6362\u4e3a\u6a21\u5f0f\u4e2d\u5b9a\u4e49\u7684\u5b9e\u4f53\u7684\u4ee3\u7801\u3002"}),"\n",(0,r.jsx)(n.p,{children:"[contract.ts]"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ graph codegen\n$ graph build\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ graph auth --studio <DEPLOY_KEY>\n$ graph deploy --studio <SUBGRAPH_SLUG>\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>c});var r=a(7294);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);