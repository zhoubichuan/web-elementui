<template>
<el-row :gutter="20">
  <el-col :span="6">
    <el-form-item :label="label">
      <slot></slot>
    </el-form-item>
  </el-col>
</el-row>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CommonForm',
  props: {
    label: {
        type: String
    }
  },
  methods: {
    modalChange () {
      this.$emit('modalToggle')
    },
    resetForm () {
      this.$emit('resetEvent')
    }
  }
}
</script>

<style scoped>
 
</style>
