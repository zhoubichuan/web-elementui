<template>
  <el-select  
    :value="selectValue"
    @input="update"
    clearable
    filterable
    :multiple="multiple"
    :placeholder="placeholder">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: 'WebSelect',
  // model: {
  //   props: 'value',
  //   event: 'updateValue'
  // },
  props: {
    value: {
      type: [Array, String],
      require: true
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    options: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [String, Array],
      default: ''
    }
  },
  data () {
    return {
      selectValue: this.value
    }
  },
  watch: {
    value (val) {
      this.selectValue = val
    }
  },
  created () {
    if (this.defaultValue) {
      this.selectValue = this.defaultValue
      this.$emit('input', this.selectValue)
    }
  },
  methods: {
    update (val) {
      this.selectValue = val
      this.$emit('input', this.selectValue)
    }
  }
}
</script>
