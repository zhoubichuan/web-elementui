<template>
  <el-dialog
    v-bind="attrs"
    v-on="$listeners"
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
  name: 'WebDialog',
  computed: {
    attrs () {
      return {
        center: true,
        'modal-append-to-body': true,
        'append-to-body': true,
        'destroy-on-close': true,
        'close-on-press-escape': true,
        'close-on-click-modal': true,
        ...this.$attrs
      }
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    create () {
      this.$emit('create')
    }
  }
}
</script>