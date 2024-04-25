"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1774],{8938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(5893),s=n(1151);const o={},u="grub2",i={id:"CloudNative/system/grub",title:"grub2",description:"/boot/grub/grub.cfg",source:"@site/docs/CloudNative/system/grub.md",sourceDirName:"CloudNative/system",slug:"/CloudNative/system/grub",permalink:"/docs/CloudNative/system/grub",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714042616,formattedLastUpdatedAt:"Apr 25, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u9632\u706b\u5899\u57fa\u7840\u7bc7",permalink:"/docs/CloudNative/system/firewalld-basic"},next:{title:"Swap-libvirt",permalink:"/docs/CloudNative/system/libvirt"}},d={},c=[];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"grub2",children:"grub2"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"/boot/grub/grub.cfg"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://wiki.archlinuxcn.org/wiki/GRUB#",children:"https://wiki.archlinuxcn.org/wiki/GRUB#"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://documentation.suse.com/zh-cn/sles/15-SP4/html/SLES-all/cha-grub2.html",children:"https://documentation.suse.com/zh-cn/sles/15-SP4/html/SLES-all/cha-grub2.html"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"grub2-mkconfig -o /boot/grub2/grub.cfg\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u91cd\u88c5 Grub"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"1.\u4f7f\u7528Deepin Live CD\u6a21\u5f0f\u542f\u52a8\u7535\u8111\uff0c\u4efb\u4f55\u88c5\u6709Grub2\u7684\u7cfb\u7edf\u7684Live CD\u90fd\u53ef\u4ee5\u3002\n2.\u8fdb\u5165Live CD\u7cfb\u7edf\u540e\u6253\u5f00\u7ec8\u7aef\uff0c\u6302\u8f7d\u9700\u8981\u4fee\u590d\u7cfb\u7edf\u7684 / \u6302\u8f7d\u5230/mnt\uff0c\u53ef\u4ee5\u5229\u7528gparted\u6216\u8005sudo fdisk -l\u547d\u4ee4\u67e5\u770b\uff0c\u4f8b\u5982 \u9700\u8981\u4fee\u590d\u7cfb\u7edf\u7684 /\u5206\u533a\u4e3a/dev/sda1\uff0c\u90a3\u4e48\u7ec8\u7aef\u6267\u884c\uff1a\n sudo mount /dev/sda1 /mnt\n\u5982\u679c\u9700\u8981\u4fee\u590d\u7cfb\u7edf\u7684/boot\u5355\u72ec\u5206\u4e86\u51fa\u6765\uff08\u5047\u8bbe\u4e3a/dev/sda2\uff09\uff0c\u4e5f\u8981\u6302\u4e0a\uff0c\u7ec8\u7aef\u6267\u884c\uff1a\n sudo mount /dev/sda2 /mnt/boot\n\u53e6\u5916,\u5c06Live CD\u7cfb\u7edf\u7684/dev\u76ee\u5f55\u540c\u65f6\u6302\u5728/mnt\u4e0b\uff0c\u7ec8\u7aef\u6267\u884c\uff1a\n sudo mount --bind /dev /mnt/dev\n\u7136\u540e\u4f7f\u7528chroot\u547d\u4ee4\uff0c\u5c06Live CD\u7684 / \u8bbe\u4e3a\u4ee5\u524d\u7684 /\uff0c\u7ec8\u7aef\u6267\u884c\uff1a\n sudo mount --bind /proc /mnt/proc\n sudo mount --bind /sys /mnt/sys\n sudo chroot /mnt\n\u5b89\u88c5\u5e76\u5237\u65b0Grub\u8bbe\u7f6e(\u4e3b\u677f\u4e3aBios\u5f15\u5bfc)\uff0c\u8bf7\u7ec8\u7aef\u6267\u884c\uff1a\n grub-probe -t device /boot/grub\n grub-install /dev/sda\n grub-install --recheck /dev/sda\n sudo update-grub\n\u5b89\u88c5\u5e76\u5237\u65b0Grub\u8bbe\u7f6e(\u4e3b\u677f\u4e3aUEFI\u5f15\u5bfc)\uff0c\u8bf7\u7ec8\u7aef\u6267\u884c\uff1a\n grub-probe -t device /boot/grub\n grub-install --target=$(ls /usr/lib/grub/ | grep efi)\n grub-install --recheck /dev/sda\n sudo update-grub\n\u81f3\u6b64\uff0c\u4fee\u590d\u5b8c\u6210\u3002\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>u});var r=n(7294);const s={},o=r.createContext(s);function u(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:u(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);