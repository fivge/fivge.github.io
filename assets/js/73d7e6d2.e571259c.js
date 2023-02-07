"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1712],{4259:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},s=void 0,c={unversionedId:"FE/typescript/tslint-eslint",id:"FE/typescript/tslint-eslint",title:"tslint-eslint",description:"codelyzer",source:"@site/docs/FE/typescript/tslint-eslint.md",sourceDirName:"FE/typescript",slug:"/FE/typescript/tslint-eslint",permalink:"/docs/FE/typescript/tslint-eslint",draft:!1,tags:[],version:"current",lastUpdatedAt:1581911329,formattedLastUpdatedAt:"Feb 17, 2020",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"decorators",permalink:"/docs/FE/typescript/decorators"},next:{title:"types",permalink:"/docs/FE/typescript/types"}},u={},p=[{value:"codelyzer",id:"codelyzer",level:4}],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h4",{id:"codelyzer"},"codelyzer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add codelyzer -D\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tslint.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "tslint:recommended",\n  "rules": {\n    "array-type": false,\n    "arrow-parens": false,\n    "deprecation": {\n      "severity": "warning"\n    },\n    "component-class-suffix": true,\n    "contextual-lifecycle": true,\n    "directive-class-suffix": true,\n    "directive-selector": [true, "attribute", "app", "camelCase"],\n    "component-selector": [true, "element", "app", "kebab-case"],\n    "import-blacklist": [true, "rxjs/Rx"],\n    "interface-name": false,\n    "max-classes-per-file": false,\n    "max-line-length": [true, 140],\n    "member-access": false,\n    "member-ordering": [\n      true,\n      {\n        "order": ["static-field", "instance-field", "static-method", "instance-method"]\n      }\n    ],\n    "no-consecutive-blank-lines": false,\n    "no-console": [true, "debug", "info", "time", "timeEnd", "trace"],\n    "no-empty": false,\n    "no-inferrable-types": [true, "ignore-params"],\n    "no-non-null-assertion": true,\n    "no-redundant-jsdoc": true,\n    "no-switch-case-fall-through": true,\n    "no-use-before-declare": true,\n    "no-var-requires": false,\n    "object-literal-key-quotes": [true, "as-needed"],\n    "object-literal-sort-keys": false,\n    "ordered-imports": false,\n    "quotemark": [true, "single"],\n    "trailing-comma": false,\n    "no-conflicting-lifecycle": true,\n    "no-host-metadata-property": true,\n    "no-input-rename": true,\n    "no-inputs-metadata-property": true,\n    "no-output-native": true,\n    "no-output-on-prefix": true,\n    "no-output-rename": true,\n    "no-outputs-metadata-property": true,\n    "template-banana-in-box": true,\n    "template-no-negated-async": true,\n    "use-lifecycle-interface": true,\n    "use-pipe-transform-interface": true\n  },\n  "rulesDirectory": ["codelyzer"]\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"tslint.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'  "extends": ["tslint:latest", "tslint-config-prettier"],\n  "rulesDirectory": ["codelyzer"],\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"package.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "codelyzer": "^5.0.1",\n    "husky": "^2.2.0",\n    "prettier": "^1.17.0",\n    "pretty-quick": "^1.10.0",\n    "tslint-config-prettier": "^1.18.0",\n\n')))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);