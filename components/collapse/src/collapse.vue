<template>
<el-collapse class="collapse" :value="activeName" @input="val => handleUpdate(val)">
  <slot></slot>
</el-collapse>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'WebCollapse',
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
    }
  }
</script>

<style lang="scss">
@import url("../index.scss");
</style>