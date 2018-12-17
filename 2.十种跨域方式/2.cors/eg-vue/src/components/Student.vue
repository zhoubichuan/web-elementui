  <template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="s_name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="s_math"
        label="数学"
        width="180">
      </el-table-column>
       <el-table-column
        prop="s_english"
        label="英语"
        width="180">
      </el-table-column>
      <el-table-column
      label="操作"
      width="180">
      <template slot-scope="scope">
        <el-button @click="handleDelete" type="text" size="small">删除</el-button>
        <el-button type="text" size="small" @click="handleEdit">编辑</el-button>
        <el-button type="text" size="small" @click="handleAdd">添加</el-button>
      </template>
    </el-table-column>
    </el-table>

    <el-dialog title="修改学生成绩" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" >
          <el-input v-model="form.s_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数学" >
          <el-input v-model="form.s_math" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="英语" >
          <el-input v-model="form.s_english" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </div>
    </el-dialog>
  
  </div>
  </template>

  <script>
export default {
  data() {
    return {
      tableData: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      isAdd: false,
      form: {
        id: "",
        s_name: "",
        s_math: "",
        s_english: ""
      },
      dialogVisible: false
    };
  },
  created() {
    this.axios.get("http://localhost:3000/query").then(result => {
      this.tableData = result.data.data;
    });
  },
  methods: {
    handleConfirm() {
      this.dialogFormVisible = false;
      if (this.isAdd) {
        this.axios.post("http://localhost:3000/add", this.form).then(result => {
          this.tableData = result.data.data;
        });
      } else {
        this.axios
          .put("http://localhost:3000/updata", {
            data: this.qs.stringify(this.form)
          })
          .then(result => {
            this.tableData = result.data.data;
          });
      }
    },
    handleAdd() {
      this.dialogFormVisible = true;
      this.isAdd = true;
    },
    handleEdit(e) {
      this.dialogFormVisible = true;
      this.isAdd = false;
      this.form.id =
        e.target.parentNode.parentNode.parentNode.parentNode.children[0].innerText;
      this.form.s_name =
        e.target.parentNode.parentNode.parentNode.parentNode.children[1].innerText;
      this.form.s_math =
        e.target.parentNode.parentNode.parentNode.parentNode.children[2].innerText;
      this.form.s_english =
        e.target.parentNode.parentNode.parentNode.parentNode.children[3].innerText;
    },
    handleDelete(e) {
      let id =
        e.target.parentNode.parentNode.parentNode.parentNode.children[0]
          .innerText;
      this.axios
        .delete("http://localhost:3000/delete", {
          data: this.qs.stringify({ id })
        })
        .then(result => {
          this.tableData = result.data.data;
        });
    }
  }
};
</script>