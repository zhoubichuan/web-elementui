<template>
  <el-dialog
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
      <web-button @click="cancel">取 消</web-button>
      <web-button type="primary" @click="create">确 定</web-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  name: "WebDialog",
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
      dialogFormVisible: this.value,
    };
  },
  watch: {
    value(val) {
      this.dialogFormVisible = val;
      this.$emit("input", val);
    },
  },
  methods: {
    cancel() {
      this.$emit("input", false);
    },
    create() {
      this.$emit("create");
      this.$emit("input", false);
    },
  },
};
</script>