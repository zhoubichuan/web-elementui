<template>
  <el-popconfirm v-bind="$attrs" v-on="$listeners">
    <template v-slot:default>
      <slot></slot>
    </template>
  </el-popconfirm>
</template>
  <script>
export default {
  name: "WebPopconfirm",
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
</style>