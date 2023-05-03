<template>
  <div >
    <el-table
      class="table"
      size="mini"
      v-bind="$attrs"
      v-on="$listeners">
        <slot></slot>
    </el-table>
    <el-pagination
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total"
      :page-size="pageData.pageSize"
      :page-count="pageCount"
      :current-page="pageData.curPage"
      @size-change="handleSizeChange"
      :page-sizes="pageSizes"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
import Pagination from '../../pagination/src/pagination.vue'

export default {
  name: 'WebTablePage',
  components: {
    Pagination
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        curPage: 1,
        pageSize: 20,
        total: 0
      })
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100, 200]
    }
  },
  data () {
    return {
      pageCount: 1,
      pageData: this.value
    }
  },
  watch: {
    value (val) {
      this.pageData = val
    }
  },
  methods: {
    updatePage (val) {
      this.$emit('input', val)
    },
    handleCurrentChange (val) {
      this.pageData.curPage = val
      this.$emit('input', this.pageData)
    },
    handleSizeChange (val) {
      this.pageData.pageSize = val
      this.$emit('input', this.pageData)
    },
    handleSelectionChange () {

    }
  }
}
</script>
<style scoped>
.table {
  overflow-y: auto;
}
.table >>> .el-table--scrollable-x .el-table__body-wrapper{
  height: 100%;
  overflow-y:auto ;
}
</style>