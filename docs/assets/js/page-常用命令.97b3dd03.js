(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{461:function(s,a,e){"use strict";e.r(a);var n=e(1),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[s._v("#")]),s._v(" 常用命令")]),s._v(" "),e("h2",{attrs:{id:"前端工程涉及命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端工程涉及命令"}},[s._v("#")]),s._v(" 前端工程涉及命令")]),s._v(" "),e("h3",{attrs:{id:"指定包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#指定包"}},[s._v("#")]),s._v(" 指定包")]),s._v(" "),e("p",[s._v("指定包，在某个包下执行 yarn 命令")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" ws:**\n\n// 例如：\n// 添加包（从npm中添加）\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" ws:example "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" lodash -D\n\n// 删除包\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" ws:example remove lodash\n\n// 运行example\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" ws:example serve\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"依赖工程内组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖工程内组件"}},[s._v("#")]),s._v(" 依赖工程内组件")]),s._v(" "),e("p",[s._v("添加本工程中的组件作为依赖包（尚未上传至 npm）")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("// 将工程中的h-button 添加至example中\n// 注意：不支持批量添加多个，要一个一个加\nlerna "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @hecate/h-button --scope @hecate/example\n\n// 删除本工程中的组件，使用yarn命令即可\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" ws:example remove @hecate/h-button\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"根目录添加依赖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#根目录添加依赖"}},[s._v("#")]),s._v(" 根目录添加依赖")]),s._v(" "),e("p",[s._v("在根目录添加依赖包")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("// -W 意思是指工作区，想要操作工程级的包，这个参数不能缺\n// -D 指定devDependencies的意思\n// 添加组件\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" lodash -D -W\n\n// 删除组件\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" lodash -W\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h3",{attrs:{id:"升级依赖包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#升级依赖包"}},[s._v("#")]),s._v(" 升级依赖包")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" upgrade-interactive --latest\n\n// 升级全局依赖包\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" global upgrade-interactive --latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"编译所有组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编译所有组件"}},[s._v("#")]),s._v(" 编译所有组件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("lerna run lib\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"清空组件-dist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清空组件-dist"}},[s._v("#")]),s._v(" 清空组件 dist")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("lerna run clean\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"清除组件中的-node-modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#清除组件中的-node-modules"}},[s._v("#")]),s._v(" 清除组件中的 node_modules")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("lerna clean\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"让各个组件中重新关联依赖包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#让各个组件中重新关联依赖包"}},[s._v("#")]),s._v(" 让各个组件中重新关联依赖包")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("lerna bootstrap 或 "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"提交代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交代码"}},[s._v("#")]),s._v(" 提交代码")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" push\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);