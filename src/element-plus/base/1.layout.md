---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 一.Layout

- 组件介绍
  [Layout 布局](https://element-plus.gitee.io/#/zh-CN/component/layout)

## 组件目录

```bash
# element-plus
├── packages
│   ├── components
│   │  ├── row             # row组件
│   │  │ ├── src
│   │  │ │ └── row.ts
│   │  │ ├── style
│   │  │ │ ├── css.ts
│   │  │ │ └── index.ts
│   │  └── index.ts        # 组件注册的入口文件
```

```bash
# element-plus
├── packages
│   ├── components
│   │  ├── col             # col组件
│   │  │ ├── src
│   │  │ │ └── col.ts
│   │  │ ├── style
│   │  │ │ ├── css.ts
│   │  │ │ └── index.ts
│   │  └── index.ts        # 组件注册的入口文件
```

## row.ts

- 简化后的代码

```ts
import { defineComponent, computed, h, provide } from "vue"

export default defineComponent({
  name: "ElRow",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    gutter: {
      type: Number,
      default: 0,
    },
    justify: {
      type: String,
      default: "start",
    },
    align: {
      type: String,
      default: "top",
    },
  },
  setup(props, { slots }) {
    const gutter = computed(() => props.gutter)
    provide("ElRow", {
      // row组件下面一般会有col组件，col组件内部会有一个inject方法接受上面的gutter值
      gutter,
    })
    const style = computed(() => {
      const ret = {
        marginLeft: "",
        marginRight: "",
      }
      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }
      return ret
    })
    return () =>
      h(
        //使用render方式渲染这个组件，tag默认为div元素，可以根据用户传入的值而定
        props.tag,
        {
          class: [
            "el-row",
            props.justify !== "start" ? `is-justify-${props.justify}` : "",
            props.align !== "top" ? `is-align-${props.align}` : "",
          ],
          style: style.value,
        },
        slots.default?.() //render下面，默认插槽的方式
      )
  },
})
```

[最新代码](https://github.com/zhoubichuan/element-plus/blob/dev/packages/components/row/src/row.ts)

::: tip 大体流程

- 1.通过入口文件将 row 组件注册到 vue 组件中
- 2.用户使用 row 组件，添加各种 props 和方法
- 3.row 组件内部接收 props
- 4.监听 gutter 变化，传递给子组件
- 5.监听 gutter 变化，生成样式对象
- 6.通过返回一个 render 对象，渲染组件的标签和类以及样式和插槽

:::

## col.ts

```js
import { defineComponent, computed, inject, h } from 'vue'
import type { PropType } from 'vue'

type SizeObject = {
  span: number
  offset: number
}
const ElCol = defineComponent({
  name: 'ElCol',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
    pull: {
      type: Number,
      default: 0,
    },
    push: {
      type: Number,
      default: 0,
    },
    xs: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    sm: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    md: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    lg: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
    xl: {
      type: [Number, Object] as PropType<number | SizeObject>,
      default: () => ({} as SizeObject),
    },
  },
  setup(props, { slots }) {
    const { gutter } = inject('ElRow', { gutter: { value: 0 } })
    const style = computed(() => {
      if (gutter.value) {
        return {
          paddingLeft: gutter.value / 2 + 'px',
          paddingRight: gutter.value / 2 + 'px',
        }
      }
      return {}
    })
    const classList = computed(() => {
      const ret: string[] = []
      const pos = ['span', 'offset', 'pull', 'push'] as const
      pos.forEach((prop) => {
        const size = props[prop]
        if (typeof size === 'number') {
          if (prop === 'span') ret.push(`el-col-${props[prop]}`)
          else if (size > 0) ret.push(`el-col-${prop}-${props[prop]}`)
        }
      })
      const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const
      sizes.forEach((size) => {
        if (typeof props[size] === 'number') {
          ret.push(`el-col-${size}-${props[size]}`)
        } else if (typeof props[size] === 'object') {
          const sizeProps = props[size]
          Object.keys(sizeProps).forEach((prop) => {
            ret.push(
              prop !== 'span'
                ? `el-col-${size}-${prop}-${sizeProps[prop]}`
                : `el-col-${size}-${sizeProps[prop]}`
            )
          })
        }
      })
      // this is for the fix
      if (gutter.value) {
        ret.push('is-guttered')
      }
      return ret
    })
    return () =>
      h(
        props.tag,
        {
          class: ['el-col', classList.value],
          style: style.value,
        },
        slots.default?.()
      )
  },
})
export default ElCol
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
