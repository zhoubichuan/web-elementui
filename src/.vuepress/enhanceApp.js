// 通过该文件，把需要用的组件进行全局的注册，因为在markdown中的文件不能使用import引入组件，必须要提前注册好全局的组件
// import VueECharts from 'vue-echarts' //注册图表
// import 'static/css/normalize.css'
// import 'static/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import WebElementui from '../../components/index.js'

export default ({
    Vue
}) => {
    Vue.use(ElementUI)
    // Vue.component('chart', VueECharts)
    Vue.use(WebElementui)
}