<template>
  <el-dialog
    v-if="dialogFormVisible"
    center
    :title="name || '基本属性'"
    modal-append-to-body
    :append-to-body="true"
    :destroy-on-close="true"
    :close-on-press-escape="false"
    :close-on-click-modal="false"
    :visible.sync="dialogFormVisible"
  >
    <slot></slot>
    <div slot="footer" class="dialog-footer">
      <me-button @click="cancel">取 消</me-button>
      <me-button type="primary" @click="create">确 定</me-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "DialogForm",
  props: {
    value: {
      tyep: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      dialogFormVisible: false,
    };
  },
  methods: {
    handleCreate() {
      this.dialogFormVisible = true;
    },
    cancel(){
      this.dialogFormVisible = false
    },
    create() {
      this.$emit("create");
      this.dialogFormVisible = false;
    },
  },
  install(Vue) {
    Vue.component("DialogForm", this);
  },
};
</script>