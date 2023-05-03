<template>
  <el-drawer
    class="slider-right"
    :modal="false"
    title="我是标题"
    :visible.sync="drawer"
    :close-on-press-escape="false"
    :destroy-on-close="true"
    :append-to-body="true"
    :show-close="true"
    :wrapperClosable="false"
    :modal-append-to-body="false"
    :before-close="handleClear"
  >
    <template v-if="page.length">
      <el-tabs
        class="slider-tabs"
        v-model="activeName"
        type="card"
        editable
        @edit="handleClose"
      >
        <el-tab-pane
          class="slider-tab-pane"
          :name="pageItem.title"
          :label="pageItem.title"
          v-for="(pageItem, pageIndex) in page"
          :key="pageIndex"
        >
          <slot :data="pageItem"></slot>
        </el-tab-pane>
      </el-tabs>
    </template>
  </el-drawer>
</template>
<script>
import modal from '../../modal/src/modal'

export default {
  name: 'SliderRight',
  components: {
    modal
  },
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      activeName: '',
      page: this.value,
      drawer: false
    }
  },
  watch: {
    value: {
      handler (val) {
        this.page = val
        if (this.page.length) {
          this.drawer = true
        } else {
          this.drawer = false
        }
        let data = this.page[this.page.length - 1]
        this.activeName = data ? data.title : ''
      },
      deep: true
    }
  },
  methods: {
    handleClose (targetName) {
      let tabs = this.page
      let activeName = this.activeName
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.data.nameEn === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.data.nameEn
            }
          }
        })
      }
      this.activeName = activeName
      this.page = tabs.filter((tab) => tab.data.nameEn !== targetName)
      if (this.page.length) {
        this.drawer = true
      } else {
        this.drawer = false
      }
      this.$emit('input', this.page)
    },
    handleClear (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          this.page = []
          this.drawer = false
          this.$emit('input', [])
          done()
        })
        .catch((_) => {})
    }
  }
}
</script>
<style scoped>
.slider-right >>> .slider-button {
  padding: 10px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: white;
  box-shadow: 1px 0px 5px #888888;
}
.slider-right >>> #el-drawer__title span {
  display: none;
}
.slider-right >>> #el-drawer__title button {
  position: absolute;
  right: 6px;
  top: 8px;
  z-index: 1000;
}
.slider-right >>> #el-drawer__title {
  margin: 0;
  padding: 0;
}
.slider-right
  >>> .el-drawer__body
  > .el-tabs.el-tabs--top.el-tabs--border-card {
  height: 100%;
}
.slider-right >>> .el-tabs--border-card > .el-tabs__content {
  height: calc(100% - 69px);
}
.slider-right >>> .el-tabs--border-card > .el-tabs__content > .el-tab-pane {
  height: 100%;
}
.slider-right >>> .el-tabs__new-tab {
  display: none;
}
.slider-right {
  left: 30%;
  box-shadow: 2px 0px 3px 3px #888888;
}
.slider-right >>> .slider-tabs {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.slider-right >>> .slider-tabs .el-tabs__content {
  margin-left: 20px;
  margin-right: 20px;
  flex: 1;
}
.slider-right >>> .slider-tabs .slider-tab-pane {
  height: 100%;
}
</style>