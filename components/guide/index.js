import Guide from './src/guide'
/* istanbul ignore next */
Guide.install = function (Vue) {
  Vue.component(Guide.name, Guide)
}
export default Guide
