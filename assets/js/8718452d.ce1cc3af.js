"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2342],{478:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=s(5893),i=s(1151);const r={},t=void 0,c={id:"OS/macos/Term",title:"Term",description:"1. RubyGems \u955c\u50cf",source:"@site/docs/OS/macos/Term.md",sourceDirName:"OS/macos",slug:"/OS/macos/Term",permalink:"/docs/OS/macos/Term",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710142821,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System",permalink:"/docs/OS/macos/System"},next:{title:"brew",permalink:"/docs/OS/macos/brew"}},h={},a=[{value:"1. RubyGems \u955c\u50cf",id:"1-rubygems-\u955c\u50cf",level:3},{value:"2.brew",id:"2brew",level:3},{value:"3.oh-my-zsh",id:"3oh-my-zsh",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:6},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:6},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:6},{value:"autojump",id:"autojump",level:6},{value:"\u63d2\u4ef6",id:"\u63d2\u4ef6",level:6},{value:"\u76ee\u5f55\u6d4f\u89c8\u548c\u8df3\u8f6c",id:"\u76ee\u5f55\u6d4f\u89c8\u548c\u8df3\u8f6c",level:6},{value:"\u901a\u914d\u7b26\u641c\u7d22",id:"\u901a\u914d\u7b26\u641c\u7d22",level:6},{value:"4.vim",id:"4vim",level:3},{value:"5.macvim",id:"5macvim",level:3},{value:"\u5b89\u88c5macvim",id:"\u5b89\u88c5macvim",level:6},{value:"6.Tmux",id:"6tmux",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5-1",level:6},{value:"7.Powerline",id:"7powerline",level:3},{value:"\u5b89\u88c5powerline",id:"\u5b89\u88c5powerline",level:6},{value:"\u5b89\u88c5\u7f3a\u5931\u5b57\u4f53",id:"\u5b89\u88c5\u7f3a\u5931\u5b57\u4f53",level:6},{value:"\u914d\u7f6ezsh",id:"\u914d\u7f6ezsh",level:6},{value:"\u914d\u7f6evim",id:"\u914d\u7f6evim",level:6},{value:"8.\u5217\u51fa\u78c1\u76d8",id:"8\u5217\u51fa\u78c1\u76d8",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h6:"h6",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h3,{id:"1-rubygems-\u955c\u50cf",children:"1. RubyGems \u955c\u50cf"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ gem sources --remove https://rubygems.org/\n$ gem sources -a https://ruby.taobao.org/\n$ gem sources -l\n*** CURRENT SOURCES ***\n\nhttps://ruby.taobao.org\n# \u8bf7\u786e\u4fdd\u53ea\u6709 ruby.taobao.org\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"$ gem install rails\n"})}),"\n",(0,l.jsx)(n.h3,{id:"2brew",children:"2.brew"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"http://brew.sh/index_zh-cn.html",children:"Homebrew"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/",children:"\u6e05\u534e\u5927\u5b66\u6e90"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"http://mirrors.ustc.edu.cn",children:"\u4e2d\u79d1\u5927\u955c\u50cf\u6e90"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:'### \u5b89\u88c5Homebrew\n/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n### \u5207\u6362\u8f6f\u4ef6\u6e90\ncd "$(brew --repo)"\ngit remote set-url origin git://mirrors.ustc.edu.cn/brew.git\ncd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git\n\u6216\u8005\ncd "$(brew --repo)"\ngit remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git\ncd /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core\ngit remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git\n### \u7136\u540e\u6267\u884c\nbrew update\n'})}),"\n",(0,l.jsx)(n.h3,{id:"3oh-my-zsh",children:"3.oh-my-zsh"}),"\n",(0,l.jsx)(n.h6,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6216\u8005"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh\ncp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\n"})}),"\n",(0,l.jsx)(n.h6,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,l.jsxs)(n.p,{children:["\u7f16\u8f91\u6587\u4ef6",(0,l.jsx)(n.code,{children:".zshrc"})]}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\u548c\u522b\u540d"}),"\n",(0,l.jsx)(n.h6,{id:"\u4e3b\u9898",children:"\u4e3b\u9898"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:".zshrc"}),"\u91cc",(0,l.jsx)(n.code,{children:"ZSH_THEME"}),"\u8bbe\u7f6e\u4e3b\u9898"]}),"\n",(0,l.jsxs)(n.p,{children:["\u76f8\u5173\u6587\u4ef6\u5728",(0,l.jsx)(n.code,{children:"~/.oh-my-zsh/themes"}),"\u76ee\u5f55\u4e0b"]}),"\n",(0,l.jsx)(n.h6,{id:"autojump",children:"autojump"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"mac"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"brew install autojump\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Linux"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"git clone git://github.com/joelthelion/autojump.git\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6700\u540e\u628a\u4ee5\u4e0b\u4ee3\u7801\u52a0\u5165.zshrc\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"[[ -s ~/.autojump/etc/profile.d/autojump.sh ]] && . ~/.autojump/etc/profile.d/autojump.sh\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u667a\u80fd\u8df3\u8f6c\uff0c\u5b89\u88c5\u4e86autojump\u4e4b\u540e\uff0czsh \u4f1a\u81ea\u52a8\u8bb0\u5f55\u4f60\u8bbf\u95ee\u8fc7\u7684\u76ee\u5f55\uff0c\u901a\u8fc7",(0,l.jsx)(n.code,{children:"j +"}),"\u76ee\u5f55\u540d \u53ef\u4ee5\u76f4\u63a5\u8fdb\u884c\u76ee\u5f55\u8df3\u8f6c\uff0c\u800c\u4e14\u76ee\u5f55\u540d\u652f\u6301\u6a21\u7cca\u5339\u914d\u548c\u81ea\u52a8\u8865\u5168\uff0c\u4f8b\u5982\u4f60\u8bbf\u95ee\u8fc7",(0,l.jsx)(n.code,{children:"hadoop-1.0.0"}),"\u76ee\u5f55\uff0c\u8f93\u5165",(0,l.jsx)(n.code,{children:"j hado"})," \u5373\u53ef\u6b63\u786e\u8df3\u8f6c\u3002",(0,l.jsx)(n.code,{children:"j \u2013stat "}),"\u53ef\u4ee5\u770b\u4f60\u7684\u5386\u53f2\u8def\u5f84\u5e93\u3002"]}),"\n",(0,l.jsx)(n.h6,{id:"\u63d2\u4ef6",children:"\u63d2\u4ef6"}),"\n",(0,l.jsx)(n.p,{children:"oh-my-zsh \u9879\u76ee\u63d0\u4f9b\u4e86\u5b8c\u5584\u7684\u63d2\u4ef6\u4f53\u7cfb\uff0c\u76f8\u5173\u7684\u6587\u4ef6\u5728~/.oh-my-zsh/plugins\u76ee\u5f55\u4e0b\uff0c\u9ed8\u8ba4\u63d0\u4f9b\u4e86100\u591a\u79cd\uff0c\u5927\u5bb6\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u5b9e\u9645\u5b66\u4e60\u548c\u5de5\u4f5c\u73af\u5883\u91c7\u7528\uff0c\u60f3\u4e86\u89e3\u6bcf\u4e2a\u63d2\u4ef6\u7684\u529f\u80fd\uff0c\u53ea\u8981\u6253\u5f00\u76f8\u5173\u76ee\u5f55\u4e0b\u7684 zsh \u6587\u4ef6\u770b\u4e00\u4e0b\u5c31\u77e5\u9053\u4e86\u3002\u63d2\u4ef6\u4e5f\u662f\u5728.zshrc\u91cc\u914d\u7f6e\uff0c\u627e\u5230plugins\u5173\u952e\u5b57\uff0c\u4f60\u5c31\u53ef\u4ee5\u52a0\u8f7d\u81ea\u5df1\u7684\u63d2\u4ef6\u4e86\uff0c\u7cfb\u7edf\u9ed8\u8ba4\u52a0\u8f7d git \uff0c\u4f60\u53ef\u4ee5\u5728\u540e\u9762\u8ffd\u52a0\u5185\u5bb9\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"plugins=(git textmate ruby autojump osx mvn gradle)"}),"\n",(0,l.jsx)(n.p,{children:"\u4e0b\u9762\u7b80\u5355\u4ecb\u7ecd\u51e0\u4e2a\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"1\u3001git\uff1a\u5f53\u4f60\u5904\u4e8e\u4e00\u4e2a git \u53d7\u63a7\u7684\u76ee\u5f55\u4e0b\u65f6\uff0cShell \u4f1a\u660e\u786e\u663e\u793a \u300cgit\u300d\u548c branch\uff0c\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u53e6\u5916\u5bf9 git \u5f88\u591a\u547d\u4ee4\u8fdb\u884c\u4e86\u7b80\u5316\uff0c\u4f8b\u5982 gco=\u2019git checkout\u2019\u3001gd=\u2019git diff\u2019\u3001gst=\u2019git status\u2019\u3001g=\u2019git\u2019\u7b49\u7b49\uff0c\u719f\u7ec3\u4f7f\u7528\u53ef\u4ee5\u5927\u5927\u51cf\u5c11 git \u7684\u547d\u4ee4\u957f\u5ea6\uff0c\u547d\u4ee4\u5185\u5bb9\u53ef\u4ee5\u53c2\u8003~/.oh-my-zsh/plugins/git/git.plugin.zsh"}),"\n",(0,l.jsx)(n.li,{children:"2\u3001textmate\uff1amr\u53ef\u4ee5\u521b\u5efa ruby \u7684\u6846\u67b6\u9879\u76ee\uff0ctm finename \u53ef\u4ee5\u7528 textmate \u6253\u5f00\u6307\u5b9a\u6587\u4ef6\u3002"}),"\n",(0,l.jsx)(n.li,{children:"3\u3001osx\uff1atab \u589e\u5f3a\uff0cquick-look filename \u53ef\u4ee5\u76f4\u63a5\u9884\u89c8\u6587\u4ef6\uff0cman-preview grep \u53ef\u4ee5\u751f\u6210 grep\u624b\u518c \u7684pdf \u7248\u672c\u7b49\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h6,{id:"\u76ee\u5f55\u6d4f\u89c8\u548c\u8df3\u8f6c",children:"\u76ee\u5f55\u6d4f\u89c8\u548c\u8df3\u8f6c"}),"\n",(0,l.jsx)(n.p,{children:"\u8f93\u5165 d\uff0c\u5373\u53ef\u5217\u51fa\u4f60\u5728\u8fd9\u4e2a\u4f1a\u8bdd\u91cc\u8bbf\u95ee\u7684\u76ee\u5f55\u5217\u8868\uff0c\u8f93\u5165\u5217\u8868\u524d\u7684\u5e8f\u53f7\uff0c\u5373\u53ef\u76f4\u63a5\u8df3\u8f6c\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u8f93\u5165 .. \u6216 \u2026 \uff0c\u6216\u76f4\u63a5\u8f93\u5165\u5f53\u524d\u76ee\u5f55\u540d\u90fd\u53ef\u4ee5\u8df3\u8f6c\uff0c\u4f60\u751a\u81f3\u4e0d\u518d\u9700\u8981\u8f93\u5165 cd \u547d\u4ee4\u4e86\u3002"}),"\n",(0,l.jsx)(n.h6,{id:"\u901a\u914d\u7b26\u641c\u7d22",children:"\u901a\u914d\u7b26\u641c\u7d22"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"ls -l */.sh\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53ef\u4ee5\u9012\u5f52\u663e\u793a\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 shell \u6587\u4ef6\uff0c\u6587\u4ef6\u5c11\u65f6\u53ef\u4ee5\u4ee3\u66ff find\uff0c\u6587\u4ef6\u592a\u591a\u5c31\u6b47\u83dc\u4e86\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"4vim",children:"4.vim"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"wget -qO- https://raw.github.com/ma6174/vim/master/setup.sh | sh -x\n"})}),"\n",(0,l.jsx)(n.h3,{id:"5macvim",children:"5.macvim"}),"\n",(0,l.jsx)(n.h6,{id:"\u5b89\u88c5macvim",children:"\u5b89\u88c5macvim"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://github.com/macvim-dev/macvim/releases",children:"https://github.com/macvim-dev/macvim/releases"})}),"\n",(0,l.jsx)(n.p,{children:"1\uff09\u5b89\u88c5 MacVim.app"}),"\n",(0,l.jsx)(n.p,{children:'2\uff09\u5c06mvim\u811a\u672c\u6587\u4ef6\u62f7\u8d1d\u5230"/usr/local/bin"\u76ee\u5f55\u4e0b\u3002\u8f93\u5165\u547d\u4ee4"mvim"\u5feb\u901f\u542f\u52a8MacVim \u3002\n\u200b'}),"\n",(0,l.jsx)(n.h3,{id:"6tmux",children:"6.Tmux"}),"\n",(0,l.jsx)(n.h6,{id:"\u5b89\u88c5-1",children:"\u5b89\u88c5"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"brew install tmux\n"})}),"\n",(0,l.jsx)(n.h3,{id:"7powerline",children:"7.Powerline"}),"\n",(0,l.jsx)(n.h6,{id:"\u5b89\u88c5powerline",children:"\u5b89\u88c5powerline"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"### \u5b89\u88c5python\nbrew install python\n### \u5b89\u88c5powerline\nbrew install coreutils\npip install powerline-status\n### \u67e5\u770bpowerline\u5b89\u88c5\u4f4d\u7f6e\npip show powerline-status\n"})}),"\n",(0,l.jsx)(n.h6,{id:"\u5b89\u88c5\u7f3a\u5931\u5b57\u4f53",children:"\u5b89\u88c5\u7f3a\u5931\u5b57\u4f53"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/powerline/fonts.git\ncd fonts\n./install.sh\n### \u8fdb\u5165\u7ec8\u7aef\u504f\u597d\u8bbe\u7f6e,\u8bbe\u7f6e\u9ed8\u8ba4\u5b57\u4f53\u5373\u53ef\n"})}),"\n",(0,l.jsx)(n.h6,{id:"\u914d\u7f6ezsh",children:"\u914d\u7f6ezsh"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"vim .zshrc\n### start .zshrc\n# Using powerline\n. /usr/local/lib/python2.7/site-packages/powerline/bindings/zsh/powerline.zsh\n### end .zshrc\nsource ~/.zshrc\n"})}),"\n",(0,l.jsx)(n.h6,{id:"\u914d\u7f6evim",children:"\u914d\u7f6evim"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"vim .vimrc\n### start .vimrc\nset rtp+=/usr/local/lib/python2.7/site-packages/powerline/bindings/vim\nset guifont=Sauce\\ Code\\ Powerline:h14.5\nset laststatus=2\nset encoding=utf-8\nset t_Co=256\nset number\nset fillchars+=stl:\\ ,stlnc:\\\nset term=xterm-256color\nset termencoding=utf-8\nset background=light\n### end .vimrc\nsource .vimrc\n"})}),"\n",(0,l.jsx)(n.h3,{id:"8\u5217\u51fa\u78c1\u76d8",children:"8.\u5217\u51fa\u78c1\u76d8"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-shell",children:"diskutil list\n"})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>t});var l=s(7294);const i={},r=l.createContext(i);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);