(window.webpackJsonp=window.webpackJsonp||[]).push([[357],{717:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"v1-8-5-2018-10-16-文档增强-接口排序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v1-8-5-2018-10-16-文档增强-接口排序"}},[t._v("#")]),t._v(" [v1.8.5-2018/10/16 文档增强,接口排序]")]),t._v(" "),s("p",[t._v("swagger-bootstrap-ui 1.8.5 发布了。swagger-bootstrap-ui 是 Swagger 的增强UI 实现，目的是替换 Swagger 默认的 UI 实现 Swagger-UI，使文档更友好一点儿")]),t._v(" "),s("p",[t._v("swagger-bootstrap-ui在1.8.5以后,她不在是一个纯webjar的UI工具了,她增强了swagger的一些功能支持,例如tags、接口的排序,一些个性化的支持,目前只增强接口排序")]),t._v(" "),s("p",[t._v("后续更多关于swagger的增强功能需求非常欢迎大家提"),s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui/issues/new?issue%5Bassignee_id%5D=0&issue%5Bmilestone_id%5D=0",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1),t._v("反馈,让这款UI更加丰富强大.")]),t._v(" "),s("p",[t._v("swagger-bootstrap-ui 1.8.5 主要更新如下：")]),t._v(" "),s("p",[t._v("1、fixed formdata类型参数针对array数组类型无增加按钮")]),t._v(" "),s("p",[t._v("2、fixed 响应内容高度占比,参数过多的情况无法显示")]),t._v(" "),s("p",[t._v("3、多选项卡文档介绍、在线调试position位置引起的不适改动,由竖变横.")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.8.5-issue/tab-position.png",alt:""}})]),t._v(" "),s("p",[t._v("4、增强排序功能，添加个性化配置管理功能,可开启个性化配置")]),t._v(" "),s("p",[s("img",{attrs:{src:"/images/blog/swagger-bootstrap-ui-1.8.5-issue/exced1.gif",alt:""}})]),t._v(" "),s("p",[t._v("5、关于个性化增强功能,目前已经实现了tags、和接口api方法的排序,使用方式：")]),t._v(" "),s("p",[t._v("在原"),s("code",[t._v("EnableSwagger2")]),t._v("注解上增加"),s("code",[t._v("@EnableSwaggerBootstrapUi")]),t._v("注解")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwaggerBootstrapUI")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n \t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//more...   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("针对tags分组排序，UI的排序规则是顺序排序，最小值1，最大值也是默认值Integer.Max_VALUE;")]),t._v(" "),s("p",[t._v("如果不使用SwaggerBootstrapUi的增强功能,则无需开启"),s("code",[t._v("@EnableSwaggerBootstrapUi")]),t._v("注解")]),t._v(" "),s("p",[s("strong",[t._v("tags的排序规则分两种")]),t._v("：")]),t._v(" "),s("p",[t._v("a、一种是判断Swagger的"),s("code",[t._v("@Api")]),t._v("注解的position属性是否不等于0（默认值为0），如果该值不为空,则获取此值,根据该值排序")]),t._v(" "),s("p",[t._v("b、如果postion=0（不写的情况下）,判断是否存在注解"),s("code",[t._v("@ApiSort")]),t._v("的值，如果有值，则获取此值,根据该值排序")]),t._v(" "),s("p",[t._v("c、所以排序的取值规则是：position>@ApiSort")]),t._v(" "),s("p",[s("strong",[t._v("接口api的排序规则")]),t._v("：")]),t._v(" "),s("p",[t._v("a、判断"),s("code",[t._v("@ApiOperation")]),t._v("注解上的postion属性是否不等于0（默认值为0），如果该值不为空,则获取此值,根据该值排序")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//postion属性赋值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiOperation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("httpMethod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test2Model测试数组参数，多个"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("response"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test2Model")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiResponses")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiResponse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"非HTTP状态码，返回值JSON code字段值，描述：成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiImplicitParams")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ApiImplicitParam")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ids"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("paramType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"form"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"参数"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("allowMultiple "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" required "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("b、如果postion=0（不写的情况下）,判断是否存在注解"),s("code",[t._v("@ApiOperationSort")]),t._v("的值，如果有值，则获取此值,根据该值排序")]),t._v(" "),s("p",[t._v("c、所以排序的取值规则是：position>@ApiOperationSort")]),t._v(" "),s("p",[s("strong",[t._v("注意")]),t._v("：")]),t._v(" "),s("p",[t._v("注解"),s("code",[t._v("@EnableSwaggerBootstrapUi")]),t._v("、"),s("code",[t._v("@ApiSort")]),t._v("、"),s("code",[t._v("@ApiOperationSort")]),t._v("是本UI工具包提供的Java注解,排序功能的使用需要在启用原"),s("code",[t._v("EnableSwagger2")]),t._v("注解上增加"),s("code",[t._v("@EnableSwaggerBootstrapUi")]),t._v("注解方可生效")]),t._v(" "),s("p",[t._v("6、默认去除接口api地址的线上,默认只显示方法类型、方法说明两个属性,当然,新版本增加的个性化的配置功能，如果你觉得api地址显示任然有需要,可在个性化配置中开启该功能，个性化配置属性存储在localStorage对象中.只需要配置一次接口.")]),t._v(" "),s("p",[t._v("7、fixed 构建curl功能中写死http,根据"),s("code",[t._v("window.location.href")]),t._v("动态判断(http|https)的情况")]),t._v(" "),s("p",[t._v("8、如果请求参数是json参数body类型，文档说明中添加"),s("strong",[t._v("请求示例")]),t._v("json展示,方便查看")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.8.5-issue/request-json.png",alt:""}})]),t._v(" "),s("p",[t._v("9、请求示例、响应示例json自动适配高度")]),t._v(" "),s("p",[t._v("10、选中接口api菜单时,菜单显示激活色,显示背景颜色background-color: #eee;")]),t._v(" "),s("p",[t._v("11、fixed 离线文档markdown格式错乱问题(table标题换行导致显示异常)")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.8.5-issue/md.png",alt:""}})]),t._v(" "),s("p",[t._v("12、离线文档已预览html的方式展现,复制文档功能依然是复制markdown语法")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.8.5-issue/md-copy.png",alt:""}})]),t._v(" "),s("p",[t._v("13、请求参数及响应参数说明改为多行显示,超出长度不以省略号显示,防止出现浮层一直显示的bug")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/blog/swagger-bootstrap-ui-1.8.5-issue/br.png",alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("Maven坐标")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("<dependency>\n   <groupId>com.github.xiaoymin</groupId>\n   <artifactId>swagger-bootstrap-ui</artifactId>\n   <version>1.8.5</version>\n</dependency>\n")])])]),s("p",[s("strong",[t._v("码云")]),t._v("："),s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/xiaoym/swagger-bootstrap-ui"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("strong",[t._v("GITHUB")]),t._v(":"),s("a",{attrs:{href:"https://github.com/xiaoymin/Swagger-Bootstrap-UI",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/xiaoymin/Swagger-Bootstrap-UI"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("在线体验："),s("a",{attrs:{href:"http://swagger-bootstrap-ui.xiaominfo.com/doc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://swagger-bootstrap-ui.xiaominfo.com/doc.html"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("欢迎提BUG、Pull Request给我，共同来完善这个小工具~~~~")]),t._v(" "),s("p",[t._v("还未给swagger-bootstrap-ui点过赞的朋友，前往"),s("a",{attrs:{href:"https://gitee.com/xiaoym/swagger-bootstrap-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gitee.com/xiaoym/swagger-bootstrap-ui"),s("OutboundLink")],1),t._v("给个Star吧~~ ：）")]),t._v(" "),s("p",[s("strong",[t._v("相关链接")])]),t._v(" "),s("ul",[s("li",[t._v("swagger-bootstrap-ui 的详细介绍："),s("a",{attrs:{href:"https://www.oschina.net/p/swagger-bootstrap-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击查看"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("swagger-bootstrap-ui 的下载地址："),s("a",{attrs:{href:"https://git.oschina.net/xiaoym/swagger-bootstrap-ui/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载"),s("OutboundLink")],1)])]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=n.exports}}]);