---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 七.Config Provider

- 组件介绍

  [Layout 布局](https://element-plus.gitee.io/#/zh-CN/component/layout)

## index.ts

```js
import { withInstall } from "@element-plus/utils/with-install"
import { ConfigProvider } from "./config-provider"

export const ElConfigProvider = withInstall(ConfigProvider)
export default ElConfigProvider
```

## config-provider.ts

```js
import { defineComponent } from "vue"

import { useLocaleProps, useLocale } from "@element-plus/hooks"

export const ConfigProvider = defineComponent({
  name: "ElConfigProvider",
  props: {
    ...useLocaleProps,
    // Add more configs
  },

  setup(_, { slots }) {
    useLocale()

    return () => slots.default()
  },
})
```
