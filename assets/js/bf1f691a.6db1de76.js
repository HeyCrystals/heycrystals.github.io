"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7679],{3905:(A,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var t=n(67294);function r(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function o(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function a(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function i(A,e){if(null==A)return{};var n,t,r=function(A,e){if(null==A)return{};var n,t,r={},o=Object.keys(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||(r[n]=A[n]);return r}(A,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(t=0;t<o.length;t++)n=o[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(r[n]=A[n])}return r}var p=t.createContext({}),l=function(A){var e=t.useContext(p),n=e;return A&&(n="function"==typeof A?A(e):a(a({},e),A)),n},d=function(A){var e=l(A.components);return t.createElement(p.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(A,e){var n=A.components,r=A.mdxType,o=A.originalType,p=A.parentName,d=i(A,["components","mdxType","originalType","parentName"]),s=l(n),u=r,m=s["".concat(p,".").concat(u)]||s[u]||c[u]||o;return n?t.createElement(m,a(a({ref:e},d),{},{components:n})):t.createElement(m,a({ref:e},d))}));function u(A,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var o=n.length,a=new Array(o);a[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=A,i.mdxType="string"==typeof A?A:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},22656:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],i={},p="3.27 \u7981\u7528\u641c\u7d22\u6846",l={unversionedId:"features/forbidSearch",id:"features/forbidSearch",title:"3.27 \u7981\u7528\u641c\u7d22\u6846",description:"\u589e\u5f3a\u529f\u80fd\u9700\u8981\u901a\u8fc7\u914d\u7f6eyml\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u589e\u5f3a,\u81ea2.0.8\u5f00\u59cb",source:"@site/docs/features/forbidSearch.md",sourceDirName:"features",slug:"/features/forbidSearch",permalink:"/docs/features/forbidSearch",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660471539,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{},sidebar:"docs",previous:{title:"3.26 \u7981\u7528\u8c03\u8bd5",permalink:"/docs/features/forbidDebug"},next:{title:"3.28 \u7981\u7528OpenApi\u7ed3\u6784\u663e\u793a",permalink:"/docs/features/forbidOpenApi"}},d={},c=[],s={toc:c};function u(A){var e=A.components,i=(0,r.Z)(A,a);return(0,o.kt)("wrapper",(0,t.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"327-\u7981\u7528\u641c\u7d22\u6846"},"3.27 \u7981\u7528\u641c\u7d22\u6846"),(0,o.kt)("admonition",{title:"\u6e29\u99a8\u63d0\u9192",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u589e\u5f3a\u529f\u80fd\u9700\u8981\u901a\u8fc7\u914d\u7f6eyml\u914d\u7f6e\u6587\u4ef6\u5f00\u542f\u589e\u5f3a,\u81ea2.0.8\u5f00\u59cb"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enable: true\n"))),(0,o.kt)("p",null,"\u5f00\u53d1\u8005\u5982\u679c\u60f3\u8981\u7981\u7528Ui\u754c\u9762\u4e2d\u7684\u641c\u7d22\u529f\u80fd\uff0c\u9700\u8981\u901a\u8fc7\u589e\u5f3a\u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff0c\u5728yml\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  enable: true\n  setting:\n    enableSearch: false\n")),(0,o.kt)("p",null,"\u5c5e\u6027\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"enableSearch"),":\u8be5\u5c5e\u6027\u662f\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"li"},"Boolean"),"\u503c\uff0c\u4ee3\u8868\u662f\u5426\u542f\u7528\u641c\u7d22\u529f\u80fd,\u9ed8\u8ba4\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"true"),"(\u4ee3\u8868\u5f00\u542f\u641c\u7d22)\uff0c\u5982\u679c\u8981\u7981\u7528\u641c\u7d22\uff0c\u8be5\u503c\u8bbe\u4e3a",(0,o.kt)("inlineCode",{parentName:"li"},"false"))),(0,o.kt)("p",null,"\u5f00\u53d1\u8005\u914d\u7f6e\u597d\u540e,\u6700\u6838\u5fc3\u7684\u4e00\u6b65\uff0c\u4e5f\u662f\u6700\u540e\u6700\u91cd\u8981\u7684\u4e00\u6b65\uff0c\u5f00\u53d1\u8005\u9700\u8981\u5728\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"Docket"),"\u903b\u8f91\u5206\u7ec4\u5bf9\u8c61\u65f6\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u63d0\u4f9b\u7684\u5de5\u5177\u5bf9\u8c61",(0,o.kt)("inlineCode",{parentName:"p"},"OpenApiExtensionResolver"),"\u5c06\u6269\u5c55\u5c5e\u6027\u8fdb\u884c\u8d4b\u503c"),(0,o.kt)("p",null,"\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.kt)("admonition",{title:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration\n@EnableSwagger2WebMvc\npublic class SwaggerConfiguration {\n\n   private final OpenApiExtensionResolver openApiExtensionResolver;\n\n    @Autowired\n    public SwaggerConfiguration(OpenApiExtensionResolver openApiExtensionResolver) {\n        this.openApiExtensionResolver = openApiExtensionResolver;\n    }\n\n    @Bean(value = "defaultApi2")\n    public Docket defaultApi2() {\n        String groupName="2.X\u7248\u672c";\n        Docket docket=new Docket(DocumentationType.SWAGGER_2)\n                .host("https://www.baidu.com")\n                .apiInfo(apiInfo())\n                .groupName(groupName)\n                .select()\n                .apis(RequestHandlerSelectors.basePackage("com.swagger.bootstrap.ui.demo.new2"))\n                .paths(PathSelectors.any())\n                .build()\n                .extensions(openApiExtensionResolver.buildSettingExtensions());\n        return docket;\n    }\n\n    private ApiInfo apiInfo() {\n        return new ApiInfoBuilder()\n                //.title("swagger-bootstrap-ui-demo RESTful APIs")\n                .description("# swagger-bootstrap-ui-demo RESTful APIs")\n                .termsOfServiceUrl("http://www.xx.com/")\n                .contact("xx@qq.com")\n                .version("1.0")\n                .build();\n    }\n}\n'))),(0,o.kt)("p",null,"\u901a\u8fc7\u4e0a\u9762\u793a\u4f8b\u4ee3\u7801\uff0c\u4e3b\u8981\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,o.kt)("p",null,"1\u3001\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"@Autowired"),"\u6ce8\u89e3\u5f15\u5165",(0,o.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u5411Spring\u5bb9\u5668\u6ce8\u5165\u7684Bean\u5bf9\u8c61",(0,o.kt)("inlineCode",{parentName:"p"},"OpenApiExtensionResolver")),(0,o.kt)("p",null,"2\u3001\u6700\u7ec8\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"Dcoket"),"\u5bf9\u8c61\u6784\u5efa\u540e\uff0c\u901a\u8fc7\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Docket"),"\u5bf9\u8c61\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"extensions"),"\u65b9\u6cd5\u8fdb\u884c\u63d2\u4ef6\u8d4b\u503c"),(0,o.kt)("p",null,"3\u3001\u63d2\u4ef6\u8d4b\u503c\u9700\u8981\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"OpenApiExtensionResolver"),"\u63d0\u4f9b\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"buildSettingExtensions"),"\u65b9\u6cd5\uff0c\u83b7\u53d6",(0,o.kt)("inlineCode",{parentName:"p"},"x-settings"),"\u7684\u589e\u5f3a\u5c5e\u6027"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6700\u7ec8\u754c\u9762\u6548\u679c\u5982\u4e0b\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(51910).Z,width:"1041",height:"116"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e48\u505a?\u8fd9\u6837\u505a\u7684\u76ee\u7684\u4e00\u65b9\u9762\u662f\u5145\u5206\u5229\u7528Spring Boot\u63d0\u4f9b\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u914d\u7f6e\u5c5e\u6027\uff0c\u53e6\u4e00\u65b9\u9762\uff0c\u901a\u8fc7\u6269\u5c55OpenAPI\u7684\u89c4\u8303\u5c5e\u6027\uff0c\u4e5f\u66f4\u52a0\u7b26\u5408OpenAPI\u5bf9\u4e8e\u6269\u5c55\u5c5e\u6027\u7684\u8981\u6c42"),(0,o.kt)("p",{parentName:"admonition"},"OpenAPI\u89c4\u8303\u660e\u786e\u89c4\u5b9a,\u5bf9\u4e8e\u6269\u5c55\u5c5e\u6027,\u5f00\u53d1\u8005\u5e94\u5f53\u5728\u54cd\u5e94\u7684\u67d0\u4e2a\u8282\u70b9\u4e2d\uff0c\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"x-"),"\u5f00\u5934\u7684\u5c5e\u6027\u65b9\u5f0f,\u4ee5\u6269\u5c55\u81ea\u5b9a\u4e49\u7684\u5c5e\u6027\u914d\u7f6e"),(0,o.kt)("p",{parentName:"admonition"},"\u81ea\u5b9a\u4e49\u6587\u6863\u7684\u6269\u5c55\u5c5e\u6027\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u6d4f\u89c8\u5668\u7684Network\u529f\u80fd\u67e5\u770bOpenAPI\u7684\u7ed3\u6784\uff0c\u6700\u7ec8Knife4j\u6269\u5c55\u589e\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"x-openapi"),"\u5c5e\u6027\uff0c\u4ee3\u8868\u589e\u52a0\u7684\u6269\u5c55\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u6700\u7ec8\u5728Ui\u754c\u9762\u89e3\u6790\u5448\u73b0\uff0c\u7ed3\u6784\u5982\u4e0b\u56fe\uff1a"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{src:n(65253).Z,width:"963",height:"193"}))))}u.isMDXComponent=!0},65253:(A,e,n)=>{n.d(e,{Z:()=>t});const t=n.p+"assets/images/setting-a6923b1d41d592ba62880f74928fe84d.png"},51910:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"}}]);