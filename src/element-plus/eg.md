**搜索组件**

::: demo

```vue
<template>
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
    <web-table-column v-for="item in tableRows" :key="item.prop" :item="item">
      <!-- <template slot-scope="{ row }">
        {{ row[item.prop] || "-" }}
      </template> -->
    </web-table-column>
  </web-table-page>
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
      tableRows: [
        {
          attrs: { fixed: "left", type: "selection", width: "55" },
        },
        {
          label: "序号",
          attrs: { fixed: "left", type: "index", width: "55" },
        },
        {
          prop: "type",
          label: "组件类型",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "name",
          label: "字段",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "label",
          label: "名称",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "placeholder",
          label: "placeholder",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "multiple",
          label: "是否多选",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "defaultValue",
          label: "默认字段",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          prop: "options",
          label: "选项",
          attrs: { "show-overflow-tooltip": true },
        },
        {
          label: "操作",
          attrs: { fixed: "right", "show-overflow-tooltip": true },
          render: ({
            data: {
              attrs: { item, row },
            },
          }) => [
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
      ],
    };
  },
  mounted() {
    this.handleSearch();
  },
  methods: {
    showViewModal(row) {
      this.$emit("showViewModal", row);
    },
    showEditModal(row) {
      this.$emit("showEditModal", row);
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
    async queryDataEntityList(condition = {}) {
      this.tableData = this.getData('search1');
    },
  },
};
</script>
```

:::
