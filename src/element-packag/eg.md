::: demo

```vue
<template>
  <div>
    <web-table-page
      :value="page"
      @input="(val) => handleInput(val)"
      v-loading="loadingFlag"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      :data="tableData"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
      class="table-part"
    >
      <web-table-column
        v-for="item in tableRows"
        :key="item.prop"
        :item="item"
      />
    </web-table-page>
    <web-dialog> 111111 </web-dialog>
  </div>
</template>
<script>
export default {
  props: {
    searchConditon: {
      type: Object,
      default: () => {},
    },
  },
  components: {},
  data() {
    return {
      item: {
        label: "操作",
        attrs: { fixed: "right", "show-overflow-tooltip": true },
        render: (
          h,
          {
            data: {
              attrs: { item, row },
            },
          }
        ) => [
          <el-link
            icon={"el-icon-edit"}
            title={"编辑"}
            onClick={(row) => this.showEditModal(row)}
          ></el-link>,
          <el-link
            icon={"el-icon-collection"}
            title={"修订"}
            onClick={(row) => this.showRemoveModal(row)}
          ></el-link>,
        ],
      },
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
      tableData: require("@/assets/data/search1.js").default,
      productId: "",
      tableRows: require("@/assets/data/table2.js").default.map((i) =>
        typeof i === "function" ? i.call(this) : i
      ),
    };
  },
  mounted() {
    this.handleSearch();
  },
  methods: {
    showViewModal(row) {
      this.$emit("showViewModal", row);
    },
    showEditModal(scope) {
      this.tableRows = this.tableRows.map((item, index) => {
        if (index === scope.$index) {
          item.isEdit = true;
        }
        return item;
      });
    },
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
    async queryDataEntityList(condition = {}) {},
  },
};
</script>
```

:::

<style >
  .navbar,.page-edit{
    display:none
  }
  .theme-default-content:not(.custom) > *:first-child{
    margin-top:0;
  }
</style>
