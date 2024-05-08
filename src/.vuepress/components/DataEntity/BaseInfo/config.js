
export default {
  inject: {
    template: {
      type: String
    }
  },
  data() {
    return {
      rules: {
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
        ]
      },
    }
  },
  methods: {
    async handleAdd() {
      let keys = [
        'nameEn',
        'name',
        'descriptEn',
        'descript',
        'parentId',
        'storeType',
        'modelType',
        'inherit',
        'tableName'
      ]
      let params = this.$filterObj(this.baseInfoForm, keys)
      let res = await this.$api.createDataEntity(params)
      try {
        if (res) {
          this.$message({
            message: '数据创建成功',
            type: 'success'
          })
          this.$findComponentUpward(this, 'DataEntity').$emit('handleSearch')
        } else {
          this.$message.error(res.msg)
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false
      }
    },
    async handleEdit() {
      let keys = [
        'id',
        'nameEn',
        'name',
        'descriptEn',
        'descript',
        'parentId',
        'storeType',
        'modelType',
        'inherit',
        'tableName'
      ]
      let params = this.$filterObj(this.baseInfoForm, keys)
      let id = this.rootPage.tabsData.data._id
      let res = await this.$api.updateDataEntity(id, params)
      try {
        if (res.statusCode === 200) {
          this.$message({
            message: res.msg,
            type: 'success'
          })
          this.baseInfoForm = res.result
          let parent = this.$findComponentUpward(this, 'DataEntity')
          parent.$emit('handleSearch')
        } else {
          this.$message.error(res.msg)
        }
      } catch (e) {
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    pageSate() {
      return this.rootPage.tabsData.state
    },
    disableds() {
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
        let oldFormData = this.rootPage.tabsData.data
        let newFormData = this.baseInfoForm
        result.saveButton = window._.isEqual(oldFormData, newFormData)
        console.log(result.saveButton)
      }

      return result
    },
    shows() {
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
      return result
    },
    baseFormData() {
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
        },
        space: {}
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
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
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
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-select
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-option
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </el-option>
                  ))}
                </el-select>
              )
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
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
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
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
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
              return (
                <el-input
                  type="textarea"
                  rows="2"
                  maxlength="1024"
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
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
              return (
                <el-input
                  type="textarea"
                  rows="2"
                  maxlength="1024"
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
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
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-select
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-option
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </el-option>
                  ))}
                </el-select>
              )
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
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-select
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-option
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </el-option>
                  ))}
                </el-select>
              )
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
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-radio-group
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-radio
                      key={item.value}
                      label={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </el-radio>
                  ))}
                </el-radio-group>
              )
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
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-radio-group
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-radio
                      key={item.value}
                      label={item.value}
                      value={item.value}
                    >
                      {item.label}
                    </el-radio>
                  ))}
                </el-radio-group>
              )
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
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  <span slot="prepend">General</span>
                </el-input>
              )
            }
          },
          space: {}
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
    },
    historyFormData() {
      let result = {
        version: {
          label: '版本',
          render: this.baseInfoForm.version
        },
        space: {},
        creater: {
          label: '创建者',
          render: this.baseInfoForm.creater
        },
        creatTime: {
          label: '创建时间',
          render: this.baseInfoForm.creatTime
        },
        modifier: {
          label: '更新者',
          render: this.baseInfoForm.modifier
        },
        modifyTime: {
          label: '更新时间',
          render: this.baseInfoForm.modifyTime
        }
      }
      if (['edit', 'add'].includes(this.pageSate)) {
        result = {
          version: {
            label: '版本',
            disabled: this.disableds.version,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          space: {},
          creater: {
            label: '创建者',
            disabled: this.disableds.creater,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          creatTime: {
            label: '创建时间',
            disabled: this.disableds.creatTime,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          modifier: {
            label: '更新者',
            disabled: this.disableds.modifier,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              return (
                <el-input
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                ></el-input>
              )
            }
          },
          modifyTime: {
            label: '更新时间',
            disabled: this.disableds.modifyTime,
            render: (
              h,
              {
                data: {
                  attrs: { formItem }
                }
              }
            ) => {
              !formItem.options &&
                (formItem.options = [
                  { label: '是', value: true },
                  { label: '否', value: false }
                ])
              return (
                <el-select
                  value={this[formItem.formKey][formItem.prop]}
                  disabled={formItem.disabled}
                  onInput={(val) => {
                    this.$set(this[formItem.formKey], formItem.prop, val)
                  }}
                  placeholder={formItem.placeholder}
                >
                  {formItem.options.map((item) => (
                    <el-option
                      key={item.value}
                      label={item.label}
                      value={item.value}
                    >
                      {item.label}
                    </el-option>
                  ))}
                </el-select>
              )
            }
          }
        }
      }
      Object.keys(result).forEach((key) => {
        result[key]['formKey'] = 'baseInfoForm'
        result[key]['prop'] = key
      })
      console.log(this.$devideArr(Object.values(result), 2))
      return this.$devideArr(Object.values(result), 2)
    }
  }
}
