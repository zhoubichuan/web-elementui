<template>
  <div>
    <el-table
      class="table"
      size="mini"
      v-bind="{ ...defaultAttrs, ...$attrs }"
      v-on="$listeners"
    >
      <slot></slot>
    </el-table>
    <el-pagination
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total"
      :page-size="pageData.pageSize"
      :page-count="pageCount"
      :current-page="pageData.current"
      @size-change="handleSizeChange"
      :page-sizes="pageSizes"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>
<script>
import Pagination from "../../pagination/src/pagination.vue";

export default {
  name: "WebTablePage",
  components: {
    Pagination,
  },
  props: {
    value: {
      type: Object,
      default: () => ({
        current: 1,
        pageSize: 20,
        total: 0,
      }),
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 50, 100, 200],
    },
  },
  data() {
    return {
      pageCount: 1,
      pageData: this.value,
      defaultAttrs: {
        stripe: true,
        fit: true,
        "show-header": true,
        "highlight-current-row": true,
      },
    };
  },
  watch: {
    value(val) {
      this.pageData = val;
    },
  },
  methods: {
    updatePage(val) {
      this.$emit("input", val);
    },
    handleCurrentChange(val) {
      this.pageData.current = val;
      this.$emit("input", this.pageData);
    },
    handleSizeChange(val) {
      this.pageData.pageSize = val;
      this.$emit("input", this.pageData);
    },
    handleSelectionChange() {},
  },
};
</script>
<style scoped lang="scss">
.table {
  height: 100%;
  ::v-deep.el-table--scrollable-x {
    .el-table__body-wrapper {
      height: 100%;
      overflow-y: auto;
    }
  }
  ::v-deep.el-table__body-wrapper {
    height: calc(100% - 36px);
    overflow-y: auto;
  }
}
.el-table_fixed,
el-table__fixed-right {
  height: 100% !important;
}
.el-table__fixed-body-wrapper {
  height: 100 !important;
}
.el-table__fixed-body-wrapper .el-table__body {
  padding-bottom: 20px;
}
</style>