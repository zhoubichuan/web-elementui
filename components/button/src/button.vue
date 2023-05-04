<template>
  <el-button
    size="mini"
    :loading="loading"
    v-bind="$attrs"
    v-on="$listeners"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>
<script>
export default {
  name: "WebButton",
  data() {
    return {
      loading: false,
    };
  },
  props: {
    duration: {
      type: Number,
      default: 1000,
    },
  },
  methods: {
    handleClick() {
      this.loading = true;
      let timer = setTimeout(() => {
        this.loading = false;
      }, this.duration);
      this.$once("hook:beforeDestory", () => {
        clearTimeout(timer);
      });
    },
  },
};
</script>
<style>
.el-icon-loading {
  position: absolute;
  left: 5px;
}
</style>