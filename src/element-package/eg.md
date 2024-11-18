::: demo

```vue
<template>
  <div>
    <web-button @click="handleAdd">增加</web-button>
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
    <web-dialog
      title="编辑页面"
      v-model="dialogFormVisible"
      @create="handleCreate"
    >
      <el-form
        size="mini"
        :inline="true"
        :model="formData"
        class="demo-form-inline"
      >
        <el-input v-model="formData.label"></el-input>
        <el-input v-model="formData.value"></el-input>
      </el-form>
    </web-dialog>
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
      isAdd: false,
      type: 1,
      changeIndex: "",
      formData: { label: "", value: "" },
      conditionItems: [
        {
          type: "searchInput",
          name: "code",
          label: "编码",
          placeholder: "请输入编码",
        },
        {
          type: "searchInput",
          name: "name",
          label: "中文名称",
          placeholder: "请输入中文名称",
        },
      ],
      dialogFormVisible: false,
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
      tableRows: require("@/assets/data/tableRowsSelect.js").default.map((i) =>
        typeof i === "function" ? i.call(this) : i
      ),
    };
  },
  async created() {
    let res = await this.$api.getSelect({ type: this.type });
    if (res.data) {
      this.tableData = res.data;
    }
  },
  mounted() {
    this.handleSearch();
  },
  methods: {
    async handleAdd() {
      this.dialogFormVisible = true;
      this.isAdd = true;
    },
    async handleCreate() {
      if (this.isAdd) {
        this.tableData.push(this.formData);
      } else {
        this.tableData[this.changeIndex] = this.formData;
      }
      let res = await this.$api.changeSelect({ type: 1, data: this.tableData });
      if (res.data) {
        this.tableData = res.data;
      }
    },
    showViewModal(row) {
      this.$emit("showViewModal", row);
    },
    showEditModal(scope) {
      this.tableRows.forEach((item, index) => {
        if (index === scope.$index) {
          let { label, value } = scope.row;
          this.formData.label = label;
          this.formData.value = value;
          this.dialogFormVisible = true;
          this.changeIndex = index;
        }
      });
    },
    handleInput(val) {
      this.page = val;
      this.$emit("pageChange", this.page);
    },
    handleSearch(condition) {
      this.queryDataEntityList(condition);
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
    async showRemoveModal(scope) {
      this.changeIndex = scope.$index
      this.tableData.slice(scope.$index,1)
      let res = await this.$api.changeSelect({ type: 1, data: this.tableData });
      if (res.data) {
        this.tableData = res.data;
      }
    },
    async queryDataEntityList(condition = {}) {},
  },
};
</script>
```

:::
