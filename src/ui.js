// import 'static/css/normalize.css'
// import 'static/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import WebElementui from '../components/index.js'
// import WebEcharts from 'web-echarts'
export default {
  install (Vue) {
    Vue.use(ElementUI)
    Vue.use(WebElementui)
    // Vue.use(WebEcharts)
  }
}
