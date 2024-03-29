import Transfer from './src/transfer'
/* istanbul ignore next */
Transfer.install = function (Vue) {
  Vue.component(Transfer.name, Transfer)
}
export default Transfer
