<template>
  <div class="content">
    <!-- 右侧滑窗 -->
    <web-drawer v-model="sliderPage">
      <template slot-scope="pageData">
        <page-slider :pageData="pageData.data"></page-slider>
      </template>
    </web-drawer>
    <!-- 搜索 -->
    <page-search v-model="condition" @handleSearch="handleSearch" />
    <!-- 按钮 -->
    <page-button
      @handleCreate="handleCreate"
      @handleDelete="handleDelete"
      @handlePreRelease="handlePreRelease"
      @handleRelease="handleRelease"
      @handleRevise="handleRevise"
      @handleToVoid="handleToVoid"
      @handleInvalid="handleInvalid"
    />
    <!-- 数据展示 -->
    <page-table
      ref="refPageTable"
      v-model="selects"
      :searchConditon="condition"
      @showViewModal="showViewModal"
      @showEditModal="showEditModal"
      @pageChange="pageChange"
      @handleSearch="handleSearch"
    />
  </div>
</template>
<script>
export default {
  name: "DataEntity",
  components: {
    PageSearch: () => import("./PageSearch"),
    PageButton: () => import("./PageButton"),
    PageTable: () => import("./PageTable"),
    PageSlider: () => import("./PageSlider"),
  },
  provide() {
    return {
      template: "1",
      config: {},
    };
  },
  data() {
    return {
      condition: {},
      page: {},
      selects: [],
      sliderRightIndex: 0,
      sliderPage: [],
      loadingFlag: false,
      startLoad: true,
      addModalFlag: false,
    };
  },
  watch: {
    condition: {
      handler(newVal, oldVal) {
        if (this.startLoad) {
          this.handleSearch(this.condition);
          this.startLoad = false;
        }
      },
      deep: true,
    },
  },
  beforeCreate() {
    this.$on("handleSearch", () => {
      this.handleSearch();
    });
  },
  mounted() {},
  methods: {
    handleCreate() {
      if (!this.sliderPage.find((item) => item.state === "add")) {
        this.sliderPage.push({
          title: "创建页面",
          data: {
            storeType: false,
            inherit: false,
          },
          state: "add",
          getTableList: this.handleSearch,
        });
      }
    },
    showViewModal(row) {
      if (!this.sliderPage.find((item) => item.data.id === row.id)) {
        this.sliderPage.push({
          title: row.nameEn,
          data: row,
          state: "show",
          getTableList: this.handleSearch,
        });
      }
    },
    showEditModal(row) {
      if (!this.sliderPage.find((item) => item.data.id === row.id)) {
        this.sliderPage.push({
          title: row.nameEn,
          data: row,
          state: "edit",
          getTableList: this.handleSearch,
        });
      }
    },
    async handleDelete() {
      let arr = this.selects.map((item) => item._id);
      let res = await this.$api.pathDelete(arr);
      if (res) {
        this.handleSearch();
      }
    },
    handlePreRelease() {},
    handleRelease() {},
    handleRevise() {},
    handleToVoid() {},
    handleInvalid() {},
    pageChange(page) {
      this.page = page;
      let params = {
        ...page,
        ...this.condition,
      };
      this.handleSearch(params);
    },
    handleSearch(condition) {
      this.$refs.refPageTable &&
        this.$refs.refPageTable.handleSearch(condition);
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