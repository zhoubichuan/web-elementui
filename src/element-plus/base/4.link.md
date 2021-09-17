---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 四.Link

- 组件介绍

  [Layout 布局](https://element-plus.gitee.io/#/zh-CN/component/layout)

## index.ts

```js
import Link from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Link.install = (app: App): void => {
  app.component(Link.name, Link)
}

const _Link = Link as SFCWithInstall<typeof Link>

export default _Link
export const ElLink = _Link
```

## index.vue

```vue
<template>
  <a
    :class="[
      'el-link',
      type ? `el-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline',
    ]"
    :href="disabled || !href ? null : href"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>

    <span v-if="$slots.default" class="el-link--inner">
      <slot></slot>
    </span>

    <slot v-if="$slots.icon" name="icon"></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

type ILinkType = PropType<
  'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'
>

export default defineComponent({
  name: 'ElLink',
  props: {
    type: {
      type: String as ILinkType,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
        ].includes(val)
      },
    },
    underline: {
      type: Boolean,
      default: true,
    },
    disabled: { type: Boolean, default: false },
    href: { type: String, default: '' },
    icon: { type: String, default: '' },
  },
  emits: ['click'],
  setup(props, { emit }) {
    function handleClick(event: Event) {
      if (!props.disabled) {
        emit('click', event)
      }
    }

    return {
      handleClick,
    }
  },
})
</script>
```
