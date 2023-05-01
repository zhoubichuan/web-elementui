// 通过该文件，把需要用的组件进行全局的注册，因为在markdown中的文件不能使用import引入组件，必须要提前注册好全局的组件
// import VueECharts from 'vue-echarts' //注册图表
// import 'static/css/normalize.css'
// import 'static/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import SearchForm from '../../components/SearchForm/index.vue'
import TablePage from '../../components/TablePage/index.vue'
import Collapse from '../../components/Collapse/index.vue'
import CollapseItem from '../../components/Collapse/CollapseItem.vue'
import TableColumn from '../../components/TablePage/TableColumn.vue'
import ButtonGroup from '../../components/ButtonGroup/index.vue'
import MeDropdown from '../../components/ButtonGroup/MeDropdown.vue'
import MeDropdownMenu from '../../components/ButtonGroup/MeDropdownMenu.vue'
import MeButton from '../../components/ButtonGroup/MeButton.vue'
import FormItem from '../../components/FormItem'
import DialogForm from '../../components/Dialog/DialogForm'
import SliderRight from '../../components/SliderRight'
import UploadImage from '../../components/UploadImage'

export default ({
    Vue
}) => {
    Vue.use(ElementUI)
    // Vue.component('chart', VueECharts)
    Vue.use(Collapse)
    Vue.use(CollapseItem)
    Vue.use(SearchForm)
    Vue.use(SliderRight)
    Vue.use(TablePage)
    Vue.use(TableColumn)
    Vue.use(ButtonGroup)
    Vue.use(MeDropdown)
    Vue.use(MeDropdownMenu)
    Vue.use(MeButton)
    Vue.use(FormItem)
    Vue.use(DialogForm)
    Vue.use(UploadImage)
}