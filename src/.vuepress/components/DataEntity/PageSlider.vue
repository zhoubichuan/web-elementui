<template>
  <div class="data-entity">
    <el-tabs class="content-tabs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane class="content-tabs-pane" label="基本信息" name="baseInfo">
        <base-info v-if="activeName === 'baseInfo'"></base-info>
      </el-tab-pane>
      <el-tab-pane class="content-tabs-pane" label="属性" name="attribute">
        <attribute v-if="activeName === 'attribute'"></attribute>
      </el-tab-pane>
      <el-tab-pane
        class="content-tabs-pane"
        label="功能配置"
        name="functionConfig"
      >
        <function-config
          v-if="activeName === 'functionConfig'"
        ></function-config>
      </el-tab-pane>
      <el-tab-pane class="content-tabs-pane" label="关系" name="relation">
        <relation v-if="activeName === 'relation'"></relation>
      </el-tab-pane>
      <el-tab-pane class="content-tabs-pane" label="权限" name="permission">
        <permission v-if="activeName === 'permission'"></permission>
      </el-tab-pane>
      <el-tab-pane
        class="content-tabs-pane"
        label="实例布局设置"
        name="instance"
      >
        <instance-layout v-if="activeName === 'instance'"></instance-layout>
      </el-tab-pane>
      <el-tab-pane class="content-tabs-pane" label="使用情况" name="userInfo">
        <user-info v-if="activeName === 'userInfo'"></user-info>
      </el-tab-pane>
      <el-tab-pane
        class="content-tabs-pane"
        label="历史记录"
        name="historyRecord"
      >
        <history-record v-if="activeName === 'historyRecord'"></history-record>
      </el-tab-pane>
    </el-tabs>
    <web-button-group class="slider-button" v-if="shows.groupButton">
      <web-button @click="handleEdit" v-show="shows.editButton" type="primary"
        >编辑</web-button
      >
      <web-button v-show="shows.preReleaseButton">预发布</web-button>
      <web-button v-show="shows.releaseButton">发布</web-button>
      <web-button v-show="shows.reviseButton">修订</web-button>
      <web-button v-show="shows.invalidButton">作废</web-button>
    </web-button-group>
  </div>
</template>
  
<script>
export default {
  components: {
    BaseInfo: () => import('./BaseInfo'),
    Attribute: () => import('./Attribute'),
    FunctionConfig: () => import('./FunctionConfig'),
    Relation: () => import('./Relation'),
    Permission: () => import('./Permission'),
    InstanceLayout: () => import('./InstanceLayout'),
    UserInfo: () => import('./UserInfo'),
    HistoryRecord: () => import('./HistoryRecord')
  },
  provide () {
    return {
      rootPage: this
    }
  },
  props: {
    pageData: {
      type: Object
    }
  },
  data () {
    return {
      activeName: 'baseInfo',
      tabsData: this.pageData
    }
  },
  computed: {
    pageState () {
      return this.tabsData.state
    },
    shows () {
      let result = {
        groupButton: true,
        editButton: true,
        preReleaseButton: true,
        releaseButton: true,
        reviseButton: true,
        invalidButton: true
      }
      if (this.pageState === 'show') {
        result.preReleaseButton = false
        result.releaseButton = false
        result.reviseButton = false
        result.invalidButton = false
      } else if (this.pageState === 'edit') {
        result.editButton = false
      } else if (this.pageState === 'add') {
        result.groupButton = false
      }
      return result
    }
  },
  watch: {
    pageData (val) {
      this.tabsData = val
    }
  },
  created () {
    this.handleInit()
  },
  methods: {
    handleEdit () {
      this.tabsData.state = 'edit'
    },
    handleClick (tab, event) {
      console.log(tab, event)
    },
    handleInit () {
      if (this.pageState === 'add') return false
      this.$api.getDataEntityDetail(this.pageData.data.id).then((res) => {
        this.tabsData.data = Object.assign(this.tabsData.data, res.result)
      })
    }
  }
}
</script>
<style scoped>
.data-entity {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}
.data-entity .content-tabs {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.data-entity .content-tabs >>> .el-tabs__header {
  flex-basis: 50px;
}
.data-entity .content-tabs >>> .slider-tabs.el-tabs__content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.data-entity .content-tabs .content-tabs-pane {
  height: calc(100% - 70px);
  overflow-y: auto;
}
.data-entity .slider-button {
  flex-basis: 50px;
}
</style>