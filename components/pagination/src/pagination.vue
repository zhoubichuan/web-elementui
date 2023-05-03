<template>
  <el-pagination
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total"
      :page-size="pageData.pageSize"
      :page-count="pageCount"
      :current-page="pageData.curPage"
      @size-change="handleSizeChange"
      :page-sizes="pageSizes"
      @current-change="handleCurrentChange"
      >
  </el-pagination>
</template>
<script>
export default {
  name: 'WebPagination',
  model: {
    prop: 'page'
    // event: 'updatePage'
  },
  props: {
    page: {
      type: Object,
      default: () => ({
        curPage: 1,
        pageSize: 20,
        total: 0
      })
    },
    pageSizes: {
      type: Array
    }
  },
  data () {
    return {
      pageData: this.page,
      pageCount: 1
    }
  },
  watch: {
    page (val) {
      this.pageData = val
    }
  },
  methods: {
    handleCurrentChange (val) {
      this.pageData.curPage = val
      this.$emit('input', this.pageData)
    },
    handleSizeChange (val) {
      this.pageData.pageSize = val
      this.$emit('input', this.pageData)
    }
  }
}
</script>
<style scoped>
 .pagination >>> .el-pagination__jump{
    float:right;
  }
</style>
