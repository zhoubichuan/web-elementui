  <template>
  <div>
    <p>从父模型基础的属性</p>
    <web-table-page
      border
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
  </div>
</template>

  <script>
import FormMixin from '../../FormMixin.js'
import table from './BaseAttr.js'
export default {
  mixins: [table, FormMixin],
  data () {
    return {
      loadingFlag: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleSelectionChange () {}
  }
}
</script>