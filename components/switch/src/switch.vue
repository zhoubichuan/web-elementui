<template>
  <el-switch
    
    :loading="loading"
    v-bind="$attrs"
    v-on="$listeners"
    @click="handleClick"
  >
    <slot></slot>
  </el-switch>
</template>
<script>
export default {
  name: "WebSwitch",
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
<style lang="scss">
.el-icon-loading {
  position: absolute;
  left: 5px;
}
</style>