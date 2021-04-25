---
lang: zh-CN
sidebarDepth: 2
meta:
  - name: description
    content: 个人总结的vuepress学习技术文档-主题
  - name: keywords
    content: vuepress,最新技术文档,vuepress主题
---

# ElementUI源码解析
## 目录结构
```sh
├── build            # 放置webpack的配置文件
├── examples         # 放置element api的页面文档
├── node_modules     # 项目依赖包目录
├── packages         # 放置element的组件（css样式放置在这个目录下theme-chalk下）
│   ├── xxx          # xxx组件
│   └── yyy          # yyy组件
├── src
│   ├── directives   # 放置自定义指令
│   ├── locale       # 放置语言的配置文件
│   ├── mixins       # 放置组件用的混合文件
│   ├── transitions  # 放置动画配置文件
│   ├── utils        # 放置用到工具函数文件
│   └── index.js     # 组件注册的入口文件
├── test             # 测试文件
├── types            # typescript的数据类
├── package.json     # 包管理文件
└── yarn.lock        # yarn依赖信息文件
```
