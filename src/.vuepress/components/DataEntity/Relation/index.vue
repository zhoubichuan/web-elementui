<template>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="源模型项关系" name="source">
      <source-relation v-if="activeName === 'source'"></source-relation>
    </el-tab-pane>
    <el-tab-pane label="目标模型项关系" name="target">
      <target-relation v-if="activeName === 'target'"></target-relation>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  components: {
    SourceRelation: () => import('./Source'),
    TargetRelation: () => import('./Target')
  },
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