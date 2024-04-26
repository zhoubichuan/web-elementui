<template>
<div class="user-info">
  <el-tabs class="content-tabs" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane class="content-tabs-pane" label="搜索服务引用信息" name="searchService">
      <search-service v-if="activeName === 'searchService'"></search-service>
    </el-tab-pane>
    <el-tab-pane class="content-tabs-pane" label="参考对象引用信息" name="referenceObject">
      <search-service v-if="activeName === 'referenceObject'"></search-service>
    </el-tab-pane>
    <el-tab-pane class="content-tabs-pane" label="数据实体引用信息" name="DataEntity">
      <search-service v-if="activeName === 'DataEntity'"></search-service>
    </el-tab-pane>
    <el-tab-pane class="content-tabs-pane" label="关系实体引用信息" name="relationEntity">
      <search-service v-if="activeName === 'relationEntity'"></search-service>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
  
<script>
export default {
  components: {
    SearchService: () => import('./SearchService'),
    ReferenceObject: () => import('./ReferenceObject'),
    DataEntity: () => import('./DataEntity'),
    RelationEntity: () => import('./RelationEntity')
  },
  provide () {
    return {
      'rootPage': this
    }
  },
  props: {
    pageData: {
      type: Object
    }
  },
  data () {
    return {
      activeName: 'searchService',
      tabsData: this.pageData
    }
  },
  computed: {
    pageState () {
      return this.tabsData.state
    }
  },
  watch: {
    pageData (val) {
      this.tabsData = val
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>