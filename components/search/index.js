import Search from './src/search'
/* istanbul ignore next */
Search.install = function (Vue) {
  Vue.component(Search.name, Search)
}
export default Search
