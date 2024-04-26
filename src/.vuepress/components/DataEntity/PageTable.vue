<template>
  <web-table-page
    :value="page"
    @input="(val) => handleInput(val)"
    v-loading="loadingFlag"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    :data="tableData"
    stripe
    highlight-current-row
    style="width: 100%"
    @selection-change="handleSelectionChange"
    class="table-part"
  >
    <web-table-column v-for="item in tableRows" :key="item.prop" :item="item" />
  </web-table-page>
</template>

<script>
import table from "./PageTableConfig.js";
export default {
  mixins: [table],
  props: {
    searchConditon: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {
      sliderRightIndex: 0,
      sliderPage: {},
      conditon: this.searchConditon,
      page: {
        current: 1,
        pageSize: 20,
        total: 0,
      },
      loadingFlag: false,
      addModalFlag: false,
      editModalFlag: false,
      removeModalFlag: false,
      drawer: false,
      tableData: [],
      productId: "",
    };
  },
  methods: {
    handleInput(val) {
      this.page = val;
      this.$emit("pageChange", this.page);
    },
    handleSearch(condition) {
      this.queryDataEntityList(condition);
    },
    handleChange(val) {
      console.log(val);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    clickpageNum(index) {
      console.log("pageCount  " + index);
    },
    handleSelectionChange(val) {
      this.$emit("input", val);
    },
    modalChange() {
      this.addModalFlag = false;
      this.removeModalFlag = false;
      this.editModalFlag = false;
    },
    showRemoveModal(index, row) {
      this.removeModalFlag = true;
      this.productId = row._id;
    },
    async deleteModal(row) {
      let res = await this.$api.deleteDataEntity(row._id);
      if (res) {
        this.$message({
          message: "数据删除成功",
          type: "success",
        });
        this.handleSearch();
      }
    },
    async queryDataEntityList(condition = {}) {
      this.loadingFlag = true;
      let { current, pageSize } = this.page;
      let { result } = await this.$api.getDataEntityList({
        current,
        pageSize,
        ...condition,
      });
      try {
        if (result) {
          let {
            data,
            page: { current, total, pageSize },
          } = result;
          this.loadingFlag = false;
          this.page.total = total;
          this.page.current = current;
          this.page.pageSize = pageSize;
          this.tableData = data;
        } else {
          this.tableData = [];
          this.loadingFlag = false;
        }
      } catch (e) {
        console.log(e);
      } finally {
        this.loadingFlag = false;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search-part {
  flex-basis: 20px;
}

.button-part {
  flex-basis: 20px;
}

.table-part {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>