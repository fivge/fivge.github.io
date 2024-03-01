"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6127],{6520:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>r});var s=t(5893),i=t(1151);const c={},l=void 0,o={id:"CloudNative/devops/openstack/OpenStack",title:"OpenStack",description:"OpenStack",source:"@site/docs/CloudNative/devops/openstack/OpenStack.md",sourceDirName:"CloudNative/devops/openstack",slug:"/CloudNative/devops/openstack/",permalink:"/docs/CloudNative/devops/openstack/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"microk8s",permalink:"/docs/CloudNative/devops/microk8s"},next:{title:"OpenStack\u73af\u5883\u914d\u7f6e",permalink:"/docs/CloudNative/devops/openstack/errors"}},d={},r=[{value:"OpenStack",id:"openstack",level:3},{value:"OpenStack \u73af\u5883\u642d\u5efa",id:"openstack-\u73af\u5883\u642d\u5efa",level:3},{value:"0x01 \u8bbe\u7f6e\u955c\u50cf\u6e90",id:"0x01-\u8bbe\u7f6e\u955c\u50cf\u6e90",level:3},{value:"0x02 \u8bbe\u7f6e pip",id:"0x02-\u8bbe\u7f6e-pip",level:3},{value:"0x03 \u5b89\u88c5 mysql",id:"0x03-\u5b89\u88c5-mysql",level:3},{value:"0x04",id:"0x04",level:3},{value:"\u90e8\u7f72\u8fc1\u79fb",id:"\u90e8\u7f72\u8fc1\u79fb",level:3}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h3,{id:"openstack",children:"OpenStack"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://github.com/openstack",children:"https://github.com/openstack"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4e2d\u6587(Mitaka)"}),"\n",(0,s.jsx)(e.p,{children:"OpenStack Installation Guide for Ubuntu"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.openstack.org/mitaka/zh_CN/install-guide-ubuntu/index.html",children:"https://docs.openstack.org/mitaka/zh_CN/install-guide-ubuntu/index.html"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u82f1\u6587(Ocata)"}),"\n",(0,s.jsx)(e.p,{children:"OpenStack Installation Tutorial for Ubuntu"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.openstack.org/ocata/install-guide-ubuntu/index.html",children:"https://docs.openstack.org/ocata/install-guide-ubuntu/index.html"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u670d\u52a1"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b9e\u4f8b"}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Term"}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"openstack-\u73af\u5883\u642d\u5efa",children:"OpenStack \u73af\u5883\u642d\u5efa"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.h3,{id:"0x01-\u8bbe\u7f6e\u955c\u50cf\u6e90",children:"0x01 \u8bbe\u7f6e\u955c\u50cf\u6e90"}),"\n",(0,s.jsx)(e.h3,{id:"0x02-\u8bbe\u7f6e-pip",children:"0x02 \u8bbe\u7f6e pip"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/help/pypi/",children:"https://mirrors.tuna.tsinghua.edu.cn/help/pypi/"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"\u4fee\u6539 ~/.pip/pip.conf (\u6ca1\u6709\u5c31\u521b\u5efa\u4e00\u4e2a)\uff0c \u4fee\u6539 index-url\u81f3tuna\uff0c\u4f8b\u5982\n\n[global]\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.h3,{id:"0x03-\u5b89\u88c5-mysql",children:"0x03 \u5b89\u88c5 mysql"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u4e0d\u8981\u5b89\u88c5 mariadb"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.h3,{id:"0x04",children:"0x04"}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u76f4\u63a5\u6267\u884c\u811a\u672c"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Devstackhttps://pom.nops.cloud/deployment_tool/devstack.html"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5b98\u65b9\u6587\u6863"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5b89\u88c5 ",(0,s.jsx)(e.a,{href:"https://docs.openstack.org/developer/devstack/",children:"https://docs.openstack.org/developer/devstack/"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["GitHub ",(0,s.jsx)(e.a,{href:"https://github.com/openstack-dev/devstack",children:"https://github.com/openstack-dev/devstack"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u914d\u7f6e ",(0,s.jsx)(e.a,{href:"https://docs.openstack.org/developer/devstack/configuration.html",children:"https://docs.openstack.org/developer/devstack/configuration.html"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u624b\u52a8\u90e8\u7f72"}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["OpenStack Mitaka for Ubuntu 16.04 LTS \u90e8\u7f72\u6307\u5357 ",(0,s.jsx)(e.a,{href:"https://www.zybuluo.com/ncepuwanghui/note/389373",children:"https://www.zybuluo.com/ncepuwanghui/note/389373"})]}),"\n",(0,s.jsx)(e.p,{children:"\u5b98\u65b9\u6587\u6863 OpenStack Installation Guide for Ubuntu"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://docs.openstack.org/mitaka/zh_CN/install-guide-ubuntu/index.html",children:"https://docs.openstack.org/mitaka/zh_CN/install-guide-ubuntu/index.html"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u7b2c\u4e09\u65b9\u6587\u6863(\u4ec5\u4f9b\u53c2\u8003)"}),"\n"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"http://blog.csdn.net/zhujie_hades/article/details/52181244",children:"ubuntu 16.04 \u4e0a\u5b89\u88c5 OpenStack Mitaka \uff08all-in-one\uff09\uff1aNova \u5b89\u88c5\u4e0e\u914d\u7f6e"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"http://blog.csdn.net/zhujie_hades/article/details/52181244",children:"http://blog.csdn.net/zhujie_hades/article/details/52181244"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728 Ubuntu \u4e0a\u5b89\u88c5\u548c\u914d\u7f6e OpenStack Nova \u53ca 25 \u95ee\u9898\u603b\u7ed3"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"http://www.aboutyun.com/thread-6914-1-1.html",children:"http://www.aboutyun.com/thread-6914-1-1.html"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728 Ubuntu \u4e0a\u5b89\u88c5\u548c\u914d\u7f6e OpenStack Nova"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"http://www.vpsee.com/2011/05/install-openstack-nova-on-ubuntu/",children:"http://www.vpsee.com/2011/05/install-openstack-nova-on-ubuntu/"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u90e8\u7f72\u8fc1\u79fb",children:"\u90e8\u7f72\u8fc1\u79fb"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"OPENSTACK \u4e91\u8ba1\u7b97\u5e73\u53f0\u7ba1\u7406\u5458\u624b\u518c -> \u914d\u7f6e\u8fc1\u79fb"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"http://docs.ocselected.org/openstack-manuals/kilo/admin-guide-cloud/content/section_configuring-compute-migrations.html",children:"http://docs.ocselected.org/openstack-manuals/kilo/admin-guide-cloud/content/section_configuring-compute-migrations.html"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"IBM(\u4e3b\u8981\u53c2\u8003)"}),"\n",(0,s.jsx)(e.p,{children:"\u865a\u62df\u673a\u5728 OpenStack \u91cc\u6ca1\u6709\u5171\u4eab\u5b58\u50a8\u6761\u4ef6\u4e0b\u7684\u5728\u7ebf\u8fc1\u79fb"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://www.ibm.com/developerworks/cn/cloud/library/1508_wangyx_openstacklivemigrate/index.html",children:"https://www.ibm.com/developerworks/cn/cloud/library/1508_wangyx_openstacklivemigrate/index.html"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>o,a:()=>l});var s=t(7294);const i={},c=s.createContext(i);function l(n){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);