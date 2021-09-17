---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 二.Loading 加载(❤️❤️❤️)

- 组件介绍
  [Layout 布局](https://element-plus.gitee.io/#/zh-CN/component/layout)
组件目录

```bash
# element-ui
├── packages         # 放置element的组件（css样式放置在这个目录下theme-chalk下）
│   ├── alert
│   │  ├── src          # alert组件
│   │  │ └── main.vue     # 组件注册的入口文件
│   │  └── index.js     # 组件注册的入口文件
```

## index.js

```js
import directive from "./src/directive"
import service from "./src/index"

export default {
  install(Vue) {
    Vue.use(directive)
    Vue.prototype.$loading = service
  },
  directive,
  service,
}
```

在 vue 项目中通过引用这个组件，然后通过 vue.use 加载这个组件，内部会调用 install 方法，将组件加载到 Vue 实例内部

## index.js

```js
import Vue from "vue"
import loadingVue from "./loading.vue"
import { addClass, removeClass, getStyle } from "element-ui/src/utils/dom"
import { PopupManager } from "element-ui/src/utils/popup"
import afterLeave from "element-ui/src/utils/after-leave"
import merge from "element-ui/src/utils/merge"

const LoadingConstructor = Vue.extend(loadingVue)

const defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: "",
}

let fullscreenLoading

LoadingConstructor.prototype.originalPosition = ""
LoadingConstructor.prototype.originalOverflow = ""

LoadingConstructor.prototype.close = function() {
  if (this.fullscreen) {
    fullscreenLoading = undefined
  }
  afterLeave(
    this,
    (_) => {
      const target = this.fullscreen || this.body ? document.body : this.target
      removeClass(target, "el-loading-parent--relative")
      removeClass(target, "el-loading-parent--hidden")
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el)
      }
      this.$destroy()
    },
    300
  )
  this.visible = false
}

const addStyle = (options, parent, instance) => {
  let maskStyle = {}
  if (options.fullscreen) {
    instance.originalPosition = getStyle(document.body, "position")
    instance.originalOverflow = getStyle(document.body, "overflow")
    maskStyle.zIndex = PopupManager.nextZIndex()
  } else if (options.body) {
    instance.originalPosition = getStyle(document.body, "position")
    ;["top", "left"].forEach((property) => {
      let scroll = property === "top" ? "scrollTop" : "scrollLeft"
      maskStyle[property] =
        options.target.getBoundingClientRect()[property] +
        document.body[scroll] +
        document.documentElement[scroll] +
        "px"
    })
    ;["height", "width"].forEach((property) => {
      maskStyle[property] =
        options.target.getBoundingClientRect()[property] + "px"
    })
  } else {
    instance.originalPosition = getStyle(parent, "position")
  }
  Object.keys(maskStyle).forEach((property) => {
    instance.$el.style[property] = maskStyle[property]
  })
}

const Loading = (options = {}) => {
  if (Vue.prototype.$isServer) return
  options = merge({}, defaults, options)
  if (typeof options.target === "string") {
    options.target = document.querySelector(options.target)
  }
  options.target = options.target || document.body
  if (options.target !== document.body) {
    options.fullscreen = false
  } else {
    options.body = true
  }
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading
  }

  let parent = options.body ? document.body : options.target
  let instance = new LoadingConstructor({
    el: document.createElement("div"),
    data: options,
  })

  addStyle(options, parent, instance)
  if (
    instance.originalPosition !== "absolute" &&
    instance.originalPosition !== "fixed"
  ) {
    addClass(parent, "el-loading-parent--relative")
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, "el-loading-parent--hidden")
  }
  parent.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  if (options.fullscreen) {
    fullscreenLoading = instance
  }
  return instance
}

export default Loading
```
