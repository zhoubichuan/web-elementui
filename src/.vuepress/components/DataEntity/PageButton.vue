<template>
  <web-button-group class="button-part" justify="start">
    <web-button @click="handleCreate" type="primary">创建</web-button>
    <web-button @click="handleDelete">删除</web-button>
    <web-button @click="handlePreRelease">预发布</web-button>
    <web-button @click="handleRelease">发布</web-button>
    <web-button @click="handleRevise">修订</web-button>
    <web-button @click="handleToVoid">失效</web-button>
    <web-button @click="handleInvalid">作废</web-button>
    <el-dropdown @click="handleCreate">
      <span class="el-dropdown-link">
        导入导出操作<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>全部导出</el-dropdown-item>
        <el-dropdown-item>导出选中项</el-dropdown-item>
        <el-dropdown-item>导入数据实体</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
    <web-button >添加标签</web-button>
  </web-button-group>
</template>
<script>
export default {
    components: {

    },
    data () {
      return {
      }
    },
    watch: {

    },
    methods: {
      handleCreate () {
        this.$emit('handleCreate')
        // this.$set(this.sliderPage, 'create', {
        //   title: '创建页面',
        //   data: {
        //     storeType: false,
        //     inherit: false
        //   },
        //   state: 'add',
        //   getTableList: this.handleSearch
        // })
        // this.sliderRightIndex++
        // this.addModalFlag = true
      },
      handleDelete () {
        this.$emit('handleDelete')
      },
      handlePreRelease () {
        this.$emit('handlePreRelease')
      },
      handleRelease () {
        this.$emit('handleRelease')
      },
      handleRevise () {
        this.$emit('handleRevise')
      },
      handleToVoid () {
        this.$emit('handleToVoid')
      },
      handleInvalid () {
        this.$emit('handleInvalid')
      }
    }
}
</script>

<style scoped lang="scss">
.content {
  height:100%;
  display:flex;
  flex-direction: column;
}
.search-part{
  flex-basis: 20px;
}
.button-part{
  flex-basis: 20px;
}
.table-part{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
</style>