// 通过该文件，把需要用的组件进行全局的注册，因为在markdown中的文件不能使用import引入组件，必须要提前注册好全局的组件
import config from '@/config'
import ui from '@/ui'
import WebElementui from '../../components/index.js'
// import '../../components/index.scss'
import data from './data.js'
export default ({
    Vue
}) => {
    Vue.use(ui)
    Vue.use(config)
    Vue.use(WebElementui)
    Vue.use(data)
}