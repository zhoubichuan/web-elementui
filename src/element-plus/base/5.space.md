---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 五.Space

- 组件介绍

  [Layout 布局](https://element-plus.gitee.io/#/zh-CN/component/layout)

## index.ts

```js
import Space from './src/index'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

const _Space = Space as SFCWithInstall<typeof Space>

_Space.install = (app: App) => {
  app.component(_Space.name, _Space)
}

export default _Space
export const ElSpace = _Space
```

## index.ts

```js
import {
  defineComponent,
  renderSlot,
  createVNode,
  createTextVNode,
  isVNode,
} from 'vue'
import {
  PatchFlags,
  isFragment,
  isValidElementNode,
} from '@element-plus/utils/vnode'
import { isArray } from '@element-plus/utils/util'
import Item from './item.vue'
import { useSpace, defaultProps } from './useSpace'

import type { VNode, ExtractPropTypes, Slots } from 'vue'

export default defineComponent({
  name: 'ElSpace',
  props: defaultProps,
  setup(props) {
    return useSpace(props)
  },

  render(
    ctx: ReturnType<typeof useSpace> &
      ExtractPropTypes<typeof defaultProps> & { $slots: Slots }
  ) {
    const {
      classes,
      $slots,
      containerStyle,
      itemStyle,
      spacer,
      prefixCls,
      direction,
    } = ctx

    const children = renderSlot($slots, 'default', { key: 0 }, () => [])
    // retrieve the children out via a simple for loop
    // the edge case here is that when users uses directives like <v-for>, <v-if>
    // we need to go one layer deeper

    if (children.children.length === 0) return null

    // loop the children, if current children is rendered via `renderList` or `<v-for>`
    if (isArray(children.children)) {
      let extractedChildren = []
      children.children.forEach((child: VNode, loopKey) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach((nested, key) => {
              extractedChildren.push(
                createVNode(
                  Item,
                  {
                    style: itemStyle,
                    prefixCls,
                    key: `nested-${key}`,
                  },
                  {
                    default: () => [nested as VNode],
                  },
                  PatchFlags.PROPS | PatchFlags.STYLE,
                  ['style', 'prefixCls']
                )
              )
            })
          }
          // if the current child is valid vnode, then append this current vnode
          // to item as child node.
        } else if (isValidElementNode(child)) {
          extractedChildren.push(
            createVNode(
              Item,
              {
                style: itemStyle,
                prefixCls,
                key: `LoopKey${loopKey}`,
              },
              {
                default: () => [child as VNode],
              },
              PatchFlags.PROPS | PatchFlags.STYLE,
              ['style', 'prefixCls']
            )
          )
        }
      })

      if (spacer) {
        // track the current rendering index, when encounters the last element
        // then no need to add a spacer after it.
        const len = extractedChildren.length - 1
        extractedChildren = extractedChildren.reduce((acc, child, idx) => {
          return idx === len
            ? [...acc, child]
            : [
                ...acc,
                child,
                createVNode(
                  'span',
                  // adding width 100% for vertical alignment,
                  // when the spacer inherit the width from the
                  // parent, this span's width was not set, so space
                  // might disappear
                  {
                    style: [
                      itemStyle,
                      direction === 'vertical' ? 'width: 100%' : null,
                    ],
                    key: idx,
                  },
                  [
                    // if spacer is already a valid vnode, then append it to the current
                    // span element.
                    // otherwise, treat it as string.
                    isVNode(spacer)
                      ? spacer
                      : createTextVNode(spacer as string, PatchFlags.TEXT),
                  ],
                  PatchFlags.STYLE
                ),
              ]
        }, [])
      }

      // spacer container.
      return createVNode(
        'div',
        {
          class: classes,
          style: containerStyle,
        },
        extractedChildren,
        PatchFlags.STYLE | PatchFlags.CLASS
      )
    }

    return children.children
  },
})
```

## item.vue

```vue
<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"

export default defineComponent({
  props: {
    prefixCls: {
      type: String,
      default: "el-space",
    },
  },
  setup(props) {
    return {
      classes: computed(() => `${props.prefixCls}__item`),
    }
  },
})
</script>
```

## useSpace.ts

```js
import { ref, computed, watch, isVNode } from 'vue'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { isNumber, isArray, isString } from '@element-plus/utils/util'

import type { PropType, ExtractPropTypes, CSSProperties, VNodeChild } from 'vue'
import type { ComponentSize } from '@element-plus/utils/types'

const SizeMap: Record<ComponentSize, number> = {
  mini: 4,
  small: 8,
  medium: 12,
  large: 16,
}

export const defaultProps = {
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal',
  },

  class: {
    type: [String, Object, Array],
    default: '',
  },

  style: {
    type: [String, Array, Object] as PropType<
      string | Array<any> | CSSProperties
    >,
  },

  alignment: {
    type: String as PropType<''>,
    default: 'center',
  },

  prefixCls: {
    type: String,
  },

  spacer: {
    type: [Object, String, Number] as PropType<VNodeChild>,
    default: null,
    validator: (val: unknown) => {
      return isVNode(val) || isNumber(val) || isString(val)
    },
  },

  wrap: {
    type: Boolean,
    default: false,
  },

  fill: {
    type: Boolean,
    default: false,
  },

  fillRatio: {
    type: Number,
    default: 100,
  },

  size: {
    type: [String, Array, Number] as PropType<
      ComponentSize | [number, number] | number
    >,
    validator: (val: unknown) => {
      return (
        isValidComponentSize(val as string) || isNumber(val) || isArray(val)
      )
    },
  },
}

export function useSpace(props: ExtractPropTypes<typeof defaultProps>) {
  const classes = computed(() => [
    'el-space',
    `el-space--${props.direction}`,
    props.class,
  ])

  const horizontalSize = ref(0)
  const verticalSize = ref(0)

  watch(
    () => [props.size, props.wrap, props.direction, props.fill],
    ([size = 'small', wrap, dir, fill]) => {
      // when the specified size have been given
      if (isArray(size)) {
        const [h = 0, v = 0] = size
        horizontalSize.value = h
        verticalSize.value = v
      } else {
        let val: number
        if (isNumber(size)) {
          val = size as number
        } else {
          val = SizeMap[size as string] || SizeMap.small
        }

        if ((wrap || fill) && dir === 'horizontal') {
          horizontalSize.value = verticalSize.value = val
        } else {
          if (dir === 'horizontal') {
            horizontalSize.value = val
            verticalSize.value = 0
          } else {
            verticalSize.value = val
            horizontalSize.value = 0
          }
        }
      }
    },
    { immediate: true }
  )

  const containerStyle = computed(() => {
    const wrapKls: CSSProperties =
      props.wrap || props.fill
        ? { flexWrap: 'wrap', marginBottom: `-${verticalSize.value}px` }
        : null
    const alignment: CSSProperties = {
      alignItems: props.alignment,
    }
    return [wrapKls, alignment, props.style] as Array<CSSProperties>
  })

  const itemStyle = computed(() => {
    const itemBaseStyle = {
      paddingBottom: `${verticalSize.value}px`,
      marginRight: `${horizontalSize.value}px`,
    }

    const fillStyle = props.fill
      ? { flexGrow: 1, minWidth: `${props.fillRatio}%` }
      : null

    return [itemBaseStyle, fillStyle] as Array<CSSProperties>
  })

  return {
    classes,
    containerStyle,
    itemStyle,
  }
}
```
