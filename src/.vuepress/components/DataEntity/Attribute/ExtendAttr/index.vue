<template>
  <div>
    <web-dialog
      :visible.sync="visibleDialog"
      ref="dialogForm"
      title="扩展属性"
      @create="create"
    >
      <el-form
        ref="form"
        :model="baseInfoForm"
        label-width="80px"
        
        :rules="rules"
      >
        <web-form-item
          v-for="(formItem, formItemIndex) in baseFormData"
          :formData="formItem"
          :key="formItemIndex"
        >
        </web-form-item>
      </el-form>
    </web-dialog>
    <p>扩展属性</p>
    <web-button-group justify="start">
      <web-button type="primary" @click="handleCreate">创建</web-button>
      <web-button>删除</web-button>
      <web-button>生效</web-button>
      <web-button>失效</web-button>
      <web-button type="primary">导入导出</web-button>
    </web-button-group>
    <web-table-page
      border
      v-loading="loadingFlag"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      :data="tableData"
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
      class="table-part"
    >
      <web-table-column
        v-for="item in tableRows"
        :key="item.prop"
        :item="item"
      />
    </web-table-page>
  </div>
</template>
<script>
import FormMixin from '../../FormMixin.js'
import table from './BaseAttr.js'
export default {
  mixins: [table, FormMixin],
  inject: {
    rootPage: {
      type: Object
    }
  },
  data () {
    return {
      visibleDialog: false,
      baseInfoForm: {
        storeType: false,
        inherit: false
      },
      rules: {
        code: [],
        state: [],
        nameEn: [
          { required: true, message: '请输入英文名称', trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入中文名称', trigger: 'change' }
        ],
        descriptEn: [],
        descript: [
          { required: true, message: '请输入中文描述', trigger: 'change' }
        ],
        parentId: [
          { required: true, message: '请选择父模型', trigger: 'change' }
        ],
        storeType: [],
        modelType: [
          { required: true, message: '请选择模型类型', trigger: 'change' }
        ],
        inherit: [],
        tableName: [
          { required: true, message: '请输入表名称', trigger: 'change' }
        ],
        version: [],
        creater: [],
        creatTime: [],
        modifier: [],
        modifyTime: []
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      loadingFlag: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  computed: {
    pageSate () {
      return this.rootPage.tabsData.data.state
    },
    disableds () {
      let result = {
        code: false,
        state: false,
        nameEn: false,
        name: false,
        descriptEn: false,
        descript: false,
        parentId: false,
        storeType: false,
        modelType: false,
        inherit: false,
        tableName: false,
        version: false,
        creater: false,
        creatTime: false,
        modifier: false,
        modifyTime: false
      }
      if (this.pageSate !== 'show') {
        if (this.pageSate === 'edit') {
          result.code = true
          result.state = true
          result.version = true
          result.creater = true
          result.creatTime = true
          result.modifier = true
          result.modifyTime = true
        } else {
          result.historyRecord = false
        }
        let oldFormData = this.rootPage.tabsData.data.data
        let newFormData = this.baseInfoForm
        result.saveButton = window._.isEqual(oldFormData, newFormData)
        console.log(result.saveButton)
      }

      return result
    },
    shows () {
      let result = {
        saveButton: false,
        historyRecord: true
      }
      if (this.pageSate !== 'show') {
        result.saveButton = true
        result.code = false
        result.state = false
        if (this.pageSate === 'edit') {
        } else {
          result.historyRecord = false
        }
      }
      console.log(result)
      return result
    },
    baseFormData () {
      let result = {
        code: {
          label: '编码',
          render: this.baseInfoForm.code
        },
        state: {
          label: '状态',
          render: this.baseInfoForm.state
        },
        nameEn: {
          label: '英文名称',
          render: this.baseInfoForm.nameEn
        },
        name: {
          label: '中文名称',
          render: this.baseInfoForm.name
        },
        descriptEn: {
          label: '英文描述',
          singleFormItem: true,
          render: this.baseInfoForm.descriptEn
        },
        descript: {
          label: '中文描述',
          singleFormItem: true,
          render: this.baseInfoForm.descript
        },
        parentId: {
          label: '父模型',
          placeholder: '请选择父模型',
          render: this.baseInfoForm.parentId
        },
        modelType: {
          label: '模型类型',
          render: this.baseInfoForm.modelType
        },
        storeType: {
          label: '存储类型',
          render: this.baseInfoForm.storeType
        },
        inherit: {
          label: '是否继承',
          render: this.baseInfoForm.inherit
        },
        tableName: {
          label: '表名称',
          render: this.baseInfoForm.tableName
        }
      }

      if (['edit', 'add'].includes(this.pageSate)) {
        result = {
          code: {
            label: '编码',
            disabled: this.disableds.code,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinInput(formItem)
            }
          },
          state: {
            label: '状态',
            disabled: this.disableds.state,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinSelect(formItem)
            }
          },
          nameEn: {
            label: '英文名称',
            disabled: this.disableds.nameEn,
            placeholder: '请输入英文名称',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinInput(formItem)
            }
          },
          name: {
            label: '中文名称',
            placeholder: '请输入中文名称',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinInput(formItem)
            }
          },
          descriptEn: {
            label: '英文描述',
            disabled: this.disableds.descriptEn,
            placeholder: '请输入英文描述',
            singleFormItem: true,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinTextarea(formItem)
            }
          },
          descript: {
            label: '中文描述',
            placeholder: '请输入中文描述',
            singleFormItem: true,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinTextarea(formItem)
            }
          },
          parentId: {
            label: '父模型',
            disabled: this.disableds.parentId,
            placeholder: '请选择父模型',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinSelect(formItem)
            }
          },
          modelType: {
            label: '模型类型',
            disabled: this.disableds.modelType,
            options: [
              {
                label: 'XDM',
                value: 'XDM'
              },
              {
                label: 'SYS',
                value: 'SYS'
              },
              {
                label: 'GENERE',
                value: 'GENERE'
              }
            ],
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinSelect(formItem)
            }
          },
          storeType: {
            label: '存储类型',
            disabled: this.disableds.storeType,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinRadio(formItem)
            }
          },
          inherit: {
            label: '是否继承',
            disabled: this.disableds.inherit,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinRadio(formItem)
            }
          },
          tableName: {
            label: '表名称',
            disabled: this.disableds.tableName,
            placeholder: '请输入表名称',
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return this.mixinInput(formItem)
            }
          }
        }
      }
      Object.keys(this.shows).forEach((key) => {
        if (this.shows[key] === false) {
          Reflect.deleteProperty(result, key)
        }
      })
      Object.keys(result).forEach((key) => {
        result[key]['formKey'] = 'baseInfoForm'
        result[key]['prop'] = key
      })
      return this.$devideArr(Object.values(result), 2)
    }
  },
  methods: {
    handleSelectionChange () {},
    handleCreate () {
      this.visibleDialog = true
      this.$refs.dialogForm.handleCreate()
    }
  }
}
</script>