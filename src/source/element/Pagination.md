---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-主题
  - name: keywords
    content: vuepress,最新技术文档,vuepress主题
---

# 一、Pagination
```sh
├── packages         
│   ├── pagination         
│   ├   ├── src
│   ├   │    ├── pager.vue
│   ├   │    └── pagination.js
│   ├   └── index.js   # 组件入口
```
## 入口
index.js
```js
import Pagination from './src/pagination';

/* istanbul ignore next */
Pagination.install = function(Vue) {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
```
## 组件主体
pagination.js
```js
```