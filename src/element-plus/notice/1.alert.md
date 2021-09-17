---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 一.Alert 警告（❤️❤️）

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
import Alert from "./src/main"

/* istanbul ignore next */
Alert.install = function(Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
```

在 vue 项目中通过引用这个组件，然后通过 vue.use 加载这个组件，内部会调用 install 方法，将组件加载到 Vue 实例内部

## main.vue

```vue
<template>
  <transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
      v-show="visible"
      role="alert"
    >
      <i
        class="el-alert__icon"
        :class="[iconClass, isBigIcon]"
        v-if="showIcon"
      ></i>
      <div class="el-alert__content">
        <span
          class="el-alert__title"
          :class="[isBoldTitle]"
          v-if="title || $slots.title"
        >
          <slot name="title">{{ title }}</slot>
        </span>
        <p class="el-alert__description" v-if="$slots.default && !description">
          <slot></slot>
        </p>
        <p class="el-alert__description" v-if="description && !$slots.default">
          {{ description }}
        </p>
        <i
          class="el-alert__closebtn"
          :class="{
            'is-customed': closeText !== '',
            'el-icon-close': closeText === '',
          }"
          v-show="closable"
          @click="close()"
          >{{ closeText }}</i
        >
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
const TYPE_CLASSES_MAP = {
  success: "el-icon-success",
  warning: "el-icon-warning",
  error: "el-icon-error",
}
export default {
  name: "ElAlert",

  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "info",
    },
    closable: {
      type: Boolean,
      default: true,
    },
    closeText: {
      type: String,
      default: "",
    },
    showIcon: Boolean,
    center: Boolean,
    effect: {
      type: String,
      default: "light",
      validator: function(value) {
        return ["light", "dark"].indexOf(value) !== -1
      },
    },
  },

  data() {
    return {
      visible: true,
    }
  },

  methods: {
    close() {
      this.visible = false
      this.$emit("close")
    },
  },

  computed: {
    typeClass() {
      return `el-alert--${this.type}`
    },

    iconClass() {
      return TYPE_CLASSES_MAP[this.type] || "el-icon-info"
    },

    isBigIcon() {
      return this.description || this.$slots.default ? "is-big" : ""
    },

    isBoldTitle() {
      return this.description || this.$slots.default ? "is-bold" : ""
    },
  },
}
</script>
```
