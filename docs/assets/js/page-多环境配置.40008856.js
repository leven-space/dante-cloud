(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{469:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多环境配置"}},[s._v("#")]),s._v(" 多环境配置")]),s._v(" "),t("h2",{attrs:{id:"什么是多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是多环境配置"}},[s._v("#")]),s._v(" 什么是多环境配置？")]),s._v(" "),t("p",[s._v("在实际项目开发过程中，我们往往需要区分开发，测试，联调,预发布，生产等不同的应用环境。这些应用环境用途不同，对应环境的配置项,稳定性,数据质量,保障性,可接触人群等要求也不同，比如Swagger一般上在生产时是关闭的；不同环境数据库地址,端口号等都是不尽相同的。要是没有多环境的自由切换，部署起来是很繁琐也容易出错的。")]),s._v(" "),t("p",[s._v("使用多环境配置，可以针对不同的应用环境，提前配置好对应的环境配置信息。在使用时，仅需要修改具体的环境名称，就可以把对应环境配置信息,系统参数等相关内容全部切换。不仅使用便捷，还极大地降低了手工修改参数的出错率。")]),s._v(" "),t("h2",{attrs:{id:"maven-多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven-多环境配置"}},[s._v("#")]),s._v(" Maven 多环境配置")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("Maven")]),s._v("可以通过在"),t("code",[s._v("pom.xml")]),s._v("中增加"),t("code",[s._v("<profiles>")]),s._v("配置进行多环境的配置。参见以下示例：")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("development"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("activation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("activeByDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("true"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("activeByDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("activation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            ...\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("produtction"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            ...\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("testing"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n            ...\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("p",[s._v("通过下面配置就可以指定当前默认的环境是哪个")]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("activation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("activeByDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("true"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("activeByDefault")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("activation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在开发和使用过程中，必须要配置一个默认的环境。配置完成之后，在IDE中也会提供可操作性界面进行操作。下图即为IDEA的界面示例：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/idea/profiles.png",alt:"profiles"}})]),s._v(" "),t("h2",{attrs:{id:"spring-boot-多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-多环境配置"}},[s._v("#")]),s._v(" Spring Boot 多环境配置")]),s._v(" "),t("h3",{attrs:{id:"spring-boot-环境设置机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-环境设置机制"}},[s._v("#")]),s._v(" Spring Boot 环境设置机制")]),s._v(" "),t("p",[t("code",[s._v("spring.profiles.active")]),s._v(" 属性可以为我们指定当前设置的环境，以此来选择我们的配置文件。例如我们有配置文件")]),s._v(" "),t("ul",[t("li",[s._v("application.yml")]),s._v(" "),t("li",[s._v("application-dev.yml")]),s._v(" "),t("li",[s._v("application-test.yml")]),s._v(" "),t("li",[s._v("application-prod.yml")])]),s._v(" "),t("p",[s._v("当执行 "),t("code",[s._v("java -jar xxx.jar --spring.profiles.actvie=test")]),s._v(" 此时，系统将启用 "),t("code",[s._v("application.yml")]),s._v(" 和 "),t("code",[s._v("application-test.yml")]),s._v(" 配置文件。")]),s._v(" "),t("p",[s._v("当执行 "),t("code",[s._v("java -jar xxx.jar --spring.profiles.actvie=prod")]),s._v(" 此时，系统将启用 "),t("code",[s._v("application.yml")]),s._v(" 和 "),t("code",[s._v("application-prod.yml")]),s._v(" 配置文件。")]),s._v(" "),t("p",[s._v("正是这种配置参数可以决定我们使用哪种配置文件，如果我们把不同环境的配置写在对应的配置文件中，我们就可以实现多环境机制。")]),s._v(" "),t("h3",{attrs:{id:"配置多环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置多环境"}},[s._v("#")]),s._v(" 配置多环境")]),s._v(" "),t("p",[s._v("正如上一点所述，我们配置不同的配置文件")]),s._v(" "),t("ul",[t("li",[s._v("application.yml")]),s._v(" "),t("li",[s._v("application-dev.yml（开发环境）")]),s._v(" "),t("li",[s._v("application-test.yml（测试环境）")]),s._v(" "),t("li",[s._v("application-uat.yml（预发布环境）")]),s._v(" "),t("li",[s._v("application-prod.yml（生产环境）")])]),s._v(" "),t("h3",{attrs:{id:"指定环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定环境"}},[s._v("#")]),s._v(" 指定环境")]),s._v(" "),t("ul",[t("li",[s._v("在 cmd 命令中指定")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("java -jar xxx.jar --spring.profiles.actvie"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("dev \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("在 "),t("code",[s._v("application.yml")]),s._v(" 中指定")])]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("active")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("在IDEA 编辑器中指定")])]),s._v(" "),t("p",[s._v("在运行按钮（绿色三角形按钮）旁边选择 "),t("code",[s._v("Edit Configurations...")]),s._v("，在弹出的对话框中 "),t("code",[s._v("Active profiles")]),s._v(" 输入 "),t("code",[s._v("dev")]),s._v(" 或其他即可。")]),s._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),t("p",[s._v("这种方法只有在本地调试的时候才生效。")])]),s._v(" "),t("h3",{attrs:{id:"单一文件写法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单一文件写法"}},[s._v("#")]),s._v(" 单一文件写法")]),s._v(" "),t("div",{staticClass:"language-yml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("application")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  @artifactId@\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("active")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" develpment\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开发环境配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("activate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on-profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" develpment\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生产环境配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("activate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("on-profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" production\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("h2",{attrs:{id:"nacos-多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos-多环境配置"}},[s._v("#")]),s._v(" Nacos 多环境配置")]),s._v(" "),t("p",[s._v("本身没有提供统一的多环境管理。在Nacos中，本身有多个不同管理级别的概念，包括：Data ID,Group,Namespace。只要利用好这些层级概念的关系，就可以根据自己的需要来实现多环境的管理。")]),s._v(" "),t("h3",{attrs:{id:"data-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-id"}},[s._v("#")]),s._v(" Data Id")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("Data Id")]),s._v("的默认值为"),t("code",[s._v("${spring.cloud.nacos.config.prefix}-${spring.profile.active}.${spring.cloud.nacos.config.file-extension}")])]),s._v(" "),t("li",[t("code",[s._v("spring.cloud.nacos.config.prefix")]),s._v("的默认值为"),t("code",[s._v("${spring.application.name}")])]),s._v(" "),t("li",[t("code",[s._v("spring.cloud.nacos.config.file-extension")]),s._v("的默认值为"),t("code",[s._v("properties")])]),s._v(" "),t("li",[s._v("当"),t("code",[s._v("spring.profiles.active")]),s._v("未配置时，则匹配"),t("code",[s._v("${spring.application.name}.properties")])]),s._v(" "),t("li",[s._v("若设置了"),t("code",[s._v("spring.profiles.active")]),s._v("而"),t("code",[s._v("Nacos")]),s._v("中存在"),t("code",[s._v("${spring.application.name}.properties")]),s._v("时，若还存在")]),s._v(" "),t("li",[t("code",[s._v("${spring.application.name}-${spring.profiles.active}.properties")]),s._v("，则默认匹配后者，若不存在，则会自动匹配前者\n由于"),t("code",[s._v("Nacos")]),s._v("建议且默认用"),t("code",[s._v("spring.application.name")]),s._v("作为"),t("code",[s._v("Data Id")]),s._v("的前缀，若要在不同服务中共享项目统一配置，则可以通过配置"),t("code",[s._v("spring.cloud.nacos.config.shared-dataids")]),s._v("或"),t("code",[s._v("spring.cloud.nacos.config.refreshable-dataids")]),s._v("来添加共享配置，前者不支持自动刷新，后者支持")])]),s._v(" "),t("h3",{attrs:{id:"group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#group"}},[s._v("#")]),s._v(" Group")]),s._v(" "),t("p",[t("code",[s._v("Group")]),s._v("是一个很灵活的配置项，并没有固定的规定，可以用作多环境,多模块,多版本之间区分配置")]),s._v(" "),t("h3",{attrs:{id:"namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#namespace"}},[s._v("#")]),s._v(" Namespace")]),s._v(" "),t("p",[s._v("使用命名空间来区分不同环境的配置，因为使用"),t("code",[s._v("profiles")]),s._v("或"),t("code",[s._v("group")]),s._v("会是不同环境的配置展示到一个页面，而"),t("code",[s._v("Nacos")]),s._v("控制台对不同的"),t("code",[s._v("Namespace")]),s._v("做了"),t("code",[s._v("Tab")]),s._v("栏分组展示")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/nacos/namespaces-tab.png",alt:"Namespaces Tab"}})]),s._v(" "),t("p",[s._v("创建方式如下图所示")]),s._v(" "),t("p",[t("img",{attrs:{src:"/images/nacos/namespaces-create.png",alt:"Namespaces Create"}})]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[s._v("配置Namespace的时候不是通过名称，而是通过命名空间的ID(上图所示)，可通过如下配置来设置服务使用的命名空间")])]),s._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--当前环境--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("profile.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("docker"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("profile.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--数据库类型--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("database.type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("postgresql"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("database.type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--代码构建控制--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--跳过构建源代码包--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("skip.build.source.package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("false"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("skip.build.source.package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--不copy代码包到docker构建目录--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("skip.copy.docker.resource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("false"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("skip.copy.docker.resource")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--不执行git commit 构建--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("skip.build.git.commit.info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("false"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("skip.build.git.commit.info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--Nacos配置中心地址--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("config.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("192.168.101.10:8848"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("config.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--Nacos配置中心命名空间,用于支持多环境.这里必须使用ID，不能使用名称,默认为空--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("config.namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("config.namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("\x3c!--Nacos服务发现地址--\x3e")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("discovery.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("192.168.101.10:8848"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("discovery.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("sentinel.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("192.168.101.10:8858"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("sentinel.server-addr")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("properties")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("profile")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h2",{attrs:{id:"docker和k8s-多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker和k8s-多环境配置"}},[s._v("#")]),s._v(" Docker和K8S 多环境配置")]),s._v(" "),t("p",[t("code",[s._v("Docker")]),s._v("和"),t("code",[s._v("K8S")]),s._v("的多环境，因为不同使用者使用的方式不同，"),t("strong",[s._v("Eurynome Cloud")]),s._v(" 并没有过多涉及。"),t("strong",[s._v("Eurynome Cloud")]),s._v(" 中，也简单定义了自己"),t("code",[s._v("Docker")]),s._v("多环境，涉及"),t("code",[s._v("production")]),s._v("和"),t("code",[s._v("development")]),s._v("两个环境，主要区别是"),t("code",[s._v("production")]),s._v("环境docker打包会包含"),t("code",[s._v("Skywalking Agent")]),s._v("，而"),t("code",[s._v("development")]),s._v("环境docker打包只会包含应用，通过执行不同的"),t("code",[s._v("docker-compose")]),s._v("文件进行区分仅此而已。如果不使用"),t("code",[s._v("Skywalking")]),s._v("，使用"),t("code",[s._v("development")]),s._v("环境打包docker即可。")]),s._v(" "),t("h2",{attrs:{id:"eurynome-cloud-的多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eurynome-cloud-的多环境配置"}},[s._v("#")]),s._v(" Eurynome Cloud 的多环境配置")]),s._v(" "),t("p",[s._v("微服务架构涉及多方面内容，"),t("strong",[s._v("Eurynome Cloud")]),s._v("的为解决多环境，综合使用"),t("code",[s._v("Maven")]),s._v(","),t("code",[s._v("Spring Boot")]),s._v("以及"),t("code",[s._v("Nacos")]),s._v("多环境的特点，以支持微服务的多环境切换和多种数据库的配置支持。")]),s._v(" "),t("h3",{attrs:{id:"eurynome-cloud-中的maven多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eurynome-cloud-中的maven多环境配置"}},[s._v("#")]),s._v(" Eurynome Cloud 中的Maven多环境配置")]),s._v(" "),t("p",[t("strong",[s._v("Eurynome Cloud")]),s._v(" Maven 多环境配置，在工程根目录下的"),t("code",[s._v("pom.xml")]),s._v("中进行配置。这里的环境配置主要解决以下问题：")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("传递参数")]),s._v("：传递"),t("code",[s._v("<profile.name>")]),s._v("和"),t("code",[s._v("<database.type>")]),s._v("两个参数。")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("<profile.name>")]),s._v("的值传递至"),t("code",[s._v("bootstrap.yml")]),s._v("中，这样就可以联动使用"),t("code",[s._v("Spring Boot")]),s._v("和"),t("code",[s._v("Nacos")]),s._v("的多环境配置；")]),s._v(" "),t("li",[t("code",[s._v("<database.type>")]),s._v("参数，传递至"),t("code",[s._v("bootstrap.yml")]),s._v("中，用于指定具体使用的数据库配置")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("Dashboard")]),s._v("：通过"),t("code",[s._v("<skip.build.source.package>")]),s._v(","),t("code",[s._v("<skip.copy.docker.resource>")]),s._v("和"),t("code",[s._v("<skip.build.git.commit.info>")]),s._v("三个参数进行打包控制。")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("<skip.build.source.package>")]),s._v(" 控制是否构建源代码包：构建源代码包便于调试"),t("code",[s._v("eurynome-cloud-athena")]),s._v("的调试。")]),s._v(" "),t("li",[t("code",[s._v("<skip.copy.docker.resource>")]),s._v(" 控制是否拷贝服务jar包：编译完成后，将可执行额外操作，将服务jar包拷贝到统一的docker build context下，使用统一配置build docker，这样就不必每一个服务都编写"),t("code",[s._v("Dockerfile")])]),s._v(" "),t("li",[t("code",[s._v("<skip.build.git.commit.info>")]),s._v(" 控制是否生成Git信息：是否将Git commit等相关信息在编译打包时，写入到jar包中。写入Git commit等相关信息，可以便于在运维过程中快速区分不同jar对应的提交信息,编译,开发者等相关信息。")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[t("code",[s._v("Nacos")]),s._v(" 和 "),t("code",[s._v("Sentinel Dashboard")]),s._v("地址指定")]),s._v("：")])]),s._v(" "),t("p",[s._v("指定不同环境下"),t("code",[s._v("Nacos")]),s._v("配置中心,服务发现和"),t("code",[s._v("Sentinel Dashboard")]),s._v("的地址，"),t("code",[s._v("Nacos")]),s._v("配置中心,服务发现地址无法写在"),t("code",[s._v("Nacos")]),s._v("的配置中，所以在此处进行设置。")]),s._v(" "),t("h3",{attrs:{id:"eurynome-cloud-中的spring-boot和nacos多环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eurynome-cloud-中的spring-boot和nacos多环境配置"}},[s._v("#")]),s._v(" Eurynome Cloud 中的Spring Boot和Nacos多环境配置")]),s._v(" "),t("ul",[t("li",[s._v("通过"),t("code",[s._v("Spring Boot")]),s._v("的"),t("code",[s._v("profiles")]),s._v("机制，实现"),t("code",[s._v("Spring Boot")]),s._v("与"),t("code",[s._v("Nacos")]),s._v("的联动。")]),s._v(" "),t("li",[s._v("利用"),t("code",[s._v("Nacos")]),s._v("的"),t("code",[s._v("Group")]),s._v("信息，实现"),t("code",[s._v("Nacos")]),s._v("配置的多环境。"),t("code",[s._v("${project_home}/platform/eurynome-cloud-management/resources/configs")]),s._v("目录下，还有一级目录。这级目录的名称，是对应"),t("code",[s._v("Nacos")]),s._v("中的"),t("code",[s._v("Group")]),s._v("。所以在向"),t("code",[s._v("Nacos")]),s._v("导入配置时，一定要注意"),t("code",[s._v("Group")]),s._v("的创建和匹配。切勿全部导入到"),t("code",[s._v("DEFAULT")]),s._v("组下，这样会导致无法正常运行。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);