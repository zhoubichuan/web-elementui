---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 六.Scrollbar

- 组件介绍

  [Layout 布局](https://element-plus.gitee.io/#/zh-CN/component/layout)

## index.ts

```js
import Scrollbar from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Scrollbar.install = (app: App): void => {
  app.component(Scrollbar.name, Scrollbar)
}

const _Scrollbar = Scrollbar as SFCWithInstall<typeof Scrollbar>

export default _Scrollbar
export const ElScrollbar = _Scrollbar

export * from './src/util'
```

## index.vue

```vue
<template>
  <div ref="scrollbar" class="el-scrollbar">
    <div
      ref="wrap"
      :class="[
        wrapClass,
        'el-scrollbar__wrap',
        native ? '' : 'el-scrollbar__wrap--hidden-default',
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="['el-scrollbar__view', viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar :move="moveX" :ratio="ratioX" :size="sizeWidth" :always="always" />
      <bar
        :move="moveY"
        :ratio="ratioY"
        :size="sizeHeight"
        vertical
        :always="always"
      />
    </template>
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
} from 'vue'
import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'
import {
  addUnit,
  isArray,
  isNumber,
  isString,
  toObject,
} from '@element-plus/utils/util'
import { debugWarn } from '@element-plus/utils/error'
import Bar from './bar.vue'

import type { CSSProperties, PropType } from 'vue'

export default defineComponent({
  name: 'ElScrollbar',
  components: { Bar },
  props: {
    height: {
      type: [String, Number],
      default: '',
    },
    maxHeight: {
      type: [String, Number],
      default: '',
    },
    native: {
      type: Boolean,
      default: false,
    },
    wrapStyle: {
      type: [String, Array] as PropType<string | CSSProperties[]>,
      default: '',
    },
    wrapClass: {
      type: [String, Array],
      default: '',
    },
    viewClass: {
      type: [String, Array],
      default: '',
    },
    viewStyle: {
      type: [String, Array],
      default: '',
    },
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div',
    },
    always: {
      type: Boolean,
      default: false,
    },
    minSize: {
      type: Number,
      default: 20,
    },
  },
  emits: ['scroll'],
  setup(props, { emit }) {
    const sizeWidth = ref('0')
    const sizeHeight = ref('0')
    const moveX = ref(0)
    const moveY = ref(0)
    const scrollbar = ref(null)
    const wrap = ref(null)
    const resize = ref(null)
    const ratioY = ref(1)
    const ratioX = ref(1)

    const SCOPE = 'ElScrollbar'
    const GAP = 4 // top 2 + bottom 2 of bar instance

    provide('scrollbar', scrollbar)
    provide('scrollbar-wrap', wrap)

    const handleScroll = () => {
      if (wrap.value) {
        const offsetHeight = wrap.value.offsetHeight - GAP
        const offsetWidth = wrap.value.offsetWidth - GAP

        moveY.value =
          ((wrap.value.scrollTop * 100) / offsetHeight) * ratioY.value
        moveX.value =
          ((wrap.value.scrollLeft * 100) / offsetWidth) * ratioX.value

        emit('scroll', {
          scrollTop: wrap.value.scrollTop,
          scrollLeft: wrap.value.scrollLeft,
        })
      }
    }

    const setScrollTop = (value: number) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, 'value must be a number')
        return
      }
      wrap.value.scrollTop = value
    }

    const setScrollLeft = (value: number) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, 'value must be a number')
        return
      }
      wrap.value.scrollLeft = value
    }

    const update = () => {
      if (!wrap.value) return

      const offsetHeight = wrap.value.offsetHeight - GAP
      const offsetWidth = wrap.value.offsetWidth - GAP

      const originalHeight = offsetHeight ** 2 / wrap.value.scrollHeight
      const originalWidth = offsetWidth ** 2 / wrap.value.scrollWidth
      const height = Math.max(originalHeight, props.minSize)
      const width = Math.max(originalWidth, props.minSize)

      ratioY.value =
        originalHeight /
        (offsetHeight - originalHeight) /
        (height / (offsetHeight - height))
      ratioX.value =
        originalWidth /
        (offsetWidth - originalWidth) /
        (width / (offsetWidth - width))

      sizeHeight.value = height + GAP < offsetHeight ? height + 'px' : ''
      sizeWidth.value = width + GAP < offsetWidth ? width + 'px' : ''
    }

    const style = computed(() => {
      let style = props.wrapStyle as CSSProperties
      if (isArray(style)) {
        style = toObject(style)
        style.height = addUnit(props.height)
        style.maxHeight = addUnit(props.maxHeight)
      } else if (isString(style)) {
        style += addUnit(props.height)
          ? `height: ${addUnit(props.height)};`
          : ''
        style += addUnit(props.maxHeight)
          ? `max-height: ${addUnit(props.maxHeight)};`
          : ''
      }
      return style
    })

    onMounted(() => {
      if (!props.native) {
        nextTick(update)
      }
      if (!props.noresize) {
        addResizeListener(resize.value, update)
        addEventListener('resize', update)
      }
    })

    onBeforeUnmount(() => {
      if (!props.noresize) {
        removeResizeListener(resize.value, update)
        removeEventListener('resize', update)
      }
    })

    return {
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      scrollbar,
      wrap,
      resize,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft,
    }
  },
})
</script>
```

## bar.vue

```vue
<template>
  <transition name="el-scrollbar-fade">
    <div
      v-show="always || visible"
      ref="instance"
      :class="['el-scrollbar__bar', 'is-' + bar.key]"
      @mousedown="clickTrackHandler"
    >
      <div
        ref="thumb"
        class="el-scrollbar__thumb"
        :style="thumbStyle"
        @mousedown="clickThumbHandler"
      ></div>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  inject,
  onBeforeUnmount,
  onMounted,
  ref,
} from 'vue'
import { off, on } from '@element-plus/utils/dom'
import { BAR_MAP, renderThumbStyle } from './util'

import type { Ref } from 'vue'
import type { Nullable } from '@element-plus/utils/types'

export default defineComponent({
  name: 'Bar',
  props: {
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: Number,
    always: Boolean,
  },
  setup(props) {
    const instance = ref(null)
    const thumb = ref(null)
    const scrollbar = inject('scrollbar', {} as Ref<Nullable<HTMLElement>>)
    const wrap = inject('scrollbar-wrap', {} as Ref<Nullable<HTMLElement>>)
    const bar = computed(
      () => BAR_MAP[props.vertical ? 'vertical' : 'horizontal']
    )
    const barStore = ref({})
    const cursorDown = ref(null)
    const cursorLeave = ref(null)
    const visible = ref(false)
    let onselectstartStore = null

    const offsetRatio = computed(() => {
      // offsetRatioX = original width of thumb / current width of thumb / ratioX
      // offsetRatioY = original height of thumb / current height of thumb / ratioY
      // instance height = wrap height - GAP
      return (
        instance.value[bar.value.offset] ** 2 /
        wrap.value[bar.value.scrollSize] /
        props.ratio /
        thumb.value[bar.value.offset]
      )
    })

    const clickThumbHandler = (e: MouseEvent) => {
      // prevent click event of middle and right button
      e.stopPropagation()
      if (e.ctrlKey || [1, 2].includes(e.button)) {
        return
      }
      window.getSelection().removeAllRanges()
      startDrag(e)
      barStore.value[bar.value.axis] =
        e.currentTarget[bar.value.offset] -
        (e[bar.value.client] -
          (e.currentTarget as HTMLElement).getBoundingClientRect()[
            bar.value.direction
          ])
    }

    const clickTrackHandler = (e: MouseEvent) => {
      const offset = Math.abs(
        (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]
      )
      const thumbHalf = thumb.value[bar.value.offset] / 2
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]

      wrap.value[bar.value.scroll] =
        (thumbPositionPercentage * wrap.value[bar.value.scrollSize]) / 100
    }

    const startDrag = (e: MouseEvent) => {
      e.stopImmediatePropagation()
      cursorDown.value = true
      on(document, 'mousemove', mouseMoveDocumentHandler)
      on(document, 'mouseup', mouseUpDocumentHandler)
      onselectstartStore = document.onselectstart
      document.onselectstart = () => false
    }

    const mouseMoveDocumentHandler = (e: MouseEvent) => {
      if (cursorDown.value === false) return
      const prevPage = barStore.value[bar.value.axis]

      if (!prevPage) return

      const offset =
        (instance.value.getBoundingClientRect()[bar.value.direction] -
          e[bar.value.client]) *
        -1
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
        instance.value[bar.value.offset]
      wrap.value[bar.value.scroll] =
        (thumbPositionPercentage * wrap.value[bar.value.scrollSize]) / 100
    }

    const mouseUpDocumentHandler = () => {
      cursorDown.value = false
      barStore.value[bar.value.axis] = 0
      off(document, 'mousemove', mouseMoveDocumentHandler)
      off(document, 'mouseup', mouseUpDocumentHandler)
      document.onselectstart = onselectstartStore
      if (cursorLeave.value) {
        visible.value = false
      }
    }

    const thumbStyle = computed(() =>
      renderThumbStyle({
        size: props.size,
        move: props.move,
        bar: bar.value,
      })
    )

    const mouseMoveScrollbarHandler = () => {
      cursorLeave.value = false
      visible.value = !!props.size
    }

    const mouseLeaveScrollbarHandler = () => {
      cursorLeave.value = true
      visible.value = cursorDown.value
    }

    onMounted(() => {
      on(scrollbar.value, 'mousemove', mouseMoveScrollbarHandler)
      on(scrollbar.value, 'mouseleave', mouseLeaveScrollbarHandler)
    })

    onBeforeUnmount(() => {
      off(document, 'mouseup', mouseUpDocumentHandler)
      off(scrollbar.value, 'mousemove', mouseMoveScrollbarHandler)
      off(scrollbar.value, 'mouseleave', mouseLeaveScrollbarHandler)
    })

    return {
      instance,
      thumb,
      bar,
      clickTrackHandler,
      clickThumbHandler,
      thumbStyle,
      visible,
    }
  },
})
</script>
```
