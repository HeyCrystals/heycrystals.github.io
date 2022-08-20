(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{482:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_4-3-knife4jaggregationdesktop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-knife4jaggregationdesktop"}},[t._v("#")]),t._v(" 4.3 Knife4jAggregationDesktop")]),t._v(" "),e("blockquote",[e("p",[t._v("有了新的想法，然后就开始折腾吧~~！")]),t._v(" "),e("p",[t._v("目前该想法作者正在开发中......")])]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("友情提示")]),t._v(" "),e("p",[t._v("该文档页介绍已作废,请移步新的"),e("RouterLink",{attrs:{to:"/archive/2.0.9/resources/desktop-introduction.html"}},[t._v("文档介绍")])],1)]),t._v(" "),e("p",[t._v("Knife4jAggregationDesktop是一款基于聚合组件Knife4jAggregation特性的独立部署的聚合OpenAPI文档软件，脱离Spring、Spring Boot技术架构体系，开发者下载后独立部署启动。")]),t._v(" "),e("p",[t._v("主要功能作用：")]),t._v(" "),e("ul",[e("li",[t._v("独立部署(依赖Java JDK8环境)")]),t._v(" "),e("li",[t._v("拥有Knife4jAggregation的全部特性")]),t._v(" "),e("li",[t._v("基于动态文件配置方式")]),t._v(" "),e("li",[t._v("支持多个项目动态配置")])]),t._v(" "),e("h2",{attrs:{id:"_4-3-1-软件架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-软件架构"}},[t._v("#")]),t._v(" 4.3.1 软件架构")]),t._v(" "),e("p",[e("strong",[t._v("技术架构图")]),t._v("如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/knife4j/assert/aggregation/Knife4jAggregationDesktop.png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("软件目录")]),t._v("如下：")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-Knife4jAggregationDesktop\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------bin \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------conf\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------data\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------lib\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-----—logs\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------webapps\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------LICENSE\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------readme.txt\n")])])]),e("p",[t._v("目录说明：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("bin")]),t._v(":启动命令目录")]),t._v(" "),e("li",[e("code",[t._v("conf")]),t._v(":配置文件目录，"),e("code",[t._v("application.properties")]),t._v("包含"),e("code",[t._v("Knife4jAggregationDesktop")]),t._v("软件的相关配置，包括端口号，为文档设置basicAuth权限等")]),t._v(" "),e("li",[e("code",[t._v("data")]),t._v(":数据目录，默认根目录存放"),e("code",[t._v("ROOT")]),t._v("文件夹,多个项目的OpenAPI聚合，开发者只需要在此目录下建文件夹即可")]),t._v(" "),e("li",[e("code",[t._v("lib")]),t._v(":依赖jar包")]),t._v(" "),e("li",[e("code",[t._v("logs")]),t._v(":日志")]),t._v(" "),e("li",[e("code",[t._v("webapps")]),t._v(":Knife4jUi的静态资源文件")])]),t._v(" "),e("h2",{attrs:{id:"_4-3-2-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-配置文件"}},[t._v("#")]),t._v(" 4.3.2 配置文件")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("conf")]),t._v("文件夹下有"),e("code",[t._v("application.properties")]),t._v("配置文件，是"),e("code",[t._v("Knife4jAggregationDesktop")]),t._v("软件的独立配置")]),t._v(" "),e("p",[t._v("目前的配置属性如下：")]),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Knife4jAggregationDesktop 启动端口号")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("18006")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为所有Knife4jAggregationDesktop开放出去的OpenAPI文档加权，设置BasicAuth访问密码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable=true 代表启用")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.basic.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.basic.username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("zhangsan")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.basic.password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用者也可以为单个开放出去的OpenAPI文档独立设置Basic验证权限，设置规则是knife4j.basic.项目code.开头")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 例如一个项目文档的访问路径是：http://localhost:18006/bigdata/doc.html,那么bigdata就是该项目的code，为该文档设置BasicAuth")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.basic.bigdata.enable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("true")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.basic.bigdata.username")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("zhangsan")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.basic.bigdata.password")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("123456")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"_4-3-3-增加文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-3-增加文档"}},[t._v("#")]),t._v(" 4.3.3 增加文档")]),t._v(" "),e("p",[t._v("当"),e("code",[t._v("Knife4jAggregationDesktop")]),t._v("软件启动后,开发者想要增加OpenAPI文档应该怎么办？")]),t._v(" "),e("p",[t._v("从技术架构图可以看到,"),e("code",[t._v("Knife4jAggregationDesktop")]),t._v("提供了"),e("code",[t._v("MetaDataMonitor")]),t._v("组件,该组件是一个监听器,主要监听data目录。当开发者在data目录新建文件夹(文档)后，添加相应的配置文件后自动加载元数据配置，无需重启即可在线访问文档")]),t._v(" "),e("p",[t._v("在data目录下，开发者可以建N个一级文件夹(文档),文件夹名称必须是英文或英文+数组，示例如下：")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-data\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------ROOT  \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------project1\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------project2\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------project3\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-----—project4\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-----—more"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),e("p",[t._v("ROOT目录代表的是根目录，最终访问文档的地址是："),e("code",[t._v("http://ip:port/doc.html")])]),t._v(" "),e("p",[t._v("而开发者自建的文件夹目录，例如project1、project2、project3等等，所代表的是一个项目名称，最终访问的地址如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("项目code")]),t._v(" "),e("th",[t._v("文档地址")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ROOT")]),t._v(" "),e("td",[t._v("根目录，访问地址："),e("code",[t._v("http://ip:port/doc.html")])])]),t._v(" "),e("tr",[e("td",[t._v("project1")]),t._v(" "),e("td",[e("code",[t._v("http://ip:port/project1/doc.html")])])]),t._v(" "),e("tr",[e("td",[t._v("project2")]),t._v(" "),e("td",[e("code",[t._v("http://ip:port/project2/doc.html")])])]),t._v(" "),e("tr",[e("td",[t._v("project3")]),t._v(" "),e("td",[e("code",[t._v("http://ip:port/project3/doc.html")])])]),t._v(" "),e("tr",[e("td",[t._v("project4")]),t._v(" "),e("td",[e("code",[t._v("http://ip:port/project4/doc.html")])])]),t._v(" "),e("tr",[e("td",[t._v("以此类推")]),t._v(" "),e("td",[e("code",[t._v("http://ip:port/${code}/doc.html")])])])])]),t._v(" "),e("h2",{attrs:{id:"_4-3-4-配置文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-配置文档"}},[t._v("#")]),t._v(" 4.3.4 配置文档")]),t._v(" "),e("p",[t._v("在上面的介绍种，我们知道了如何增加多个文档，其实很简单，只需要在data目录建文件夹即可，那么建立好了文件夹后，如何配置呢？")]),t._v(" "),e("p",[t._v("这里需要涉及到Knife4jAggregation提供支持的4种模式了：Disk、Cloud、Eureka、Nacos")]),t._v(" "),e("p",[e("strong",[t._v("一个项目文件夹只支持一种模式")])]),t._v(" "),e("p",[t._v("拿ROOT根目录来做示例说明，开发者如何配置。")]),t._v(" "),e("h3",{attrs:{id:"_4-3-4-1-disk模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-1-disk模式"}},[t._v("#")]),t._v(" 4.3.4.1 Disk模式")]),t._v(" "),e("p",[t._v("Disk模式在Knife4jAggregationDesktop中是最简单的，如果开发者拥有OpenAPI文档的静态JSON文件，那么就可以直接放在建好的文件夹中，不用任何配置，即可渲染。")]),t._v(" "),e("p",[t._v("目录结构如下：")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-data\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------ROOT  \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--------userOpenApi.json\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--------orderOpenApi.json\n\n")])])]),e("p",[t._v("在ROOT目录下，我们放置了两个OpenAPI文档的静态JSON文件："),e("code",[t._v("userOpenAPI")]),t._v("以及"),e("code",[t._v("orderOpenApi")]),t._v(",此时访问地址："),e("code",[t._v("http://ip:port/doc.html")])]),t._v(" "),e("p",[t._v("开发者就能在文档界面中看到会存在两个分组下的OpenAPI文档了。")]),t._v(" "),e("p",[t._v("那么随之问题也来了，在文档中，下拉框的选项名称是以文件的名称来命名显示的，如果要自定义显示应该怎么办？，此时就需要继续在ROOT目录添加一个名为"),e("code",[t._v("disk.properties")]),t._v("的配置文件来进行重命名配置")]),t._v(" "),e("p",[e("code",[t._v("disk.properties")]),t._v("配置文件(该配置和"),e("RouterLink",{attrs:{to:"/archive/2.0.9/documentation/knife4jAggregation.html"}},[t._v("Knife4jAggregation聚合组件")]),t._v("中声明的disk模式的route节点配置完全一样)：")],1),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.disk.routes[0].name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("用户服务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处location需要注意，只需要配置同级的文件名称即可")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.disk.routes[0].location")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("userOpenApi.json")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.disk.routes[1].name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("订单服务")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此处location需要注意，只需要配置同级的文件名称即可")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.disk.routes[1].location")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("orderOpenApi.json")]),t._v("\n\n")])])]),e("p",[t._v("配置好后，无需重启，应用会自动加载")]),t._v(" "),e("h3",{attrs:{id:"_4-3-4-1-cloud模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-1-cloud模式"}},[t._v("#")]),t._v(" 4.3.4.1 Cloud模式")]),t._v(" "),e("p",[t._v("Cloud模式则是需要在创建好的文件夹目录下新建"),e("code",[t._v("cloud.properties")]),t._v("配置文件，然后配置Cloud模式的节点属性")]),t._v(" "),e("p",[t._v("目录结构如下：")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-data\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------ROOT  \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--------cloud.properties\n")])])]),e("p",[e("code",[t._v("cloud.properties")]),t._v("配置文件(该配置和"),e("RouterLink",{attrs:{to:"/archive/2.0.9/documentation/knife4jAggregation.html"}},[t._v("Knife4jAggregation聚合组件")]),t._v("中声明的cloud模式的route节点配置完全一样)：")],1),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.cloud.routes[0].name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("用户")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.cloud.routes[0].uri")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("192.168.0.152:8999")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.cloud.routes[0].location")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/v2/api-docs?group=2.X版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# more...具体参考Knife4jAggregation聚合组件配置Cloud模式")]),t._v("\n\n")])])]),e("h3",{attrs:{id:"_4-3-4-2-eureka模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-2-eureka模式"}},[t._v("#")]),t._v(" 4.3.4.2 Eureka模式")]),t._v(" "),e("p",[t._v("Eureka模式则是需要在创建好的文件夹目录下新建"),e("code",[t._v("eureka.properties")]),t._v("配置文件，然后配置eureka模式的节点属性")]),t._v(" "),e("p",[t._v("目录结构如下：")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-data\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------ROOT  \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--------eureka.properties\n")])])]),e("p",[e("code",[t._v("eureka.properties")]),t._v("配置文件(该配置和"),e("RouterLink",{attrs:{to:"/archive/2.0.9/documentation/knife4jAggregation.html"}},[t._v("Knife4jAggregation聚合组件")]),t._v("中声明的cloud模式的route节点配置完全一样)：")],1),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.eureka.serviceUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://localhost:10000/eureka/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.eureka.routes[0].name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("用户")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.eureka.routes[0].serviceName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("userService")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.eureka.routes[0].location")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/v2/api-docs?group=2.X版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# more...具体参考Knife4jAggregation聚合组件配置Eureka模式")]),t._v("\n")])])]),e("h3",{attrs:{id:"_4-3-4-3-nacos模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-4-3-nacos模式"}},[t._v("#")]),t._v(" 4.3.4.3 Nacos模式")]),t._v(" "),e("p",[t._v("Nacos模式则是需要在创建好的文件夹目录下新建"),e("code",[t._v("nacos.properties")]),t._v("配置文件，然后配置nacos模式的节点属性")]),t._v(" "),e("p",[t._v("目录结构如下：")]),t._v(" "),e("div",{staticClass:"language-shell script extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-data\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("------ROOT  \n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("--------nacos.properties\n")])])]),e("p",[e("code",[t._v("nacos.properties")]),t._v("配置文件(该配置和"),e("RouterLink",{attrs:{to:"/archive/2.0.9/documentation/knife4jAggregation.html"}},[t._v("Knife4jAggregation聚合组件")]),t._v("中声明的nacos模式的route节点配置完全一样)：")],1),t._v(" "),e("div",{staticClass:"language-properties extra-class"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.nacos.serviceUrl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("http://localhost:10000/nacos/")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.nacos.routes[0].name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("用户")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.nacos.routes[0].serviceName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("userService")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("knife4j.nacos.routes[0].location")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("/v2/api-docs?group=2.X版本")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# more...具体参考Knife4jAggregation聚合组件配置Nacos模式")]),t._v("\n")])])]),t._v(" "),e("comment-comment")],1)}),[],!1,null,null,null);a.default=r.exports}}]);