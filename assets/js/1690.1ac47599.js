(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1690],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,p=d["".concat(c,".").concat(f)]||d[f]||m[f]||o;return n?r.createElement(p,i(i({ref:t},u),{},{components:n})):r.createElement(p,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2503:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(3117),a=n(102),o=n(7294),i=n(4334),l=n(5999),c=n(6668),s=n(9960),u="anchorWithStickyNavbar_LWe7",m="anchorWithHideOnScrollNavbar_WYt5",d=["as","id"];function f(e){var t=e.as,n=e.id,f=(0,a.Z)(e,d),p=(0,c.L)().navbar.hideOnScroll;if("h1"===t||!n)return o.createElement(t,(0,r.Z)({},f,{id:void 0}));var v=(0,l.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof f.children?f.children:n});return o.createElement(t,(0,r.Z)({},f,{className:(0,i.Z)("anchor",p?m:u,f.className),id:n}),f.children,o.createElement(s.Z,{className:"hash-link",to:"#"+n,"aria-label":v,title:v},"\u200b"))}},8718:function(e,t,n){"use strict";n.d(t,{Z:function(){return Be}});var r=n(7294),a=n(3905),o=n(3117),i=n(102),l=n(5742),c=["mdxType","originalType"];var s=n(2389),u=n(4334),m=n(2949),d=n(6668);function f(){var e=(0,d.L)().prism,t=(0,m.I)().colorMode,n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var p=n(5281),v=n(8900),h=n(7594),g=n.n(h),y=(0,v.Z)(/title=(["'])(.*?)\1/,{quote:1,title:2}),b=(0,v.Z)(/\{([\d,-]+)\}/,{range:1}),E={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function k(e,t){var n=e.map((function(e){var n=E[e],r=n.start,a=n.end;return"(?:"+r+"\\s*("+t.flatMap((function(e){var t,n;return[e.line,null==(t=e.block)?void 0:t.start,null==(n=e.block)?void 0:n.end].filter(Boolean)})).join("|")+")\\s*"+a+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")}function N(e,t){var n=e.replace(/\n$/,""),r=t.language,a=t.magicComments,o=t.metastring;if(o&&b.test(o)){var i=o.match(b).groups.range;if(0===a.length)throw new Error("A highlight range has been given in code block's metastring (``` "+o+"), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.");var l=a[0].className,c=g()(i).filter((function(e){return e>0})).map((function(e){return[e-1,[l]]}));return{lineClassNames:Object.fromEntries(c),code:n}}if(void 0===r)return{lineClassNames:{},code:n};for(var s=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return k(["js","jsBlock"],t);case"jsx":case"tsx":return k(["js","jsBlock","jsx"],t);case"html":return k(["js","jsBlock","html"],t);case"python":case"py":case"bash":return k(["bash"],t);case"markdown":case"md":return k(["html","jsx","bash"],t);default:return k(Object.keys(E),t)}}(r,a),u=n.split("\n"),m=Object.fromEntries(a.map((function(e){return[e.className,{start:0,range:""}]}))),d=Object.fromEntries(a.filter((function(e){return e.line})).map((function(e){var t=e.className;return[e.line,t]}))),f=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.start,t]}))),p=Object.fromEntries(a.filter((function(e){return e.block})).map((function(e){var t=e.className;return[e.block.end,t]}))),v=0;v<u.length;){var h=u[v].match(s);if(h){var y=h.slice(1).find((function(e){return void 0!==e}));d[y]?m[d[y]].range+=v+",":f[y]?m[f[y]].start=v:p[y]&&(m[p[y]].range+=m[p[y]].start+"-"+(v-1)+","),u.splice(v,1)}else v+=1}n=u.join("\n");var N={};return Object.entries(m).forEach((function(e){var t=e[0],n=e[1].range;g()(n).forEach((function(e){null!=N[e]||(N[e]=[]),N[e].push(t)}))})),{lineClassNames:N,code:n}}var C="codeBlockContainer_Ckt0",L=["as"];function Z(e){var t=e.as,n=(0,i.Z)(e,L),a=function(e){var t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((function(e){var r=e[0],a=e[1],o=t[r];o&&"string"==typeof a&&(n[o]=a)})),n}(f());return r.createElement(t,(0,o.Z)({},n,{style:a,className:(0,u.Z)(n.className,C,p.k.common.codeBlock)}))}var w={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"};function x(e){var t=e.children,n=e.className;return r.createElement(Z,{as:"pre",tabIndex:0,className:(0,u.Z)(w.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:w.codeBlockLines},t))}var B=n(4700),T={attributes:!0,characterData:!0,childList:!0,subtree:!0};function O(e,t){var n=(0,r.useState)(),a=n[0],o=n[1],i=(0,r.useCallback)((function(){var t;o(null==(t=e.current)?void 0:t.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,r.useEffect)((function(){i()}),[i]),function(e,t,n){void 0===n&&(n=T);var a=(0,B.zX)(t),o=(0,B.Ql)(n);(0,r.useEffect)((function(){var t=new MutationObserver(a);return e&&t.observe(e,o),function(){return t.disconnect()}}),[e,a,o])}(a,(function(e){e.forEach((function(e){"attributes"===e.type&&"hidden"===e.attributeName&&(t(),i())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}var j={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},_={Prism:n(7410).Z,theme:j};function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}var A=/\r\n|\r|\n/,P=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},I=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=S({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=S({},n,{backgroundColor:null}),a};function M(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var D=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),H(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?I(e.theme,e.language):void 0;return t.themeDict=n})),H(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=S({},M(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?S({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),H(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),H(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=S({},M(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?S({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),H(this,"tokenize",(function(e,t,n,r){var a={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",a);var o=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],m=n[i][o];if("string"==typeof m?(u=i>0?u:["plain"],s=m):(u=z(u,m.type),m.alias&&(u=z(u,m.alias)),s=m.content),"string"==typeof s){var d=s.split(A),f=d.length;l.push({types:u,content:d[0]});for(var p=1;p<f;p++)P(l),c.push(l=[]),l.push({types:u,content:d[p]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return P(l),c}(void 0!==i?this.tokenize(t,r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),R=D,V="codeLine_lJS_",W="codeLineNumber_Tfdd",q="codeLineContent_feaV";function F(e){var t=e.line,n=e.classNames,a=e.showLineNumbers,i=e.getLineProps,l=e.getTokenProps;1===t.length&&"\n"===t[0].content&&(t[0].content="");var c=i({line:t,className:(0,u.Z)(n,a&&V)}),s=t.map((function(e,t){return r.createElement("span",(0,o.Z)({key:t},l({token:e,key:t})))}));return r.createElement("span",c,a?r.createElement(r.Fragment,null,r.createElement("span",{className:W}),r.createElement("span",{className:q},s)):s,r.createElement("br",null))}var U=n(5999);function G(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function $(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}var Y={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function Q(e){var t=e.code,n=e.className,a=(0,r.useState)(!1),o=a[0],i=a[1],l=(0,r.useRef)(void 0),c=(0,r.useCallback)((function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,a=document.createElement("textarea"),o=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";var i=document.getSelection(),l=!1;i.rangeCount>0&&(l=i.getRangeAt(0)),r.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(s){}a.remove(),l&&(i.removeAllRanges(),i.addRange(l)),o&&o.focus()}(t),i(!0),l.current=window.setTimeout((function(){i(!1)}),1e3)}),[t]);return(0,r.useEffect)((function(){return function(){return window.clearTimeout(l.current)}}),[]),r.createElement("button",{type:"button","aria-label":o?(0,U.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,U.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,U.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,u.Z)("clean-btn",n,Y.copyButton,o&&Y.copyButtonCopied),onClick:c},r.createElement("span",{className:Y.copyButtonIcons,"aria-hidden":"true"},r.createElement(G,{className:Y.copyButtonIcon}),r.createElement($,{className:Y.copyButtonSuccessIcon})))}function X(e){return r.createElement("svg",(0,o.Z)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}var J="wordWrapButtonIcon_Bwma",K="wordWrapButtonEnabled_EoeP";function ee(e){var t=e.className,n=e.onClick,a=e.isEnabled,o=(0,U.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,u.Z)("clean-btn",t,a&&K),"aria-label":o,title:o},r.createElement(X,{className:J,"aria-hidden":"true"}))}function te(e){var t,n,a,i,l,c,s,m,p,v,h,g=e.children,b=e.className,E=void 0===b?"":b,k=e.metastring,C=e.title,L=e.showLineNumbers,x=e.language,B=(0,d.L)().prism,T=B.defaultLanguage,j=B.magicComments,H=null!=(t=null!=x?x:null==(n=E.split(" ").find((function(e){return e.startsWith("language-")})))?void 0:n.replace(/language-/,""))?t:T,S=f(),A=(a=(0,r.useState)(!1),i=a[0],l=a[1],c=(0,r.useState)(!1),s=c[0],m=c[1],p=(0,r.useRef)(null),v=(0,r.useCallback)((function(){var e=p.current.querySelector("code");i?e.removeAttribute("style"):(e.style.whiteSpace="pre-wrap",e.style.overflowWrap="anywhere"),l((function(e){return!e}))}),[p,i]),h=(0,r.useCallback)((function(){var e=p.current,t=e.scrollWidth>e.clientWidth||p.current.querySelector("code").hasAttribute("style");m(t)}),[p]),O(p,h),(0,r.useEffect)((function(){h()}),[i,h]),(0,r.useEffect)((function(){return window.addEventListener("resize",h,{passive:!0}),function(){window.removeEventListener("resize",h)}}),[h]),{codeBlockRef:p,isEnabled:i,isCodeScrollable:s,toggle:v}),P=function(e){var t,n;return null!=(t=null==e||null==(n=e.match(y))?void 0:n.groups.title)?t:""}(k)||C,z=N(g,{metastring:k,language:H,magicComments:j}),I=z.lineClassNames,M=z.code,D=null!=L?L:function(e){return Boolean(null==e?void 0:e.includes("showLineNumbers"))}(k);return r.createElement(Z,{as:"div",className:(0,u.Z)(E,H&&!E.includes("language-"+H)&&"language-"+H)},P&&r.createElement("div",{className:w.codeBlockTitle},P),r.createElement("div",{className:w.codeBlockContent},r.createElement(R,(0,o.Z)({},_,{theme:S,code:M,language:null!=H?H:"text"}),(function(e){var t=e.className,n=e.tokens,a=e.getLineProps,o=e.getTokenProps;return r.createElement("pre",{tabIndex:0,ref:A.codeBlockRef,className:(0,u.Z)(t,w.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,u.Z)(w.codeBlockLines,D&&w.codeBlockLinesWithNumbering)},n.map((function(e,t){return r.createElement(F,{key:t,line:e,getLineProps:a,getTokenProps:o,classNames:I[t],showLineNumbers:D})}))))})),r.createElement("div",{className:w.buttonGroup},(A.isEnabled||A.isCodeScrollable)&&r.createElement(ee,{className:w.codeButton,onClick:function(){return A.toggle()},isEnabled:A.isEnabled}),r.createElement(Q,{className:w.codeButton,code:M}))))}var ne=["children"];function re(e){var t=e.children,n=(0,i.Z)(e,ne),a=(0,s.Z)(),l=function(e){return r.Children.toArray(e).some((function(e){return(0,r.isValidElement)(e)}))?e:Array.isArray(e)?e.join(""):e}(t),c="string"==typeof l?te:x;return r.createElement(c,(0,o.Z)({key:String(a)},n),l)}var ae=n(9960);var oe=n(7459),ie=n(6043),le="details_lb9f",ce="isBrowser_bmU9",se="collapsibleContent_i85q",ue=["summary","children"];function me(e){return!!e&&("SUMMARY"===e.tagName||me(e.parentElement))}function de(e,t){return!!e&&(e===t||de(e.parentElement,t))}function fe(e){var t=e.summary,n=e.children,a=(0,i.Z)(e,ue),l=(0,s.Z)(),c=(0,r.useRef)(null),u=(0,ie.u)({initialState:!a.open}),m=u.collapsed,d=u.setCollapsed,f=(0,r.useState)(a.open),p=f[0],v=f[1],h=r.isValidElement(t)?t:r.createElement("summary",null,null!=t?t:"Details");return r.createElement("details",(0,o.Z)({},a,{ref:c,open:p,"data-collapsed":m,className:(0,oe.Z)(le,l&&ce,a.className),onMouseDown:function(e){me(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var t=e.target;me(t)&&de(t,c.current)&&(e.preventDefault(),m?(d(!1),v(!0)):d(!0))}}),h,r.createElement(ie.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){d(e),v(!e)}},r.createElement("div",{className:se},n)))}var pe="details_b_Ee";function ve(e){var t=Object.assign({},e);return r.createElement(fe,(0,o.Z)({},t,{className:(0,u.Z)("alert alert--info",pe,t.className)}))}var he=n(2503);function ge(e){return r.createElement(he.Z,e)}var ye="containsTaskList_mC6p";var be="img_ev3q";var Ee="admonition_LlT9",ke="admonitionHeading_tbUL",Ne="admonitionIcon_kALy",Ce="admonitionContent_S0QG";var Le={note:{infimaClassName:"secondary",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:r.createElement(U.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:r.createElement(U.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:r.createElement(U.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:r.createElement(U.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return r.createElement("svg",{viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:r.createElement(U.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},Ze={secondary:"note",important:"info",success:"tip",warning:"danger"};function we(e){var t,n=function(e){var t=r.Children.toArray(e),n=t.find((function(e){var t;return r.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return{mdxAdmonitionTitle:n,rest:a}}(e.children),a=n.mdxAdmonitionTitle,o=n.rest;return Object.assign({},e,{title:null!=(t=e.title)?t:a,children:o})}var xe={head:function(e){var t=r.Children.map(e.children,(function(e){return r.isValidElement(e)?function(e){var t;if(null!=(t=e.props)&&t.mdxType&&e.props.originalType){var n=e.props,a=(n.mdxType,n.originalType,(0,i.Z)(n,c));return r.createElement(e.props.originalType,a)}return e}(e):e}));return r.createElement(l.Z,e,t)},code:function(e){var t=["a","abbr","b","br","button","cite","code","del","dfn","em","i","img","input","ins","kbd","label","object","output","q","ruby","s","small","span","strong","sub","sup","time","u","var","wbr"];return r.Children.toArray(e.children).every((function(e){var n;return"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(null==(n=e.props)?void 0:n.mdxType)}))?r.createElement("code",e):r.createElement(re,e)},a:function(e){return r.createElement(ae.Z,e)},pre:function(e){var t;return r.createElement(re,(0,r.isValidElement)(e.children)&&"code"===(null==(t=e.children.props)?void 0:t.originalType)?e.children.props:Object.assign({},e))},details:function(e){var t=r.Children.toArray(e.children),n=t.find((function(e){var t;return r.isValidElement(e)&&"summary"===(null==(t=e.props)?void 0:t.mdxType)})),a=r.createElement(r.Fragment,null,t.filter((function(e){return e!==n})));return r.createElement(ve,(0,o.Z)({},e,{summary:n}),a)},ul:function(e){return r.createElement("ul",(0,o.Z)({},e,{className:(t=e.className,(0,u.Z)(t,(null==t?void 0:t.includes("contains-task-list"))&&ye))}));var t},img:function(e){return r.createElement("img",(0,o.Z)({loading:"lazy"},e,{className:(t=e.className,(0,u.Z)(t,be))}));var t},h1:function(e){return r.createElement(ge,(0,o.Z)({as:"h1"},e))},h2:function(e){return r.createElement(ge,(0,o.Z)({as:"h2"},e))},h3:function(e){return r.createElement(ge,(0,o.Z)({as:"h3"},e))},h4:function(e){return r.createElement(ge,(0,o.Z)({as:"h4"},e))},h5:function(e){return r.createElement(ge,(0,o.Z)({as:"h5"},e))},h6:function(e){return r.createElement(ge,(0,o.Z)({as:"h6"},e))},admonition:function(e){var t=we(e),n=t.children,a=t.type,o=t.title,i=t.icon,l=function(e){var t,n=null!=(t=Ze[e])?t:e;return Le[n]||(console.warn('No admonition config found for admonition type "'+n+'". Using Info as fallback.'),Le.info)}(a),c=null!=o?o:l.label,s=l.iconComponent,m=null!=i?i:r.createElement(s,null);return r.createElement("div",{className:(0,u.Z)(p.k.common.admonition,p.k.common.admonitionType(e.type),"alert","alert--"+l.infimaClassName,Ee)},r.createElement("div",{className:ke},r.createElement("span",{className:Ne},m),c),r.createElement("div",{className:Ce},n))},mermaid:function(){return null}};function Be(e){var t=e.children;return r.createElement(a.Zo,{components:xe},t)}},9407:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(3117),a=n(102),o=n(7294),i=n(4334),l=n(3743),c="tableOfContents_bqdL",s=["className"];function u(e){var t=e.className,n=(0,a.Z)(e,s);return o.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},o.createElement(l.Z,(0,r.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},3743:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r=n(3117),a=n(102),o=n(7294),i=n(6668),l=["parentIndex"];function c(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var r=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,r),n[e.level]=t}));var r=[];return t.forEach((function(e){var n=e.parentIndex,o=(0,a.Z)(e,l);n>=0?t[n].children.push(o):r.push(o)})),r}function s(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return t.flatMap((function(e){var t=s({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[Object.assign({},e,{children:t})]:t}))}function u(e){var t=e.getBoundingClientRect();return t.top===t.bottom?u(e.parentNode):t}function m(e,t){var n,r,a=t.anchorTopOffset,o=e.find((function(e){return u(e).top>=a}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(u(o))?o:null!=(r=e[e.indexOf(o)-1])?r:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,o.useRef)(0),t=(0,i.L)().navbar.hideOnScroll;return(0,o.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function f(e){var t=(0,o.useRef)(void 0),n=d();(0,o.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,a=e.linkActiveClassName,o=e.minHeadingLevel,i=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,r=[],a=t;a<=n;a+=1)r.push("h"+a+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:o,maxHeadingLevel:i}),c=m(l,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,n])}function p(e){var t=e.toc,n=e.className,r=e.linkClassName,a=e.isChild;return t.length?o.createElement("ul",{className:a?void 0:n},t.map((function(e){return o.createElement("li",{key:e.id},o.createElement("a",{href:"#"+e.id,className:null!=r?r:void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(p,{isChild:!0,toc:e.children,className:n,linkClassName:r}))}))):null}var v=o.memo(p),h=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var t=e.toc,n=e.className,l=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,m=void 0===u?"table-of-contents__link":u,d=e.linkActiveClassName,p=void 0===d?void 0:d,g=e.minHeadingLevel,y=e.maxHeadingLevel,b=(0,a.Z)(e,h),E=(0,i.L)(),k=null!=g?g:E.tableOfContents.minHeadingLevel,N=null!=y?y:E.tableOfContents.maxHeadingLevel,C=function(e){var t=e.toc,n=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,o.useMemo)((function(){return s({toc:c(t),minHeadingLevel:n,maxHeadingLevel:r})}),[t,n,r])}({toc:t,minHeadingLevel:k,maxHeadingLevel:N});return f((0,o.useMemo)((function(){if(m&&p)return{linkClassName:m,linkActiveClassName:p,minHeadingLevel:k,maxHeadingLevel:N}}),[m,p,k,N])),o.createElement(v,(0,r.Z)({toc:C,className:l,linkClassName:m},b))}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,a,o]=t;if(r&&o){r=parseInt(r),o=parseInt(o);const e=r<o?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(o+=e);for(let t=r;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);