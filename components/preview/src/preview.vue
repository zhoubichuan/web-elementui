<template>
  <div>
    <el-button
      size="mini"
      :loading="loading"
      v-bind="$attrs"
      v-on="$listeners"
      @click="handleClick"
    >
      <slot></slot>
    </el-button>
    <el-dialog
      v-if="dialogFormVisible"
      center
      :title="name || '预览页面'"
      modal-append-to-body
      :append-to-body="true"
      :destroy-on-close="true"
      :close-on-press-escape="false"
      :close-on-click-modal="false"
      :visible.sync="dialogFormVisible"
    >
      <iframe :src="url" width="100%" height="100%"></iframe>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "WebPreview",
  data() {
    return {
      loading: false,
      dialogFormVisible: false,
    };
  },
  props: {
    duration: {
      type: Number,
      default: 1000,
    },
    value: {
      tyep: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
    url: {
      type: String,
    },
  },
  methods: {
    handleClick() {
      this.loading = true;
      let timer = setTimeout(() => {
        this.loading = false;
      }, this.duration);
      this.$once("hook:beforeDestory", () => {
        clearTimeout(timer);
      });
      this.dialogFormVisible = !this.dialogFormVisible;
    },
    cancel() {
      this.dialogFormVisible = false;
    },
  },
};
</script>
<style lang="scss">
.el-dialog {
  height: 90%;
  margin: 0!important;
  transform: translate(-50%, -50%);
  width: 90%;
  left: 50%;
  top: 50%;
}
.el-icon-loading {
  position: absolute;
  left: 5px;
}
.el-dialog__body {
  height: calc(100% - 104px);
  padding-top:0!important ;
  iframe{
    border:'none'
  }
}
</style>