import VueECharts from 'vue-echarts' //注册图表
// import 'static/css/normalize.css'
// import 'static/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import WebElementui from '../../components/index.js'
import data from './data.js'

export default ({
    Vue
}) => {
    Vue.use(ElementUI)
    Vue.component('echart', VueECharts)
    Vue.use(WebElementui)
    Vue.use(data)
}