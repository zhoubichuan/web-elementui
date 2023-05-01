<template>
<el-collapse class="collapse" :value="activeName" @input="val => handleUpdate(val)">
  <slot></slot>
</el-collapse>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Collapse',
    model: {
      prop: 'name',
      event: 'update'
    },
    props: {
      name: {
          type: Array
      }
    },
    data () {
      return {
        activeName: this.name
      }
    },
    watch: {
      activeName (val) {
        return this.name
      }
    },
    methods: {
      handleUpdate (val) {
        this.activeName = val
        this.$emit('update', this.activeName)
      }
    },
    install (Vue) {
      Vue.component('Collapse', this)
    }
  }
</script>

<style scoped>
 .collapse >>> .el-collapse-item__header{
   border-bottom: none;
 }
 .collapse .el-collapse-item__content{
   border-bottom: none;  
 }
</style>
