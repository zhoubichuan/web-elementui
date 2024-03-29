import TimeSelect from './src/timeselect'
/* istanbul ignore next */
TimeSelect.install = function (Vue) {
  Vue.component(TimeSelect.name, TimeSelect)
}
export default TimeSelect
