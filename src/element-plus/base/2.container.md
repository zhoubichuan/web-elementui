---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 二.Container

- 组件介绍
  [Container 布局容器](https://element-plus.gitee.io/#/zh-CN/component/container)

## 组件目录

```bash
# element-plus
├── packages
│   ├── components
│   │  ├── container             # container组件
│   │  │ ├── src
│   │  │ │ ├── aside.vue
│   │  │ │ ├── container.vue
│   │  │ │ ├── footer.vue
│   │  │ │ ├── header.vue
│   │  │ │ └── main.vue
│   │  │ ├── style
│   │  │ │ ├── css.ts
│   │  │ │ └── index.ts
│   │  └── index.ts              # 组件注册的入口文件
```

## container.vue

- 简化后的代码

```vue
<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some((vNode) => {
          const tag = (vNode.type as Component).name
          return tag === 'ElHeader' || tag === 'ElFooter'
        })
      } else {
        return false
      }
    })
    return {
      isVertical,
    }
  },
})
</script>
```

[最新代码](https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/container/src/container.vue)

::: tip 大体流程

- 1.通过入口文件将 row 组件注册到 vue 组件中
- 2.用户使用 row 组件，添加各种 props 和方法
- 3.row 组件内部接收 props
- 4.监听 gutter 变化，传递给子组件
- 5.监听 gutter 变化，生成样式对象
- 6.通过返回一个 render 对象，渲染组件的标签和类以及样式和插槽

:::

## aside.vue

```vue
<template>
  <aside class="el-aside" :style="style">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      style: computed(() => {
        return props.width
          ? ({ '--el-aside-width': props.width } as CSSProperties)
          : {}
      }),
    }
  },
})
</script>
```

[最新代码](https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/col/src/col.ts)

::: tip 大体流程

- 1.通过入口文件将 col 组件注册到 vue 组件中
- 2.用户使用 col 组件，添加各种 props 和方法
- 3.col 组件内部接收 props
- 4.监听 gutter 变化，传递给子组件
- 5.监听 gutter 变化，生成样式对象
- 6.通过返回一个 render 对象，渲染组件的标签和类以及样式和插槽

:::

## footer.vue

```vue
<template>
  <footer class="el-footer" :style="style">
    <slot></slot>
  </footer>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElFooter',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      style: computed(
        () =>
          (props.height
            ? {
                '--el-footer-height': props.height,
              }
            : {}) as CSSProperties
      ),
    }
  },
})
</script>
```

[最新代码](https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/col/src/col.ts)

::: tip 大体流程

- 1.通过入口文件将 col 组件注册到 vue 组件中
- 2.用户使用 col 组件，添加各种 props 和方法
- 3.col 组件内部接收 props
- 4.监听 gutter 变化，传递给子组件
- 5.监听 gutter 变化，生成样式对象
- 6.通过返回一个 render 对象，渲染组件的标签和类以及样式和插槽

:::

## header.vue

```vue
<template>
  <header class="el-header" :style="style">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElHeader',
  props: {
    height: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    return {
      style: computed(
        () =>
          (props.height
            ? {
                '--el-header-height': props.height,
              }
            : {}) as CSSProperties
      ),
    }
  },
})
</script>
```

[最新代码](https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/col/src/col.ts)

::: tip 大体流程

- 1.通过入口文件将 col 组件注册到 vue 组件中
- 2.用户使用 col 组件，添加各种 props 和方法
- 3.col 组件内部接收 props
- 4.监听 gutter 变化，传递给子组件
- 5.监听 gutter 变化，生成样式对象
- 6.通过返回一个 render 对象，渲染组件的标签和类以及样式和插槽

:::

## main.vue

```js
<template>
  <main class="el-main">
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElMain',
})
</script>
```

[最新代码](https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/col/src/col.ts)

::: tip 大体流程

- 1.通过入口文件将 col 组件注册到 vue 组件中
- 2.用户使用 col 组件，添加各种 props 和方法
- 3.col 组件内部接收 props
- 4.监听 gutter 变化，传递给子组件
- 5.监听 gutter 变化，生成样式对象
- 6.通过返回一个 render 对象，渲染组件的标签和类以及样式和插槽

:::
