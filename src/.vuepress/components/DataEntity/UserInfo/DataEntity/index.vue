<template>
  <div>
      <!-- <web-button-group class="button-part" justify="start">
        <el-button  @click="compire" type="primary">对比</el-button>
      </web-button-group> -->
      <web-table-page
        :data="tableData"
        style="width: 100%">
        <el-table-column
          type="index">
        </el-table-column>
        <el-table-column
        type="selection"
        width="55">
      </el-table-column>
        <el-table-column
          prop="code"
          label="编码"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="源数据实体"
          width="180">
          <template slot-scope="{row}">
            <el-button type="text" @click="toSourcePage(row)">{{row.name}}</el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="目标数据实体">
          <template slot-scope="{row}">
            <el-button type="text" @click="toTargetPage(row)">{{row.address}}</el-button>
          </template>
        </el-table-column>
      </web-table-page>
  </div>
</template>

<script>
export default {
  components: {

  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    toSourcePage (row) {

    },
    toTargetPage (row) {

    }
  }
}
</script>