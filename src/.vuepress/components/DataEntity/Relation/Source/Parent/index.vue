  <template>
    <div>
      从父模型基础的属性
        <web-table-page
          border
          v-loading="loadingFlag"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          :data="tableData"
          stripe
          style="width: 100%"
          @selection-change="handleSelectionChange"
          class="table-part">
          <el-table-column
            fixed="left"
            type="index"
            width="55"
            >
          </el-table-column>
          <el-table-column
          fixed="left"
          type="selection"
          width="55">
          </el-table-column>
          <el-table-column
            sortable
            fixed="left"
            show-overflow-tooltip
            prop="code"
            label="编码"
          >
          <template slot-scope="scope">
              <el-link type="primary" @click="showViewModal(scope.$index, scope.row)">{{scope.row.productName}}</el-link>
          </template>
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="name"
            label="中文名称"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="nameEn"
            label="英文名称"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="descript"
            label="中文描述"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="descriptEn"
            label="英文描述"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="version"
            label="版本"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="eos"
            label="EOS时间"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="modeType"
            label="模型类型"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="creater"
            label="创建者"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="createTime"
            label="创建时间"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="modifier"
            label="更新者"
            width="105"
          >
          </el-table-column>
          <el-table-column
            sortable
            show-overflow-tooltip
            prop="modifiTime"
            label="更新时间"
            width="105"
          >
          </el-table-column>
          <el-table-column
            show-overflow-tooltip
            prop="tags"
            label="标签"
          >
          </el-table-column>
        </web-table-page>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          loadingFlag: false,
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
        handleSelectionChange () {

        }
      }
    }
  </script>