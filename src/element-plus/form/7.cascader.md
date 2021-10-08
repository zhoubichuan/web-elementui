---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-语法
  - name: keywords
    content: vuepress,最新技术文档,vuepress语法,markdown语法
---

# 一.Cascader

- [Cascader 级联选择器](https://element-plus.gitee.io/zh-CN/component/cascader.html)

> - element-plus
>   > - packages
>   >   > - components
>   >   >   > - cascader `【Cascader 级联选择器】`
>   >   >   >   > - \_\_tests\_\_
>   >   >   >   >   > - `cascader.spec.ts`
>   >   >   >   >   >   ::: details 测试用例
>   >   >   >   >   >
>   >   >   >   >   >   ```ts
>   >   >   >   >   >   import { nextTick } from "vue"
>   >   >   >   >   >   import { mount } from "@vue/test-utils"
>   >   >   >   >   >   import Cascader from "../src/index.vue"
>   >   >   >   >   >
>   >   >   >   >   >   const OPTIONS = [
>   >   >   >   >   >     {
>   >   >   >   >   >       value: "zhejiang",
>   >   >   >   >   >       label: "Zhejiang",
>   >   >   >   >   >       children: [
>   >   >   >   >   >         {
>   >   >   >   >   >           value: "hangzhou",
>   >   >   >   >   >           label: "Hangzhou",
>   >   >   >   >   >         },
>   >   >   >   >   >         {
>   >   >   >   >   >           value: "ningbo",
>   >   >   >   >   >           label: "Ningbo",
>   >   >   >   >   >         },
>   >   >   >   >   >       ],
>   >   >   >   >   >     },
>   >   >   >   >   >   ]
>   >   >   >   >   >
>   >   >   >   >   >   const AXIOM = "Rem is the best girl"
>   >   >   >   >   >
>   >   >   >   >   >   const TRIGGER = ".el-cascader"
>   >   >   >   >   >   const DROPDOWN = ".el-cascader__dropdown"
>   >   >   >   >   >   const NODE = ".el-cascader-node"
>   >   >   >   >   >   const ARROW = ".el-icon-arrow-down"
>   >   >   >   >   >   const CLEAR_BTN = ".el-icon-circle-close"
>   >   >   >   >   >   const TAG = ".el-tag"
>   >   >   >   >   >   const SUGGESTION_ITEM = ".el-cascader__suggestion-item"
>   >   >   >   >   >   const CHECK_ICON = ".el-icon-check"
>   >   >   >   >   >
>   >   >   >   >   >   const _mount: typeof mount = (options) =>
>   >   >   >   >   >     mount(
>   >   >   >   >   >       {
>   >   >   >   >   >         components: {
>   >   >   >   >   >           Cascader,
>   >   >   >   >   >         },
>   >   >   >   >   >         ...options,
>   >   >   >   >   >       },
>   >   >   >   >   >       {
>   >   >   >   >   >         attachTo: "body",
>   >   >   >   >   >       }
>   >   >   >   >   >     )
>   >   >   >   >   >
>   >   >   >   >   >   afterEach(() => {
>   >   >   >   >   >     document.body.innerHTML = ""
>   >   >   >   >   >   })
>   >   >   >   >   >
>   >   >   >   >   >   describe("Cascader.vue", () => {
>   >   >   >   >   >     test("toggle popper visible", async () => {
>   >   >   >   >   >       const handleVisibleChange = jest.fn()
>   >   >   >   >   >       const wrapper = _mount({
>   >   >   >   >   >         template: `
>   >   >   >   >   >          <cascader @visible-change="handleVisibleChange" />
>   >   >   >   >   >        `,
>   >   >   >   >   >         methods: {
>   >   >   >   >   >           handleVisibleChange,
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       const trigger = wrapper.find(TRIGGER)
>   >   >   >   >   >       const dropdown = document.querySelector(
>   >   >   >   >   >         DROPDOWN
>   >   >   >   >   >       ) as HTMLDivElement
>   >   >   >   >   >
>   >   >   >   >   >       await trigger.trigger("click")
>   >   >   >   >   >       expect(dropdown.style.display).not.toBe("none")
>   >   >   >   >   >       expect(handleVisibleChange).toBeCalledWith(true)
>   >   >   >   >   >       await trigger.trigger("click")
>   >   >   >   >   >       expect(handleVisibleChange).toBeCalledWith(false)
>   >   >   >   >   >       await trigger.trigger("click")
>   >   >   >   >   >       document.body.click()
>   >   >   >   >   >       expect(handleVisibleChange).toBeCalledWith(false)
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("expand and check", async () => {
>   >   >   >   >   >       const handleChange = jest.fn()
>   >   >   >   >   >       const handleExpandChange = jest.fn()
>   >   >   >   >   >       const wrapper = _mount({
>   >   >   >   >   >         template: `
>   >   >   >   >   >          <cascader
>   >   >   >   >   >            v-model="value"
>   >   >   >   >   >            :options="options"
>   >   >   >   >   >            @change="handleChange"
>   >   >   >   >   >            @expand-change="handleExpandChange"
>   >   >   >   >   >          />
>   >   >   >   >   >        `,
>   >   >   >   >   >         data() {
>   >   >   >   >   >           return {
>   >   >   >   >   >             value: [],
>   >   >   >   >   >             options: OPTIONS,
>   >   >   >   >   >           }
>   >   >   >   >   >         },
>   >   >   >   >   >         methods: {
>   >   >   >   >   >           handleChange,
>   >   >   >   >   >           handleExpandChange,
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       const trigger = wrapper.find(TRIGGER)
>   >   >   >   >   >       const dropdown = document.querySelector(
>   >   >   >   >   >         DROPDOWN
>   >   >   >   >   >       ) as HTMLDivElement
>   >   >   >   >   >       const vm = wrapper.vm as any
>   >   >   >   >   >
>   >   >   >   >   >       await trigger.trigger("click")
>   >   >   >   >   >       ;(dropdown.querySelector(
>   >   >   >   >   >         NODE
>   >   >   >   >   >       ) as HTMLElement).click()
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(handleExpandChange).toBeCalledWith([
>   >   >   >   >   >         "zhejiang",
>   >   >   >   >   >       ])
>   >   >   >   >   >       ;(dropdown.querySelectorAll(
>   >   >   >   >   >         NODE
>   >   >   >   >   >       )[1] as HTMLElement).click()
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(handleChange).toBeCalledWith([
>   >   >   >   >   >         "zhejiang",
>   >   >   >   >   >         "hangzhou",
>   >   >   >   >   >       ])
>   >   >   >   >   >       expect(vm.value).toEqual(["zhejiang", "hangzhou"])
>   >   >   >   >   >       expect(wrapper.find("input").element.value).toBe(
>   >   >   >   >   >         "Zhejiang / Hangzhou"
>   >   >   >   >   >       )
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("with default value", async () => {
>   >   >   >   >   >       const wrapper = mount(Cascader, {
>   >   >   >   >   >         props: {
>   >   >   >   >   >           options: OPTIONS,
>   >   >   >   >   >           modelValue: ["zhejiang", "hangzhou"],
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(wrapper.find("input").element.value).toBe(
>   >   >   >   >   >         "Zhejiang / Hangzhou"
>   >   >   >   >   >       )
>   >   >   >   >   >       await wrapper.setProps({
>   >   >   >   >   >         modelValue: ["zhejiang", "ningbo"],
>   >   >   >   >   >       })
>   >   >   >   >   >       expect(wrapper.find("input").element.value).toBe(
>   >   >   >   >   >         "Zhejiang / Ningbo"
>   >   >   >   >   >       )
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("options change", async () => {
>   >   >   >   >   >       const wrapper = mount(Cascader, {
>   >   >   >   >   >         props: {
>   >   >   >   >   >           options: OPTIONS,
>   >   >   >   >   >           modelValue: ["zhejiang", "hangzhou"],
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       await wrapper.setProps({ options: [] })
>   >   >   >   >   >       expect(wrapper.find("input").element.value).toBe("")
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("disabled", async () => {
>   >   >   >   >   >       const handleVisibleChange = jest.fn()
>   >   >   >   >   >       const wrapper = _mount({
>   >   >   >   >   >         template: `
>   >   >   >   >   >          <cascader disabled @visible-change="handleVisibleChange" />
>   >   >   >   >   >        `,
>   >   >   >   >   >         methods: {
>   >   >   >   >   >           handleVisibleChange,
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       await wrapper.find(TRIGGER).trigger("click")
>   >   >   >   >   >       expect(handleVisibleChange).not.toBeCalled()
>   >   >   >   >   >       expect(
>   >   >   >   >   >         wrapper.find("input[disabled]").exists()
>   >   >   >   >   >       ).toBe(true)
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("custom placeholder", async () => {
>   >   >   >   >   >       const wrapper = mount(Cascader, {
>   >   >   >   >   >         props: {
>   >   >   >   >   >           placeholder: AXIOM,
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       expect(
>   >   >   >   >   >         wrapper.find("input").attributes().placeholder
>   >   >   >   >   >       ).toBe(AXIOM)
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("clearable", async () => {
>   >   >   >   >   >       const wrapper = mount(Cascader, {
>   >   >   >   >   >         props: {
>   >   >   >   >   >           options: OPTIONS,
>   >   >   >   >   >           clearable: true,
>   >   >   >   >   >           modelValue: ["zhejiang", "hangzhou"],
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       const trigger = wrapper.find(TRIGGER)
>   >   >   >   >   >       expect(wrapper.find(ARROW).exists()).toBe(true)
>   >   >   >   >   >       await trigger.trigger("mouseenter")
>   >   >   >   >   >       expect(wrapper.find(ARROW).exists()).toBe(false)
>   >   >   >   >   >       await wrapper.find(CLEAR_BTN).trigger("click")
>   >   >   >   >   >       expect(wrapper.find("input").element.value).toBe("")
>   >   >   >   >   >       expect(
>   >   >   >   >   >         (wrapper.vm as any).getCheckedNodes().length
>   >   >   >   >   >       ).toBe(0)
>   >   >   >   >   >       await trigger.trigger("mouseleave")
>   >   >   >   >   >       await trigger.trigger("mouseenter")
>   >   >   >   >   >       await expect(wrapper.find(CLEAR_BTN).exists()).toBe(
>   >   >   >   >   >         false
>   >   >   >   >   >       )
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("show last level label", async () => {
>   >   >   >   >   >       const wrapper = mount(Cascader, {
>   >   >   >   >   >         props: {
>   >   >   >   >   >           options: OPTIONS,
>   >   >   >   >   >           showAllLevels: false,
>   >   >   >   >   >           modelValue: ["zhejiang", "hangzhou"],
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(wrapper.find("input").element.value).toBe(
>   >   >   >   >   >         "Hangzhou"
>   >   >   >   >   >       )
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("multiple mode", async () => {
>   >   >   >   >   >       const wrapper = _mount({
>   >   >   >   >   >         template: `
>   >   >   >   >   >          <cascader
>   >   >   >   >   >            v-model="value"
>   >   >   >   >   >            :options="options"
>   >   >   >   >   >            :props="props"
>   >   >   >   >   >          />
>   >   >   >   >   >        `,
>   >   >   >   >   >         data() {
>   >   >   >   >   >           return {
>   >   >   >   >   >             options: OPTIONS,
>   >   >   >   >   >             props: { multiple: true },
>   >   >   >   >   >             value: [
>   >   >   >   >   >               ["zhejiang", "hangzhou"],
>   >   >   >   >   >               ["zhejiang", "ningbo"],
>   >   >   >   >   >             ],
>   >   >   >   >   >           }
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       const tags = wrapper.findAll(TAG)
>   >   >   >   >   >       const [firstTag, secondTag] = tags
>   >   >   >   >   >       expect(tags.length).toBe(2)
>   >   >   >   >   >       expect(firstTag.text()).toBe("Zhejiang / Hangzhou")
>   >   >   >   >   >       expect(secondTag.text()).toBe("Zhejiang / Ningbo")
>   >   >   >   >   >       await firstTag
>   >   >   >   >   >         .find(".el-tag__close")
>   >   >   >   >   >         .trigger("click")
>   >   >   >   >   >       expect(wrapper.findAll(TAG).length).toBe(1)
>   >   >   >   >   >       expect(wrapper.vm.value).toEqual([
>   >   >   >   >   >         ["zhejiang", "ningbo"],
>   >   >   >   >   >       ])
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("collapse tags", async () => {
>   >   >   >   >   >       const wrapper = mount(Cascader, {
>   >   >   >   >   >         props: {
>   >   >   >   >   >           options: OPTIONS,
>   >   >   >   >   >           props: { multiple: true },
>   >   >   >   >   >           collapseTags: true,
>   >   >   >   >   >           modelValue: [
>   >   >   >   >   >             ["zhejiang", "hangzhou"],
>   >   >   >   >   >             ["zhejiang", "ningbo"],
>   >   >   >   >   >           ],
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       const [firstTag, secondTag] = wrapper.findAll(TAG)
>   >   >   >   >   >       expect(firstTag.text()).toBe("Zhejiang / Hangzhou")
>   >   >   >   >   >       expect(secondTag.text()).toBe("+ 1")
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("filterable", async () => {
>   >   >   >   >   >       const wrapper = _mount({
>   >   >   >   >   >         template: `
>   >   >   >   >   >          <cascader
>   >   >   >   >   >            v-model="value"
>   >   >   >   >   >            :options="options"
>   >   >   >   >   >            filterable
>   >   >   >   >   >          />
>   >   >   >   >   >        `,
>   >   >   >   >   >         data() {
>   >   >   >   >   >           return {
>   >   >   >   >   >             options: OPTIONS,
>   >   >   >   >   >             value: [],
>   >   >   >   >   >           }
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       const input = wrapper.find("input")
>   >   >   >   >   >       const dropdown = document.querySelector(DROPDOWN)
>   >   >   >   >   >       input.element.value = "Ha"
>   >   >   >   >   >       await input.trigger("input")
>   >   >   >   >   >       const suggestions = dropdown.querySelectorAll(
>   >   >   >   >   >         SUGGESTION_ITEM
>   >   >   >   >   >       ) as NodeListOf<HTMLElement>
>   >   >   >   >   >       const hzSuggestion = suggestions[0]
>   >   >   >   >   >       expect(suggestions.length).toBe(1)
>   >   >   >   >   >       expect(hzSuggestion.textContent).toBe(
>   >   >   >   >   >         "Zhejiang / Hangzhou"
>   >   >   >   >   >       )
>   >   >   >   >   >       hzSuggestion.click()
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(
>   >   >   >   >   >         hzSuggestion.querySelector(CHECK_ICON)
>   >   >   >   >   >       ).toBeTruthy()
>   >   >   >   >   >       expect(wrapper.vm.value).toEqual([
>   >   >   >   >   >         "zhejiang",
>   >   >   >   >   >         "hangzhou",
>   >   >   >   >   >       ])
>   >   >   >   >   >       hzSuggestion.click()
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(wrapper.vm.value).toEqual([
>   >   >   >   >   >         "zhejiang",
>   >   >   >   >   >         "hangzhou",
>   >   >   >   >   >       ])
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("filterable in multiple mode", async () => {
>   >   >   >   >   >       const wrapper = _mount({
>   >   >   >   >   >         template: `
>   >   >   >   >   >          <cascader
>   >   >   >   >   >            v-model="value"
>   >   >   >   >   >            :options="options"
>   >   >   >   >   >            :props="props"
>   >   >   >   >   >            filterable
>   >   >   >   >   >          />
>   >   >   >   >   >        `,
>   >   >   >   >   >         data() {
>   >   >   >   >   >           return {
>   >   >   >   >   >             options: OPTIONS,
>   >   >   >   >   >             props: { multiple: true },
>   >   >   >   >   >             value: [],
>   >   >   >   >   >           }
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       const input = wrapper.find(
>   >   >   >   >   >         ".el-cascader__search-input"
>   >   >   >   >   >       )
>   >   >   >   >   >       const dropdown = document.querySelector(DROPDOWN)
>   >   >   >   >   >       ;(input.element as HTMLInputElement).value = "Ha"
>   >   >   >   >   >       await input.trigger("input")
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       const hzSuggestion = dropdown.querySelector(
>   >   >   >   >   >         SUGGESTION_ITEM
>   >   >   >   >   >       ) as HTMLElement
>   >   >   >   >   >       hzSuggestion.click()
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(wrapper.vm.value).toEqual([
>   >   >   >   >   >         ["zhejiang", "hangzhou"],
>   >   >   >   >   >       ])
>   >   >   >   >   >       hzSuggestion.click()
>   >   >   >   >   >       await nextTick()
>   >   >   >   >   >       expect(wrapper.vm.value).toEqual([])
>   >   >   >   >   >     })
>   >   >   >   >   >
>   >   >   >   >   >     test("filter method", async () => {
>   >   >   >   >   >       const filterMethod = jest.fn((node, keyword) => {
>   >   >   >   >   >         const { text, value } = node
>   >   >   >   >   >         return (
>   >   >   >   >   >           text.includes(keyword) ||
>   >   >   >   >   >           value.includes(keyword)
>   >   >   >   >   >         )
>   >   >   >   >   >       })
>   >   >   >   >   >       const wrapper = mount(Cascader, {
>   >   >   >   >   >         props: {
>   >   >   >   >   >           options: OPTIONS,
>   >   >   >   >   >           filterable: true,
>   >   >   >   >   >           filterMethod,
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       const input = wrapper.find("input")
>   >   >   >   >   >       const dropdown = document.querySelector(DROPDOWN)
>   >   >   >   >   >       input.element.value = "ha"
>   >   >   >   >   >       await input.trigger("input")
>   >   >   >   >   >       const hzSuggestion = dropdown.querySelector(
>   >   >   >   >   >         SUGGESTION_ITEM
>   >   >   >   >   >       ) as HTMLElement
>   >   >   >   >   >       expect(filterMethod).toBeCalled()
>   >   >   >   >   >       expect(hzSuggestion.textContent).toBe(
>   >   >   >   >   >         "Zhejiang / Hangzhou"
>   >   >   >   >   >       )
>   >   >   >   >   >     })
>   >   >   >   >   >   })
>   >   >   >   >   >   ```
>   >   >   >   >   >
>   >   >   >   >   >   :::
>   >   >   >   > - src
>   >   >   >   >   > - `index.vue`
>   >   >   >   >   >   ::: details 代码
>   >   >   >   >   >
>   >   >   >   >   >   ```vue
>   >   >   >   >   >   <template>
>   >   >   >   >   >     <el-popper
>   >   >   >   >   >       ref="popper"
>   >   >   >   >   >       v-model:visible="popperVisible"
>   >   >   >   >   >       manual-mode
>   >   >   >   >   >       :append-to-body="popperAppendToBody"
>   >   >   >   >   >       placement="bottom-start"
>   >   >   >   >   >       :popper-class="
>   >   >   >   >   >         `el-cascader__dropdown ${popperClass}`
>   >   >   >   >   >       "
>   >   >   >   >   >       :popper-options="popperOptions"
>   >   >   >   >   >       :fallback-placements="[
>   >   >   >   >   >         'bottom-start',
>   >   >   >   >   >         'top-start',
>   >   >   >   >   >         'right',
>   >   >   >   >   >         'left',
>   >   >   >   >   >       ]"
>   >   >   >   >   >       :stop-popper-mouse-event="false"
>   >   >   >   >   >       transition="el-zoom-in-top"
>   >   >   >   >   >       :gpu-acceleration="false"
>   >   >   >   >   >       :effect="Effect.LIGHT"
>   >   >   >   >   >       pure
>   >   >   >   >   >       @after-leave="hideSuggestionPanel"
>   >   >   >   >   >     >
>   >   >   >   >   >       <template #trigger>
>   >   >   >   >   >         <div
>   >   >   >   >   >           v-clickoutside:[popperPaneRef]="
>   >   >   >   >   >             () => togglePopperVisible(false)
>   >   >   >   >   >           "
>   >   >   >   >   >           :class="[
>   >   >   >   >   >             'el-cascader',
>   >   >   >   >   >             realSize && `el-cascader--${realSize}`,
>   >   >   >   >   >             { 'is-disabled': isDisabled },
>   >   >   >   >   >           ]"
>   >   >   >   >   >           @click="
>   >   >   >   >   >             () =>
>   >   >   >   >   >               togglePopperVisible(
>   >   >   >   >   >                 readonly ? undefined : true
>   >   >   >   >   >               )
>   >   >   >   >   >           "
>   >   >   >   >   >           @keydown="handleKeyDown"
>   >   >   >   >   >           @mouseenter="inputHover = true"
>   >   >   >   >   >           @mouseleave="inputHover = false"
>   >   >   >   >   >         >
>   >   >   >   >   >           <el-input
>   >   >   >   >   >             ref="input"
>   >   >   >   >   >             v-model.trim="inputValue"
>   >   >   >   >   >             :placeholder="inputPlaceholder"
>   >   >   >   >   >             :readonly="readonly"
>   >   >   >   >   >             :disabled="isDisabled"
>   >   >   >   >   >             :validate-event="false"
>   >   >   >   >   >             :size="realSize"
>   >   >   >   >   >             :class="{ 'is-focus': popperVisible }"
>   >   >   >   >   >             @focus="(e) => $emit('focus', e)"
>   >   >   >   >   >             @blur="(e) => $emit('blur', e)"
>   >   >   >   >   >             @input="handleInput"
>   >   >   >   >   >           >
>   >   >   >   >   >             <template #suffix>
>   >   >   >   >   >               <i
>   >   >   >   >   >                 v-if="clearBtnVisible"
>   >   >   >   >   >                 key="clear"
>   >   >   >   >   >                 class="el-input__icon el-icon-circle-close"
>   >   >   >   >   >                 @click.stop="handleClear"
>   >   >   >   >   >               ></i>
>   >   >   >   >   >               <i
>   >   >   >   >   >                 v-else
>   >   >   >   >   >                 key="arrow-down"
>   >   >   >   >   >                 :class="[
>   >   >   >   >   >                   'el-input__icon',
>   >   >   >   >   >                   'el-icon-arrow-down',
>   >   >   >   >   >                   popperVisible && 'is-reverse',
>   >   >   >   >   >                 ]"
>   >   >   >   >   >                 @click.stop="togglePopperVisible()"
>   >   >   >   >   >               ></i>
>   >   >   >   >   >             </template>
>   >   >   >   >   >           </el-input>
>   >   >   >   >   >
>   >   >   >   >   >           <div
>   >   >   >   >   >             v-if="multiple"
>   >   >   >   >   >             ref="tagWrapper"
>   >   >   >   >   >             class="el-cascader__tags"
>   >   >   >   >   >           >
>   >   >   >   >   >             <el-tag
>   >   >   >   >   >               v-for="tag in presentTags"
>   >   >   >   >   >               :key="tag.key"
>   >   >   >   >   >               type="info"
>   >   >   >   >   >               :size="tagSize"
>   >   >   >   >   >               :hit="tag.hitState"
>   >   >   >   >   >               :closable="tag.closable"
>   >   >   >   >   >               disable-transitions
>   >   >   >   >   >               @close="deleteTag(tag)"
>   >   >   >   >   >             >
>   >   >   >   >   >               <span>{{ tag.text }}</span>
>   >   >   >   >   >             </el-tag>
>   >   >   >   >   >             <input
>   >   >   >   >   >               v-if="filterable && !isDisabled"
>   >   >   >   >   >               v-model.trim="searchInputValue"
>   >   >   >   >   >               type="text"
>   >   >   >   >   >               class="el-cascader__search-input"
>   >   >   >   >   >               :placeholder="
>   >   >   >   >   >                 presentText ? '' : inputPlaceholder
>   >   >   >   >   >               "
>   >   >   >   >   >               @input="
>   >   >   >   >   >                 (e) => handleInput(searchInputValue, e)
>   >   >   >   >   >               "
>   >   >   >   >   >               @click.stop="togglePopperVisible(true)"
>   >   >   >   >   >               @keydown.delete="handleDelete"
>   >   >   >   >   >             />
>   >   >   >   >   >           </div>
>   >   >   >   >   >         </div>
>   >   >   >   >   >       </template>
>   >   >   >   >   >
>   >   >   >   >   >       <template #default>
>   >   >   >   >   >         <el-cascader-panel
>   >   >   >   >   >           v-show="!filtering"
>   >   >   >   >   >           ref="panel"
>   >   >   >   >   >           v-model="checkedValue"
>   >   >   >   >   >           :options="options"
>   >   >   >   >   >           :props="props"
>   >   >   >   >   >           :border="false"
>   >   >   >   >   >           :render-label="$slots.default"
>   >   >   >   >   >           @expand-change="handleExpandChange"
>   >   >   >   >   >           @close="togglePopperVisible(false)"
>   >   >   >   >   >         />
>   >   >   >   >   >         <el-scrollbar
>   >   >   >   >   >           v-if="filterable"
>   >   >   >   >   >           v-show="filtering"
>   >   >   >   >   >           ref="suggestionPanel"
>   >   >   >   >   >           tag="ul"
>   >   >   >   >   >           class="el-cascader__suggestion-panel"
>   >   >   >   >   >           view-class="el-cascader__suggestion-list"
>   >   >   >   >   >         >
>   >   >   >   >   >           <template v-if="suggestions.length">
>   >   >   >   >   >             <li
>   >   >   >   >   >               v-for="item in suggestions"
>   >   >   >   >   >               :key="item.uid"
>   >   >   >   >   >               :class="[
>   >   >   >   >   >                 'el-cascader__suggestion-item',
>   >   >   >   >   >                 item.checked && 'is-checked',
>   >   >   >   >   >               ]"
>   >   >   >   >   >               :tabindex="-1"
>   >   >   >   >   >               @click="handleSuggestionClick(item)"
>   >   >   >   >   >             >
>   >   >   >   >   >               <span>{{ item.text }}</span>
>   >   >   >   >   >               <i
>   >   >   >   >   >                 v-if="item.checked"
>   >   >   >   >   >                 class="el-icon-check"
>   >   >   >   >   >               ></i>
>   >   >   >   >   >             </li>
>   >   >   >   >   >           </template>
>   >   >   >   >   >           <slot v-else name="empty">
>   >   >   >   >   >             <li class="el-cascader__empty-text">
>   >   >   >   >   >               {{ t("el.cascader.noMatch") }}
>   >   >   >   >   >             </li>
>   >   >   >   >   >           </slot>
>   >   >   >   >   >         </el-scrollbar>
>   >   >   >   >   >       </template>
>   >   >   >   >   >     </el-popper>
>   >   >   >   >   >   </template>
>   >   >   >   >   >
>   >   >   >   >   >   <script lang="ts">
>   >   >   >   >   >   import {
>   >   >   >   >   >     computed,
>   >   >   >   >   >     defineComponent,
>   >   >   >   >   >     inject,
>   >   >   >   >   >     nextTick,
>   >   >   >   >   >     onMounted,
>   >   >   >   >   >     onBeforeUnmount,
>   >   >   >   >   >     Ref,
>   >   >   >   >   >     ref,
>   >   >   >   >   >     watch,
>   >   >   >   >   >   } from 'vue'
>   >   >   >   >   >   import { isPromise } from '@vue/shared'
>   >   >   >   >   >   import debounce from 'lodash/debounce'
>   >   >   >   >   >
>   >   >   >   >   >   import ElCascaderPanel, {
>   >   >   >   >   >     CommonProps,
>   >   >   >   >   >   } from '@element-plus/components/cascader-panel'
>   >   >   >   >   >   import ElInput from '@element-plus/components/input'
>   >   >   >   >   >   import ElPopper from '@element-plus/components/popper'
>   >   >   >   >   >   import ElScrollbar from '@element-plus/components/scrollbar'
>   >   >   >   >   >   import ElTag from '@element-plus/components/tag'
>   >   >   >   >   >   import { elFormKey, elFormItemKey } from '@element-plus/tokens'
>   >   >   >   >   >
>   >   >   >   >   >   import { ClickOutside as Clickoutside } from '@element-plus/directives'
>   >   >   >   >   >   import { useLocaleInject } from '@element-plus/hooks'
>   >   >   >   >   >
>   >   >   >   >   >   import { EVENT_CODE } from '@element-plus/utils/aria'
>   >   >   >   >   >   import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
>   >   >   >   >   >   import isServer from '@element-plus/utils/isServer'
>   >   >   >   >   >   import { useGlobalConfig } from '@element-plus/utils/util'
>   >   >   >   >   >   import {
>   >   >   >   >   >     addResizeListener,
>   >   >   >   >   >     removeResizeListener,
>   >   >   >   >   >   } from '@element-plus/utils/resize-event'
>   >   >   >   >   >   import { isValidComponentSize } from '@element-plus/utils/validators'
>   >   >   >   >   >   import { Effect, Options } from '@element-plus/components/popper'
>   >   >   >   >   >
>   >   >   >   >   >   import type { ComputedRef, PropType } from 'vue'
>   >   >   >   >   >   import type { ElFormContext, ElFormItemContext } from '@element-plus/tokens'
>   >   >   >   >   >   import type {
>   >   >   >   >   >     CascaderValue,
>   >   >   >   >   >     CascaderNode,
>   >   >   >   >   >     Tag,
>   >   >   >   >   >   } from '@element-plus/components/cascader-panel'
>   >   >   >   >   >   import type { ComponentSize } from '@element-plus/utils/types'
>   >   >   >   >   >
>   >   >   >   >   >   const DEFAULT_INPUT_HEIGHT = 40
>   >   >   >   >   >
>   >   >   >   >   >   const INPUT_HEIGHT_MAP = {
>   >   >   >   >   >     medium: 36,
>   >   >   >   >   >     small: 32,
>   >   >   >   >   >     mini: 28,
>   >   >   >   >   >   }
>   >   >   >   >   >
>   >   >   >   >   >   const popperOptions: Partial<Options> = {
>   >   >   >   >   >     modifiers: [
>   >   >   >   >   >       {
>   >   >   >   >   >         name: 'arrowPosition',
>   >   >   >   >   >         enabled: true,
>   >   >   >   >   >         phase: 'main',
>   >   >   >   >   >         fn: ({ state }) => {
>   >   >   >   >   >           const { modifiersData, placement } = state
>   >   >   >   >   >           if (['right', 'left'].includes(placement)) return
>   >   >   >   >   >           modifiersData.arrow.x = 35
>   >   >   >   >   >         },
>   >   >   >   >   >         requires: ['arrow'],
>   >   >   >   >   >       },
>   >   >   >   >   >     ],
>   >   >   >   >   >   }
>   >   >   >   >   >
>   >   >   >   >   >   export default defineComponent({
>   >   >   >   >   >     name: 'ElCascader',
>   >   >   >   >   >
>   >   >   >   >   >     components: {
>   >   >   >   >   >       ElCascaderPanel,
>   >   >   >   >   >       ElInput,
>   >   >   >   >   >       ElPopper,
>   >   >   >   >   >       ElScrollbar,
>   >   >   >   >   >       ElTag,
>   >   >   >   >   >     },
>   >   >   >   >   >
>   >   >   >   >   >     directives: {
>   >   >   >   >   >       Clickoutside,
>   >   >   >   >   >     },
>   >   >   >   >   >
>   >   >   >   >   >     props: {
>   >   >   >   >   >       ...CommonProps,
>   >   >   >   >   >       size: {
>   >   >   >   >   >         type: String as PropType<ComponentSize>,
>   >   >   >   >   >         validator: isValidComponentSize,
>   >   >   >   >   >       },
>   >   >   >   >   >       placeholder: {
>   >   >   >   >   >         type: String,
>   >   >   >   >   >       },
>   >   >   >   >   >       disabled: Boolean,
>   >   >   >   >   >       clearable: Boolean,
>   >   >   >   >   >       filterable: Boolean,
>   >   >   >   >   >       filterMethod: {
>   >   >   >   >   >         type: Function as PropType<
>   >   >   >   >   >           (node: CascaderNode, keyword: string) => boolean
>   >   >   >   >   >         >,
>   >   >   >   >   >         default: (node: CascaderNode, keyword: string) =>
>   >   >   >   >   >           node.text.includes(keyword),
>   >   >   >   >   >       },
>   >   >   >   >   >       separator: {
>   >   >   >   >   >         type: String,
>   >   >   >   >   >         default: ' / ',
>   >   >   >   >   >       },
>   >   >   >   >   >       showAllLevels: {
>   >   >   >   >   >         type: Boolean,
>   >   >   >   >   >         default: true,
>   >   >   >   >   >       },
>   >   >   >   >   >       collapseTags: Boolean,
>   >   >   >   >   >       debounce: {
>   >   >   >   >   >         type: Number,
>   >   >   >   >   >         default: 300,
>   >   >   >   >   >       },
>   >   >   >   >   >       beforeFilter: {
>   >   >   >   >   >         type: Function as PropType<(value: string) => boolean | Promise<any>>,
>   >   >   >   >   >         default: () => true,
>   >   >   >   >   >       },
>   >   >   >   >   >       popperClass: {
>   >   >   >   >   >         type: String,
>   >   >   >   >   >         default: '',
>   >   >   >   >   >       },
>   >   >   >   >   >       popperAppendToBody: {
>   >   >   >   >   >         type: Boolean,
>   >   >   >   >   >         default: true,
>   >   >   >   >   >       },
>   >   >   >   >   >     },
>   >   >   >   >   >
>   >   >   >   >   >     emits: [
>   >   >   >   >   >       UPDATE_MODEL_EVENT,
>   >   >   >   >   >       CHANGE_EVENT,
>   >   >   >   >   >       'focus',
>   >   >   >   >   >       'blur',
>   >   >   >   >   >       'visible-change',
>   >   >   >   >   >       'expand-change',
>   >   >   >   >   >       'remove-tag',
>   >   >   >   >   >     ],
>   >   >   >   >   >
>   >   >   >   >   >     setup(props, { emit }) {
>   >   >   >   >   >       let inputInitialHeight = 0
>   >   >   >   >   >       let pressDeleteCount = 0
>   >   >   >   >   >
>   >   >   >   >   >       const { t } = useLocaleInject()
>   >   >   >   >   >       const $ELEMENT = useGlobalConfig()
>   >   >   >   >   >       const elForm = inject(elFormKey, {} as ElFormContext)
>   >   >   >   >   >       const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
>   >   >   >   >   >
>   >   >   >   >   >       const popper = ref(null)
>   >   >   >   >   >       const input = ref(null)
>   >   >   >   >   >       const tagWrapper = ref(null)
>   >   >   >   >   >       const panel = ref(null)
>   >   >   >   >   >       const suggestionPanel = ref(null)
>   >   >   >   >   >       const popperVisible = ref(false)
>   >   >   >   >   >       const inputHover = ref(false)
>   >   >   >   >   >       const filtering = ref(false)
>   >   >   >   >   >       const inputValue = ref('')
>   >   >   >   >   >       const searchInputValue = ref('')
>   >   >   >   >   >       const presentTags: Ref<Tag[]> = ref([])
>   >   >   >   >   >       const suggestions: Ref<CascaderNode[]> = ref([])
>   >   >   >   >   >
>   >   >   >   >   >       const isDisabled = computed(() => props.disabled || elForm.disabled)
>   >   >   >   >   >       const inputPlaceholder = computed(
>   >   >   >   >   >         () => props.placeholder || t('el.cascader.placeholder')
>   >   >   >   >   >       )
>   >   >   >   >   >       const realSize: ComputedRef<ComponentSize> = computed(
>   >   >   >   >   >         () => props.size || elFormItem.size || $ELEMENT.size
>   >   >   >   >   >       )
>   >   >   >   >   >       const tagSize = computed(() =>
>   >   >   >   >   >         ['small', 'mini'].includes(realSize.value) ? 'mini' : 'small'
>   >   >   >   >   >       )
>   >   >   >   >   >       const multiple = computed(() => !!props.props.multiple)
>   >   >   >   >   >       const readonly = computed(() => !props.filterable || multiple.value)
>   >   >   >   >   >       const searchKeyword = computed(() =>
>   >   >   >   >   >         multiple.value ? searchInputValue.value : inputValue.value
>   >   >   >   >   >       )
>   >   >   >   >   >       const checkedNodes: ComputedRef<CascaderNode[]> = computed(
>   >   >   >   >   >         () => panel.value?.checkedNodes || []
>   >   >   >   >   >       )
>   >   >   >   >   >       const clearBtnVisible = computed(() => {
>   >   >   >   >   >         if (
>   >   >   >   >   >           !props.clearable ||
>   >   >   >   >   >           isDisabled.value ||
>   >   >   >   >   >           filtering.value ||
>   >   >   >   >   >           !inputHover.value
>   >   >   >   >   >         )
>   >   >   >   >   >           return false
>   >   >   >   >   >
>   >   >   >   >   >         return !!checkedNodes.value.length
>   >   >   >   >   >       })
>   >   >   >   >   >       const presentText = computed(() => {
>   >   >   >   >   >         const { showAllLevels, separator } = props
>   >   >   >   >   >         const nodes = checkedNodes.value
>   >   >   >   >   >         return nodes.length
>   >   >   >   >   >           ? multiple.value
>   >   >   >   >   >             ? ' '
>   >   >   >   >   >             : nodes[0].calcText(showAllLevels, separator)
>   >   >   >   >   >           : ''
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       const checkedValue = computed<CascaderValue>({
>   >   >   >   >   >         get() {
>   >   >   >   >   >           return props.modelValue
>   >   >   >   >   >         },
>   >   >   >   >   >         set(val) {
>   >   >   >   >   >           emit(UPDATE_MODEL_EVENT, val)
>   >   >   >   >   >           emit(CHANGE_EVENT, val)
>   >   >   >   >   >           elFormItem.formItemMitt?.emit('el.form.change', [val])
>   >   >   >   >   >         },
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       const popperPaneRef = computed(() => {
>   >   >   >   >   >         return popper.value?.popperRef
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       const togglePopperVisible = (visible?: boolean) => {
>   >   >   >   >   >         if (isDisabled.value) return
>   >   >   >   >   >
>   >   >   >   >   >         visible = visible ?? !popperVisible.value
>   >   >   >   >   >
>   >   >   >   >   >         if (visible !== popperVisible.value) {
>   >   >   >   >   >           popperVisible.value = visible
>   >   >   >   >   >           input.value.input.setAttribute('aria-expanded', visible)
>   >   >   >   >   >
>   >   >   >   >   >           if (visible) {
>   >   >   >   >   >             updatePopperPosition()
>   >   >   >   >   >             nextTick(panel.value.scrollToExpandingNode)
>   >   >   >   >   >           } else if (props.filterable) {
>   >   >   >   >   >             const { value } = presentText
>   >   >   >   >   >             inputValue.value = value
>   >   >   >   >   >             searchInputValue.value = value
>   >   >   >   >   >           }
>   >   >   >   >   >
>   >   >   >   >   >           emit('visible-change', visible)
>   >   >   >   >   >         }
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const updatePopperPosition = () => {
>   >   >   >   >   >         nextTick(popper.value.update)
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const hideSuggestionPanel = () => {
>   >   >   >   >   >         filtering.value = false
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const genTag = (node: CascaderNode): Tag => {
>   >   >   >   >   >         const { showAllLevels, separator } = props
>   >   >   >   >   >         return {
>   >   >   >   >   >           node,
>   >   >   >   >   >           key: node.uid,
>   >   >   >   >   >           text: node.calcText(showAllLevels, separator),
>   >   >   >   >   >           hitState: false,
>   >   >   >   >   >           closable: !isDisabled.value && !node.isDisabled,
>   >   >   >   >   >         }
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const deleteTag = (tag: Tag) => {
>   >   >   >   >   >         const { node } = tag
>   >   >   >   >   >         node.doCheck(false)
>   >   >   >   >   >         panel.value.calculateCheckedValue()
>   >   >   >   >   >         emit('remove-tag', node.valueByOption)
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const calculatePresentTags = () => {
>   >   >   >   >   >         if (!multiple.value) return
>   >   >   >   >   >
>   >   >   >   >   >         const nodes = checkedNodes.value
>   >   >   >   >   >         const tags: Tag[] = []
>   >   >   >   >   >
>   >   >   >   >   >         if (nodes.length) {
>   >   >   >   >   >           const [first, ...rest] = nodes
>   >   >   >   >   >           const restCount = rest.length
>   >   >   >   >   >
>   >   >   >   >   >           tags.push(genTag(first))
>   >   >   >   >   >
>   >   >   >   >   >           if (restCount) {
>   >   >   >   >   >             if (props.collapseTags) {
>   >   >   >   >   >               tags.push({
>   >   >   >   >   >                 key: -1,
>   >   >   >   >   >                 text: `+ ${restCount}`,
>   >   >   >   >   >                 closable: false,
>   >   >   >   >   >               })
>   >   >   >   >   >             } else {
>   >   >   >   >   >               rest.forEach((node) => tags.push(genTag(node)))
>   >   >   >   >   >             }
>   >   >   >   >   >           }
>   >   >   >   >   >         }
>   >   >   >   >   >
>   >   >   >   >   >         presentTags.value = tags
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const calculateSuggestions = () => {
>   >   >   >   >   >         const { filterMethod, showAllLevels, separator } = props
>   >   >   >   >   >         const res = panel.value
>   >   >   >   >   >           .getFlattedNodes(!props.props.checkStrictly)
>   >   >   >   >   >           .filter((node) => {
>   >   >   >   >   >             if (node.isDisabled) return false
>   >   >   >   >   >             node.calcText(showAllLevels, separator)
>   >   >   >   >   >             return filterMethod(node, searchKeyword.value)
>   >   >   >   >   >           })
>   >   >   >   >   >
>   >   >   >   >   >         if (multiple.value) {
>   >   >   >   >   >           presentTags.value.forEach((tag) => {
>   >   >   >   >   >             tag.hitState = false
>   >   >   >   >   >           })
>   >   >   >   >   >         }
>   >   >   >   >   >
>   >   >   >   >   >         filtering.value = true
>   >   >   >   >   >         suggestions.value = res
>   >   >   >   >   >         updatePopperPosition()
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const focusFirstNode = () => {
>   >   >   >   >   >         let firstNode = null
>   >   >   >   >   >
>   >   >   >   >   >         if (filtering.value && suggestionPanel.value) {
>   >   >   >   >   >           firstNode = suggestionPanel.value.$el.querySelector(
>   >   >   >   >   >             '.el-cascader__suggestion-item'
>   >   >   >   >   >           )
>   >   >   >   >   >         } else {
>   >   >   >   >   >           firstNode = panel.value?.$el.querySelector(
>   >   >   >   >   >             '.el-cascader-node[tabindex="-1"]'
>   >   >   >   >   >           )
>   >   >   >   >   >         }
>   >   >   >   >   >
>   >   >   >   >   >         if (firstNode) {
>   >   >   >   >   >           firstNode.focus()
>   >   >   >   >   >           !filtering.value && firstNode.click()
>   >   >   >   >   >         }
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const updateStyle = () => {
>   >   >   >   >   >         const inputInner = input.value.input
>   >   >   >   >   >         const tagWrapperEl = tagWrapper.value
>   >   >   >   >   >         const suggestionPanelEl = suggestionPanel.value?.$el
>   >   >   >   >   >
>   >   >   >   >   >         if (isServer || !inputInner) return
>   >   >   >   >   >
>   >   >   >   >   >         if (suggestionPanelEl) {
>   >   >   >   >   >           const suggestionList = suggestionPanelEl.querySelector(
>   >   >   >   >   >             '.el-cascader__suggestion-list'
>   >   >   >   >   >           )
>   >   >   >   >   >           suggestionList.style.minWidth = inputInner.offsetWidth + 'px'
>   >   >   >   >   >         }
>   >   >   >   >   >
>   >   >   >   >   >         if (tagWrapperEl) {
>   >   >   >   >   >           const { offsetHeight } = tagWrapperEl
>   >   >   >   >   >           const height =
>   >   >   >   >   >             presentTags.value.length > 0
>   >   >   >   >   >               ? Math.max(offsetHeight + 6, inputInitialHeight) + 'px'
>   >   >   >   >   >               : `${inputInitialHeight}px`
>   >   >   >   >   >           inputInner.style.height = height
>   >   >   >   >   >           updatePopperPosition()
>   >   >   >   >   >         }
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const getCheckedNodes = (leafOnly: boolean) => {
>   >   >   >   >   >         return panel.value.getCheckedNodes(leafOnly)
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const handleExpandChange = (value: CascaderValue) => {
>   >   >   >   >   >         updatePopperPosition()
>   >   >   >   >   >         emit('expand-change', value)
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const handleKeyDown = (e: KeyboardEvent) => {
>   >   >   >   >   >         switch (e.code) {
>   >   >   >   >   >           case EVENT_CODE.enter:
>   >   >   >   >   >             togglePopperVisible()
>   >   >   >   >   >             break
>   >   >   >   >   >           case EVENT_CODE.down:
>   >   >   >   >   >             togglePopperVisible(true)
>   >   >   >   >   >             nextTick(focusFirstNode)
>   >   >   >   >   >             e.preventDefault()
>   >   >   >   >   >             break
>   >   >   >   >   >           case EVENT_CODE.esc:
>   >   >   >   >   >           case EVENT_CODE.tab:
>   >   >   >   >   >             togglePopperVisible(false)
>   >   >   >   >   >             break
>   >   >   >   >   >         }
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const handleClear = () => {
>   >   >   >   >   >         panel.value.clearCheckedNodes()
>   >   >   >   >   >         togglePopperVisible(false)
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const handleSuggestionClick = (node: CascaderNode) => {
>   >   >   >   >   >         const { checked } = node
>   >   >   >   >   >
>   >   >   >   >   >         if (multiple.value) {
>   >   >   >   >   >           panel.value.handleCheckChange(node, !checked, false)
>   >   >   >   >   >         } else {
>   >   >   >   >   >           !checked && panel.value.handleCheckChange(node, true, false)
>   >   >   >   >   >           togglePopperVisible(false)
>   >   >   >   >   >         }
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const handleDelete = () => {
>   >   >   >   >   >         const tags = presentTags.value
>   >   >   >   >   >         const lastTag = tags[tags.length - 1]
>   >   >   >   >   >         pressDeleteCount = searchInputValue.value ? 0 : pressDeleteCount + 1
>   >   >   >   >   >
>   >   >   >   >   >         if (!lastTag || !pressDeleteCount) return
>   >   >   >   >   >
>   >   >   >   >   >         if (lastTag.hitState) {
>   >   >   >   >   >           deleteTag(lastTag)
>   >   >   >   >   >         } else {
>   >   >   >   >   >           lastTag.hitState = true
>   >   >   >   >   >         }
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       const handleFilter = debounce(() => {
>   >   >   >   >   >         const { value } = searchKeyword
>   >   >   >   >   >
>   >   >   >   >   >         if (!value) return
>   >   >   >   >   >
>   >   >   >   >   >         const passed = props.beforeFilter(value)
>   >   >   >   >   >
>   >   >   >   >   >         if (isPromise(passed)) {
>   >   >   >   >   >           passed.then(calculateSuggestions).catch(() => {
>   >   >   >   >   >             /* prevent log error */
>   >   >   >   >   >           })
>   >   >   >   >   >         } else if (passed !== false) {
>   >   >   >   >   >           calculateSuggestions()
>   >   >   >   >   >         } else {
>   >   >   >   >   >           hideSuggestionPanel()
>   >   >   >   >   >         }
>   >   >   >   >   >       }, props.debounce)
>   >   >   >   >   >
>   >   >   >   >   >       const handleInput = (val: string, e: KeyboardEvent) => {
>   >   >   >   >   >         !popperVisible.value && togglePopperVisible(true)
>   >   >   >   >   >
>   >   >   >   >   >         if (e?.isComposing) return
>   >   >   >   >   >
>   >   >   >   >   >         val ? handleFilter() : hideSuggestionPanel()
>   >   >   >   >   >       }
>   >   >   >   >   >
>   >   >   >   >   >       watch(filtering, updatePopperPosition)
>   >   >   >   >   >
>   >   >   >   >   >       watch([checkedNodes, isDisabled], calculatePresentTags)
>   >   >   >   >   >
>   >   >   >   >   >       watch(presentTags, () => nextTick(updateStyle))
>   >   >   >   >   >
>   >   >   >   >   >       watch(presentText, (val) => (inputValue.value = val), { immediate: true })
>   >   >   >   >   >
>   >   >   >   >   >       onMounted(() => {
>   >   >   >   >   >         const inputEl = input.value.$el
>   >   >   >   >   >         inputInitialHeight =
>   >   >   >   >   >           inputEl?.offsetHeight ||
>   >   >   >   >   >           INPUT_HEIGHT_MAP[realSize.value] ||
>   >   >   >   >   >           DEFAULT_INPUT_HEIGHT
>   >   >   >   >   >         addResizeListener(inputEl, updateStyle)
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       onBeforeUnmount(() => {
>   >   >   >   >   >         removeResizeListener(input.value.$el, updateStyle)
>   >   >   >   >   >       })
>   >   >   >   >   >
>   >   >   >   >   >       return {
>   >   >   >   >   >         Effect,
>   >   >   >   >   >         popperOptions,
>   >   >   >   >   >         popper,
>   >   >   >   >   >         popperPaneRef,
>   >   >   >   >   >         input,
>   >   >   >   >   >         tagWrapper,
>   >   >   >   >   >         panel,
>   >   >   >   >   >         suggestionPanel,
>   >   >   >   >   >         popperVisible,
>   >   >   >   >   >         inputHover,
>   >   >   >   >   >         inputPlaceholder,
>   >   >   >   >   >         filtering,
>   >   >   >   >   >         presentText,
>   >   >   >   >   >         checkedValue,
>   >   >   >   >   >         inputValue,
>   >   >   >   >   >         searchInputValue,
>   >   >   >   >   >         presentTags,
>   >   >   >   >   >         suggestions,
>   >   >   >   >   >         isDisabled,
>   >   >   >   >   >         realSize,
>   >   >   >   >   >         tagSize,
>   >   >   >   >   >         multiple,
>   >   >   >   >   >         readonly,
>   >   >   >   >   >         clearBtnVisible,
>   >   >   >   >   >         t,
>   >   >   >   >   >         togglePopperVisible,
>   >   >   >   >   >         hideSuggestionPanel,
>   >   >   >   >   >         deleteTag,
>   >   >   >   >   >         focusFirstNode,
>   >   >   >   >   >         getCheckedNodes,
>   >   >   >   >   >         handleExpandChange,
>   >   >   >   >   >         handleKeyDown,
>   >   >   >   >   >         handleClear,
>   >   >   >   >   >         handleSuggestionClick,
>   >   >   >   >   >         handleDelete,
>   >   >   >   >   >         handleInput,
>   >   >   >   >   >       }
>   >   >   >   >   >     },
>   >   >   >   >   >   })
>   >   >   >   >   >   </script>
>   >   >   >   >   >   ```
>   >   >   >   >   >
>   >   >   >   >   >   :::
>   >   >   >   > - style
>   >   >   >   >   > - `css.ts`
>   >   >   >   >   >   ::: details 代码
>   >   >   >   >   >   ```ts
>   >   >   >   >   >   import "@element-plus/components/base/style/css"
>   >   >   >   >   >   import "@element-plus/theme-chalk/el-cascader.css"
>   >   >   >   >   >   import "@element-plus/components/input/style/css"
>   >   >   >   >   >   import "@element-plus/components/popper/style/css"
>   >   >   >   >   >   import "@element-plus/components/tag/style/css"
>   >   >   >   >   >   import "@element-plus/components/cascader-panel/style/css"
>   >   >   >   >   >   ```
>   >   >   >   >   >   :::
>   >   >   >   >   > - `index.ts`
>   >   >   >   >   >   ::: details 代码
>   >   >   >   >   >   ```ts
>   >   >   >   >   >   import "@element-plus/components/base/style"
>   >   >   >   >   >   import "@element-plus/theme-chalk/src/cascader.scss"
>   >   >   >   >   >   import "@element-plus/components/input/style/index"
>   >   >   >   >   >   import "@element-plus/components/popper/style/index"
>   >   >   >   >   >   import "@element-plus/components/tag/style/index"
>   >   >   >   >   >   import "@element-plus/components/cascader-panel/style/index"
>   >   >   >   >   >   ```
>   >   >   >   >   >   :::
>   >   >   >   > - `index.ts`
>   >   >   >   >   ::: details 组件入口
>   >   >   >   >
>   >   >   >   >   ```ts{3,5-7,12}
>   >   >   >   >   import { App } from 'vue'
>   >   >   >   >   import type { SFCWithInstall } from '@element-plus/utils/types'
>   >   >   >   >   import Cascader from './src/index.vue'
>   >   >   >   >
>   >   >   >   >   Cascader.install = (app: App): void => {
>   >   >   >   >     app.component(Cascader.name, Cascader)
>   >   >   >   >   }
>   >   >   >   >
>   >   >   >   >   const _Cascader = Cascader as SFCWithInstall<typeof Cascader>
>   >   >   >   >
>   >   >   >   >   export default _Cascader
>   >   >   >   >   export const ElCascader = _Cascader
>   >   >   >   >   ```
>   >   >   >   >
>   >   >   >   >   :::
