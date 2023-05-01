<template>
    <el-table-column
    v-bind="$attrs"
    v-on="$listeners">
    </el-table-column>
</template>
<script>

export default {
  name: 'TableColumn',
  install (Vue) {
    Vue.component('TableColumn', this)
  }
}
</script>