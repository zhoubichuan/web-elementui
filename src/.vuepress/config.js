module.exports = {
  // 基础配置
  base: '/web-elementui/', // 部署站点的基础路径
  description: 'ElementUI学习笔记',
  title: 'ElementUI学习笔记',
  plugins: {
    // 名称：@vuepress/plugin-pwa 网页内容有更新的时候有刷新按钮。可以把网页保存到桌面，当一个app一样
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有新的内容更新",
        buttonText: "刷新"
      }
    },
    // 名称：@vuepress/plugin-back-to-top 效果：文章看到下面的时候，点击一个图标会回到顶部
    '@vuepress/back-to-top': true,
    // 名称：@vuepress/plugin-active-header-links 效果：页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录。
    '@vuepress/active-header-links': {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    },
    "@vssue/vuepress-plugin-vssue": {
      platform: 'github', //v3的platform是github，v4的是github-v4
      locale: 'zh', //语言
      // 其他的 Vssue 配置
      owner: 'zhoubichuan', //github账户名
      repo: 'Web-Vue', //github一个项目的名称
      clientId: 'Iv1.2923ba5d4de48a3c', //注册的Client ID
      clientSecret: '110210', //注册的Client Secret
      autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
    },
    "vuepress-plugin-boxx": ["vuepress-plugin-boxx"]
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: false, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
          text: 'ElementUI源码解析',
          items: [
            {
              text: '一.Basic部分',
              link: '/elementui/base/1.index'
            },
            {
              text: '二.Form部分',
              link: '/elementui/form/1.index'
            },
            {
              text: '三.Data部分',
              link: '/elementui/data/1.index'
            },
            {
              text: '四.Notice部分',
              link: '/elementui/notice/1.index'
            },
            {
              text: '五.Navigation部分',
              link: '/elementui/navigation/1.index'
            },
            {
              text: '六.Others部分',
              link: '/elementui/others/1.index'
            }
          ]
        },
        {
          text: 'Element-Plus源码解析',
          items: [
            {
              text: '一.Basic部分',
              link: '/element-plus/base/1.index'
            },
            {
              text: '二.Form部分',
              link: '/element-plus/form/1.index'
            },
            {
              text: '三.Data部分',
              link: '/element-plus/data/1.index'
            },
            {
              text: '四.Notice部分',
              link: '/element-plus/notice/1.index'
            },
            {
              text: '五.Navigation部分',
              link: '/element-plus/navigation/1.index'
            },
            {
              text: '六.Others部分',
              link: '/element-plus/others/1.index'
            }
          ]
        }
        ],
        sidebar: {
          '/elementui/base/': [
            '1.index',
            '1.layout',
            '2.container',
            '3.button',
            '4.link',
            '5.space',
            '6.scrollbar',
            '7.config'
          ],
          '/elementui/form/': [
            '1.index',
            '1.radio',
            '2.checkbox',
            '3.input',
            '4.inputnumber',
            '5.select',
            '6.selectv2',
            '7.cascader',
            '8.switch',
            '9.slider',
            '10.timepicker',
            '11.timeselect',
            '12.datepicker',
            '13.datetimepicker',
            '14.upload',
            '15.rate',
            '16.colorpicker',
            '17.transfer',
            '18.form'
          ],
          '/elementui/data/': [
            '1.index',
            '1.table',
            '2.tag',
            '3.progress',
            '4.tree',
            '5.pagination',
            '6.badge',
            '7.avatar',
            '8.skeleton',
            '9.empty',
            '10.descriptions',
            '11.result',
          ],
          '/elementui/notice/': [
            '1.index',
            '1.alert',
            '2.loading',
            '3.message',
            '4.messagebox',
            '5.notification'
          ],
          '/elementui/navigation/': [
            '1.index',
            '1.affix',
            '2.navmenu',
            '3.tabs',
            '4.breadcrumb',
            '5.pageheader',
            '6.dropdown',
            '7.steps',
          ],
          '/elementui/others/': [
            '1.index',
            '1.dialog',
            '2.tooltip',
            '3.popover',
            '4.popconfirm',
            '5.card',
            '6.carousel',
            '7.collapse',
            '8.timeline',
            '9.divider',
            '10.calendar-calendar',
            '11.image',
            '12.backtop',
            '13.infinitescroll',
            '14.drawer'
          ],
          '/element-plus/base/': [
            '1.index',
            '1.layout',
            '2.container',
            '3.button',
            '4.link',
            '5.space',
            '6.scrollbar',
            '7.config-provider'
          ],
          '/element-plus/form/': [
            '1.index',
            '7.cascader',
            '1.radio',
            '2.checkbox',
            '3.input',
            '4.inputnumber',
            '5.select',
            '6.selectv2',
            '8.switch',
            '9.slider',
            '10.timepicker',
            '11.timeselect',
            '12.datepicker',
            '13.datetimepicker',
            '14.upload',
            '15.rate',
            '16.colorpicker',
            '17.transfer',
            '18.form'
          ],
          '/element-plus/data/': [
            '1.index',
            '1.table',
            '2.tag',
            '3.progress',
            '4.tree',
            '5.pagination',
            '6.badge',
            '7.avatar',
            '8.skeleton',
            '9.empty',
            '10.descriptions',
            '11.result',
          ],
          '/element-plus/notice/': [
            '1.index',
            '1.alert',
            '2.loading',
            '3.message',
            '4.messagebox',
            '5.notification'
          ],
          '/element-plus/navigation/': [
            '1.index',
            '1.affix',
            '2.navmenu',
            '3.tabs',
            '4.breadcrumb',
            '5.pageheader',
            '6.dropdown',
            '7.steps',
          ],
          '/element-plus/others/': [
            '1.index',
            '1.dialog',
            '2.tooltip',
            '3.popover',
            '4.popconfirm',
            '5.card',
            '6.carousel',
            '7.collapse',
            '8.timeline',
            '9.divider',
            '10.calendar-calendar',
            '11.image',
            '12.backtop',
            '13.infinitescroll',
            '14.drawer'
          ],
        }
      }
    }
  },
}