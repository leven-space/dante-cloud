(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{472:function(_,v,t){"use strict";t.r(v);var e=t(1),s=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"项目介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[_._v("#")]),_._v(" 项目介绍")]),_._v(" "),t("h2",{attrs:{id:"工程结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程结构"}},[_._v("#")]),_._v(" 工程结构")]),_._v(" "),t("h3",{attrs:{id:"后端工程结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端工程结构"}},[_._v("#")]),_._v(" 后端工程结构")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("eurynome-cloud\n├── configurations -- 配置文件脚本和统一Docker build上下文目录\n├── dependencies -- 工程Maven顶级依赖，统一控制版本和依赖\n├── documents -- 工程相关文档（会逐步清理，统一采用Gitee Wiki）\n├── packages -- 基础通用依赖包\n├    ├── eurynome-cloud-assistant -- Spring相关公共辅助工具,注解相关工具代码组件\n├    ├── eurynome-cloud-data -- 数据持久化,数据缓存以及Redis等数据处理相关代码组件\n├    ├── eurynome-cloud-kernel -- 微服务接入平台必备组件\n├    ├── eurynome-cloud-oauth -- OAuth2通用代码\n├    ├── eurynome-cloud-oauth-starter -- 自定义OAuth2 Starter，Athena单体版核心Starter\n├    ├── eurynome-cloud-rest -- Rest相关代码组件\n├    ├── eurynome-cloud-sercurity -- Security通用代码\n├    ├── eurynome-cloud-starter -- 微服务核心Starter\n├    └── eurynome-cloud-websocket -- WebSocket核心代码包\n├── platform -- 平台核心服务\n├    ├── eurynome-cloud-gateway -- 服务网关\n├    ├── eurynome-cloud-management -- Spring Boot Admin 监控服务\n├    └── eurynome-cloud-uaa -- 统一认证模块\n├── services -- 平台业务服务\n├    ├── eurynome-cloud-upms-api -- 通用用户权限api \n├    ├── eurynome-cloud-upms-logic -- 通用用户权限service\n├    ├── eurynome-cloud-upms-rest -- 通用用户权限rest 接口\n├    ├── eurynome-cloud-upms-ability -- 通用用户权限服务\n├    ├── eurynome-cloud-upms-rest -- 工作流基础代码包\n└──  └── eurynome-cloud-bpmn-ability -- 工作流服务 \n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br"),t("span",{staticClass:"line-number"},[_._v("10")]),t("br"),t("span",{staticClass:"line-number"},[_._v("11")]),t("br"),t("span",{staticClass:"line-number"},[_._v("12")]),t("br"),t("span",{staticClass:"line-number"},[_._v("13")]),t("br"),t("span",{staticClass:"line-number"},[_._v("14")]),t("br"),t("span",{staticClass:"line-number"},[_._v("15")]),t("br"),t("span",{staticClass:"line-number"},[_._v("16")]),t("br"),t("span",{staticClass:"line-number"},[_._v("17")]),t("br"),t("span",{staticClass:"line-number"},[_._v("18")]),t("br"),t("span",{staticClass:"line-number"},[_._v("19")]),t("br"),t("span",{staticClass:"line-number"},[_._v("20")]),t("br"),t("span",{staticClass:"line-number"},[_._v("21")]),t("br"),t("span",{staticClass:"line-number"},[_._v("22")]),t("br"),t("span",{staticClass:"line-number"},[_._v("23")]),t("br"),t("span",{staticClass:"line-number"},[_._v("24")]),t("br"),t("span",{staticClass:"line-number"},[_._v("25")]),t("br")])]),t("h3",{attrs:{id:"前端工程结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端工程结构"}},[_._v("#")]),_._v(" 前端工程结构")]),_._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[_._v("eurynome-cloud-ui\n├── .vscode -- Vscode配置，方便统一开发环境便于管理。目前只有Typescript SDK版本指定。\n├── dependencies -- 工程Maven顶级依赖，统一控制版本和依赖\n├── documents -- 工程相关文档（已统一采用在线文档）\n├    └── readme -- 工程Readme.md使用静态资源\n├── packages -- 基础通用依赖包\n├    ├── @hecate/h-bpmn-moddle -- 工作流编辑器组件\n├    ├── @hecate/h-button -- 基于Vuetify封装的按钮组件\n├    ├── @hecate/h-table -- 基于Vuetify封装的Table组件\n├    ├── @hecate/plugins -- 第三方插件通用配置\n├    ├── @hecate/utils -- 通用工具代码包\n├    └── @herodotus/ui -- 前端工程\n├── scripts -- rollup 通用编译脚本\n├── .editorconfig -- 编辑器统一设置\n├── .eslintignore -- Eslint忽略文件\n├── .eslintrc.js -- Eslint配置\n├── .gitignore -- Git忽略文件\n├── .prettierignore -- Prettier忽略文件\n├── .prettierrc -- Prettier配置\n├── babel.config.js -- Babel配置\n├── lerna.json -- Lerna配置\n├── postcss.config.js -- Postcss配置\n├── tsconfig.json -- Typescript统一配置\n├── .editorconfig -- 编辑器统一设置\n└── yarn.lock -- Yarn 依赖包锁定 \n")])]),_._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[_._v("1")]),t("br"),t("span",{staticClass:"line-number"},[_._v("2")]),t("br"),t("span",{staticClass:"line-number"},[_._v("3")]),t("br"),t("span",{staticClass:"line-number"},[_._v("4")]),t("br"),t("span",{staticClass:"line-number"},[_._v("5")]),t("br"),t("span",{staticClass:"line-number"},[_._v("6")]),t("br"),t("span",{staticClass:"line-number"},[_._v("7")]),t("br"),t("span",{staticClass:"line-number"},[_._v("8")]),t("br"),t("span",{staticClass:"line-number"},[_._v("9")]),t("br"),t("span",{staticClass:"line-number"},[_._v("10")]),t("br"),t("span",{staticClass:"line-number"},[_._v("11")]),t("br"),t("span",{staticClass:"line-number"},[_._v("12")]),t("br"),t("span",{staticClass:"line-number"},[_._v("13")]),t("br"),t("span",{staticClass:"line-number"},[_._v("14")]),t("br"),t("span",{staticClass:"line-number"},[_._v("15")]),t("br"),t("span",{staticClass:"line-number"},[_._v("16")]),t("br"),t("span",{staticClass:"line-number"},[_._v("17")]),t("br"),t("span",{staticClass:"line-number"},[_._v("18")]),t("br"),t("span",{staticClass:"line-number"},[_._v("19")]),t("br"),t("span",{staticClass:"line-number"},[_._v("20")]),t("br"),t("span",{staticClass:"line-number"},[_._v("21")]),t("br"),t("span",{staticClass:"line-number"},[_._v("22")]),t("br"),t("span",{staticClass:"line-number"},[_._v("23")]),t("br"),t("span",{staticClass:"line-number"},[_._v("24")]),t("br"),t("span",{staticClass:"line-number"},[_._v("25")]),t("br")])]),t("h2",{attrs:{id:"核心技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#核心技术"}},[_._v("#")]),_._v(" 核心技术")]),_._v(" "),t("h3",{attrs:{id:"后端核心技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后端核心技术"}},[_._v("#")]),_._v(" 后端核心技术")]),_._v(" "),t("h4",{attrs:{id:"_1-spring相关核心技术及版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-spring相关核心技术及版本"}},[_._v("#")]),_._v(" （1）Spring相关核心技术及版本")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("组件")]),_._v(" "),t("th",[_._v("版本")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[t("code",[_._v("Spring Boot")])]),_._v(" "),t("td",[_._v("2.5.6")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("Spring Cloud")])]),_._v(" "),t("td",[_._v("2020.0.4")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("Spring Cloud Alibaba")])]),_._v(" "),t("td",[_._v("2021.1")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("Spring Boot Admin")])]),_._v(" "),t("td",[_._v("2.5.2")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("Nacos")])]),_._v(" "),t("td",[_._v("2.0.3")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("Sentinel")])]),_._v(" "),t("td",[_._v("1.8.0")])]),_._v(" "),t("tr",[t("td",[t("code",[_._v("Seata")])]),_._v(" "),t("td",[_._v("1.3.0")])])])]),_._v(" "),t("h4",{attrs:{id:"_2-涉及的相关的技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-涉及的相关的技术"}},[_._v("#")]),_._v(" （2）涉及的相关的技术")]),_._v(" "),t("ul",[t("li",[_._v("持久层框架： "),t("code",[_._v("Spring Data Jpa")]),_._v(" & "),t("code",[_._v("Mybatis Plus")])]),_._v(" "),t("li",[_._v("API网关："),t("code",[_._v("Spring Cloud Gateway")])]),_._v(" "),t("li",[_._v("服务注册&发现和配置中心: "),t("code",[_._v("Alibaba Nacos")])]),_._v(" "),t("li",[_._v("服务消费："),t("code",[_._v("Spring Cloud OpenFeign")]),_._v(" & "),t("code",[_._v("RestTemplate")]),_._v(" & "),t("code",[_._v("OkHttps")])]),_._v(" "),t("li",[_._v("负载均衡："),t("code",[_._v("Spring Cloud Loadbalancer")])]),_._v(" "),t("li",[_._v("服务熔断&降级&限流："),t("code",[_._v("Alibaba Sentinel")])]),_._v(" "),t("li",[_._v("服务监控："),t("code",[_._v("Spring Boot Admin")])]),_._v(" "),t("li",[_._v("消息队列：使用 "),t("code",[_._v("Spring Cloud")]),_._v(" 消息总线 "),t("code",[_._v("Spring Cloud Bus")]),_._v(" 默认 "),t("code",[_._v("Kafka")]),_._v(" 适配"),t("code",[_._v("RabbitMQ")])]),_._v(" "),t("li",[_._v("链路跟踪："),t("code",[_._v("Skywalking")])]),_._v(" "),t("li",[_._v("分布式事务："),t("code",[_._v("Seata")])]),_._v(" "),t("li",[_._v("数据缓存："),t("code",[_._v("JetCache")]),_._v(" + "),t("code",[_._v("Redis")]),_._v(" + "),t("code",[_._v("Caffeine")]),_._v(", 自定义多级缓存")]),_._v(" "),t("li",[_._v("数据库： "),t("code",[_._v("Postgresql")]),_._v("，"),t("code",[_._v("MySQL")]),_._v("，"),t("code",[_._v("Oracle")]),_._v(" ...")]),_._v(" "),t("li",[_._v("JSON序列化："),t("code",[_._v("Jackson")]),_._v(" & "),t("code",[_._v("FastJson")])]),_._v(" "),t("li",[_._v("文件服务：阿里云OSS/"),t("code",[_._v("Minio")])]),_._v(" "),t("li",[_._v("数据调试："),t("code",[_._v("p6spy")])]),_._v(" "),t("li",[_._v("在线文档："),t("code",[_._v("Springdoc")]),_._v(" + "),t("code",[_._v("Swagger 3")]),_._v(" + "),t("code",[_._v("OpenAPI")])]),_._v(" "),t("li",[_._v("日志中心："),t("code",[_._v("ELK")])]),_._v(" "),t("li",[_._v("日志收集："),t("code",[_._v("Logstash Logback Encoder")])]),_._v(" "),t("li",[_._v("数据同步："),t("code",[_._v("Debezimu")])]),_._v(" "),t("li",[_._v("外部集成："),t("code",[_._v("JustAuth")]),_._v("， "),t("code",[_._v("WxJava")]),_._v("，多种短信API")]),_._v(" "),t("li",[_._v("工作流引擎："),t("code",[_._v("Camunda")])])]),_._v(" "),t("h3",{attrs:{id:"前端核心技术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端核心技术"}},[_._v("#")]),_._v(" 前端核心技术")]),_._v(" "),t("ul",[t("li",[_._v("Vue2")]),_._v(" "),t("li",[_._v("Vuex")]),_._v(" "),t("li",[_._v("Vue-router")]),_._v(" "),t("li",[_._v("Vue-cli")]),_._v(" "),t("li",[_._v("Axios")]),_._v(" "),t("li",[_._v("Vuetify")]),_._v(" "),t("li",[_._v("Bpmn.js")]),_._v(" "),t("li",[_._v("Localforage")]),_._v(" "),t("li",[_._v("Rollup")]),_._v(" "),t("li",[_._v("Lerna")]),_._v(" "),t("li",[_._v("Typescript")])]),_._v(" "),t("h2",{attrs:{id:"版本关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本关系"}},[_._v("#")]),_._v(" 版本关系")]),_._v(" "),t("h3",{attrs:{id:"组件版本关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件版本关系"}},[_._v("#")]),_._v(" 组件版本关系")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("Spring Cloud Alibaba Version")]),_._v(" "),t("th",[_._v("Sentinel Version")]),_._v(" "),t("th",[_._v("Nacos Version")]),_._v(" "),t("th",[_._v("RocketMQ Version")]),_._v(" "),t("th",[_._v("Dubbo Version")]),_._v(" "),t("th",[_._v("Seata Version")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("2.2.6.RELEASE")]),_._v(" "),t("td",[_._v("1.8.1")]),_._v(" "),t("td",[_._v("1.4.2")]),_._v(" "),t("td",[_._v("4.4.0")]),_._v(" "),t("td",[_._v("2.7.8")]),_._v(" "),t("td",[_._v("1.3.0")])]),_._v(" "),t("tr",[t("td",[_._v("2021.1 or 2.2.5.RELEASE or 2.1.4.RELEASE or 2.0.4.RELEASE")]),_._v(" "),t("td",[_._v("1.8.0")]),_._v(" "),t("td",[_._v("1.4.1")]),_._v(" "),t("td",[_._v("4.4.0")]),_._v(" "),t("td",[_._v("2.7.8")]),_._v(" "),t("td",[_._v("1.3.0")])]),_._v(" "),t("tr",[t("td",[_._v("2.2.3.RELEASE or 2.1.3.RELEASE or 2.0.3.RELEASE")]),_._v(" "),t("td",[_._v("1.8.0")]),_._v(" "),t("td",[_._v("1.3.3")]),_._v(" "),t("td",[_._v("4.4.0")]),_._v(" "),t("td",[_._v("2.7.8")]),_._v(" "),t("td",[_._v("1.3.0")])]),_._v(" "),t("tr",[t("td",[_._v("2.2.1.RELEASE or 2.1.2.RELEASE or 2.0.2.RELEASE")]),_._v(" "),t("td",[_._v("1.7.1")]),_._v(" "),t("td",[_._v("1.2.1")]),_._v(" "),t("td",[_._v("4.4.0")]),_._v(" "),t("td",[_._v("2.7.6")]),_._v(" "),t("td",[_._v("1.2.0")])]),_._v(" "),t("tr",[t("td",[_._v("2.2.0.RELEASE")]),_._v(" "),t("td",[_._v("1.7.1")]),_._v(" "),t("td",[_._v("1.1.4")]),_._v(" "),t("td",[_._v("4.4.0")]),_._v(" "),t("td",[_._v("2.7.4.1")]),_._v(" "),t("td",[_._v("1.0.0")])]),_._v(" "),t("tr",[t("td",[_._v("2.1.1.RELEASE or 2.0.1.RELEASE or 1.5.1.RELEASE")]),_._v(" "),t("td",[_._v("1.7.0")]),_._v(" "),t("td",[_._v("1.1.4")]),_._v(" "),t("td",[_._v("4.4.0")]),_._v(" "),t("td",[_._v("2.7.3")]),_._v(" "),t("td",[_._v("0.9.0")])]),_._v(" "),t("tr",[t("td",[_._v("2.1.0.RELEASE or 2.0.0.RELEASE or 1.5.0.RELEASE")]),_._v(" "),t("td",[_._v("1.6.3")]),_._v(" "),t("td",[_._v("1.1.1")]),_._v(" "),t("td",[_._v("4.4.0")]),_._v(" "),t("td",[_._v("2.7.3")]),_._v(" "),t("td",[_._v("0.7.1")])])])]),_._v(" "),t("h3",{attrs:{id:"毕业版本关系-推荐使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#毕业版本关系-推荐使用"}},[_._v("#")]),_._v(" 毕业版本关系(推荐使用)")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("Spring Cloud Version")]),_._v(" "),t("th",[_._v("Spring Cloud Alibaba Version")]),_._v(" "),t("th",[_._v("Spring Boot Version")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("Spring Cloud 2020.0.1")]),_._v(" "),t("td",[_._v("2021.1")]),_._v(" "),t("td",[_._v("2.4.2")])]),_._v(" "),t("tr",[t("td",[_._v("Spring Cloud Hoxton.SR9")]),_._v(" "),t("td",[_._v("2.2.6.RELEASE")]),_._v(" "),t("td",[_._v("2.3.2.RELEASE")])]),_._v(" "),t("tr",[t("td",[_._v("Spring Cloud Greenwich.SR6")]),_._v(" "),t("td",[_._v("2.1.4.RELEASE")]),_._v(" "),t("td",[_._v("2.1.13.RELEASE")])]),_._v(" "),t("tr",[t("td",[_._v("Spring Cloud Hoxton.SR3")]),_._v(" "),t("td",[_._v("2.2.1.RELEASE")]),_._v(" "),t("td",[_._v("2.2.5.RELEASE")])]),_._v(" "),t("tr",[t("td",[_._v("Spring Cloud Hoxton.RELEASE")]),_._v(" "),t("td",[_._v("2.2.0.RELEASE")]),_._v(" "),t("td",[_._v("2.2.X.RELEASE")])]),_._v(" "),t("tr",[t("td",[_._v("Spring Cloud Greenwich")]),_._v(" "),t("td",[_._v("2.1.2.RELEASE")]),_._v(" "),t("td",[_._v("2.1.X.RELEASE")])]),_._v(" "),t("tr",[t("td",[_._v("Spring Cloud Finchley")]),_._v(" "),t("td",[_._v("2.0.4.RELEASE(停止维护，建议升级)")]),_._v(" "),t("td",[_._v("2.0.X.RELEASE")])]),_._v(" "),t("tr",[t("td",[_._v("Spring Cloud Edgware")]),_._v(" "),t("td",[_._v("1.5.1.RELEASE(停止维护，建议升级)")]),_._v(" "),t("td",[_._v("1.5.X.RELEASE")])])])]),_._v(" "),t("h2",{attrs:{id:"功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[_._v("#")]),_._v(" 功能介绍")]),_._v(" "),t("h3",{attrs:{id:"_1-统一安全认证中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-统一安全认证中心"}},[_._v("#")]),_._v(" [1]统一安全认证中心")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("OAuth2 安全认证")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持 "),t("code",[_._v("OAuth2")]),_._v(" 授权码模式,隐式授权码模式（简单模式）,密码模式和客户端模式四种登录模式")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("JWT Token令牌")]),_._v("：")])]),_._v(" "),t("p",[_._v("采用JWT对OAuth2 Token进行加密")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("自定义OAuth2页面")]),_._v("：")])]),_._v(" "),t("p",[_._v("自定义"),t("code",[_._v("OAuth2")]),_._v(" login,confirm,error页面，提升系统使用用户体验。可结合自身需求进行修改。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("OAuth2 登录验证码")]),_._v("：")])]),_._v(" "),t("p",[t("code",[_._v("OAuth2")]),_._v("登录增加验证码保护，支持gif,中文,算数等类型，可通过配置进行修改以及是否显示验证码控制")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("OAuth2登录数据加密传输")]),_._v("：")])]),_._v(" "),t("p",[_._v("基于AES对 "),t("code",[_._v("OAuth2")]),_._v(" 登录数据进行动态加密传输，可通过配置对表单参数名进行动态配置，提升系统安全性")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("平台权限管理")]),_._v("：")])]),_._v(" "),t("p",[_._v("基于RBAC模型，以角色和接口为核心，使用统一逻辑实现"),t("code",[_._v("@PreAuthorize")]),_._v("注解权限与"),t("code",[_._v("URL")]),_._v("权限的全面整合及动态可配置化。统一平台接口白名单，IP地址白名单，以及Scope绑定URL的管理。无须配置Security权限注解，支持URL粒度的鉴权和用户权限的动态配置。 完美支持单体式架构,UPMS自身应用需求,分布式架构以及分布式各服务多实例等各种应用场景。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("User,Client数据策略访问")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持"),t("code",[_._v("OAuth2")]),_._v(" "),t("code",[_._v("UserDetails")]),_._v(","),t("code",[_._v("ClientDetails")]),_._v("数据直连数据库和"),t("code",[_._v("Feign")]),_._v("两种数据获取策略模式，"),t("code",[_._v("OAuth2")]),_._v("直连数据库性能更优，"),t("code",[_._v("Feign")]),_._v("访问数据服务独立可动态扩展。可通过配置动态修改具体采用哪种策略。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("手机短信验证码注册和登录")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持通过手机验证码登录认证，与平台为统一体系，统一返回"),t("code",[_._v("OAuth2")]),_._v(" Token，支持服务接口鉴权")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("第三方系统社交注册和登录")]),_._v("：")])]),_._v(" "),t("p",[_._v("基于 "),t("code",[_._v("JustAuth")]),_._v(" 实现第三方系统社交登录认证，，与平台为统一体系，统一返回 "),t("code",[_._v("OAuth2")]),_._v(" Token，支持服务接口鉴权，。所有 "),t("code",[_._v("JustAuth")]),_._v(" 支持的第三方系统均支持。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("微信小程序注册和登录")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持微信小程序登录认证，与平台为统一体系，统一返回 "),t("code",[_._v("OAuth2")]),_._v(" Token，支持服务接口鉴权。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("其它注册和登录")]),_._v("：")])]),_._v(" "),t("p",[_._v("采用策略模式对外部登录和注册进行支持，目前未支持的登录，可参考标准，动态扩展，即可支持。")]),_._v(" "),t("h3",{attrs:{id:"_2-统一服务访问网关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-统一服务访问网关"}},[_._v("#")]),_._v(" [2]统一服务访问网关")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("网关动态路由")]),_._v("：")])]),_._v(" "),t("p",[_._v("基于"),t("code",[_._v("Gateway")]),_._v("和"),t("code",[_._v("Nacos")]),_._v("实现服务网关动态路由，无须增加任何配置，即可支持服务的发现与路由")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("网关服务鉴权")]),_._v("：\n服务网关集成部分权限认证功能，提升系统安全性，降低平台压力")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("网关服务限流")]),_._v("：")])])]),_._v(" "),t("p",[_._v("基于Sentinel实现服务的限流，支持基于Gateway Filter的自定义限流")]),_._v(" "),t("ul",[t("li",[t("p",[t("strong",[_._v("动态文档聚合")]),_._v("：\n网关动态"),t("code",[_._v("Swagger")]),_._v("文档聚合，使用"),t("code",[_._v("Swagger 3.0")]),_._v("，支持"),t("code",[_._v("Knife4j")]),_._v("增强。不同环境访问控制")])]),_._v(" "),t("li",[t("p",[t("strong",[_._v("统一跨域处理")]),_._v("：")])])]),_._v(" "),t("p",[_._v("基于"),t("code",[_._v("Gateway")]),_._v("实现统一跨域处理")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("统一错误处理")]),_._v("：")])]),_._v(" "),t("p",[_._v("平台统一错误处理，支持自定义错误码体系")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("自定义动态路由")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持基于DB的动态路由管理与路由规则配置")]),_._v(" "),t("h3",{attrs:{id:"_3-微服务架构支撑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-微服务架构支撑"}},[_._v("#")]),_._v(" [3]微服务架构支撑")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("服务注册发现")]),_._v("：")])]),_._v(" "),t("p",[_._v("基于"),t("code",[_._v("Nacos")]),_._v("实现服务的注册与发现。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("服务负载均衡")]),_._v("：")])]),_._v(" "),t("p",[t("code",[_._v("Spring Cloud Netflix")]),_._v(" 停止维护，使用 "),t("code",[_._v("Spring Cloud Loadbalancer")]),_._v(" 全面替换"),t("code",[_._v("Ribbon")]),_._v("。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("服务熔断降级")]),_._v("：")])]),_._v(" "),t("p",[_._v("整合"),t("code",[_._v("OpenFeign")]),_._v("和"),t("code",[_._v("Sentinel")]),_._v("，从熔断降级,系统负载保护,热点防护等多个维度来保障微服务的稳定性")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("统一配置中心")]),_._v("：")])]),_._v(" "),t("p",[_._v("基于 "),t("code",[_._v("Nacos")]),_._v(" 搭建的统一配置中心，支持配置文件自动导入和关键信息加密，可根据文件夹名称自动分组配置。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("统一日志中心")]),_._v("：")])]),_._v(" "),t("p",[_._v("采用TCP直连的方式采集和发送日志，集成 "),t("code",[_._v("Skywalking")]),_._v(" "),t("code",[_._v("TraceID")]),_._v(" 实现日志聚合及ELK日志分析。通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭日志采集功能。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("分布任务调度")]),_._v("：")])]),_._v(" "),t("p",[_._v("极简集成 "),t("code",[_._v("xxl-job")]),_._v("，支持分布式任务调度功能")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("分布事务处理")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成 "),t("code",[_._v("Seata")]),_._v("，支持分布式事务，无代码侵入，灵活便捷")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("分布对象存储")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持 "),t("code",[_._v("Minio")]),_._v(" 分布式对象存储。同时，集成阿里云OSS，可通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭功能。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("分布式工作流")]),_._v("：")])]),_._v(" "),t("p",[_._v("以 "),t("code",[_._v("Camunda")]),_._v(" 引擎为基础定义分布式工作流引擎，提供自研人事信息管理以及人事管理体系与工作流用户体系的实时集成")]),_._v(" "),t("h3",{attrs:{id:"_4-微服务运行监控"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-微服务运行监控"}},[_._v("#")]),_._v(" [4]微服务运行监控")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("服务调用链监控")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成 "),t("code",[_._v("Skywalking")]),_._v(" 进行服务调用链的监控，调用链监控深度可延伸至"),t("code",[_._v("Undertow")]),_._v(",数据库,"),t("code",[_._v("Redis")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("应用吞吐量监控")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成 "),t("code",[_._v("Skywalking")]),_._v(" 进行应用吞吐量监控")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("熔断,降级监控")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成 "),t("code",[_._v("Sentinel")]),_._v(" 进行服务的熔断,降级监控")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("微服务状态监控")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成 "),t("code",[_._v("Spring Boot Admin")]),_._v(" 进行服务运行状态的监控")]),_._v(" "),t("h3",{attrs:{id:"_5-数据自动化处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-数据自动化处理"}},[_._v("#")]),_._v(" [5]数据自动化处理")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("数据模型初始化")]),_._v("：")])]),_._v(" "),t("p",[t("code",[_._v("RBAC")]),_._v(","),t("code",[_._v("OAuth2")]),_._v(" 部分核心表,"),t("code",[_._v("Camunda")]),_._v(" 数据表，在初始部署过程中为自动化创建")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("核心应用数据初始化")]),_._v("：")])]),_._v(" "),t("p",[t("code",[_._v("RBAC")]),_._v(","),t("code",[_._v("OAuth2")]),_._v(" 等核心数据，在初始部署过程中为自动化导入")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("URL权限数据动态汇总")]),_._v("：")])]),_._v(" "),t("p",[_._v("自动扫描URL接口作为权限汇总存入系统，根据URL相关信息生成唯一ID，多次导入数据不会重复。可通过配置动态开启或修改扫描内容")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("Yml配置自动导入")]),_._v("：")])]),_._v(" "),t("p",[_._v("服务所需使用的配置文件，可自动根据文件夹进行分组并导入到 "),t("code",[_._v("Nacos")]),_._v(" 中。")]),_._v(" "),t("h3",{attrs:{id:"_6-服务开发支撑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-服务开发支撑"}},[_._v("#")]),_._v(" [6]服务开发支撑")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("通用CRUD封装")]),_._v("：")])]),_._v(" "),t("p",[_._v("各种类型的代码生成器较多，结合实际应用使用效果来看，代码生成器在实际开发中使用频率低于理想预期。因此，没有考虑提供代码生成器，而是对常规的CRUD进行了多层次的封装，使定制化服务的开发更加便捷。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("自研两级缓存封装")]),_._v("：")])]),_._v(" "),t("p",[_._v("自研基于 "),t("code",[_._v("Caffeine")]),_._v(" 和 "),t("code",[_._v("Redis")]),_._v(" 分布式两级缓存,完美支持JPA Hibernate二级缓存,完美支持各类查询数据缓存以及JPA "),t("code",[_._v("@ManyToMany")]),_._v(", "),t("code",[_._v("@ManyToOne")]),_._v("等关联查询。实现基于"),t("code",[_._v("Caffeine")]),_._v(" 的 "),t("code",[_._v("Hibernate")]),_._v(" 二级缓存，可与自研两级缓存快速切换，仅使用本地缓存创建Key繁琐和分页数据无法更新的问题。自定义 Mybatis Plus 二级缓存，支持"),t("code",[_._v("Caffeine")]),_._v(" 的 "),t("code",[_._v("Hibernate")]),_._v(" 二级缓存")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("多类型数据库支持")]),_._v("：")])]),_._v(" "),t("p",[_._v("默认采用 "),t("code",[_._v("PostgreSQL")]),_._v(" 数据库，支持 "),t("code",[_._v("MySQL")]),_._v(","),t("code",[_._v("Oracle")]),_._v(","),t("code",[_._v("H2")]),_._v("等多种关系型数据库，无须修改代码可动态切换。数据层同时支持 "),t("code",[_._v("Spring Data Jpa")]),_._v(" 和 "),t("code",[_._v("Mybatis Plus")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("多消息队列支持")]),_._v("：")])]),_._v(" "),t("p",[_._v("适配 "),t("code",[_._v("RabbitMQ")]),_._v(" 和 "),t("code",[_._v("Kafka")]),_._v("，默认使用 "),t("code",[_._v("Kafka")]),_._v("，支持消息总线("),t("code",[_._v("Spring Cloud Bus")]),_._v(")")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("多种服务调用方式")]),_._v("：")])]),_._v(" "),t("p",[_._v("默认采用 "),t("code",[_._v("OpenFeign")]),_._v(" 进行服务间调用，支持 "),t("code",[_._v("RestTemplate")]),_._v(" 和 "),t("code",[_._v("OkHttps")])]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("共享式多环境切换")]),_._v("：")])]),_._v(" "),t("p",[_._v("共享式,统一化多环境配置模式，Yml,Docker均采用此方式配置，避免类似的服务配置,Dockerfile配置导出复制和修改的问题")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("多团队开发管理")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持多团队开发，可针对各个团队开发服务，进行单独的授权配置。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("注解模型模块模式")]),_._v("：")])]),_._v(" "),t("p",[_._v("除必要依赖逻辑以及强注入顺序要求的模块采用 "),t("code",[_._v("Spring SPI")]),_._v("（spring.factories）机制外，其它功能模块均采用 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解编程模型，可选择性进行控制是否开启对应模块，减少不必要的依赖注入和启动。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("代码打包记录查询")]),_._v("：")])]),_._v(" "),t("p",[_._v("对代码编译信息进行记录，可查询代码版本以及编译时间等相关信息，方便运维人员更好的掌握代码信息。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("人事信息管理")]),_._v("：")])]),_._v(" "),t("p",[_._v("除已有的用户体系外，集成单位,部门,人员等人事管理功能，满足大多数人事管理场景，并与 "),t("code",[_._v("Camunda")]),_._v(" 工作流用户体系无缝整合，实现数据实时同步。")]),_._v(" "),t("h3",{attrs:{id:"_7-信息发送集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-信息发送集成"}},[_._v("#")]),_._v(" [7]信息发送集成")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("微信小程序订阅消息")]),_._v("：")])]),_._v(" "),t("p",[_._v("支持微信小程序订阅消息发送。提供订阅消息模版工厂，可根据自身业务需求，编写少量代码既可以拓展支持新订阅消息模版。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("极光消息推送集成")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成极光消息推送，对极光后台API进行封装，封装度高,调用方便，可快速与自定义业务需求整合，通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("环信消息集成")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成环信IM和消息推送，使用更加便捷，可在应用中根据自定义需求快速整合和拓展IM，发送手机推送消息。通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("多通道SMS集成")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成阿里,百度,中国移动,华为,京东,极光,网易,七牛,腾讯,又拍,云片等平台短信发送通道。可通过配置动态选择具体使用通道。支持多模版定义以及模版参数顺序控制")]),_._v(" "),t("h3",{attrs:{id:"_8-内容审核集成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-内容审核集成"}},[_._v("#")]),_._v(" [8]内容审核集成")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("阿里云内容审核")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成阿里云内容审核，支持文本,图片,音频,视频,网页内容审核，支持同步审核,异步审核,异步 "),t("code",[_._v("Callback")]),_._v(" 方式审核通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("微信小程序内容审核")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成微信小程序内容审核，支持文本,图片,音频内容审核，支持同步,异步审核。通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("百度证照识别")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成百度证照审核，支持营业执照,身份证 "),t("code",[_._v("OCR")]),_._v(" 识别。通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭。")]),_._v(" "),t("ul",[t("li",[t("strong",[_._v("天眼查企业信息查询")]),_._v("：")])]),_._v(" "),t("p",[_._v("集成天眼查企业信息查询。通过 "),t("code",[_._v("@EnableXXX")]),_._v(" 注解开启或关闭。")])])}),[],!1,null,null,null);v.default=s.exports}}]);