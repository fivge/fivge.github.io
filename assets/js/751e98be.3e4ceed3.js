"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4338],{1938:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>h,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>t});var l=n(5893),r=n(1151);const c={},h=void 0,i={id:"CloudNative/system/ssh/ssh",title:"ssh",description:"ssh",source:"@site/docs/CloudNative/system/ssh/ssh.md",sourceDirName:"CloudNative/system/ssh",slug:"/CloudNative/system/ssh/",permalink:"/docs/CloudNative/system/ssh/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1709284599,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Swap-libvirt",permalink:"/docs/CloudNative/system/libvirt"},next:{title:"rm -rf /etc/shadow*",permalink:"/docs/CloudNative/system/user/shadow"}},d={},t=[{value:"ssh",id:"ssh",level:3},{value:"0x01 \u57fa\u672c\u914d\u7f6e",id:"0x01-\u57fa\u672c\u914d\u7f6e",level:4},{value:"\u542f\u7528 ssh \u670d\u52a1",id:"\u542f\u7528-ssh-\u670d\u52a1",level:5},{value:"0x02 \u7981\u7528 root \u767b\u5f55",id:"0x02-\u7981\u7528-root-\u767b\u5f55",level:4},{value:"0x03 \u4fee\u6539\u767b\u5f55\u6b22\u8fce\u8bed",id:"0x03-\u4fee\u6539\u767b\u5f55\u6b22\u8fce\u8bed",level:4},{value:"0x04 sshd \u670d\u52a1\u7aef\u5fc3\u8df3",id:"0x04-sshd-\u670d\u52a1\u7aef\u5fc3\u8df3",level:4},{value:"0x05 \u81ea\u52a8\u767b\u5f55",id:"0x05-\u81ea\u52a8\u767b\u5f55",level:4},{value:"a\u3001\u5728\u5ba2\u6237\u7aef\u521b\u5efa\u5bc6\u94a5\u5bf9",id:"a\u5728\u5ba2\u6237\u7aef\u521b\u5efa\u5bc6\u94a5\u5bf9",level:5},{value:"b\u3001\u590d\u5236\u516c\u94a5\u5230\u670d\u52a1\u5668",id:"b\u590d\u5236\u516c\u94a5\u5230\u670d\u52a1\u5668",level:5},{value:"c\u3001\u7f16\u8f91\u670d\u52a1\u7aef sshd_config \u6587\u4ef6 \uff08\u5f85\u9a8c\u8bc1 \ud83d\ude33\uff09",id:"c\u7f16\u8f91\u670d\u52a1\u7aef-sshd_config-\u6587\u4ef6-\u5f85\u9a8c\u8bc1-",level:5},{value:"d\u3001\u5ba2\u6237\u7aef\u914d\u7f6e\u81ea\u52a8\u767b\u5f55\u6587\u4ef6",id:"d\u5ba2\u6237\u7aef\u914d\u7f6e\u81ea\u52a8\u767b\u5f55\u6587\u4ef6",level:5},{value:"0x06 \u6700\u4f73\u547d\u4ee4",id:"0x06-\u6700\u4f73\u547d\u4ee4",level:4}];function a(s){const e={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...s.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h3,{id:"ssh",children:"ssh"}),"\n",(0,l.jsx)(e.h4,{id:"0x01-\u57fa\u672c\u914d\u7f6e",children:"0x01 \u57fa\u672c\u914d\u7f6e"}),"\n",(0,l.jsx)(e.h5,{id:"\u542f\u7528-ssh-\u670d\u52a1",children:"\u542f\u7528 ssh \u670d\u52a1"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"systemctl status sshd\nsystemctl start sshd\nsystemctl enable sshd\n"})}),"\n",(0,l.jsx)(e.h4,{id:"0x02-\u7981\u7528-root-\u767b\u5f55",children:"0x02 \u7981\u7528 root \u767b\u5f55"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u9501\u4f4f\npasswd -l root\n# \u89e3\u9501\nsudo passwd -u root\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"/etc/ssh/sshd_config"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"PermitRootLogin no\n"})}),"\n",(0,l.jsx)(e.h4,{id:"0x03-\u4fee\u6539\u767b\u5f55\u6b22\u8fce\u8bed",children:"0x03 \u4fee\u6539\u767b\u5f55\u6b22\u8fce\u8bed"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"/etc/motd"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"/usr/lib/motd.d/welcome"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"/usr/lib/issue.d/"})}),"\n"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:["\u8bf7\u6ce8\u610f\uff0c\u8981\u8986\u76d6\uff0c\u60a8\u4e0d\u5e94\u66f4\u6539 ",(0,l.jsx)(e.code,{children:"/usr/lib/motd.d/"})," \u4e2d\u7684\u4efb\u4f55\u5185\u5bb9\uff0c\u5426\u5219\u60a8\u7684\u66f4\u6539\u5c06\u5728\u8f6f\u4ef6\u5305\u66f4\u65b0\u65f6\u88ab\u8986\u76d6\u3002\u76f8\u53cd\uff0c\u60a8\u5e94\u8be5\u5728 /etc/motd.d/ \u4e2d\u521b\u5efa\u4e00\u4e2a\u5177\u6709\u76f8\u540c\u540d\u79f0\u7684\u7a7a\uff08\u6216\u5df2\u66f4\u6539\uff09\u6587\u4ef6\u3002\u8bf7\u53c2\u9605 ",(0,l.jsx)(e.code,{children:"pam_motd"})," \u6587\u6863\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h4,{id:"0x04-sshd-\u670d\u52a1\u7aef\u5fc3\u8df3",children:"0x04 sshd \u670d\u52a1\u7aef\u5fc3\u8df3"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"/etc/ssh/sshd_config"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"ClientAliveInterval 60\nClientAliveCountMax 4\n"})}),"\n",(0,l.jsx)(e.h4,{id:"0x05-\u81ea\u52a8\u767b\u5f55",children:"0x05 \u81ea\u52a8\u767b\u5f55"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528\u516c\u94a5\u8ba4\u8bc1"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u516c\u94a5\u8ba4\u8bc1\u6bd4\u5bc6\u7801\u767b\u5f55\u5b89\u5168\u591a\u4e86\uff0c\u56e0\u4e3a\u5b83\u4e0d\u53d7\u66b4\u529b\u5bc6\u7801\u653b\u51fb\u7684\u5f71\u54cd\uff0c\u4f46\u662f\u5e76\u4e0d\u65b9\u4fbf\u56e0\u4e3a\u5b83\u4f9d\u8d56\u4e8e RSA \u5bc6\u94a5\u5bf9\u3002\u9996\u5148\uff0c\u4f60\u8981\u521b\u5efa\u4e00\u4e2a\u516c\u94a5/\u79c1\u94a5\u5bf9\u3002\u4e0b\u4e00\u6b65\uff0c\u79c1\u94a5\u653e\u4e8e\u4f60\u7684\u5ba2\u6237\u7aef\u7535\u8111\uff0c\u5e76\u4e14\u590d\u5236",(0,l.jsx)(e.strong,{children:"\u516c\u94a5"}),"\u5230\u4f60\u60f3\u767b\u5f55\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u4f60\u53ea\u80fd\u4ece\u62e5\u6709\u79c1\u94a5\u7684\u7535\u8111\u767b\u5f55\u624d\u80fd\u767b\u5f55\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u3002\u4f60\u7684\u79c1\u94a5\u5c31\u548c\u4f60\u7684\u5bb6\u95e8\u94a5\u5319\u4e00\u6837\u654f\u611f\uff1b\u4efb\u4f55\u4eba\u83b7\u53d6\u5230\u4e86\u79c1\u94a5\u5c31\u53ef\u4ee5\u83b7\u53d6\u4f60\u7684\u8d26\u53f7\u3002\u4f60\u53ef\u4ee5\u7ed9\u4f60\u7684\u79c1\u94a5\u52a0\u4e0a\u5bc6\u7801\u6765\u589e\u52a0\u4e00\u4e9b\u5f3a\u5316\u4fdd\u62a4\u89c4\u5219\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 RSA \u5bc6\u94a5\u5bf9\u7ba1\u7406\u591a\u4e2a\u7528\u6237\u662f\u4e00\u79cd\u597d\u7684\u65b9\u6cd5\u3002\u5f53\u4e00\u4e2a\u7528\u6237\u79bb\u5f00\u4e86\uff0c\u53ea\u8981\u4ece\u670d\u52a1\u5668\u5220\u4e86\u4ed6\u7684\u516c\u94a5\u5c31\u80fd\u53d6\u6d88\u4ed6\u7684\u767b\u5f55\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4ee5\u4e0b\u4f8b\u5b50\uff0c\u5b83\u6bd4\u9ed8\u8ba4\u7684 2048 \u4f4d\u66f4\u5b89\u5168\uff0c\u800c\u4e14\u4e3a\u5b83\u8d77\u4e00\u4e2a\u72ec\u4e00\u65e0\u4e8c\u7684\u540d\u5b57\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u77e5\u9053\u5b83\u5c5e\u4e8e\u54ea\u4e2a\u670d\u52a1\u5668\u3002"}),"\n",(0,l.jsx)(e.h5,{id:"a\u5728\u5ba2\u6237\u7aef\u521b\u5efa\u5bc6\u94a5\u5bf9",children:"a\u3001\u5728\u5ba2\u6237\u7aef\u521b\u5efa\u5bc6\u94a5\u5bf9"}),"\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 3072 \u4f4d\u957f\u5ea6\u7684\u5bc6\u94a5\u5bf9\uff0c\u540d\u4e3a fooo"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"ssh-keygen -t rsa -b 3072 -f fooo\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u56de\u8f66\u4e0d\u8bbe\u7f6e\u52a0\u5bc6\u53c2\u6570\uff0c\u751f\u6210\u4e24\u4e2a\u6587\u4ef6\uff0c",(0,l.jsx)(e.code,{children:"fooo"}),", ",(0,l.jsx)(e.code,{children:"fooo.pub"})]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"fooo"}),"\u4e3a\u5bc6\u94a5\uff0c",(0,l.jsx)(e.code,{children:"fooo.pub"}),"\u4e3a\u516c\u94a5"]}),"\n",(0,l.jsx)(e.p,{children:"\u5bc6\u94a5\u4e0d\u8981\u6cc4\u9732\uff0c\u5bf9\u5916\u914d\u7f6e\u65f6\uff0c\u5747\u4f7f\u7528\u516c\u94a5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Generating public/private rsa key pair.\nEnter passphrase (empty for no passphrase):\nEnter same passphrase again:\nYour identification has been saved in fooo\nYour public key has been saved in fooo.pub\nThe key fingerprint is:\nSHA256:\nThe key's randomart image is:\n"})}),"\n",(0,l.jsx)(e.h5,{id:"b\u590d\u5236\u516c\u94a5\u5230\u670d\u52a1\u5668",children:"b\u3001\u590d\u5236\u516c\u94a5\u5230\u670d\u52a1\u5668"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"ssh-copy-id"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"ssh-copy-id -i foo.pub -p 233 user@remoteserver\n### \u6dfb\u52a0\u79c1\u94a5\u5230 ssh-agent\nssh-add ~/.ssh/id_rsa\n### \u82e5\u6267\u884c\u5931\u8d25\uff0c\u63d0\u793a\n### Could not open a connection to your authentication agent\n### \u5219\u6267\u884c\neval `ssh-agent`\n"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u624b\u52a8\u64cd\u4f5c"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u8ffd\u52a0\u516c\u94a5\u5230 ",(0,l.jsx)(e.code,{children:"~/.ssh/authorized_keys"})]}),"\n",(0,l.jsx)(e.h5,{id:"c\u7f16\u8f91\u670d\u52a1\u7aef-sshd_config-\u6587\u4ef6-\u5f85\u9a8c\u8bc1-",children:"c\u3001\u7f16\u8f91\u670d\u52a1\u7aef sshd_config \u6587\u4ef6 \uff08\u5f85\u9a8c\u8bc1 \ud83d\ude33\uff09"}),"\n",(0,l.jsxs)(e.p,{children:["\u4e00\u65e6\u4f60\u5df2\u7ecf\u6d4b\u8bd5\u5e76\u4e14\u9a8c\u8bc1\u4e86\u4f60\u7684\u516c\u94a5\u53ef\u4ee5\u767b\u5f55\uff0c\u5c31\u53ef\u4ee5\u53d6\u6d88\u5bc6\u7801\u767b\u5f55\uff0c\u8fd9\u6837\u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u5c31\u4e0d\u4f1a\u88ab\u66b4\u529b\u5bc6\u7801\u653b\u51fb\u3002\u5982\u4e0b\u8bbe\u7f6e\u4f60\u7684\u8fdc\u7a0b\u670d\u52a1\u5668\u7684 ",(0,l.jsx)(e.code,{children:"/etc/ssh/sshd_config"})," \u6587\u4ef6\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"#\u4fee\u6539\u7aef\u53e3\nPort 2222\n#\u7981\u7528\u5bc6\u7801\u9a8c\u8bc1\nPasswordAuthentication no\n#\u542f\u7528\u5bc6\u94a5\u9a8c\u8bc1\nRSAAuthentication yes\nPubkeyAuthentication yes\n#\u6307\u5b9a\u516c\u94a5\u6570\u636e\u5e93\u6587\u4ef6\nAuthorsizedKeysFile .ssh/authorized_keys\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u91cd\u542f SSH \u670d\u52a1\u524d\u5efa\u8bae\u591a\u4fdd\u7559\u4e00\u4e2a\u4f1a\u8bdd\u4ee5\u9632\u4e0d\u6d4b"})}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u540e\u91cd\u542f\u670d\u52a1\u5668\u4e0a\u7684 SSH \u5b88\u62a4\u8fdb\u7a0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"systemctl restart sshd\n"})}),"\n",(0,l.jsx)(e.h5,{id:"d\u5ba2\u6237\u7aef\u914d\u7f6e\u81ea\u52a8\u767b\u5f55\u6587\u4ef6",children:"d\u3001\u5ba2\u6237\u7aef\u914d\u7f6e\u81ea\u52a8\u767b\u5f55\u6587\u4ef6"}),"\n",(0,l.jsxs)(e.p,{children:["\u7f16\u8f91",(0,l.jsx)(e.code,{children:"~/.ssh/config"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"Host {name}\n    HostName {host}\n    Port {port}\n    User {user}\n    IdentityFile ~/.ssh/id_rsa\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f8b\u5982"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Host fooo\n  HostName 10.0.0.3\n  User lux\n  IdentityFile ~/.ssh/fooo\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u767b\u5f55\u4f7f\u7528"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"ssh -p 233 root@servers\n# \u6307\u5b9a\u5bc6\u94a5\nssh -p 233 root@servers -i .ssh/fooo\n# \u4f7f\u7528\u7b80\u79f0\nssh foo\n"})}),"\n",(0,l.jsx)(e.h5,{id:""}),"\n",(0,l.jsx)(e.h4,{id:"0x06-\u6700\u4f73\u547d\u4ee4",children:"0x06 \u6700\u4f73\u547d\u4ee4"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ece\u67d0\u4e3b\u673a\u7684 80 \u7aef\u53e3\u5f00\u542f\u5230\u672c\u5730\u4e3b\u673a 2001 \u7aef\u53e3\u7684\u96a7\u9053"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh -N -L2001:localhost:80 \u67d0\u4e3b\u673a\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u73b0\u5728\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,l.jsx)(e.code,{children:"http://localhost:2001"})," \u8bbf\u95ee\u8fd9\u4e2a\u7f51\u7ad9\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c06\u4f60\u7684\u9ea6\u514b\u98ce\u8f93\u51fa\u5230\u8fdc\u7a0b\u8ba1\u7b97\u673a\u7684\u626c\u58f0\u5668"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"dd if=/dev/dsp | ssh -c arcfour -C \u7528\u6237\u540d@\u8fdc\u7a0b\u4e3b\u673a dd of=/dev/dsp\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u6837\u6765\u81ea\u4f60\u9ea6\u514b\u98ce\u7aef\u53e3\u7684\u58f0\u97f3\u5c06\u5728 SSH \u76ee\u6807\u8ba1\u7b97\u673a\u7684\u626c\u58f0\u5668\u7aef\u53e3\u8f93\u51fa\uff0c\u4f46\u9057\u61be\u7684\u662f\uff0c\u58f0\u97f3\u8d28\u91cf\u5f88\u5dee\uff0c\u4f60\u4f1a\u542c\u5230\u5f88\u591a\u5636\u5636\u58f0\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u6bd4\u8f83\u8fdc\u7a0b\u548c\u672c\u5730\u6587\u4ef6"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh \u7528\u6237\u540d@\u8fdc\u7a0b\u4e3b\u673a cat /path/to/remotefile | diff /path/to/localfile \u2013\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6bd4\u8f83\u672c\u5730\u6587\u4ef6\u548c\u8fdc\u7a0b\u6587\u4ef6\u662f\u5426\u6709\u5dee\u5f02\u65f6\u8fd9\u4e2a\u547d\u4ee4\u5f88\u7ba1\u7528\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7 SSH \u6302\u8f7d\u76ee\u5f55/\u6587\u4ef6\u7cfb\u7edf"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"sshfs \u7528\u6237\u540d@\u8fdc\u7a0b\u4e3b\u673a:/path/to/folder /path/to/mount/point\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4ece",(0,l.jsx)(e.a,{href:"http://fuse.sourceforge.net/sshfs.html%E4%B8%8B%E8%BD%BD",children:"http://fuse.sourceforge.net/sshfs.html\u4e0b\u8f7d"})," sshfs\uff0c\u5b83\u5141\u8bb8\u4f60\u8de8\u7f51\u7edc\u5b89\u5168\u6302\u8f7d\u4e00\u4e2a\u76ee\u5f55\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7\u4e2d\u95f4\u4e3b\u673a\u5efa\u7acb SSH \u8fde\u63a5"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh -t \u4e2d\u95f4\u4e3b\u673a ssh \u8fdc\u7a0b\u4e0d\u53ef\u76f4\u63a5\u8bbf\u95ee\u7684\u4e3b\u673a\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4ece\u672c\u5730\u7f51\u7edc\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u7684\u4e3b\u673a\uff0c\u4f46\u53ef\u4ee5\u4ece\u4e2d\u95f4\u4e3b\u673a\u6240\u5728\u7f51\u7edc\u8bbf\u95ee\u65f6\uff0c\u8fd9\u4e2a\u547d\u4ee4\u901a\u8fc7\u5230\u4e2d\u95f4\u4e3b\u673a\u7684\u201c\u9690\u85cf\u201d\u8fde\u63a5\uff0c\u521b\u5efa\u8fde\u63a5\u5230\u8fdc\u7a0b\u4e0d\u53ef\u76f4\u63a5\u8bbf\u95ee\u7684\u4e3b\u673a\u7684\u8fde\u63a5\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u521b\u5efa\u5230\u76ee\u6807\u4e3b\u673a\u7684\u6301\u4e45\u5316\u8fde\u63a5"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh -MNf \u7528\u6237\u540d@\u4e3b\u673a\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u540e\u53f0\u521b\u5efa\u5230\u76ee\u6807\u4e3b\u673a\u7684\u6301\u4e45\u5316\u8fde\u63a5\uff0c\u5c06\u8fd9\u4e2a\u547d\u4ee4\u548c\u4f60~/.ssh/config \u4e2d\u7684\u914d\u7f6e\u7ed3\u5408\u4f7f\u7528"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"Host host\n\nControlPath ~/.ssh/master-%r@%h:%p\n\nControlMaster no\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6240\u6709\u5230\u76ee\u6807\u4e3b\u673a\u7684 SSH \u8fde\u63a5\u90fd\u5c06\u4f7f\u7528\u6301\u4e45\u5316 SSH \u5957\u63a5\u5b57\uff0c\u5982\u679c\u4f60\u4f7f\u7528 SSH \u5b9a\u671f\u540c\u6b65\u6587\u4ef6\uff08\u4f7f\u7528 rsync/sftp/cvs/svn\uff09\uff0c\u8fd9\u4e2a\u547d\u4ee4\u5c06\u975e\u5e38\u6709\u7528\uff0c\u56e0\u4e3a\u6bcf\u6b21\u6253\u5f00\u4e00\u4e2a SSH \u8fde\u63a5\u65f6\u4e0d\u4f1a\u521b\u5efa\u65b0\u7684\u5957\u63a5\u5b57\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7 SSH \u8fde\u63a5\u5c4f\u5e55"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh -t remote_host screen \u2013r\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u76f4\u63a5\u8fde\u63a5\u5230\u8fdc\u7a0b\u5c4f\u5e55\u4f1a\u8bdd\uff08\u8282\u7701\u4e86\u65e0\u7528\u7684\u7236 bash \u8fdb\u7a0b\uff09\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7aef\u53e3\u68c0\u6d4b\uff08\u6572\u95e8\uff09"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"knock \u4e3b\u673a 3000 4000 5000 && ssh -p \u7aef\u53e3 \u7528\u6237\u540d@\u4e3b\u673a && knock \u4e3b\u673a 5000 4000 3000\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4e00\u4e2a\u7aef\u53e3\u4e0a\u6572\u4e00\u4e0b\u6253\u5f00\u67d0\u4e2a\u670d\u52a1\u7684\u7aef\u53e3\uff08\u5982 SSH\uff09\uff0c\u518d\u6572\u4e00\u4e0b\u5173\u95ed\u8be5\u7aef\u53e3\uff0c\u9700\u8981\u5148\u5b89\u88c5 knockd\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"[options]\n\nlogfile = /var/log/knockd.log\n\n[openSSH]\n\nsequence = 3000,4000,5000\n\nseq_timeout = 5\n\ncommand = /sbin/iptables -A INPUT -i eth0 -s %IP% -p tcp \u2013dport 22 -j ACCEPT\n\ntcpflags = syn\n\n[closeSSH]\n\nsequence = 5000,4000,3000\n\nseq_timeout = 5\n\ncommand = /sbin/iptables -D INPUT -i eth0 -s %IP% -p tcp \u2013dport 22 -j ACCEPT\n\ntcpflags = syn\n\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ece\u5df2\u77e5\u4e3b\u673a\u5217\u8868\u4e2d\u5220\u9664\u4e00\u4e2a\u4e3b\u673a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh-keygen -R \u8981\u5220\u9664\u7684\u4e3b\u673a\u540d\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7 SSH \u8fd0\u884c\u590d\u6742\u7684\u8fdc\u7a0b shell \u547d\u4ee4\uff08\u4e0d\u7528\u8f6c\u4e49\u7279\u6b8a\u5b57\u7b26\uff09"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh host -l user $(<cmd.txt)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u66f4\u5177\u79fb\u690d\u6027\u7684\u7248\u672c"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh host -l user \u201ccat cmd.txt\u201d\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7 SSH \u5c06 MySQL \u6570\u636e\u5e93\u590d\u5236\u5230\u65b0\u670d\u52a1\u5668"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"mysqldump \u2013add-drop-table \u2013extended-insert \\\n\n  \u2013force \u2013log-error=error.log \\\n\n  -uUSER -pPASS OLD_DB_NAME \\\n\n  | ssh -C user@newhost \u201cmysql -uUSER -pPASS NEW_DB_NAME\u201d\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u538b\u7f29\u7684 SSH \u96a7\u9053 Dump \u4e00\u4e2a MySQL \u6570\u636e\u5e93\uff0c\u5c06\u5176\u4f5c\u4e3a\u8f93\u5165\u4f20\u9012\u7ed9 mysql \u547d\u4ee4\uff0c\u6211\u8ba4\u4e3a\u8fd9\u662f\u8fc1\u79fb\u6570\u636e\u5e93\u5230\u65b0\u670d\u52a1\u5668\u6700\u5feb\u6700\u597d\u7684\u65b9\u6cd5\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ece\u4e00\u53f0\u6ca1\u6709 ssh-copy-id \u547d\u4ee4\u7684\u4e3b\u673a\u5c06\u4f60\u7684 SSH \u516c\u94a5\u590d\u5236\u5230\u670d\u52a1\u5668"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"cat ~/.ssh/id_rsa.pub | ssh user@machine \u201cmkdir ~/.ssh; cat >> ~/.ssh/authorized_keys\u201d\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528 Mac OS X \u6216\u5176\u5b83\u6ca1\u6709 ssh-copy-id \u547d\u4ee4\u7684*nix \u53d8\u79cd\uff0c\u8fd9\u4e2a\u547d\u4ee4\u53ef\u4ee5\u5c06\u4f60\u7684\u516c\u94a5\u590d\u5236\u5230\u8fdc\u7a0b\u4e3b\u673a\uff0c\u56e0\u6b64\u4f60\u7167\u6837\u53ef\u4ee5\u5b9e\u73b0\u65e0\u5bc6\u7801 SSH \u767b\u5f55\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5b9e\u65f6 SSH \u7f51\u7edc\u541e\u5410\u91cf\u6d4b\u8bd5"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'yes | pv | ssh \u4e3b\u673a "cat > /dev/null"\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7 SSH \u8fde\u63a5\u5230\u4e3b\u673a\uff0c\u663e\u793a\u5b9e\u65f6\u7684\u4f20\u8f93\u901f\u5ea6\uff0c\u5c06\u6240\u6709\u4f20\u8f93\u6570\u636e\u6307\u5411/dev/null\uff0c\u9700\u8981\u5148\u5b89\u88c5 pv\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5efa\u7acb\u4e00\u4e2a\u53ef\u4ee5\u91cd\u65b0\u8fde\u63a5\u7684\u8fdc\u7a0b GNU screen"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh -t \u7528\u6237\u540d@\u4e3b\u673a /usr/bin/screen \u2013xRR\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4eba\u4eec\u603b\u662f\u559c\u6b22\u5728\u4e00\u4e2a\u6587\u672c\u7ec8\u7aef\u4e2d\u6253\u5f00\u8bb8\u591a shell\uff0c\u5982\u679c\u4f1a\u8bdd\u7a81\u7136\u4e2d\u65ad\uff0c\u6216\u4f60\u6309\u4e0b\u4e86\u201cCtrl-a d\u201d\uff0c\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u7684 shell \u4e0d\u4f1a\u53d7\u5230\u4e1d\u6beb\u5f71\u54cd\uff0c\u4f60\u53ef\u4ee5\u91cd\u65b0\u8fde\u63a5\uff0c\u5176\u5b83\u6709\u7528\u7684 screen \u547d\u4ee4\u6709\u201cCtrl-a c\u201d\uff08\u6253\u5f00\u65b0\u7684 shell\uff09\u548c\u201cCtrl-a a\u201d\uff08\u5728 shell \u4e4b\u95f4\u6765\u56de\u5207\u6362\uff09\uff0c\u8bf7\u8bbf\u95ee",(0,l.jsx)(e.a,{href:"http://aperiodic.net/screen/quick_reference%E9%98%85%E8%AF%BB%E6%9B%B4%E5%A4%9A%E5%85%B3%E4%BA%8E",children:"http://aperiodic.net/screen/quick_reference\u9605\u8bfb\u66f4\u591a\u5173\u4e8e"})," screen \u547d\u4ee4\u7684\u5feb\u901f\u53c2\u8003\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u7ee7\u7eed scp \u5927\u6587\u4ef6"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"rsync \u2013partial \u2013progress \u2013rsh=ssh \u6e90\u6587\u4ef6 \u7528\u6237\u540d@\u4e3b\u673a:\u76ee\u6807\u6587\u4ef6\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5b83\u53ef\u4ee5\u6062\u590d\u5931\u8d25\u7684 rsync \u547d\u4ee4\uff0c\u5f53\u4f60\u901a\u8fc7 VPN \u4f20\u8f93\u5927\u6587\u4ef6\uff0c\u5982\u5907\u4efd\u7684\u6570\u636e\u5e93\u65f6\u8fd9\u4e2a\u547d\u4ee4\u975e\u5e38\u6709\u7528\uff0c\u9700\u8981\u5728\u4e24\u8fb9\u7684\u4e3b\u673a\u4e0a\u5b89\u88c5 rsync\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u901a\u8fc7 SSH w/wireshark \u5206\u6790\u6d41\u91cf"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh \u7528\u6237\u540d@\u4e3b\u673a \u2018tshark -f \u201cport !22\u2033 -w -\u2019 | wireshark -k -i -\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f7f\u7528 tshark \u6355\u6349\u8fdc\u7a0b\u4e3b\u673a\u4e0a\u7684\u7f51\u7edc\u901a\u4fe1\uff0c\u901a\u8fc7 SSH \u8fde\u63a5\u53d1\u9001\u539f\u59cb pcap \u6570\u636e\uff0c\u5e76\u5728 wireshark \u4e2d\u663e\u793a\uff0c\u6309\u4e0b Ctrl+C \u5c06\u505c\u6b62\u6355\u6349\uff0c\u4f46\u4e5f\u4f1a\u5173\u95ed wireshark \u7a97\u53e3\uff0c\u53ef\u4ee5\u4f20\u9012\u4e00\u4e2a\u201c-c #\u201d\u53c2\u6570\u7ed9 tshark\uff0c\u8ba9\u5b83\u53ea\u6355\u6349\u201c#\u201d\u6307\u5b9a\u7684\u6570\u636e\u5305\u7c7b\u578b\uff0c\u6216\u901a\u8fc7\u547d\u540d\u7ba1\u9053\u91cd\u5b9a\u5411\u6570\u636e\uff0c\u800c\u4e0d\u662f\u76f4\u63a5\u901a\u8fc7 SSH \u4f20\u8f93\u7ed9 wireshark\uff0c\u6211\u5efa\u8bae\u4f60\u8fc7\u6ee4\u6570\u636e\u5305\uff0c\u4ee5\u8282\u7ea6\u5e26\u5bbd\uff0ctshark \u53ef\u4ee5\u4f7f\u7528 tcpdump \u66ff\u4ee3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh \u7528\u6237\u540d@\u4e3b\u673a tcpdump -w \u2013 \u2018port !22\u2032 | wireshark -k -i -\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u66f4\u7a33\u5b9a\uff0c\u66f4\u5feb\uff0c\u66f4\u5f3a\u7684 SSH \u5ba2\u6237\u7aef"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh -4 -C -c blowfish-cbc\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f3a\u5236\u4f7f\u7528 IPv4\uff0c\u538b\u7f29\u6570\u636e\u6d41\uff0c\u4f7f\u7528 Blowfish \u52a0\u5bc6\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f7f\u7528 cstream \u63a7\u5236\u5e26\u5bbd"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"tar -cj /backup | cstream -t 777k | ssh host \u2018tar -xj -C /backup\u2019\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u4f7f\u7528 bzip \u538b\u7f29\u6587\u4ef6\u5939\uff0c\u7136\u540e\u4ee5 777k bit/s \u901f\u7387\u5411\u8fdc\u7a0b\u4e3b\u673a\u4f20\u8f93\u3002Cstream \u8fd8\u6709\u66f4\u591a\u7684\u529f\u80fd\uff0c\u8bf7\u8bbf\u95ee",(0,l.jsx)(e.a,{href:"http://www.cons.org/cracauer/cstream.html#usage%E4%BA%86%E8%A7%A3%E8%AF%A6%E6%83%85%EF%BC%8C%E4%BE%8B%E5%A6%82%EF%BC%9A",children:"http://www.cons.org/cracauer/cstream.html#usage\u4e86\u89e3\u8be6\u60c5\uff0c\u4f8b\u5982\uff1a"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"echo w00t, i\u2019m 733+ | cstream -b1 -t2\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5c06\u6807\u51c6\u8f93\u5165\uff08stdin\uff09\u590d\u5236\u5230\u4f60\u7684 X11 \u7f13\u51b2\u533a"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"ssh \u7528\u6237\u540d@\u4e3b\u673a cat /path/to/some/file | xclip\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4f60\u662f\u5426\u4f7f\u7528 scp \u5c06\u6587\u4ef6\u590d\u5236\u5230\u5de5\u4f5c\u7528\u7535\u8111\u4e0a\uff0c\u4ee5\u4fbf\u590d\u5236\u5176\u5185\u5bb9\u5230\u7535\u5b50\u90ae\u4ef6\u4e2d\uff1fxclip \u53ef\u4ee5\u5e2e\u5230\u4f60\uff0c\u5b83\u53ef\u4ee5\u5c06\u6807\u51c6\u8f93\u5165\u590d\u5236\u5230 X11 \u7f13\u51b2\u533a\uff0c\u4f60\u9700\u8981\u505a\u7684\u5c31\u662f\u70b9\u51fb\u9f20\u6807\u4e2d\u952e\u7c98\u8d34\u7f13\u51b2\u533a\u4e2d\u7684\u5185\u5bb9\u3002"}),"\n",(0,l.jsx)(e.hr,{}),"\n",(0,l.jsx)(e.p,{children:"\u53c2\u8003\u6587\u7ae0:"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://linux.cn/article-7683-1.html",children:"https://linux.cn/article-7683-1.html"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://linux.cn/article-5776-1.html",children:"https://linux.cn/article-5776-1.html"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"http://os.51cto.com/art/201304/390042.htm",children:"http://os.51cto.com/art/201304/390042.htm"})}),"\n"]})]})}function o(s={}){const{wrapper:e}={...(0,r.a)(),...s.components};return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(a,{...s})}):a(s)}},1151:(s,e,n)=>{n.d(e,{Z:()=>i,a:()=>h});var l=n(7294);const r={},c=l.createContext(r);function h(s){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function i(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:h(s.components),l.createElement(c.Provider,{value:e},s.children)}}}]);