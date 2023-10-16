---
id: knife4j-new-product-idea
title: Knife4j新产品的想法
description: Knife4j新产品的想法
categories:
- Knife4jInsight
keywords:
- knife4j
- Knife4jInsight
- Knife4j聚合
- 文档聚合
- 微服务聚合文档
sidebar_position: 4
author: 八一菜刀
data: 2023年9月17日
---

## 写在开头

Knife4j的发展已经有好几个年头了，最近想来，虽然这个小组件不太稳定，但有每天依然收到很多小伙伴的积极反馈，这让我又不由自主的对这个项目产生了羁绊。一直以来，总想把一些工作中的想法，以及和Knife4j周边生态相关的内容结合起来，做一些不一样的事情。

在Knife4j目前的生态中，我主要为Knife4j写了一些技术的组件，主要包括：

- Knife4j-ui：前端组件部分，主要基于Swagger2/OpenAPI3规范的识别，通过不同的展现及交互，为开发者提供不同的体验
- knife4j-aggregation:前期基于Servlet生态体系下的聚合组件，解决在Spring Cloud Gateway等异步编码较困难的人文档聚合问题，打通各个注册中心组件(Nacos\Eureka\Consul等)实现接口文档的聚合
- knife4j-gateway：Spring Cloud Gateway网关下的聚合组件，4行配置搞定网关下的接口文档聚合
- Knife4j-extension:基于Chrome浏览器的调试插件，只要是Swagger2/OpenAPI规范，就可以预览文档/调试文档，为了上架还开通了vista卡，付费给Google5美元，现在下架了(长时间没更新代码有漏洞被迫下架)😂。。。
- knife4j-insight：独立运行的聚合中间件，将硬盘/Nacos等作为Swagger2/OpenAPI3规范的数据源，复用aggregation的生态，聚合各个注册中心，实现平台化，聚合所有接口规范，统一预览/调试。。更新了3个版本(我觉得自己思路挺好的)。。😂

## 新想法

最近这段时间，主要思考的是Knife4j这个项目应该如何发展下去，如果做新产品，与市面上已经存在的其他产品如何做差异化的竞争。

思来想去，我又有了新的方向和目标～！

> 折腾新产品的心态一直没停过。。

市面上的产品包括`Postman`、`Apifox`、`Apipost`等等，专注在自己的领域里面，覆盖面都挺广的，而Knife4j好像以Ui界面交互起家，受众要宅一些，想想这些产品的词云关键字：`API文档`、`调试`、`协作`、`测试`、`API设计`等等

每一个关键字里面所需要投入的精力，都是Knife4j无法企及的，而且我在很早之前分享Knife4j的定位时，我一直想把他作为一个工具输出，单纯的工具，因此，包括：`协作`、`涉及`、`自动化`等等标签，都不适合我

那么，应该做什么？做一点不一样的呢？

Knife4jInsight这个产品的思路我自认为还是得发展下去,只不过需要更加产品化一下，做成平台，给用户提供更方便的可操作化的界面，简化整个使用步骤。

基于这个想法，和脑子里蹦出了一些新的Idea，包括：`开放平台`、`接口展示`、`LLM大模型`。

我有了一个产品的大致雏形，我画了一个草图，大概是这个样子：

![图1.产品架构图](/images/blog/product-new-idea/Knife4jInsight.png)

在上图中，Knife4jInsight是一个独立服务组件，依附在Apache APISIX网关组件下的服务。那么，产品定位是什么呢？

产品定位：**统一的通用接口文档及开放平台服务系统**

在功能上，主要是三大块的功能：

- **开放文档的统一管理**：借助于Knife4j的前端界面，接口文档完全遵循Swagger2/OpenAPI3规范，下游或者外游服务的接口文档，只需要是符合规范的，都可以统一在平台进行管理维护，并提供文档最基础的预览、调试、鉴权访问等功能
- **开发密钥统一管理：**开发者开放的API接口，很多时候，如果要对外的情况下，通常开发者们都需要实现接口的鉴权控制逻辑，而如果每个服务或不同的项目都实现一遍，那太耗费精力了，那么我觉得只要是聚合上来的接口文档，所对应的下游服务，都可以通过该平台进行统一的管理，分配鉴权及管理开放用户
- **下游服务统一管理：**一旦涉及到开放平台，那么网关的企业级别高性能要求不可避免，这不是Knife4j的强项，作者也没这个能力，作为开放平台网关层，这里考虑Apache APISIX来实现服务的分发，依靠Apache APISIX提供的Admin API接口，平台通过将下游服务的转发规则进行动态注册，这样接口文档和开放平台就从功能职责上进行了区分，互相存在依赖关系，但职责分工不同

平台的网关鉴权，通过实现Apache APIXIS的鉴权插件，植入到网关组件中，此时所有开放平台的网关入口流量，都会通过该插件与`Knife4jInsight`中的开发密钥进行联动，实现接口的鉴权。

### 开放文档的统一管理

先来看开放文档的统一管理，考虑到我们要与开源Knife4j项目共同发展，因此产品的功能上，也是以开源Knife4j为主，接口文档完全遵循Swagger2/OpenAPI3规范，在这个场景下，实现文档的统一管理和聚合

主要包括两个功能：

- **Namespace**：命名空间(namespace)是平台中抽象的概念,一个namespace下可以允许存在多个OpenAPI规范实例，用户可以讲该功能理解为企业、项目、部门、产品等等
- **ApiRegister**：服务实例(ApiRegister)是一个OpenAPI规范的最小单元,将OpenAPI接口规范数据源通过自动注册或手动填报的方式,保存在平台中后即可进行接口文档的在线预览功能，这样的好处是我们即可以对接口文档进行归档保存，又可以和下游服务联动，打通调试。
- **文档用户中心**: 每一个namespace下的文档都是有鉴权属性的，用户可以选择对齐是否开放，这样的好处是保持接口的🔐安全，避免所有人都能访问

先来看下一界面原型。

**命名空间(namespace)**：namespace列表可以查看所有的项目列表，并且namespac是可以直接访问的，如果当前namespace下面有接口实例，那么就可以通过Knife4j的前端界面进行预览和调试

![图2.命名空间](/images/blog/product-new-idea/namespace.jpg)

 点击namespaceId查看文档效果如下：

![图3.命名空间文档展示](/images/blog/product-new-idea/namespace-show.jpg)

**服务实例(ApiRegister)**:是一个OpenAPI规范的最小单元,可以通过接口自动注册上来，也可以通过平台进行主动编辑添加

>  包括接口的规范类型，数据来源类型，注册类型等等信息。

![图4.接口实例](/images/blog/product-new-idea/api.jpg)

明细信息展示如下：

![图5.接口实例文档展示](/images/blog/product-new-idea/api-info.png)

同样，当个APIRegister也是可以独立访问的，平台提供的单实例的访问方法：

### **开发密钥统一管理**

开发者开放的API接口，很多时候，如果要对外的情况下，通常开发者们都需要实现接口的鉴权控制逻辑，而如果每个服务或不同的项目都实现一遍，那太耗费精力了，那么我觉得只要是聚合上来的接口文档，所对应的下游服务，都可以通过该平台进行统一的管理，分配鉴权及管理开放用户

### **下游服务统一管理**

一旦涉及到开放平台，那么网关的企业级别高性能要求不可避免，这不是Knife4j的强项，作者也没这个能力，作为开放平台网关层，这里考虑Apache APISIX来实现服务的分发，依靠Apache APISIX提供的Admin API接口，平台通过将下游服务的转发规则进行动态注册，这样接口文档和开放平台就从功能职责上进行了区分，互相存在依赖关系，但职责分工不同

### LLM大模型结合

目前，AIGC火热发展的当下，大模型落地更多产品的场景，我觉得是不可避免的，而对于在Knife4jInsight平台中，我目前也想到了一些LLM大模型可以落地的场景，主要包括：

- 接口的i18n转化：本身Knife4j提供的界面目前是支持中英文的，但是开发者如果要提供英文的接口文档描述，通常在项目开发阶段，或者定义OpenAPI接口规范时，技术层面就需要提供支持，而如果通过平台中大模型的翻译工具，基于Prompt工程，将OpenAPI数据源直接生成对应的目标语言，那么开发者就无需在技术启动接口考虑i18n的事情，Knife4jInsight平台中自动集成即可快速实现。

  ![图6.LLM大模型](/images/blog/product-new-idea/llm1.png)

- 代码模版：将Prompt工程+OpenAPI规范结合，植入到Knife4j到每一个功能点中，包括代码示例生成、curl等等不同的场景，调试LLM大模型的Prompt工程，将幂等性的接口输出到应用测，给予开发者更多的便利。

  ![图7.LLM大模型](/images/blog/product-new-idea/llm2.png)

## 结尾

以上就是我的一些新想法，如果您对该产品感兴趣，欢迎和我联系(<xiaoymin@foxmail.com>)～～～