"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[3817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||l;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,c=new Array(l);c[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82372:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={layout:"post",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c13\u7bc7 MySQL\u6570\u636e\u5bfc\u51faExcel\u6570\u636e\u4e71\u7801",categories:"Kettle\u5b9e\u6218",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c13\u7bc7 MySQL\u6570\u636e\u5bfc\u51faExcel\u6570\u636e\u4e71\u7801",keywords:["Kettle\u5b9e\u6218","Kettle in Action","Kettle","Kettle JSON\u4f7f\u7528"]},c=void 0,o={unversionedId:"kettle/2019-08-13-kettle-13",id:"kettle/2019-08-13-kettle-13",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c13\u7bc7 MySQL\u6570\u636e\u5bfc\u51faExcel\u6570\u636e\u4e71\u7801",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c13\u7bc7 MySQL\u6570\u636e\u5bfc\u51faExcel\u6570\u636e\u4e71\u7801",source:"@site/programmer/blog/kettle/2019-08-13-kettle-13.md",sourceDirName:"kettle",slug:"/kettle/2019-08-13-kettle-13",permalink:"/blog/kettle/2019-08-13-kettle-13",draft:!1,editUrl:"https://github.com/xiaoymin/blog-ai/blob/master/programmer/blog/kettle/2019-08-13-kettle-13.md",tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1686478303,formattedLastUpdatedAt:"2023\u5e746\u670811\u65e5",frontMatter:{layout:"post",title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c13\u7bc7 MySQL\u6570\u636e\u5bfc\u51faExcel\u6570\u636e\u4e71\u7801",categories:"Kettle\u5b9e\u6218",description:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c13\u7bc7 MySQL\u6570\u636e\u5bfc\u51faExcel\u6570\u636e\u4e71\u7801",keywords:["Kettle\u5b9e\u6218","Kettle in Action","Kettle","Kettle JSON\u4f7f\u7528"]},sidebar:"tutorialSidebar",previous:{title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c12\u7bc7 \u81ea\u5b9a\u4e49\u5f00\u53d1Java\u5de5\u5177\u7c7b\u5e76\u5728JavaScript\u811a\u672c\u4e2d\u8fd0\u7528",permalink:"/blog/kettle/2019-08-13-kettle-12"},next:{title:"Kettle\u5b9e\u6218100\u7bc7 \u7b2c14\u7bc7 \u53c2\u6570\u4e0e\u53d8\u91cf",permalink:"/blog/kettle/2019-08-14-kettle-14"}},i={},s=[],p={toc:s};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8be5\u95ee\u9898\u6211\u5728\u4f7f\u7528\u5206\u9875\u67e5\u8be2\u5bfc\u51fa\u7684\u65f6\u5019\u78b0\u5230\u4e86\u4e71\u7801\u7684\u60c5\u51b5,\u6211\u7684\u60c5\u51b5\u6bd4\u8f83\u7279\u6b8a,\u6211\u901a\u8fc7\u6d4f\u89c8\u5df2\u7ecf\u5efa\u7acb\u597d\u7684\u6570\u636e\u5e93\u8fde\u63a5\u7684\u4e2d\u7684\u6570\u636e\u65f6\u5e76\u975e\u4e71\u7801,\u800c\u5f53\u6211\u4f7f\u7528\u8868\u8f93\u5165\u7ec4\u4ef6\u4e2d\u7684\u9884\u89c8\u6570\u636e\u65f6\u7f3a\u4ea7\u751f\u4e86\u4e71\u7801,\u56e0\u6b64\u6211\u4e0d\u5f97\u4e0d\u8bbe\u7f6e\u6211\u4eec\u7684\u6570\u636e\u5e93\u8fde\u63a5\u53c2\u6570"),(0,a.kt)("p",null,"\u4e71\u7801\u4e3b\u8981\u5206\u51e0\u79cd\u60c5\u51b5"),(0,a.kt)("p",null,"\u4e00\u3001\u67e5\u770b\u6211\u4eec\u7684\u6570\u636e\u5e93\u7684\u670d\u52a1\u7aef\u5b57\u7b26\u96c6\u662f\u5426\u662fUTF-8(\u5e38\u7528\u5b57\u7b26\u96c6)"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528navicat\u8fde\u63a5\u5230\u6211\u4eec\u7684\u6570\u636e\u5e93,\u7136\u540e\u4f7f\u7528\u547d\u4ee4\u884c\uff0c\u8f93\u5165\u67e5\u8be2\u8bed\u53e5\u8fdb\u884c\u67e5\u770b\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> show variables like '%char%';\n+--------------------------+-----------------------------------------------+\n| Variable_name            | Value                                         |\n+--------------------------+-----------------------------------------------+\n| character_set_client     | utf8mb4                                       |\n| character_set_connection | utf8mb4                                       |\n| character_set_database   | utf8                                          |\n| character_set_filesystem | binary                                        |\n| character_set_results    | utf8mb4                                       |\n| character_set_server     | utf8                                          |\n| character_set_system     | utf8                                          |\n| character_sets_dir       | D:\\Users\\xiaoymin\\Bin\\mariadb\\share\\charsets\\ |\n+--------------------------+-----------------------------------------------+\n8 rows in set (0.08 sec)\n")),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"character_set_server"),"\u5c31\u662f\u6211\u4eec\u7684\u6570\u636e\u5e93\u670d\u52a1\u7aef\u7f16\u7801"),(0,a.kt)("p",null,"\u6211\u4eec\u4e5f\u53ef\u4ee5\u4f7f\u7528SQL\u8bed\u53e5\u67e5\u8be2\u6211\u4eec\u7684\u8868\u5b57\u6bb5\u7f16\u7801\uff0c\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"mysql> show full columns from fund;\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(41456).Z,width:"947",height:"479"})),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u7b2c\u4e00\u6b65\u68c0\u67e5\u662fOK\u7684,\u4f46\u662f\u6d4f\u89c8\u6570\u636e\u4f9d\u7136\u662f\u4e71\u7801,\u90a3\u4e48\u6211\u4eec\u5c31\u9700\u8981\u4fee\u6539Kettle\u4e2d\u7684\u914d\u7f6e\u53c2\u6570"),(0,a.kt)("p",null,"\u70b9\u51fb\u8868\u8f93\u5165\u7ec4\u4ef6\u7684\u7f16\u8f91\u6309\u94ae\uff0c\u5bf9\u6570\u636e\u5e93\u4fe1\u606f\u8fdb\u884c\u7f16\u8f91"),(0,a.kt)("p",null,"1\u3001\u9009\u62e9\u9ad8\u7ea7\u9009\u9879\u5361,\u6dfb\u52a0\u76f8\u5173\u5b57\u7b26\u7801"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(73140).Z,width:"1366",height:"610"})),(0,a.kt)("p",null,"2\u3001\u9ad8\u7ea7\u9009\u9879\u5361\u4e2d\u8bbe\u7f6enames\u503c\uff0c\u7f51\u4e0a\u7684\u89e3\u51b3\u65b9\u6848\u5927\u591a\u662f\u4f7f\u7528utf8\uff0c\u4f46\u662f\u6211\u672c\u673a\u4f7f\u7528\u540e\u53d1\u73b0\u8fd8\u662f\u4e71\u7801,\u56e0\u6b64\u6211\u6539\u6210\u4e86gbk\uff0c\u8fd9\u4e2a\u5927\u5bb6\u81ea\u884c\u6839\u636e\u81ea\u5df1\u7684\u60c5\u51b5\u8bbe\u5b9a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"set names gbk;\n")),(0,a.kt)("p",null,"\u5982\u4e0b\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(63165).Z,width:"1366",height:"610"})))}u.isMDXComponent=!0},73140:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kiadbtoexcel-19-ff69aa1bdacf7aa5387d2a47e5ee3433.png"},63165:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kiadbtoexcel-20-617b4f248c14dcea8df427128140e9f3.png"},41456:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kiadbtoexcel-21-a80cc15395f7c7a6c7966ce8e0522fd1.png"}}]);