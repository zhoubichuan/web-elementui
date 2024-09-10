<template>
  <el-dropdown  v-bind="$attrs" v-on="$listeners" @click="handleClick">
    <slot></slot>
  </el-dropdown>
</template>
<script>

export default {
  name: 'WebDropdown',
  data () {
    return {
      loading: false
    }
  },
  props: {
    duration: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    handleClick () {
      this.loading = true
      let timer = setTimeout(() => {
      this.loading = false
      }, this.duration)
      this.$once('hook:beforeDestory', () => {
        clearTimeout(timer)
      })
    }
  },
  install (Vue) {
    Vue.component('MeDropdown', this)
  }
}
</script>
<style>

</style>