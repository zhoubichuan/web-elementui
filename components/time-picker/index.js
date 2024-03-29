import TimePicker from './src/timepicker'
/* istanbul ignore next */
TimePicker.install = function (Vue) {
  Vue.component(TimePicker.name, TimePicker)
}
export default TimePicker
