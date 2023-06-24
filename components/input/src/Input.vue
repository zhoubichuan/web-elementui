<template>
  <el-input clearable :value="value" @input="update" :placeholder="placeholder"></el-input>
</template>
  
<script>
export default {
  name: 'WebInput',
  model: {
    props: 'inputValue',
    event: 'updateValue'
  },
  props: {
    inputValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  data () {
    return {
      value: this.inputValue
    }
  },
  watch: {
    inputValue (val) {
      this.value = val
    }
  },
  methods: {
    update (val) {
      this.value = val
      console.log(val)
      this.$emit('updateValue', this.value)
    }
  }
}
</script>