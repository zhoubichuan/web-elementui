<template>
  <el-button size="mini" :loading="loading" v-bind="$attrs" v-on="$listeners" @click="handleClick">
    <slot></slot>
  </el-button>
</template>
<script>

export default {
  name: 'MeButton',
  data () {
    return {
      loading: false
    }
  },
  props: {
    duration: {
      type: Number,
      default: 1000
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
    Vue.component('MeButton', this)
  }
}
</script>
<style>

</style>