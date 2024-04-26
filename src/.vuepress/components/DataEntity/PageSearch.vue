<template>
  <!-- 搜索组件 -->
  <web-search
    class="search-part"
    :condition="condition"
    :value="searchField"
    @input="(val) => updateField(val)"
    @handleSearch="handleSearch"
  />
</template>
<script>
import search from './PageSearchConfig.js'
export default {
  mixins: [search],
  name: 'DataEntitySearch',
  data () {
    return {
      searchField: {}
    }
  },
  watch: {},
  methods: {
    updateField (val) {
      this.searchField = val
      this.$emit('input', this.searchField)
    },
    handleSearch (condition) {
      this.$emit('handleSearch', condition)
    }
  }
}
</script>
