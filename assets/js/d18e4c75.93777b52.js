"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1267],{5002:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var t=i(5893),l=i(1151);const s={title:"vim",date:new Date("2018-02-04T03:51:00.000Z"),update:new Date("2018-05-16T23:03:00.000Z"),tags:["vim","Term"],categories:["Term"]},c=void 0,r={id:"CloudNative/system/vim/vim",title:"vim",description:"VIM \u914d\u7f6e",source:"@site/docs/CloudNative/system/vim/vim.md",sourceDirName:"CloudNative/system/vim",slug:"/CloudNative/system/vim/",permalink:"/docs/CloudNative/system/vim/",draft:!1,unlisted:!1,tags:[{label:"vim",permalink:"/docs/tags/vim"},{label:"Term",permalink:"/docs/tags/term"}],version:"current",lastUpdatedAt:1714465809e3,frontMatter:{title:"vim",date:"2018-02-04T03:51:00.000Z",update:"2018-05-16T23:03:00.000Z",tags:["vim","Term"],categories:["Term"]},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u548c\u7528\u6237\u7ec4",permalink:"/docs/CloudNative/system/user/\u7528\u6237\u548c\u7528\u6237\u7ec4"},next:{title:"vimrc",permalink:"/docs/CloudNative/system/vim/vimrc"}},h={},a=[{value:"VIM \u914d\u7f6e",id:"vim-\u914d\u7f6e",level:3},{value:"0x01 Vundle",id:"0x01-vundle",level:5},{value:"0x02 YouCompleteMe",id:"0x02-youcompleteme",level:5},{value:"0x03 \u8bed\u6cd5\u9ad8\u4eae",id:"0x03-\u8bed\u6cd5\u9ad8\u4eae",level:5},{value:"0x04 \u72b6\u6001\u680f(\u4e0d\u559c)",id:"0x04-\u72b6\u6001\u680f\u4e0d\u559c",level:5},{value:"0x05 \u4e3b\u9898",id:"0x05-\u4e3b\u9898",level:5},{value:"0x06 alpertuna/vim-header",id:"0x06-alpertunavim-header",level:5},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:5},{value:"0x07 .vimrc(\u5f85\u914d\u7f6e)",id:"0x07-vimrc\u5f85\u914d\u7f6e",level:5},{value:"0x08 \u91cd\u65b0\u52a0\u8f7d vim \u914d\u7f6e",id:"0x08-\u91cd\u65b0\u52a0\u8f7d-vim-\u914d\u7f6e",level:5},{value:"0x09 \u76d8\u53e4\u4e4b\u767d",id:"0x09-\u76d8\u53e4\u4e4b\u767d",level:5},{value:"0x0A Usful link",id:"0x0a-usful-link",level:5},{value:"vim",id:"vim",level:3},{value:"vimwiki",id:"vimwiki",level:3},{value:"YouCompleteMe",id:"youcompleteme",level:3},{value:"K-Vim",id:"k-vim",level:3},{value:"vimrc",id:"vimrc",level:3}];function m(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",h5:"h5",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"vim-\u914d\u7f6e",children:"VIM \u914d\u7f6e"}),"\n",(0,t.jsx)(n.h5,{id:"0x01-vundle",children:"0x01 Vundle"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u63d2\u4ef6\u7ba1\u7406\u5de5\u5177"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/VundleVim/Vundle.vim",children:"https://github.com/VundleVim/Vundle.vim"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-basic",children:"set nocompatible              \" \u53bb\u9664VI\u4e00\u81f4\u6027,\u5fc5\u987b\nfiletype off                  \" \u5fc5\u987b\n\n\" \u8bbe\u7f6e\u5305\u62ecvundle\u548c\u521d\u59cb\u5316\u76f8\u5173\u7684runtime path\nset rtp+=~/.vim/bundle/Vundle.vim\ncall vundle#begin()\n\" \u53e6\u4e00\u79cd\u9009\u62e9, \u6307\u5b9a\u4e00\u4e2avundle\u5b89\u88c5\u63d2\u4ef6\u7684\u8def\u5f84\n\"call vundle#begin('~/some/path/here')\n\n\" \u8ba9vundle\u7ba1\u7406\u63d2\u4ef6\u7248\u672c,\u5fc5\u987b\nPlugin 'VundleVim/Vundle.vim'\n\n\" \u4ee5\u4e0b\u8303\u4f8b\u7528\u6765\u652f\u6301\u4e0d\u540c\u683c\u5f0f\u7684\u63d2\u4ef6\u5b89\u88c5.\n\" \u8bf7\u5c06\u5b89\u88c5\u63d2\u4ef6\u7684\u547d\u4ee4\u653e\u5728vundle#begin\u548cvundle#end\u4e4b\u95f4.\n\" Github\u4e0a\u7684\u63d2\u4ef6\n\" \u683c\u5f0f\u4e3a Plugin '\u7528\u6237\u540d/\u63d2\u4ef6\u4ed3\u5e93\u540d'\n\" Plugin 'tpope/vim-fugitive'\n\" \u6765\u81ea http://vim-scripts.org/vim/scripts.html \u7684\u63d2\u4ef6\n\" Plugin '\u63d2\u4ef6\u540d\u79f0' \u5b9e\u9645\u4e0a\u662f Plugin 'vim-scripts/\u63d2\u4ef6\u4ed3\u5e93\u540d' \u53ea\u662f\u6b64\u5904\u7684\u7528\u6237\u540d\u53ef\u4ee5\u7701\u7565\n\" Plugin 'L9'\n\" \u7531Git\u652f\u6301\u4f46\u4e0d\u518dgithub\u4e0a\u7684\u63d2\u4ef6\u4ed3\u5e93 Plugin 'git clone \u540e\u9762\u7684\u5730\u5740'\nPlugin 'git://git.wincent.com/command-t.git'\n\" \u672c\u5730\u7684Git\u4ed3\u5e93(\u4f8b\u5982\u81ea\u5df1\u7684\u63d2\u4ef6) Plugin 'file:///+\u672c\u5730\u63d2\u4ef6\u4ed3\u5e93\u7edd\u5bf9\u8def\u5f84'\n\" Plugin 'file:///home/gmarik/path/to/plugin'\n\" \u63d2\u4ef6\u5728\u4ed3\u5e93\u7684\u5b50\u76ee\u5f55\u4e2d.\n\" \u6b63\u786e\u6307\u5b9a\u8def\u5f84\u7528\u4ee5\u8bbe\u7f6eruntimepath. \u4ee5\u4e0b\u8303\u4f8b\u63d2\u4ef6\u5728sparkup/vim\u76ee\u5f55\u4e0b\n\" Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}\n\" \u5b89\u88c5L9\uff0c\u5982\u679c\u5df2\u7ecf\u5b89\u88c5\u8fc7\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u53ef\u5229\u7528\u4ee5\u4e0b\u683c\u5f0f\u907f\u514d\u547d\u540d\u51b2\u7a81\n\" Plugin 'ascenator/L9', {'name': 'newL9'}\n\n\" \u4f60\u7684\u6240\u6709\u63d2\u4ef6\u9700\u8981\u5728\u4e0b\u9762\u8fd9\u884c\u4e4b\u524d\ncall vundle#end()            \" \u5fc5\u987b\nfiletype plugin indent on    \" \u5fc5\u987b \u52a0\u8f7dvim\u81ea\u5e26\u548c\u63d2\u4ef6\u76f8\u5e94\u7684\u8bed\u6cd5\u548c\u6587\u4ef6\u7c7b\u578b\u76f8\u5173\u811a\u672c\n\" \u5ffd\u89c6\u63d2\u4ef6\u6539\u53d8\u7f29\u8fdb,\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u66ff\u4ee3:\n\"filetype plugin on\n\"\n\" \u67e5\u9605 :h vundle \u83b7\u53d6\u66f4\u591a\u7ec6\u8282\u548cwiki\u4ee5\u53caFAQ\n\" \u5c06\u4f60\u81ea\u5df1\u5bf9\u975e\u63d2\u4ef6\u7247\u6bb5\u653e\u5728\u8fd9\u884c\u4e4b\u540e\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-basic",children:'" \u7b80\u8981\u5e2e\u52a9\u6587\u6863\n\n" :PluginList       - \u5217\u51fa\u6240\u6709\u5df2\u914d\u7f6e\u7684\u63d2\u4ef6\n\n" :PluginInstall    - \u5b89\u88c5\u63d2\u4ef6,\u8ffd\u52a0 ! \u7528\u4ee5\u66f4\u65b0\u6216\u4f7f\u7528 :PluginUpdate\n\n" :PluginSearch foo - \u641c\u7d22 foo ; \u8ffd\u52a0 ! \u6e05\u9664\u672c\u5730\u7f13\u5b58\n\n" :PluginClean      - \u6e05\u9664\u672a\u4f7f\u7528\u63d2\u4ef6,\u9700\u8981\u786e\u8ba4; \u8ffd\u52a0 ! \u81ea\u52a8\u6279\u51c6\u79fb\u9664\u672a\u4f7f\u7528\u63d2\u4ef6\n'})}),"\n",(0,t.jsx)(n.h5,{id:"0x02-youcompleteme",children:"0x02 YouCompleteMe"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u81ea\u52a8\u8865\u5168\u63d2\u4ef6(\u5f85\u914d\u7f6e,\u5df2\u5b89\u88c5)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/Valloric/YouCompleteMe",children:"https://github.com/Valloric/YouCompleteMe"})}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"0x03-\u8bed\u6cd5\u9ad8\u4eae",children:"0x03 \u8bed\u6cd5\u9ad8\u4eae"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/vim-syntastic/syntastic",children:"https://github.com/vim-syntastic/syntastic"})}),"\n",(0,t.jsx)(n.h5,{id:"0x04-\u72b6\u6001\u680f\u4e0d\u559c",children:"0x04 \u72b6\u6001\u680f(\u4e0d\u559c)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/vim-airline/vim-airline",children:"https://github.com/vim-airline/vim-airline"})}),"\n",(0,t.jsx)(n.h5,{id:"0x05-\u4e3b\u9898",children:"0x05 \u4e3b\u9898"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/tomasr/molokai",children:"https://github.com/tomasr/molokai"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/altercation/vim-colors-solarized",children:"https://github.com/altercation/vim-colors-solarized"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/nathanaelkane/vim-indent-guides",children:"https://github.com/nathanaelkane/vim-indent-guides"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/flazz/vim-colorschemes",children:"https://github.com/flazz/vim-colorschemes"})}),"\n",(0,t.jsx)(n.h5,{id:"0x06-alpertunavim-header",children:"0x06 alpertuna/vim-header"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u81ea\u52a8\u63d2\u5165\u5934\u6587\u4ef6(\u4e0d\u597d\u7528)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/alpertuna/vim-header",children:"https://github.com/alpertuna/vim-header"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"F4 \u81ea\u52a8\u6dfb\u52a0\u4f5c\u8005\u4fe1\u606f"})}),"\n",(0,t.jsx)(n.h5,{id:"\u5feb\u6377\u952e",children:"\u5feb\u6377\u952e"}),"\n",(0,t.jsx)(n.p,{children:"\u7a7a\u683c \u53ef\u6298\u53e0\u4ee3\u7801"}),"\n",(0,t.jsx)(n.h5,{id:"0x07-vimrc\u5f85\u914d\u7f6e",children:"0x07 .vimrc(\u5f85\u914d\u7f6e)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-basic",children:'" mac\u4f7f\u7528\u7cfb\u7edf\u526a\u8d34\u677f\nset clipboard+=unnamed\n" \u6587\u4ef6\u7f16\u7801\nset encoding=utf-8\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-basic",children:'"\u663e\u793a\u884c\u53f7\nset nu\n\n"\u542f\u52a8\u65f6\u9690\u53bb\u63f4\u52a9\u63d0\u793a\nset shortmess=atI\n\n"\u8bed\u6cd5\u9ad8\u4eae\nsyntax on\n\n"\u4f7f\u7528vim\u7684\u952e\u76d8\u6a21\u5f0f\n"set nocompatible\n\n"\u4e0d\u9700\u8981\u5907\u4efd\nset nobackup\n\n"\u6ca1\u6709\u4fdd\u5b58\u6216\u6587\u4ef6\u53ea\u8bfb\u65f6\u5f39\u51fa\u786e\u8ba4\nset confirm\n\n"\u9f20\u6807\u53ef\u7528\nset mouse=a\n\n"tab\u7f29\u8fdb\nset tabstop=4\nset shiftwidth=4\nset expandtab\nset smarttab\n\n"\u6587\u4ef6\u81ea\u52a8\u68c0\u6d4b\u5916\u90e8\u66f4\u6539\nset autoread\n\n"c\u6587\u4ef6\u81ea\u52a8\u7f29\u8fdb\nset cindent\n\n"\u81ea\u52a8\u5bf9\u9f50\nset autoindent\n\n"\u667a\u80fd\u7f29\u8fdb\nset smartindent\n\n"\u9ad8\u4eae\u67e5\u627e\u5339\u914d\nset hlsearch\n\n"\u80cc\u666f\u8272\nset background=dark\n\n"\u663e\u793a\u5339\u914d\nset showmatch\n\n"\u663e\u793a\u6807\u5c3a\uff0c\u5c31\u662f\u5728\u53f3\u4e0b\u89d2\u663e\u793a\u5149\u6807\u4f4d\u7f6e\nset ruler\n\n"\u53bb\u9664vi\u7684\u4e00\u81f4\u6027\nset nocompatible\n\n"\u5141\u8bb8\u6298\u53e0\nset foldenable\n"""""""""""""""""\u8bbe\u7f6e\u6298\u53e0"""""""""""""""""""""\n"\n"\u6839\u636e\u8bed\u6cd5\u6298\u53e0\nset fdm=syntax\n\n"\u624b\u52a8\u6298\u53e0\n"set fdm=manual\n\n"\u8bbe\u7f6e\u952e\u76d8\u6620\u5c04\uff0c\u901a\u8fc7\u7a7a\u683c\u8bbe\u7f6e\u6298\u53e0\nnnoremap <space> @=((foldclosed(line(\'.\')<0)?\'zc\':\'zo\'))<CR>\n""""""""""""""""""""""""""""""""""""""""""""""\n"\u4e0d\u8981\u95ea\u70c1\nset novisualbell\n\n"\u542f\u52a8\u663e\u793a\u72b6\u6001\u884c\nset laststatus=2\n\n"\u6d45\u8272\u663e\u793a\u5f53\u524d\u884c\nautocmd InsertLeave * se nocul\n\n"\u7528\u6d45\u8272\u9ad8\u4eae\u5f53\u524d\u884c\nautocmd InsertEnter * se cul\n\n"\u663e\u793a\u8f93\u5165\u7684\u547d\u4ee4\nset showcmd\n\n"\u88ab\u5206\u5272\u7a97\u53e3\u4e4b\u95f4\u663e\u793a\u7a7a\u767d\nset fillchars=vert:/\n\nset fillchars=stl:/\n\nset fillchars=stlnc:/\n'})}),"\n",(0,t.jsx)(n.h5,{id:"0x08-\u91cd\u65b0\u52a0\u8f7d-vim-\u914d\u7f6e",children:"0x08 \u91cd\u65b0\u52a0\u8f7d vim \u914d\u7f6e"}),"\n",(0,t.jsx)(n.p,{children:"\u5728 vim \u4e2d\u6267\u884c:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-basic",children:":source %\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5373\u91cd\u65b0\u52a0\u8f7d\u5f53\u524d\u6587\u4ef6"}),"\n",(0,t.jsx)(n.h5,{id:"0x09-\u76d8\u53e4\u4e4b\u767d",children:"0x09 \u76d8\u53e4\u4e4b\u767d"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/hotoo/pangu.vim",children:"https://github.com/hotoo/pangu.vim"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\u5982\u679c\u60f3\u5728\u5176\u4ed6\u683c\u5f0f\u7684\u6587\u4ef6\u4e2d\u4f7f\u7528\u8fd9\u4e2a\u529f\u80fd\uff0c\u53ef\u4ee5\u6267\u884c \xa0",(0,t.jsx)(n.code,{children:":Pangu"}),"\xa0 \u547d\u4ee4"]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"0x0a-usful-link",children:"0x0A Usful link"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u63d2\u4ef6\u5e73\u53f0"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://vimawesome.com",children:"https://vimawesome.com"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"vim",children:"vim"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.h3,{id:"vimwiki",children:"vimwiki"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/vimwiki/vimwiki",children:"https://github.com/vimwiki/vimwiki"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.h3,{id:"youcompleteme",children:"YouCompleteMe"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/LooEv/A-bridge-to-YouCompleteMe",children:"https://github.com/LooEv/A-bridge-to-YouCompleteMe"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.h3,{id:"k-vim",children:"K-Vim"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/wklken/k-vim",children:"https://github.com/wklken/k-vim"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.h3,{id:"vimrc",children:"vimrc"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/amix/vimrc",children:"https://github.com/amix/vimrc"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"precision colorscheme for the vim text editor"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/altercation/vim-colors-solarized",children:"https://github.com/altercation/vim-colors-solarized"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"vim \u63d2\u4ef6"}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"\u53c2\u8003\u6587\u7ae0:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://linux.cn/article-5880-1.html",children:"https://linux.cn/article-5880-1.html"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://linux.cn/article-7901-1.html?utm_source=index&utm_medium=more",children:"https://linux.cn/article-7901-1.html?utm_source=index&utm_medium=more"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://linux.cn/article-7909-1.html",children:"https://linux.cn/article-7909-1.html"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"wget -qO- https://raw.github.com/ma6174/vim/master/setup.sh | sh -x\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"macvim"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/macvim-dev/macvim/releases",children:"https://github.com/macvim-dev/macvim/releases"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/amix/vimrc/blob/master/vimrcs/basic.vim",children:"https://github.com/amix/vimrc/blob/master/vimrcs/basic.vim"})})]})}function o(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var t=i(7294);const l={},s=t.createContext(l);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);