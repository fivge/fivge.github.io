"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[580],{3923:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var t=r(5893),c=r(1151);const s={},a="Start",i={id:"Web3/basic/start",title:"Start",description:"code",source:"@site/docs/Web3/01.basic/01.start.md",sourceDirName:"Web3/01.basic",slug:"/Web3/basic/start",permalink:"/docs/Web3/basic/start",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710142821,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4ee5\u592a\u574a",permalink:"/docs/Web3/\u7406\u8bba\u57fa\u7840/\u4ee5\u592a\u574a"},next:{title:"Hardhat",permalink:"/docs/Web3/basic/hardhat"}},o={},l=[{value:"1\u3001\u90e8\u7f72\u5408\u7ea6",id:"1\u90e8\u7f72\u5408\u7ea6",level:3},{value:"a\u3001\u7f16\u8bd1\u5408\u7ea6",id:"a\u7f16\u8bd1\u5408\u7ea6",level:4},{value:"b\u3001\u6784\u9020 web3 \u5bf9\u8c61",id:"b\u6784\u9020-web3-\u5bf9\u8c61",level:4},{value:"c\u3001\u83b7\u53d6\u8d26\u6237\u5730\u5740",id:"c\u83b7\u53d6\u8d26\u6237\u5730\u5740",level:4},{value:"d\u3001\u90e8\u7f72\u5408\u7ea6",id:"d\u90e8\u7f72\u5408\u7ea6",level:4},{value:"2\u3001\u4ea4\u6613\u548c\u4e8b\u4ef6",id:"2\u4ea4\u6613\u548c\u4e8b\u4ef6",level:3},{value:"a\u3001\u52a0\u8f7d\u5408\u7ea6\u5b9e\u4f8b",id:"a\u52a0\u8f7d\u5408\u7ea6\u5b9e\u4f8b",level:4},{value:"b\u3001\u4e0e\u5408\u7ea6\u4ea4\u4e92",id:"b\u4e0e\u5408\u7ea6\u4ea4\u4e92",level:4},{value:"c\u3001\u76d1\u542c\u4e8b\u4ef6",id:"c\u76d1\u542c\u4e8b\u4ef6",level:4},{value:"d\u3001\u5176\u4ed6",id:"d\u5176\u4ed6",level:4},{value:"3\u3001ERC20 \u5408\u7ea6",id:"3erc20-\u5408\u7ea6",level:3},{value:"a\u3001\u6784\u9020\u8f6c\u8d26\u4ea4\u6613",id:"a\u6784\u9020\u8f6c\u8d26\u4ea4\u6613",level:4},{value:"b\u3001\u9a8c\u8bc1\u8f6c\u8d26\u540e\u4f59\u989d",id:"b\u9a8c\u8bc1\u8f6c\u8d26\u540e\u4f59\u989d",level:4},{value:"4\u3001ethers.js",id:"4ethersjs",level:3},{value:"a\u3001\u5e38\u7528\u65b9\u6cd5",id:"a\u5e38\u7528\u65b9\u6cd5",level:4},{value:"accounts",id:"accounts",level:5},{value:"contract",id:"contract",level:5},{value:"balance &amp; transfer",id:"balance--transfer",level:5},{value:"approve",id:"approve",level:5},{value:"5\u3001@openzeppelin/contracts",id:"5openzeppelincontracts",level:3},{value:"FAQ",id:"faq",level:3},{value:"Error: Returned error: replacement transaction underpriced",id:"error-returned-error-replacement-transaction-underpriced",level:5}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"start",children:"Start"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"code"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/fivge/web3/tree/master/01.basic/01",children:"https://github.com/fivge/web3/tree/master/01.basic/01"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"1\u90e8\u7f72\u5408\u7ea6",children:"1\u3001\u90e8\u7f72\u5408\u7ea6"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"new web3.eth.Contract(abi).deploy;\nweb3.eth.accounts.signTransaction;\nweb3.eth.sendSignedTransaction;\n"})}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"a\u7f16\u8bd1\u5408\u7ea6",children:"a\u3001\u7f16\u8bd1\u5408\u7ea6"}),"\n",(0,t.jsx)(n.p,{children:".sol \u6587\u4ef6\uff0c\u7f16\u8bd1\u4e3a bin \u6587\u4ef6\uff08\u4e8c\u8fdb\u5236\u6587\u4ef6\uff09"}),"\n",(0,t.jsx)(n.p,{children:"\u5176\u4e2d\u5305\u542b\u5f88\u591a\u7684\u5c5e\u6027/\u503c\uff0c\u6211\u4eec\u9700\u8981\u5176\u4e2d\u5408\u7ea6\u5bf9\u8c61\u7684\u4e8c\u8fdb\u5236\u3001abi \u5c5e\u6027\u503c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Load contract\nconst source = fs.readFileSync('./Incrementer.sol', 'utf8');\n\n// compile solidity\nconst input = {\n  language: 'Solidity',\n  sources: {\n    'Incrementer.sol': {\n      content: source,\n    },\n  },\n  settings: {\n    outputSelection: {\n      '*': {\n        '*': ['*'],\n      },\n    },\n  },\n};\n\nconst tempFile = JSON.parse(solc.compile(JSON.stringify(input)));\nconst contractFile = tempFile.contracts['Incrementer.sol']['Incrementer'];\n\n// Get bin & abi\nconst bytecode = contractFile.evm.bytecode.object;\nconst abi = contractFile.abi;\n"})}),"\n",(0,t.jsx)(n.h4,{id:"b\u6784\u9020-web3-\u5bf9\u8c61",children:"b\u3001\u6784\u9020 web3 \u5bf9\u8c61"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Create web3\nconst web3Api = 'https://sepolia.infura.io/v3/' + process.env.INFURA_ID;\n\nconst web3 = new Web3(web3Api);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7 web3 \u5bf9\u8c61\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u53d1\u9001\u76f8\u5e94\u7684\u4ea4\u6613\u5230\u533a\u5757\u94fe\u7f51\u7edc, \u540c\u65f6\u83b7\u53d6\u533a\u5757\u94fe\u7684\u5904\u7406\u7ed3\u679c."}),"\n",(0,t.jsx)(n.p,{children:"\u6784\u9020 web3 \u5bf9\u8c61\u65f6, \u4e3b\u8981\u9700\u8981\u4f20\u5165\u4e00\u4e2a\u53c2\u6570, \u5c31\u662f\u5bf9\u5e94\u7684\u533a\u5757\u94fe\u7f51\u7edc, \u5305\u62ec sepolia \u7b49\u6d4b\u8bd5\u7f51\u7edc testnet, \u6216\u662f mainnet \u4e3b\u7f51."}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"goerli"}),"\u7f51\u7edc"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const web3Api = 'https://goerli.infura.io/v3/' + process.env.INFURA_ID;\n\nconst web3 = new Web3(web3Api);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"c\u83b7\u53d6\u8d26\u6237\u5730\u5740",children:"c\u3001\u83b7\u53d6\u8d26\u6237\u5730\u5740"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u533a\u5757\u94fe\u4e0a, \u6bcf\u4e2a\u7528\u6237\u90fd\u6709\u4e00\u4e2a\u5bf9\u5e94\u7684\u8d26\u6237\u5730\u5740, \u800c\u8fd9\u4e2a\u8d26\u6237\u5730\u5740\u53ef\u4ee5\u901a\u8fc7\u79c1\u94a5\u8fdb\u884c\u83b7\u53d6. \u8fd9\u91cc, \u6211\u4eec\u8c03\u7528 web3.eth.accounts.privateKeyToAccount \u63a5\u53e3, \u4f20\u5165\u5bf9\u5e94\u7684\u79c1\u94a5, \u5c31\u53ef\u4ee5\u83b7\u53d6\u5bf9\u5e94\u7684\u8d26\u6237\u5730\u5740"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const account = web3.eth.accounts.privateKeyToAccount(privatekey);\nconst account_from = {\n  privateKey: privatekey,\n  accountAddress: account.address,\n};\n"})}),"\n",(0,t.jsx)(n.h4,{id:"d\u90e8\u7f72\u5408\u7ea6",children:"d\u3001\u90e8\u7f72\u5408\u7ea6"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6784\u9020\u76f8\u5e94\u7684\u5408\u7ea6\u5b9e\u4f8b"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u5bf9\u5e94\u7684 abi \u6784\u9020\u76f8\u5e94\u7684\u5408\u7ea6\u5b9e\u4f8b, \u4ee5\u4fbf\u5728\u540e\u7eed\u4e2d\u901a\u8fc7\u5408\u7ea6\u5b9e\u4f8b\u8fdb\u884c\u4ea4\u6613\u7684\u53d1\u9001"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Create contract instance\nconst deployContract = new web3.eth.Contract(abi);\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u521b\u5efa\u5408\u7ea6\u4ea4\u6613"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8c03\u7528 deployContract.deploy \u63a5\u53e3, \u521b\u5efa\u90e8\u7f72\u5408\u7ea6\u7684\u4e8c\u8fdb\u5236\u4ea4\u6613"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd9\u91cc, \u6b64\u4ea4\u6613\u8fd8\u6ca1\u6709\u53d1\u9001\u5230\u533a\u5757\u94fe\u7f51\u7edc, \u5373\u5408\u7ea6\u8fd8\u6ca1\u6709\u88ab\u521b\u5efa"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Create Tx\nconst deployTx = deployContract.deploy({\n  data: bytecode,\n  arguments: [0], // Pass arguments to the contract constructor on deployment(_initialNumber in Incremental.sol)\n});\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u4ea4\u6613\u7b7e\u540d"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u4f7f\u7528\u79c1\u94a5\u5bf9\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Sign Tx\nconst deployTransaction = await web3.eth.accounts.signTransaction(\n  {\n    data: deployTx.encodeABI(),\n    gas: 0xf4240,\n  },\n  account_from.privateKey\n);\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u90e8\u7f72\u5408\u7ea6"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4f7f\u7528\u53d1\u9001\u7b7e\u540d\u540e\u7684\u4ea4\u6613\u5230\u533a\u5757\u94fe\u7f51\u7edc, \u540c\u65f6\u4f1a\u53bb\u8fd4\u56de\u7684\u4ea4\u6613\u56de\u6267. \u4ece\u8fd4\u56de\u7684\u4ea4\u6613\u56de\u6267\u4e2d\u53ef\u4ee5\u5f97\u5230\u6b64\u6b21\u90e8\u7f72\u7684",(0,t.jsx)(n.strong,{children:"\u5408\u7ea6\u7684\u5730\u5740"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"https://sepolia.etherscan.io/address/${deployReceipt.contractAddress}"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const deployReceipt = await web3.eth.sendSignedTransaction(deployTransaction.rawTransaction);\n\n// Your deployed contrac can be viewed at: https://sepolia.etherscan.io/address/${deployReceipt.contractAddress}\nconsole.log(`Contract deployed at address: ${deployReceipt.contractAddress}`);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"2\u4ea4\u6613\u548c\u4e8b\u4ef6",children:"2\u3001\u4ea4\u6613\u548c\u4e8b\u4ef6"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d\uff0c\u53d1\u9001\uff0c\u63a5\u6536\u4ea4\u6613\u56de\u6267\uff0c\u9a8c\u8bc1\u4ea4\u6613\u6267\u884c\u7ed3\u679c"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5bf9\u4e00\u4e2a\u4e8b\u4ef6\u8fdb\u884c\u4e00\u6b21\u6216\u591a\u6b21\u76d1\u542c"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sol",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract Incrementer {\n    uint256 public number;\n\n    event Increment(uint256 value);\n    event Reset();\n\n    constructor(uint256 _initialNumber) {\n        number = _initialNumber;\n    }\n\n    function increment(uint256 _value) public {\n        require(_value > 0, "increment value should be positive number");\n        number = number + _value;\n        emit Increment(_value);\n    }\n\n    function reset() public {\n        number = 0;\n        emit Reset();\n    }\n\n    function getNumber() public view returns (uint256) {\n        return number;\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"a\u52a0\u8f7d\u5408\u7ea6\u5b9e\u4f8b",children:"a\u3001\u52a0\u8f7d\u5408\u7ea6\u5b9e\u4f8b"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u901a\u8fc7\u5df2\u7ecf\u90e8\u7f72\u7684\u5408\u7ea6\u5730\u5740\u52a0\u8f7d\u5408\u7ea6\u5b9e\u4f8b"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"let incrementer = new web3.eth.Contract(abi, createReceipt.contractAddress);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"b\u4e0e\u5408\u7ea6\u4ea4\u4e92",children:"b\u3001\u4e0e\u5408\u7ea6\u4ea4\u4e92"}),"\n",(0,t.jsx)(n.p,{children:"\u5728\u62e5\u6709\u4e00\u4e2a\u5df2\u7ecf\u4e0a\u94fe\u7684\u5408\u7ea6\u5b9e\u4f8b\u540e, \u5c31\u53ef\u4ee5\u548c\u5408\u7ea6\u8fdb\u884c\u4ea4\u4e92"}),"\n",(0,t.jsxs)(n.p,{children:["\u5408\u7ea6\u63a5\u53e3\u5206\u4e3a\u53ea\u8bfb\u548c\u4ea4\u6613\u63a5\u53e3, \u5176\u4e2d",(0,t.jsx)(n.strong,{children:"\u53ea\u8bfb\u63a5\u53e3"}),"\u4e0d\u4f1a\u4ea7\u751f\u533a\u5757, \u800c",(0,t.jsx)(n.strong,{children:"\u4ea4\u6613\u63a5\u53e3"}),"\u8c03\u7528\u4f1a\u5728\u533a\u5757\u94fe\u7f51\u7edc\u4e0a\u4ea7\u751f\u76f8\u5e94\u7684\u533a\u5757\u6570\u636e"]}),"\n",(0,t.jsx)(n.p,{children:"\u4ea4\u6613\u63a5\u53e3\uff1a\n\u6784\u9020\u4ea4\u6613 -> \u53d1\u9001\u4ea4\u6613\u5e76\u83b7\u53d6\u56de\u6267\n\u4ea4\u6613\u7684\u6784\u9020, \u5373\u7f16\u7801\u5408\u7ea6\u63a5\u53e3\u53ca\u76f8\u5e94\u7684\u4f20\u5165\u53c2\u6570\n\u8c03\u7528 sendSignedTransaction \u63a5\u53e3, \u53d1\u9001\u4e0a\u4e00\u6b65\u53d8\u7801\u597d\u7684\u4ea4\u6613, \u540c\u65f6\u83b7\u53d6\u4ea4\u6613\u56de\u6267\u7528\u6237\u68c0\u67e5\u4ea4\u6613\u7684\u5904\u7406\u7ed3\u679c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// \u53ea\u8bfb\nlet number = await incrementer.methods.getNumber().call();\nconsole.log(`The current number stored is: ${number}`);\n\n// \u4ea4\u6613\nlet incrementTx = incrementer.methods.increment(5);\nlet incrementTransaction = await web3.eth.accounts.signTransaction(\n  {\n    to: createReceipt.contractAddress,\n    data: incrementTx.encodeABI(),\n    gas: 8000000,\n  },\n  account_from.privateKey\n);\nconst incrementReceipt = await web3.eth.sendSignedTransaction(incrementTransaction.rawTransaction);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"c\u76d1\u542c\u4e8b\u4ef6",children:"c\u3001\u76d1\u542c\u4e8b\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:'\u5728\u5408\u7ea6\u63a5\u53e3\u8c03\u7528\u4e2d, \u9664\u4e86\u63a5\u53e3\u8fd4\u56de\u7684\u7ed3\u679c\u5916, \u552f\u4e00\u80fd\u83b7\u53d6\u63a5\u53e3\u5904\u7406\u4e2d\u95f4\u4fe1\u606f\u7684\u65b9\u6cd5\u4fbf\u662f "\u4e8b\u4ef6"\n\u5728\u63a5\u53e3\u4e2d, \u901a\u8fc7\u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6, \u7136\u540e\u5728\u5916\u90e8\u6355\u83b7\u533a\u5757\u4ea7\u751f\u7684\u4e8b\u4ef6, \u5c31\u53ef\u4ee5\u83b7\u53d6\u76f8\u5e94\u7684\u5185\u90e8\u4fe1\u606f'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u4e00\u6b21\u6027\u4e8b\u4ef6\u76d1\u542c\u5668 once"}),"\n",(0,t.jsx)(n.li,{children:"\u6301\u7eed\u6027\u4e8b\u4ef6\u76d1\u542c\u5668 events subscribe"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"incrementer.once('Increment', (error, event) => {\n  console.log('I am a onetime event listner, I am going to die now');\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// TODO \u5f85\u9a8c\u8bc1\nincrementer.events.Increment(() => {\n  console.log('I am a longlive event listener, I get a event now');\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const web3Socket = new Web3('wss://sepolia.infura.io/ws/v3/' + process.env.INFURA_ID);\n\nweb3Socket.eth\n  .subscribe(\n    'logs',\n    {\n      address: createReceipt.contractAddress,\n      topics: [],\n    },\n    (error, result) => {\n      if (error) {\n        console.error(error);\n      }\n    }\n  )\n  .on('data', event => {\n    console.log('New event: ', event);\n  })\n  .on('error', error => {\n    console.error('Error: ', error);\n  });\n\nweb3Socket.eth.clearSubscriptions();\n"})}),"\n",(0,t.jsx)(n.h4,{id:"d\u5176\u4ed6",children:"d\u3001\u5176\u4ed6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const pastEvents = await incrementer.getPastEvents('Increment', {\n  fromBlock: deployedBlockNumber,\n  toBlock: 'latest',\n});\n\npastEvents.map(event => {\n  console.log(event);\n});\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u9519\u8bef\u5904\u7406"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"incrementTx = incrementer.methods.increment(0);\nincrementTransaction = await web3.eth.accounts.signTransaction(\n  {\n    to: createReceipt.contractAddress,\n    data: incrementTx.encodeABI(),\n    gas: 8000000,\n  },\n  account_from.privateKey\n);\nawait web3.eth.sendSignedTransaction(incrementTransaction.rawTransaction).on('error', console.error);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"3erc20-\u5408\u7ea6",children:"3\u3001ERC20 \u5408\u7ea6"}),"\n",(0,t.jsx)(n.h4,{id:"a\u6784\u9020\u8f6c\u8d26\u4ea4\u6613",children:"a\u3001\u6784\u9020\u8f6c\u8d26\u4ea4\u6613"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const transferTx = erc20Contract.methods.transfer(receiver, 12).encodeABI();\nconst transferTransaction = await web3.eth.accounts.signTransaction(\n  {\n    to: deployReceipt.contractAddress,\n    data: transferTx,\n    gas: 8000000,\n  },\n  account_from.privateKey\n);\nawait web3.eth.sendSignedTransaction(transferTransaction.rawTransaction);\n"})}),"\n",(0,t.jsx)(n.h4,{id:"b\u9a8c\u8bc1\u8f6c\u8d26\u540e\u4f59\u989d",children:"b\u3001\u9a8c\u8bc1\u8f6c\u8d26\u540e\u4f59\u989d"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"await erc20Contract.methods\n  .balanceOf(receiver)\n  .call()\n  .then(result => {\n    console.log(`The balance of receiver is ${result}`);\n  });\n"})}),"\n",(0,t.jsx)(n.h3,{id:"4ethersjs",children:"4\u3001ethers.js"}),"\n",(0,t.jsx)(n.h4,{id:"a\u5e38\u7528\u65b9\u6cd5",children:"a\u3001\u5e38\u7528\u65b9\u6cd5"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://ethereum.org/zh/developers/tutorials/transfers-and-approval-of-erc-20-tokens-from-a-solidity-smart-contract/",children:"https://ethereum.org/zh/developers/tutorials/transfers-and-approval-of-erc-20-tokens-from-a-solidity-smart-contract/"})}),"\n",(0,t.jsx)(n.h5,{id:"accounts",children:"accounts"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const [deployer] = await ethers.getSigners();\n\ndeployer.address;\n\n(await deployer.getBalance()).toString();\n"})}),"\n",(0,t.jsx)(n.h5,{id:"contract",children:"contract"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const token = await ethers.deployContract('SimpleToken', ['\u68a6\u5e7b\u7cbe\u70bc\u6750', 'MTOKEN', 0, 999999]);\nawait token.waitForDeployment();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const token = await ethers.getContractAt('SimpleToken', CONTRACT_ADDRESS);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"await token.getAddress();\n"})}),"\n",(0,t.jsx)(n.h5,{id:"balance--transfer",children:"balance & transfer"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const balance = await token.balanceOf(deployer.address);\nbalance.toString();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let transferReceipt = await token.transfer(receiver, 50);\nawait transferReceipt.wait();\n"})}),"\n",(0,t.jsx)(n.h5,{id:"approve",children:"approve"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const allowance = await token.allowance(deployer.address, receiver);\nallowance.toString();\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"let approveRecipt = await token.approve(receiver, 1000);\nawait approveRecipt.wait();\n"})}),"\n",(0,t.jsx)(n.h3,{id:"5openzeppelincontracts",children:"5\u3001@openzeppelin/contracts"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://docs.openzeppelin.com/contracts/5.x/",children:"https://docs.openzeppelin.com/contracts/5.x/"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"faq",children:"FAQ"}),"\n",(0,t.jsx)(n.h5,{id:"error-returned-error-replacement-transaction-underpriced",children:"Error: Returned error: replacement transaction underpriced"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Error: Returned error: replacement transaction underpriced\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>a});var t=r(7294);const c={},s=t.createContext(c);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);