(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{657:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"基础部分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础部分"}},[s._v("#")]),s._v(" 基础部分")]),s._v(" "),t("h1",{attrs:{id:"element-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#element-ui"}},[s._v("#")]),s._v(" Element-UI")]),s._v(" "),t("h1",{attrs:{id:"elementui-源码解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elementui-源码解析"}},[s._v("#")]),s._v(" ElementUI 源码解析")]),s._v(" "),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[s._v("#")]),s._v(" 目录结构")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("├── build            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置webpack的配置文件")]),s._v("\n├── examples         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置element api的页面文档")]),s._v("\n├── node_modules     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目依赖包目录")]),s._v("\n├── packages         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置element的组件（css样式放置在这个目录下theme-chalk下）")]),s._v("\n│   ├── xxx          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xxx组件")]),s._v("\n│   └── yyy          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yyy组件")]),s._v("\n├── src\n│   ├── directives   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置自定义指令")]),s._v("\n│   ├── locale       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置语言的配置文件")]),s._v("\n│   ├── mixins       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置组件用的混合文件")]),s._v("\n│   ├── transitions  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置动画配置文件")]),s._v("\n│   ├── utils        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 放置用到工具函数文件")]),s._v("\n│   └── index.js     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 组件注册的入口文件")]),s._v("\n├── "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试文件")]),s._v("\n├── types            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# typescript的数据类")]),s._v("\n├── package.json     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 包管理文件")]),s._v("\n└── yarn.lock        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# yarn依赖信息文件")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"入口文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入口文件"}},[s._v("#")]),s._v(" 入口文件")]),s._v(" "),t("p",[s._v("src/index.js")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2.15.1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("locale")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("use"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("i18n")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("i18n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 通过Vue.use()可以全局引入所有组件")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ElementUI组件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" opts "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  locale"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("i18n")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("i18n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  components"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("forEach")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" component"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("InfiniteScroll"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  Vue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Loading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("directive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ELEMENT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("size")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("zIndex")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" opts"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("zIndex "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$loading "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Loading"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$msgbox "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MessageBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$alert "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MessageBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$confirm "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MessageBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("confirm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$prompt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MessageBox"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prompt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$notify "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Notification"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("prototype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("$message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("我们在使用"),t("code",[s._v("ElemnentUI")]),s._v("时，一般会先引入组件，然后"),t("code",[s._v("Vue.use(ElementUI)")]),s._v(",会触发"),t("code",[s._v("install")]),s._v("方法，循环全部组件，安装为全局组件，所以后续页面中使用组件时不需要再次引入。")]),s._v(" "),t("p",[s._v("当我们在页面中单独引入"),t("code",[s._v("ElemnentUI")]),s._v("某个组件时，由于没有触发"),t("code",[s._v("install")]),s._v("方法，引入那个组件就加载哪个组件，从而减少包的体积。")]),s._v(" "),t("h2",{attrs:{id:"elementui-组件解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#elementui-组件解析"}},[s._v("#")]),s._v(" ElementUI 组件解析")])])}),[],!1,null,null,null);t.default=e.exports}}]);