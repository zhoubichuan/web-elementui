<template>
  <el-dropdown-item size="mini" :loading="loading" v-bind="$attrs" v-on="$listeners" @click="handleClick">
    <slot></slot>
  </el-dropdown-item>
</template>
<script>

export default {
  name: 'WebDropdownMenu',
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
    Vue.component('MeDropdownMenu', this)
  }
}
</script>
<style>

</style>