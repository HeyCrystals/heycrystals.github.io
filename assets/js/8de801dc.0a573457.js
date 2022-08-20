"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3172],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>g});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=t.createContext({}),c=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,f=u["".concat(o,".").concat(g)]||u[g]||s[g]||i;return r?t.createElement(f,l(l({ref:n},m),{},{components:r})):t.createElement(f,l({ref:n},m))}));function g(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},47735:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>s});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],p={},o="1.2 SpringMVC\u6846\u67b6\u96c6\u6210Knife4j",c={unversionedId:"action/springmvc",id:"action/springmvc",title:"1.2 SpringMVC\u6846\u67b6\u96c6\u6210Knife4j",description:"\u5982\u679c\u4f60\u662fSpring MVC\u9879\u76ee,\u60f3\u4f7f\u7528knife4j\u63d0\u4f9b\u7684\u589e\u5f3aui\u5305,\u4f7f\u7528\u65b9\u6cd5\u5f88\u7b80\u5355",source:"@site/docs/action/springmvc.md",sourceDirName:"action",slug:"/action/springmvc",permalink:"/docs/action/springmvc",draft:!1,tags:[],version:"current",lastUpdatedBy:"\u8096\u7389\u660e",lastUpdatedAt:1604832815,formattedLastUpdatedAt:"2020\u5e7411\u67088\u65e5",frontMatter:{},sidebar:"action",previous:{title:"1.1 \u57fa\u4e8eMaven Bom\u65b9\u5f0f\u4f7f\u7528",permalink:"/docs/action/mavenbom"},next:{title:"1.3 Spring Boot \u6846\u67b6\u96c6\u6210Knife4j",permalink:"/docs/action/springboot"}},m={},s=[{value:"1.2.1 \u4f9d\u8d56\u5f15\u7528",id:"121-\u4f9d\u8d56\u5f15\u7528",level:2},{value:"1.2.1.1 2.0.4(\u5305\u542b)\u4ee5\u524d\u7684\u7248\u672c",id:"1211-204\u5305\u542b\u4ee5\u524d\u7684\u7248\u672c",level:3},{value:"1.2.1.2 2.0.4(\u4e0d\u5305\u542b)\u4ee5\u540e\u7684\u7248\u672c",id:"1212-204\u4e0d\u5305\u542b\u4ee5\u540e\u7684\u7248\u672c",level:3},{value:"1.2.2 \u521b\u5efa\u914d\u7f6e\u6587\u4ef6",id:"122-\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",level:2},{value:"1.2.3 \u914d\u7f6e\u9759\u6001\u6587\u4ef6",id:"123-\u914d\u7f6e\u9759\u6001\u6587\u4ef6",level:2},{value:"1.2.4 \u914d\u7f6e\u589e\u5f3aFilter(\u53ef\u9009)",id:"124-\u914d\u7f6e\u589e\u5f3afilter\u53ef\u9009",level:2},{value:"1.2.5 \u914d\u7f6eweb.xml",id:"125-\u914d\u7f6ewebxml",level:2},{value:"1.2.6 \u914d\u7f6e\u589e\u5f3a\u6a21\u5f0f(\u53ef\u9009)",id:"126-\u914d\u7f6e\u589e\u5f3a\u6a21\u5f0f\u53ef\u9009",level:2},{value:"1.2.6.1 2.0.4(\u5305\u542b)\u4ee5\u524d\u7684\u7248\u672c",id:"1261-204\u5305\u542b\u4ee5\u524d\u7684\u7248\u672c",level:3},{value:"1.2.6.2 2.0.4(\u4e0d\u5305\u542b)\u4ee5\u540e\u7684\u7248\u672c",id:"1262-204\u4e0d\u5305\u542b\u4ee5\u540e\u7684\u7248\u672c",level:3},{value:"1.2.7 \u8bbf\u95ee",id:"127-\u8bbf\u95ee",level:2}],u={toc:s};function g(e){var n=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"12-springmvc\u6846\u67b6\u96c6\u6210knife4j"},"1.2 SpringMVC\u6846\u67b6\u96c6\u6210Knife4j"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u662fSpring MVC\u9879\u76ee,\u60f3\u4f7f\u7528knife4j\u63d0\u4f9b\u7684\u589e\u5f3aui\u5305,\u4f7f\u7528\u65b9\u6cd5\u5f88\u7b80\u5355"),(0,i.kt)("p",null,"demo\u53c2\u8003\u793a\u4f8b\u5730\u5740\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-spring-mvc-demo",target:"_blank",rel:"noopener"},"knife4j-spring-mvc-demo")),(0,i.kt)("h2",{id:"121-\u4f9d\u8d56\u5f15\u7528"},"1.2.1 \u4f9d\u8d56\u5f15\u7528"),(0,i.kt)("h3",{id:"1211-204\u5305\u542b\u4ee5\u524d\u7684\u7248\u672c"},"1.2.1.1 2.0.4(\u5305\u542b)\u4ee5\u524d\u7684\u7248\u672c"),(0,i.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u662f2.0.4(\u5305\u542b)\u4ee5\u524d\u7684\u7248\u672c,\u90a3\u4e48\u9700\u8981\u5f15\u5165\u4ee5\u4e0b2\u4e2ajar\u5305"),(0,i.kt)("p",null,"\u7b2c\u4e00\u6b65\u662f\u9700\u8981\u5f15\u5165Knife4j\u63d0\u4f9b\u7684\u4f9d\u8d56\u5305\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--\u5f15\u5165Knife4j--\x3e\n<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-spring</artifactId>\n    \x3c!--\u5728\u5f15\u7528\u65f6\u8bf7\u5728maven\u4e2d\u592e\u4ed3\u5e93\u641c\u7d22\u6700\u65b0\u7248\u672c\u53f7--\x3e\n    <version>2.0.4</version>\n</dependency>\n<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-spring-ui</artifactId>\n    \x3c!--\u5728\u5f15\u7528\u65f6\u8bf7\u5728maven\u4e2d\u592e\u4ed3\u5e93\u641c\u7d22\u6700\u65b0\u7248\u672c\u53f7--\x3e\n    <version>2.0.4</version>\n</dependency>\n")),(0,i.kt)("h3",{id:"1212-204\u4e0d\u5305\u542b\u4ee5\u540e\u7684\u7248\u672c"},"1.2.1.2 2.0.4(\u4e0d\u5305\u542b)\u4ee5\u540e\u7684\u7248\u672c"),(0,i.kt)("p",null,"\u57282.0.4(\u4e0d\u5305\u542b)\u4ee5\u540e\u7684\u7248\u672c\u4e2d,\u5f15\u5165Knife4j\u8fdb\u884c\u4e86\u6539\u5584,\u5f00\u53d1\u8005\u53ea\u9700\u8981\u5f15\u51651\u4e2ajar\u5305\uff0c\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--\u5f15\u5165Knife4j--\x3e\n<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-spring-mvc</artifactId>\n    \x3c!--\u5728\u5f15\u7528\u65f6\u8bf7\u5728maven\u4e2d\u592e\u4ed3\u5e93\u641c\u7d22\u6700\u65b0\u7248\u672c\u53f7\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u4ee3\u8868\u5c1a\u672a\u53d1\u5e03,\u4f5c\u8005\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u4e2d--\x3e\n    <version>2.0.5</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"122-\u521b\u5efa\u914d\u7f6e\u6587\u4ef6"},"1.2.2 \u521b\u5efa\u914d\u7f6e\u6587\u4ef6"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u6b65\u662f\u521b\u5efa\u914d\u7f6e\u6587\u4ef6",(0,i.kt)("inlineCode",{parentName:"p"},"SwaggerConfiguration.java"),",\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableSwagger2\npublic class SwaggerConfiguration {\n\n\n    @Bean\n    public Docket defaultApi() {\n        return new Docket(DocumentationType.SWAGGER_2)\n                .apiInfo(groupApiInfo())\n                .groupName("\u9ed8\u8ba4\u63a5\u53e3")\n                .select()\n                .apis(RequestHandlerSelectors.basePackage("com.xiaominfo.knife4j.controller"))\n                //.apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))\n                .paths(PathSelectors.any())\n                .build();\n    }\n\n\n    private ApiInfo groupApiInfo(){\n        return new ApiInfoBuilder()\n                .title("swagger-bootstrap-ui\u5f88\u68d2~~~\uff01\uff01\uff01")\n                .description("swagger-bootstrap-ui-demo RESTful APIs")\n                .termsOfServiceUrl("http://www.group.com/")\n                .contact("group@qq.com")\n                .version("1.0")\n                .build();\n    }\n}\n')),(0,i.kt)("h2",{id:"123-\u914d\u7f6e\u9759\u6001\u6587\u4ef6"},"1.2.3 \u914d\u7f6e\u9759\u6001\u6587\u4ef6"),(0,i.kt)("p",null,"\u7531\u4e8eknife4j\u662f\u901a\u8fc7webjar\u7684\u65b9\u5f0f\u63d0\u4f9b\u670d\u52a1,\u56e0\u6b64\u5bf9\u5916\u8bbf\u95ee\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"doc.html"),"\u9700\u8981\u5728\u6211\u4eec\u7684mvc\u73af\u5883\u4e2d\u914d\u7f6e\u9759\u6001\u76ee\u5f55,\u5426\u5219\u4f1a\u51fa\u73b0404\uff0c\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"spring.xml"),"\u4e3b\u5bb9\u5668\u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e,\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<mvc:resources location="classpath:/META-INF/resources/" mapping="doc.html"/>\n<mvc:resources location="classpath:/META-INF/resources/webjars/" mapping="/webjars/**"/>\n')),(0,i.kt)("h2",{id:"124-\u914d\u7f6e\u589e\u5f3afilter\u53ef\u9009"},"1.2.4 \u914d\u7f6e\u589e\u5f3aFilter(\u53ef\u9009)"),(0,i.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u9700\u8981\u4f7f\u7528Knife4j\u63d0\u4f9b\u7684\u4e24\u4e2a\u589e\u5f3aFilter\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Basic\u9a8c\u8bc1"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"Production\u9a8c\u8bc1")),(0,i.kt)("p",null,"\u90a3\u4e48\u9700\u8981\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"web.xml"),"\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--Knife4j\u63d0\u4f9b\u7684Swagger\u589e\u5f3a\u529f\u80fd,Filter\u8fc7\u6ee4\u4fdd\u62a4Swagger\u8d44\u6e90--\x3e\n\x3c!--\u751f\u4ea7\u73af\u5883Filter--\x3e\n<filter>\n    <filter-name>knife4jProductionFilter</filter-name>\n    <filter-class>com.github.xiaoymin.knife4j.spring.filter.ProductionSecurityFilter</filter-class>\n    <init-param>\n        <param-name>production</param-name>\n        \x3c!--\u5982\u679c\u8be5\u503c\u914d\u7f6e\u4e3atrue\u5219\u4ee3\u8868\u5f00\u542f--\x3e\n        <param-value>false</param-value>\n    </init-param>\n</filter>\n<filter-mapping>\n    <filter-name>knife4jProductionFilter</filter-name>\n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n\x3c!--Swagger\u8d44\u6e90\u7684Basic\u8ba4\u8bc1\u4fdd\u62a4\u7b56\u7565--\x3e\n<filter>\n    <filter-name>knife4jSecurityBasic</filter-name>\n    <filter-class>com.github.xiaoymin.knife4j.spring.filter.SecurityBasicAuthFilter</filter-class>\n    \x3c!--\u5f00\u542fbasic\u8ba4\u8bc1--\x3e\n    <init-param>\n        <param-name>enableBasicAuth</param-name>\n         \x3c!--\u5982\u679c\u8be5\u503c\u914d\u7f6e\u4e3atrue\u5219\u4ee3\u8868\u5f00\u542f--\x3e\n        <param-value>false</param-value>\n    </init-param>\n    \x3c!--\u7528\u6237\u540d&\u5bc6\u7801--\x3e\n    <init-param>\n        <param-name>userName</param-name>\n        <param-value>lisi</param-value>\n    </init-param>\n    <init-param>\n        <param-name>password</param-name>\n        <param-value>123</param-value>\n    </init-param>\n</filter>\n<filter-mapping>\n    <filter-name>knife4jSecurityBasic</filter-name>\n    <url-pattern>/*</url-pattern>\n</filter-mapping>\n\n")),(0,i.kt)("p",null,"\u8fd92\u4e2a\u589e\u5f3aFilter\u4e8c\u8005\u53ea\u80fd\u6709\u4e00\u4e2a\u5b58\u5728\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u4e0d\u9700\u8981\u914d\u7f6e,\u53ef\u5ffd\u7565\u8be5\u6b65\u9aa4\u3002"),(0,i.kt)("h2",{id:"125-\u914d\u7f6ewebxml"},"1.2.5 \u914d\u7f6eweb.xml"),(0,i.kt)("p",null,"\u6700\u540e\u4e00\u6b65,\u6211\u4eec\u9700\u8981\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"web.xml"),"\uff0c\u6dfb\u52a0\u90e8\u5206",(0,i.kt)("inlineCode",{parentName:"p"},"servlet-mapping"),"\u8282\u70b9\uff0c\u6dfb\u52a0\u8fd9\u4e9b\u8282\u70b9\u662f\u9632\u6b62swagger\u7684\u63a5\u53e3\u51fa\u73b0404\u7684\u51fa\u73b0\uff0c\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- \u914d\u7f6eknife4j\u7684url\u8bf7\u6c42\u8def\u5f84--\x3e\n\n\x3c!--1.\u8be5\u63a5\u53e3\u662fspringfox\u63d0\u4f9b\u7684Swagger\u5b9e\u4f8b\u63a5\u53e3--\x3e\n<servlet-mapping>\n    <servlet-name>knife4jDemoMvc</servlet-name>\n    <url-pattern>/v2/api-docs</url-pattern>\n</servlet-mapping>\n\x3c!--2.\u8be5\u63a5\u53e3\u662fspringfox\u63d0\u4f9b\u7684Swagger\u5206\u7ec4\u63a5\u53e3--\x3e\n<servlet-mapping>\n    <servlet-name>knife4jDemoMvc</servlet-name>\n    <url-pattern>/swagger-resources</url-pattern>\n</servlet-mapping>\n\x3c!--3.\u8be5\u63a5\u53e3\u662fspringfox\u63d0\u4f9b\u7684Swagger\u914d\u7f6e\u63a5\u53e3--\x3e\n<servlet-mapping>\n    <servlet-name>knife4jDemoMvc</servlet-name>\n    <url-pattern>/swagger-resources/configuration/ui</url-pattern>\n</servlet-mapping>\n\x3c!--4.\u8be5\u63a5\u53e3\u662fspringfox\u63d0\u4f9b\u7684Swagger\u6743\u9650\u63a5\u53e3(\u5728knife4j\u4e2d\u672a\u4f7f\u7528)--\x3e\n<servlet-mapping>\n    <servlet-name>knife4jDemoMvc</servlet-name>\n    <url-pattern>/swagger-resources/configuration/security</url-pattern>\n</servlet-mapping>\n\n\x3c!--5.\u8be5\u63a5\u53e3\u662fknife4j\u63d0\u4f9b\u7684Swagger\u589e\u5f3a\u63a5\u53e3--\x3e\n<servlet-mapping>\n    <servlet-name>knife4jDemoMvc</servlet-name>\n    <url-pattern>/v2/api-docs-ext</url-pattern>\n</servlet-mapping>\n")),(0,i.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u914d\u7f6e\u4e2d,1\u30012\u30013\u662f\u5fc5\u987b\u6dfb\u52a0\u7684"),(0,i.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u9700\u8981\u4f7f\u7528knife4j\u63d0\u4f9b\u7684\u589e\u5f3a\u529f\u80fd,\u90a3\u4e48\u7b2c5\u70b9\u4e5f\u9700\u8981\u6dfb\u52a0\u4e0a"),(0,i.kt)("h2",{id:"126-\u914d\u7f6e\u589e\u5f3a\u6a21\u5f0f\u53ef\u9009"},"1.2.6 \u914d\u7f6e\u589e\u5f3a\u6a21\u5f0f(\u53ef\u9009)"),(0,i.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u9700\u8981\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u63d0\u4f9b\u7684\u589e\u5f3a\u6a21\u5f0f\u4e2d\u7684\u529f\u80fd,\u90a3\u4e48\u9700\u8981\u8fdb\u884c\u914d\u7f6e\uff0c\u4e3b\u8981\u5206\u4e24\u4e2a\u7248\u672c"),(0,i.kt)("h3",{id:"1261-204\u5305\u542b\u4ee5\u524d\u7684\u7248\u672c"},"1.2.6.1 2.0.4(\u5305\u542b)\u4ee5\u524d\u7684\u7248\u672c"),(0,i.kt)("p",null,"\u5982\u679c\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u662f2.0.4(\u5305\u542b)\u4ee5\u524d\u7684\u7248\u672c\uff0c\u542f\u7528\u589e\u5f3a\u529f\u80fd\u5219\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"SwaggerConfiguration"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u914d\u7f6e\uff0c\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableSwagger2\n//\u589e\u5f3a\u626b\u63cf\n@ComponentScan(\n        basePackages = {\n                "com.github.xiaoymin.knife4j.spring.plugin",\n                "com.github.xiaoymin.knife4j.spring.web"\n        }\n)\npublic class SwaggerConfiguration {\n    //more..\n}\n')),(0,i.kt)("h3",{id:"1262-204\u4e0d\u5305\u542b\u4ee5\u540e\u7684\u7248\u672c"},"1.2.6.2 2.0.4(\u4e0d\u5305\u542b)\u4ee5\u540e\u7684\u7248\u672c"),(0,i.kt)("p",null,"\u57282.0.4(\u4e0d\u5305\u542b)\u4ee5\u540e\u7684\u7248\u672c,\u4f9d\u8d56\u5f15\u7528\u4f1a\u6709\u6240\u4e0d\u540c,\u5f00\u53d1\u8005\u5f15\u5165",(0,i.kt)("inlineCode",{parentName:"p"},"knife4j-spring-mvc"),"\u7684jar\u5305,\u8be5\u5305\u4e2d\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"@EnableKnife4j"),"\u6ce8\u89e3,\u5219\u542f\u7528\u589e\u5f3a\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\n@EnableSwagger2\n//\u589e\u5f3a\u626b\u63cf\n@EnableKnife4j\npublic class SwaggerConfiguration {\n    //more..\n}\n")),(0,i.kt)("p",null,"\u539f\u7406\u5f88\u7b80\u5355,\u53ea\u662f\u63d0\u4f9b\u4e00\u4e2a\u65b9\u4fbf\u5927\u5bb6\u8bb0\u5fc6\u7684\u6ce8\u89e3,\u5176\u6838\u5fc3\u53ea\u662f\u628a\u4e0a\u9762",(0,i.kt)("inlineCode",{parentName:"p"},"@ComponentScan"),"\u6ce8\u89e3\u7684\u529f\u80fd\u8fdb\u884c\u4e86\u96c6\u6210\u3002"),(0,i.kt)("h2",{id:"127-\u8bbf\u95ee"},"1.2.7 \u8bbf\u95ee"),(0,i.kt)("p",null,"\u6700\u540e,\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u901a\u8fc7\u5730\u5740\u8fdb\u884c\u8bbf\u95ee,\u8bbf\u95ee\u683c\u5f0f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"http://host:port/doc.html")))}g.isMDXComponent=!0}}]);