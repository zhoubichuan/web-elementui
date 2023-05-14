<template>
<el-collapse-item class="collapse-item" v-bind="$attrs">
  <slot></slot>
</el-collapse-item>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'WebCollapseItem',
    install (Vue) {
      Vue.component('WebCollapseItem', this)
    }
  }
</script>

<style scoped>
.collapse-item >>> .el-collapse-item__wrap{
  border-bottom: none;
}
.collapse-item >>> .el-collapse-item__content{
  padding-bottom: 0;
}

</style>
