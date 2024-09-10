<template>
  <div v-loading="loading">
    <web-collapse v-model="activeName">
      <el-form
        ref="form"
        :model="baseInfoForm"
        label-width="80px"
        
        :rules="rules"
      >
        <web-collapse-item title="基本信息" name="base-info">
          <web-form-item
            v-for="(formItem, formItemIndex) in baseFormData"
            :formData="formItem"
            :key="formItemIndex"
          >
          </web-form-item>
        </web-collapse-item>
        <web-collapse-item
          title="历史记录"
          name="history-record"
          v-if="shows.historyRecord"
        >
          <web-form-item
            v-for="(formItem, formItemIndex) in historyFormData"
            :formData="formItem"
            :key="formItemIndex"
          >
          </web-form-item>
        </web-collapse-item>
      </el-form>
    </web-collapse>
    <web-button-group v-if="shows.saveButton">
      <web-button
        :disabled="disableds.saveButton"
        type="primary"
        @click="
          checkValidate(['add'].includes(pageSate) ? handleAdd : handleEdit)
        "
      >
        保存
      </web-button>
    </web-button-group>
  </div>
</template>
<script>
import config from './config'
export default {
  mixins: [config],
  data () {
    return {
      loading: false,
      activeName: ['base-info', 'history-record'],
      baseInfoForm: {
        storeType: false,
        inherit: false
      }
    }
  },
  inject: {
    rootPage: {
      type: Object
    }
  },
  created () {
    this.handleInit()
  },
  methods: {
    handleInit () {
      this.baseInfoForm = this.$set(
        this,
        'baseInfoForm',
        window._.cloneDeep(this.rootPage.tabsData.data)
      )
    },
    async checkValidate (handleFn) {
      this.loading = true
      let { rej, err } = await this.$awaitWarp(this.$refs.form.validate())
      if (rej === false || err) {
        this.loading = false
        return false
      }
      handleFn()
    },
    
  },
  computed: {
    pageSate () {
      return this.rootPage.tabsData.state
    },
  }
}
</script>