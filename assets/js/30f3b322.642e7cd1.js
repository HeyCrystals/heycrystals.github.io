"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8335],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},21548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=["components"],o={},p="\u90e8\u7f72\u624b\u518c",u={unversionedId:"solution/knife4j-admin-deploy",id:"solution/knife4j-admin-deploy",title:"\u90e8\u7f72\u624b\u518c",description:"knife4j-admin\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72",source:"@site/docs/solution/knife4j-admin-deploy.md",sourceDirName:"solution",slug:"/solution/knife4j-admin-deploy",permalink:"/docs/solution/knife4j-admin-deploy",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660471539,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{}},m={},s=[{value:"\u5b89\u88c5Nginx",id:"\u5b89\u88c5nginx",level:2},{value:"\u4e0b\u8f7d\u6700\u65b0\u53d1\u884c\u7248",id:"\u4e0b\u8f7d\u6700\u65b0\u53d1\u884c\u7248",level:2},{value:"\u5b89\u88c5\u90e8\u7f72",id:"\u5b89\u88c5\u90e8\u7f72",level:2},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u542f\u52a8\u7a0b\u5e8f",id:"\u542f\u52a8\u7a0b\u5e8f",level:3},{value:"\u914d\u7f6eNginx",id:"\u914d\u7f6enginx",level:3},{value:"\u542f\u52a8Nginx",id:"\u542f\u52a8nginx",level:3}],c={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u90e8\u7f72\u624b\u518c"},"\u90e8\u7f72\u624b\u518c"),(0,l.kt)("p",null,"knife4j-admin\u91c7\u7528\u524d\u540e\u7aef\u5206\u79bb\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72"),(0,l.kt)("p",null,"java\u73af\u5883"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'[root@iZbt ~]# java -version\njava version "1.8.0_144"\nJava(TM) SE Runtime Environment (build 1.8.0_144-b01)\nJava HotSpot(TM) 64-Bit Server VM (build 25.144-b01, mixed mode)\n')),(0,l.kt)("p",null,"Linux:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[root@iZbt ~]# lsb_release -a\nLSB Version:    :core-4.1-amd64:core-4.1-noarch\nDistributor ID:    CentOS\nDescription:    CentOS Linux release 7.4.1708 (Core) \nRelease:    7.4.1708\nCodename:    Core\n")),(0,l.kt)("h2",{id:"\u5b89\u88c5nginx"},"\u5b89\u88c5Nginx"),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u5fc5\u987b\u5b89\u88c5Nginx\uff0c\u5177\u4f53\u7684\u5b89\u88c5\u6559\u7a0b\u53ef\u4ee5\u81ea\u884c\u641c\u7d22,\u8fd9\u91cc\u4e0d\u518d\u8bf4\u660e."),(0,l.kt)("h2",{id:"\u4e0b\u8f7d\u6700\u65b0\u53d1\u884c\u7248"},"\u4e0b\u8f7d\u6700\u65b0\u53d1\u884c\u7248"),(0,l.kt)("p",null,"\u524d\u5f80",(0,l.kt)("a",{parentName:"p",href:"knife4j-admin-download",target:null,rel:null},"\u53d1\u884c\u7248\u5730\u5740"),"\u8fdb\u884c\u4e0b\u8f7d"),(0,l.kt)("p",null,"\u53d1\u884c\u7248\u4e00\u822c\u662f\u4ee5zip\u538b\u7f29\u5305\u5f62\u5f0f\u8fdb\u884c\u53d1\u5e03,\u538b\u7f29\u5305\u4e2d\u5305\u542bjar\u53ef\u8fd0\u884c\u6587\u4ef6\u4ee5\u53ca\u4e00\u4e2afront\u7684\u524d\u7aef\u6587\u4ef6"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u90e8\u7f72"},"\u5b89\u88c5\u90e8\u7f72"),(0,l.kt)("p",null,"\u5047\u8bbe\u90e8\u7f72\u8def\u5f84\u5728\u670d\u52a1\u5668\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt/application/kadmin"),"\u76ee\u5f55\u4e0b"),(0,l.kt)("p",null,"\u6587\u4ef6\u7684\u6574\u4f53\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"|-kadmin\n|----data    //\u6570\u636e\u76ee\u5f55,\u53ef\u4ee5\u4e3a\u7a7a,\u5728\u90e8\u7f72\u65f6\u8be5\u76ee\u5f55\u5fc5\u987b\u5148\u624b\u5de5\u521b\u5efa\n|----front   //\u7531zip\u5305\u89e3\u538b\u5f97\u5230\n|----logs    //\u7a0b\u5e8f\u7684\u65e5\u5fd7\u76ee\u5f55,\u5728\u90e8\u7f72\u65f6\u8be5\u76ee\u5f55\u5fc5\u987b\u5148\u624b\u5de5\u521b\u5efa\n|----startup.sh //\u542f\u52a8\u811a\u672c,\u5fc5\u987b\u4f7f\u7528chmod+x startup.sh \u547d\u4ee4\u8d4b\u4e88\u53ef\u6267\u884c\u6743\u9650\n|----knife4j-admin-1.0.jar //\u7531zip\u5305\u89e3\u538b\u5f97\u5230\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u5728knife4j-admin\u7a0b\u5e8f\u4e2d,\u5982\u679c\u4f60\u7684\u90e8\u7f72\u76ee\u5f55\u4e0d\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"/mnt/application/kadmin"),"\uff0c\u90a3\u4e48\u9700\u8981\u4fee\u6539jar\u5305\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"application-prod.yml"),"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"application-prod.yml"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"server:\n# \u7aef\u53e3\u53f7\n  port: 17808 \nknife4j:\n  # \u76d1\u542c\u9879\u76ee\u76ee\u5f55 \n  monitor: /mnt/application/kadmin/data \n")),(0,l.kt)("p",null,"\u5fc5\u987b\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"knife4j.monitor"),"\u4e2d\u7684\u76d1\u6d4b\u76ee\u5f55,\u8be5\u76ee\u5f55\u662f\u53ef\u4ee5\u7531\u5f00\u53d1\u8005\u81ea\u884c\u66f4\u6539,\u66f4\u6539\u540e\u5728\u66ff\u6362jar\u5305\u4e2d\u7684\u6587\u4ef6\u5373\u53ef"),(0,l.kt)("p",null,"\u5f53\u7136,\u7a0b\u5e8f\u7684\u7aef\u53e3\u53f7\u5f00\u53d1\u8005\u4e5f\u53ef\u81ea\u884c\u66f4\u6539"),(0,l.kt)("h3",{id:"\u542f\u52a8\u7a0b\u5e8f"},"\u542f\u52a8\u7a0b\u5e8f"),(0,l.kt)("p",null,"knife4j-admin\u63d0\u4f9b\u7684\u662f\u4e00\u4e2aSpring Boot\u7684\u53ef\u6267\u884cjar\u5305,\u56e0\u6b64,",(0,l.kt)("inlineCode",{parentName:"p"},"startup.sh"),"\u7684\u53ef\u6267\u884c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nohup java -Xms512m -Xmx512m -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=256m -XX:MaxNewSize=256m -jar /mnt/application/kadmin/knife4j-admin-1.0.jar >> /dev/null 2>&1 &\n")),(0,l.kt)("p",null,"\u901a\u8fc7Linux\u7ec8\u7aef\u6267\u884c\u547d\u4ee4\u8fdb\u884c\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[root@izbt kadmin]# ./startup.sh\n")),(0,l.kt)("h3",{id:"\u914d\u7f6enginx"},"\u914d\u7f6eNginx"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u7684\u540e\u53f0\u670d\u52a1\u542f\u52a8\u597d\u4e4b\u540e,\u6211\u4eec\u8fd8\u9700\u8981\u914d\u7f6e\u4e00\u4e2a\u5bf9\u5916\u7684Nginx\u7aef\u53e3"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"kadmin.conf"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen       80;\n    server_name  kadmin.xiaominfo.com;\n    # \u540e\u53f0\u670d\u52a1\n    location / {\n        proxy_pass http://127.0.0.1:17808;\n        client_max_body_size 300m;\n    }\n    # \u524d\u7aef\u6587\u4ef6\n    location ~*^.+\\.(icon|gif|jpg|jpeg|png|html|css|js|txt|xml|swf|wav)$ {\n        root /mnt/application/kadmin/front;\n    }\n\n}\n")),(0,l.kt)("p",null,"\u6b64Nginx\u7684\u914d\u7f6e\u662f\u76ee\u524dknife4j\u63d0\u4f9b\u7684\u6d4b\u8bd5\u5730\u5740,\u5f00\u53d1\u8005\u5982\u679c\u6ca1\u6709\u57df\u540d,\u53ef\u4ee5\u81ea\u884c\u4f7f\u7528\u7aef\u53e3\u53f7\u7b49\u8fdb\u884c\u914d\u7f6e\u5373\u53ef"),(0,l.kt)("h3",{id:"\u542f\u52a8nginx"},"\u542f\u52a8Nginx"),(0,l.kt)("p",null,"Nginx\u7684\u73af\u5883\u914d\u7f6e\u597d\u540e,\u542f\u52a8Nginx\u5373\u53ef"),(0,l.kt)("p",null,"\u670d\u52a1\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[root@izbt kadmin]# service nginx start\n")),(0,l.kt)("p",null,"\u5982\u679cNginx\u672a\u5b89\u88c5\u6210\u7cfb\u7edf\u670d\u52a1,\u5219\u53ef\u4ee5\u547d\u4ee4\u884c\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"[root@izbt kadmin]# cd /usr/local/nginx\n[root@izbt nginx]# sbin/nginx\n")))}d.isMDXComponent=!0}}]);