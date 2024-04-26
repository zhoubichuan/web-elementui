<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="源模型项关系" name="source">source</el-tab-pane>
    <el-tab-pane label="目标模型项关系" name="target">配置管理</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data () {
      return {
        activeName: 'source'
      }
  },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
    }
    }
  }
</script>