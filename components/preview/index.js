import Preview from './src/preview'
/* istanbul ignore next */
Preview.install = function (Vue) {
  Vue.component(Preview.name, Preview)
}
export default Preview
