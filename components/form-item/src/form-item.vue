<template>
  <div>
    <el-row v-if="formData.length === 2">
      <el-col :span="10">
        <el-form-item :label="formData[0].label" :prop="formData[0].prop">
          <Render v-if="typeof formData[0].render === 'function'" :render="formData[0].render" :formItem="formData[0]"></Render>
          <span v-else>{{formData[0].render}}</span>
        </el-form-item>
      </el-col>
      <el-col :span="4">
        &nbsp;
      </el-col>
      <el-col :span="10">
        <el-form-item :label="formData[1].label" :prop="formData[1].prop">
          <Render v-if="typeof formData[1].render === 'function'" :render="formData[1].render" :formItem="formData[1]"></Render>
          <span v-else>{{formData[1].render}}</span>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row v-else-if="formData.length === 1">
      <el-col :span="24">
        <el-form-item :label="formData[0].label" :prop="formData[0].prop">
          <Render v-if="typeof formData[0].render === 'function'" :render="formData[0].render" :formItem="formData[0]"></Render>
          <span v-else>{{formData[0].render}}</span>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Render from '../../Render.js'

export default {
  name: 'WebFormItem',
  components: {
    Render
  },
  props: {
    formData: {
      tyep: Array,
      default: () => []
    }
  }
}
</script>