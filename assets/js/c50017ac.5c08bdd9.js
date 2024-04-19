"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6016],{1613:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=s(5893),r=s(1151);const t={},l=void 0,a={id:"OS/pi/\u6811\u8393\u6d3e\u98df\u7528\u6307\u5357",title:"\u6811\u8393\u6d3e\u98df\u7528\u6307\u5357",description:"\u70e7\u5f55",source:"@site/docs/OS/pi/\u6811\u8393\u6d3e\u98df\u7528\u6307\u5357.md",sourceDirName:"OS/pi",slug:"/OS/pi/\u6811\u8393\u6d3e\u98df\u7528\u6307\u5357",permalink:"/docs/OS/pi/\u6811\u8393\u6d3e\u98df\u7528\u6307\u5357",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713494798,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"archlinux.arm",permalink:"/docs/OS/pi/archlinux.arm"},next:{title:"KVM\u865a\u62df\u5316",permalink:"/docs/OS/vm/KVM\u865a\u62df\u5316"}},d={},c=[{value:"\u70e7\u5f55",id:"\u70e7\u5f55",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u955c\u50cf\u6e90",id:"\u955c\u50cf\u6e90",level:4},{value:"\u8bbe\u7f6e\u9759\u6001 ip",id:"\u8bbe\u7f6e\u9759\u6001-ip",level:4},{value:"DNS",id:"dns",level:4},{value:"\u81ea\u5b9a\u4e49\u5206\u8fa8\u7387",id:"\u81ea\u5b9a\u4e49\u5206\u8fa8\u7387",level:4},{value:"\u5b98\u65b9\u955c\u50cf Raspbian",id:"\u5b98\u65b9\u955c\u50cf-raspbian",level:4},{value:"\u7cfb\u7edf\u5c42",id:"\u7cfb\u7edf\u5c42",level:3},{value:"\u5e94\u7528\u5c42",id:"\u5e94\u7528\u5c42",level:3},{value:"MicroK8s | K3s",id:"microk8s--k3s",level:4},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:3},{value:"\u786c\u4ef6 | hack | DIY",id:"\u786c\u4ef6--hack--diy",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"\u70e7\u5f55",children:"\u70e7\u5f55"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"MacOS"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u67e5\u770b\u5f53\u524d\u5df2\u6302\u8f7d\u7684\u5377\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"df -h"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528 diskutil unmount \u5c06\u8fd9\u4e9b\u5206\u533a\u5378\u8f7d\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"diskutil unmount /dev/disk1s1"}),"\n",(0,i.jsx)(n.p,{children:"\u901a\u8fc7 diskutil list \u6765\u786e\u8ba4\u8bbe\u5907\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"diskutil list"}),"\n",(0,i.jsx)(n.p,{children:"\u4f7f\u7528 dd \u547d\u4ee4\u5c06\u7cfb\u7edf\u955c\u50cf\u5199\u5165\uff0c\u9700\u8981\u7279\u522b\u7279\u522b\u6ce8\u610f disk \u540e\u7684\u6570\u5b57\uff0c\u4e0d\u80fd\u641e\u9519\uff01\n\uff08\u8bf4\u660e\uff1a/dev/disk1s1 \u662f\u5206\u533a\uff0c/dev/disk1 \u662f\u5757\u8bbe\u5907\uff0c/dev/rdisk1 \u662f\u539f\u59cb\u5b57\u7b26\u8bbe\u5907\uff09"}),"\n",(0,i.jsx)(n.p,{children:"dd bs=4m if=wheezy-raspbian.img of=/dev/rdisk1"}),"\n",(0,i.jsx)(n.p,{children:"\u7528 diskutil unmountDisk \u5378\u8f7d\u8bbe\u5907\uff1a"}),"\n",(0,i.jsx)(n.p,{children:"diskutil unmountDisk /dev/disk1"}),"\n",(0,i.jsx)(n.h3,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://ubuntu.com/tutorials/how-to-install-ubuntu-on-your-raspberry-pi#1-overview",children:"How to install Ubuntu Server on your Raspberry Pi | Ubuntu"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u7528\u6237\u540d/\u5bc6\u7801\n\nubuntu\nubuntu\n\nubuntu\nLuan1234\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'x@madland:/mnt/c/WINDOWS/system32$ ssh ubuntu@192.168.0.104\nubuntu@192.168.0.104\'s password:\nPermission denied, please try again.\nubuntu@192.168.0.104\'s password:\nWelcome to Ubuntu 20.04.1 LTS (GNU/Linux 5.4.0-1021-raspi armv7l)\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Sat Oct 24 15:49:44 UTC 2020\n\n  System load:  0.16              Temperature:           39.5 C\n  Usage of /:   32.7% of 6.97GB   Processes:             126\n  Memory usage: 26%               Users logged in:       0\n  Swap usage:   0%                IPv4 address f or eth0: 192.168.0.104\n\n * Introducing autonomous high availability clustering for MicroK8s\n   production environments! Super simple clustering, hardened Kubernetes,\n   with automatic data store operations. A zero-ops HA K8s for anywhere.\n\n     https://microk8s.io/high-availability\n\n60 updates can be installed immediately.\n0 of these updates are security updates.\nTo see these additional updates run: apt list --upgradable\n\nFailed to connect to https://changelogs.ubuntu.com/meta-release-lts. Check your Internet connection or proxy settings\n\n\n*** System restart required ***\nLast login: Sat Oct 24 15:49:07 2020 from 192.168.0.102\nTo run a command as administrator (user "root"), use "sudo <command>".\nSee "man sudo_root" for details.\n\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,i.jsx)(n.h4,{id:"\u955c\u50cf\u6e90",children:"\u955c\u50cf\u6e90"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://mirror.tuna.tsinghua.edu.cn/help/ubuntu-ports/",children:"ubuntu-ports | \u955c\u50cf\u7ad9\u4f7f\u7528\u5e2e\u52a9 | \u6e05\u534e\u5927\u5b66\u5f00\u6e90\u8f6f\u4ef6\u955c\u50cf\u7ad9 | Tsinghua Open Source Mirror"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apt_preserve_sources_list: true\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h4,{id:"\u8bbe\u7f6e\u9759\u6001-ip",children:"\u8bbe\u7f6e\u9759\u6001 ip"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ssh ubuntu@192.168.0.111\nLuan1234\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo ifconfig eth0 192.168.1.222 netmask 255.255.255.0\n\nsudo route add default gw 192.168.1.1\n\nsudo ifconfig eth0 up\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539 /etc/network/interfaces"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo vim /etc/network/interfaces\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4fee\u6539\u4e3a\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"auto lo\n\niface lo inet loopback\n\niface eth0 inet static\n\naddress 192.168.1.222\n\nnetmask 255.255.255.0\n\ngateway 192.168.1.1\n\nallow-hotplug wlan0\n\niface wlan0 inet manual\n\nwpa-roam /etc/wpa_supplicant/wpa_supplicant.conf\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u91cd\u542f\u670d\u52a1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo service networking restart\n"})}),"\n",(0,i.jsx)(n.h4,{id:"dns",children:"DNS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sudo cat /etc/resolv.conf\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6539\u6210\u7c7b\u4f3c\u7684\u5373\u53ef"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"nameserver 8.8.8.8\n\nnameserver 8.8.4.4\n\nnameserver 208.67.220.220\n\nnameserver 208.67.222.222\n\nnameserver 10.10.10.10\n\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"root@raspberrypi:~# sudo service networking restart\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u81ea\u5b9a\u4e49\u5206\u8fa8\u7387",children:"\u81ea\u5b9a\u4e49\u5206\u8fa8\u7387"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"http://shumeipai.nxez.com/2013/08/31/custom-display-resolution-raspberry-pie.html",children:"http://shumeipai.nxez.com/2013/08/31/custom-display-resolution-raspberry-pie.html"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4fee\u6539",(0,i.jsx)(n.code,{children:"config.txt"}),"\u6587\u4ef6"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4fee\u6539 overscan \u9009\u9879"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# uncomment this if your display has a black border of unused pixels visible and your display can output without overscan\n\ndisable_overscan=1\n\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4fee\u6539\u5c4f\u5e55\u5206\u8fa8\u7387"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# uncomment to force a console size. By default it will be display's size minus\n# overscan.\nframebuffer_width=1280\nframebuffer_height=1024\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4fee\u6539\u5c4f\u5e55\u5c5e\u6027"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"hdmi_group=2 \u9009\u62e9\u8ba1\u7b97\u673a\u663e\u793a\u5668\u5206\u8fa8\u7387\u3002hdmi_mode=35 \u9009\u62e9\u5c4f\u5e55\u5206\u8fa8\u7387\u548c\u5237\u65b0\u5c4f\u5e55\u3002\nhdmi_ignore_edid=0xa5000080 \u547d\u4ee4\u6811\u8393\u6d3e\u4e0d\u68c0\u6d4b HDMI \u8bbe\u5907\u7684\u4efb\u4f55\u4fe1\u606f\uff0c\u6309\u7167\u6307\u5b9a\u7684\u5206\u8fa8\u7387\u8f93\u51fa\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"# uncomment to force a specific HDMI mode (this will force VGA)\nhdmi_group=2\nhdmi_mode=35\nhdmi_ignore_edid=0xa5000080\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\u5b98\u65b9\u955c\u50cf-raspbian",children:"\u5b98\u65b9\u955c\u50cf Raspbian"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"sudo raspi-config"})}),"\n",(0,i.jsx)(n.h3,{id:"\u7cfb\u7edf\u5c42",children:"\u7cfb\u7edf\u5c42"}),"\n",(0,i.jsx)(n.h3,{id:"\u5e94\u7528\u5c42",children:"\u5e94\u7528\u5c42"}),"\n",(0,i.jsx)(n.h4,{id:"microk8s--k3s",children:"MicroK8s | K3s"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/85375349",children:"https://zhuanlan.zhihu.com/p/85375349"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u4f8b",children:"\u5b9e\u4f8b"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"docker \u8fd0\u884c openwrt \u5b9e\u73b0\u65c1\u8def\u7531"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://blog.sillyson.com/archives/7.html",children:"https://blog.sillyson.com/archives/7.html"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/SuLingGG/OpenWrt-Rpi",children:"https://github.com/SuLingGG/OpenWrt-Rpi"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://sspai.com/post/58452",children:"https://sspai.com/post/58452"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["btw ",(0,i.jsx)(n.a,{href:"https://www.chiphell.com/thread-2178328-1-1.html",children:"\u5bb6\u7528\u8f6f\u8def\u7531\u65b9\u6848\u7ec8\u6781\u9009\u62e9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Home Assistant"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://www.home-assistant.io/docs/installation/docker/",children:"https://www.home-assistant.io/docs/installation/docker/"})}),"\n",(0,i.jsx)(n.h3,{id:"\u786c\u4ef6--hack--diy",children:"\u786c\u4ef6 | hack | DIY"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>l});var i=s(7294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);