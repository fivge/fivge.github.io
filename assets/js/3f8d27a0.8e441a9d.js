"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4684],{1137:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var t=n(5893),i=n(1151);const s={},h=void 0,c={id:"OS/macos/brew",title:"brew",description:"brew",source:"@site/docs/OS/macos/brew.md",sourceDirName:"OS/macos",slug:"/OS/macos/brew",permalink:"/docs/OS/macos/brew",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1710142821,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Term",permalink:"/docs/OS/macos/Term"},next:{title:"XQuartz",permalink:"/docs/OS/macos/macOS/XQuartz"}},l={},o=[];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"brew"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"http://brew.sh/index_zh-cn.html",children:"Homebrew"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u955c\u50cf\u6e90"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/",children:"\u6e05\u534e\u5927\u5b66\u6e90"})}),"\n",(0,t.jsx)(r.p,{children:"\u4e2d\u79d1\u5927\u955c\u50cf\u6e90"}),"\n",(0,t.jsxs)(r.p,{children:["brew\n",(0,t.jsx)(r.a,{href:"http://brew.sh/index_zh-cn.html",children:"http://brew.sh/index_zh-cn.html"})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u5b89\u88c5"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:'### \u5b89\u88c5Homebrew\n/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n### \u5207\u6362\u8f6f\u4ef6\u6e90\ncd "$(brew --repo)"\ngit remote set-url origin git://mirrors.ustc.edu.cn/brew.git\ncd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"\ngit remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git\n\u6216\u8005\ncd "$(brew --repo)"\ngit remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git\ncd /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core\ngit remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git\n### \u7136\u540e\u6267\u884c\nbrew update\n'})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"\u7528\u6cd5"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew.git\nbrew update\nbrew insatll lynx\n"})}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsx)(r.p,{children:"on mac"}),"\n"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sh",children:"brew install mongodb\nbrew install cowsay\nbrew isntall rar\nbrew insatll tmux\nbrew install python\nbrew install coreutils\nbrew install macvim\nbrew linkapps macvim\nbrew install macvim --env-std --with-override-system-vim\nbrew install https://raw.github.com/Homebrew/homebrew-dupes/master/gdb.rb\nbrew install aria2\nbrew install vim\nbrew install the_silver_searcher\nbrew install ctags\n"})}),"\n",(0,t.jsx)(r.p,{children:"305"}),"\n",(0,t.jsx)(r.p,{children:"306 brew update"}),"\n",(0,t.jsxs)(r.p,{children:["311 git clone ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew.git"})]}),"\n",(0,t.jsx)(r.p,{children:"324 cp -R homebrew/.git /usr/local/"}),"\n",(0,t.jsx)(r.p,{children:"325 cp -R homebrew/Library /usr/local/"}),"\n",(0,t.jsx)(r.p,{children:"327 cd homebrew"}),"\n",(0,t.jsx)(r.p,{children:"333 rm -rf homebrew"}),"\n",(0,t.jsx)(r.p,{children:"793"}),"\n",(0,t.jsx)(r.p,{children:"796 launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist"}),"\n",(0,t.jsxs)(r.p,{children:["817 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/brew.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/brew.git"})]}),"\n",(0,t.jsx)(r.p,{children:"818 cd /usr/local/Library/Taps/homebrew/homebrew-core"}),"\n",(0,t.jsxs)(r.p,{children:["819 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew-core.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew-core.git"})]}),"\n",(0,t.jsx)(r.p,{children:"820 brew update"}),"\n",(0,t.jsx)(r.p,{children:"994 brew install cowsay"}),"\n",(0,t.jsx)(r.p,{children:"1098 brew outdated"}),"\n",(0,t.jsx)(r.p,{children:"1099 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1103 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1296 brew isntall rar"}),"\n",(0,t.jsx)(r.p,{children:"1297 brew install rar"}),"\n",(0,t.jsx)(r.p,{children:"1298 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1406"}),"\n",(0,t.jsx)(r.p,{children:"1407 brew install lynx"}),"\n",(0,t.jsx)(r.p,{children:"1417 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1418 brew"}),"\n",(0,t.jsx)(r.p,{children:"1419 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1420 sduo brew update"}),"\n",(0,t.jsx)(r.p,{children:"1421 sudo brew update"}),"\n",(0,t.jsx)(r.p,{children:"1423 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1424 brew"}),"\n",(0,t.jsx)(r.p,{children:"1426 brew"}),"\n",(0,t.jsx)(r.p,{children:"1427 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1428 homebrew"}),"\n",(0,t.jsx)(r.p,{children:"1907 sudo"}),"\n",(0,t.jsx)(r.p,{children:"1908 sudo brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"1909 brew"}),"\n",(0,t.jsx)(r.p,{children:"1910 where brew"}),"\n",(0,t.jsxs)(r.p,{children:['1911 /usr/bin/ruby -e "$(curl -fsSL ',(0,t.jsx)(r.a,{href:"https://raw.githubusercontent.com/Homebre/install/master/install",children:"https://raw.githubusercontent.com/Homebre/install/master/install"}),')"']}),"\n",(0,t.jsx)(r.p,{children:"1912 where brew"}),"\n",(0,t.jsxs)(r.p,{children:["1915 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"})]}),"\n",(0,t.jsx)(r.p,{children:"1916 ls Homebrew"}),"\n",(0,t.jsx)(r.p,{children:"1917 cd Homebrew"}),"\n",(0,t.jsxs)(r.p,{children:["1920 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"})]}),"\n",(0,t.jsx)(r.p,{children:"1923 cd /usr/local/Library/Taps/homebrew/homebrew-core"}),"\n",(0,t.jsx)(r.p,{children:"1924 where homebrew-core"}),"\n",(0,t.jsx)(r.p,{children:"1926 where homebrew"}),"\n",(0,t.jsx)(r.p,{children:"1927 find homebrew-core"}),"\n",(0,t.jsx)(r.p,{children:"1928 find homebrew"}),"\n",(0,t.jsx)(r.p,{children:"1931 cd Homebrew"}),"\n",(0,t.jsx)(r.p,{children:"1937 cd homebrew/homebrew-core"}),"\n",(0,t.jsxs)(r.p,{children:["1939 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"})]}),"\n",(0,t.jsx)(r.p,{children:"1940 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1950 /usr/local/Homebrew"}),"\n",(0,t.jsx)(r.p,{children:"1952 cd Library/Taps/homebrew/homebrew-core/"}),"\n",(0,t.jsx)(r.p,{children:"1970 brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"1972 brew"}),"\n",(0,t.jsx)(r.p,{children:"1973 brew update"}),"\n",(0,t.jsx)(r.p,{children:"1974 brew search tmux"}),"\n",(0,t.jsx)(r.p,{children:"1975 brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"1978 brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"1980 sudo brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"1981 brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"1984 rm -rf Homebrew"}),"\n",(0,t.jsx)(r.p,{children:"1986 brew"}),"\n",(0,t.jsxs)(r.p,{children:["1987 git clone ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"})]}),"\n",(0,t.jsx)(r.p,{children:"1990 ls brew"}),"\n",(0,t.jsx)(r.p,{children:"1991 brew"}),"\n",(0,t.jsx)(r.p,{children:"1992 brew install"}),"\n",(0,t.jsx)(r.p,{children:"1995 cd Library/Homebrew/"}),"\n",(0,t.jsx)(r.p,{children:"1999 brew"}),"\n",(0,t.jsx)(r.p,{children:"2001 /usr/local/brew/bin/brew ; exit;"}),"\n",(0,t.jsx)(r.p,{children:"2002 /usr/local/brew/bin/brew install tmux"}),"\n",(0,t.jsxs)(r.p,{children:['2004 /usr/bin/ruby -e "$(curl -fsSL ',(0,t.jsx)(r.a,{href:"https://raw.githubusercontent.com/Homebre/install/master/install",children:"https://raw.githubusercontent.com/Homebre/install/master/install"}),')"']}),"\n",(0,t.jsx)(r.p,{children:"2005 brew install brew"}),"\n",(0,t.jsx)(r.p,{children:"2006 brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"2007 brew"}),"\n",(0,t.jsx)(r.p,{children:"2008 brew update"}),"\n",(0,t.jsx)(r.p,{children:"2009 brew install tmux"}),"\n",(0,t.jsx)(r.p,{children:"2034"}),"\n",(0,t.jsx)(r.p,{children:"2047 git remote set-url origin git://mirrors.tuna.tsinghua.edu.cn/homebrew.git"}),"\n",(0,t.jsxs)(r.p,{children:["2048 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/homebrew.git",children:"https://mirrors.tuna.tsinghua.edu.cn/homebrew.git"})]}),"\n",(0,t.jsxs)(r.p,{children:["2049 cd /usr/local && git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://git.coding.net/homebrew/homebrew.git",children:"https://git.coding.net/homebrew/homebrew.git"})]}),"\n",(0,t.jsx)(r.p,{children:"2053 la Homebrew"}),"\n",(0,t.jsx)(r.p,{children:"2054 cd Homebrew"}),"\n",(0,t.jsx)(r.p,{children:"2056 git remote set-url origin git://mirrors.tuna.tsinghua.edu.cn/homebrew.git"}),"\n",(0,t.jsx)(r.p,{children:"2058 brew"}),"\n",(0,t.jsx)(r.p,{children:"2059 brew update"}),"\n",(0,t.jsx)(r.p,{children:"2060 brew edit"}),"\n",(0,t.jsx)(r.p,{children:'2062 cd "$(brew --repo)"'}),"\n",(0,t.jsx)(r.p,{children:"2064 git remote set-url origin git://mirrors.ustc.edu.cn/brew.git"}),"\n",(0,t.jsx)(r.p,{children:"2066 brew update"}),"\n",(0,t.jsx)(r.p,{children:"2067 brew install python"}),"\n",(0,t.jsx)(r.p,{children:'2068 cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"'}),"\n",(0,t.jsx)(r.p,{children:"2070 git remote set-url origin git://mirrors.ustc.edu.cn/homebrew-core.git"}),"\n",(0,t.jsx)(r.p,{children:"2147"}),"\n",(0,t.jsx)(r.p,{children:"2154 brew install macvim --env-std --with-override-system-vim"}),"\n",(0,t.jsx)(r.p,{children:"2155"}),"\n",(0,t.jsx)(r.p,{children:"2156"}),"\n",(0,t.jsx)(r.p,{children:"2158"}),"\n",(0,t.jsx)(r.p,{children:"2310 history | grep brew"}),"\n",(0,t.jsx)(r.p,{children:"2531 brew update"}),"\n",(0,t.jsx)(r.p,{children:"2639 brew update"}),"\n",(0,t.jsx)(r.p,{children:"2908"}),"\n",(0,t.jsx)(r.p,{children:"3162"}),"\n",(0,t.jsx)(r.p,{children:"3163 brew update"}),"\n",(0,t.jsx)(r.p,{children:"3164 brew"}),"\n",(0,t.jsx)(r.p,{children:"3165 brew home"}),"\n",(0,t.jsx)(r.p,{children:'3166 cd "$(brew --repo)"'}),"\n",(0,t.jsxs)(r.p,{children:["3169 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git"})]}),"\n",(0,t.jsx)(r.p,{children:'3170 cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"'}),"\n",(0,t.jsxs)(r.p,{children:["3171 git remote set-url origin ",(0,t.jsx)(r.a,{href:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git",children:"https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git"})]}),"\n",(0,t.jsx)(r.p,{children:"3172 brew update"}),"\n",(0,t.jsx)(r.p,{children:"3251 brew update"}),"\n",(0,t.jsx)(r.p,{children:"3391"}),"\n",(0,t.jsx)(r.p,{children:"3612"}),"\n",(0,t.jsx)(r.p,{children:"3613"})]})}function a(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>c,a:()=>h});var t=n(7294);const i={},s=t.createContext(i);function h(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:h(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);