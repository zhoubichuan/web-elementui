import Layout from './src/Layout'
/* istanbul ignore next */
Layout.install = function (Vue) {
  Vue.component(Layout.name, Layout)
}
export default Layout
