<template>
  <div>
    <el-upload
      :action="'/attribute/' + uptype"
      list-type="picture-card"
      :on-preview="handlePreview"
      :on-success="handleSuccess"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'UploadImage',
  props: {
    value: {
      type: String,
      default: 'center'
    },
    uptype: {
      type: String,
      default: 'image'
    }
  },
  data () {
    return {
      dialogImageUrl: this.value,
      dialogVisible: false
    }
  },
  methods: {
    handlePreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleSuccess (response, file, fileList) {
      this.$emit('input', response.url)
    }
  }
}
</script>
<style>
.button-group {
  text-align: center;
}
.global-group {
  margin: 10px 0;
}
</style>