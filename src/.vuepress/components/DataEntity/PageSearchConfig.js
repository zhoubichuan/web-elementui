const config = [[
  {
    type: 'searchInput',
    name: 'code',
    label: '编码',
    placeholder: '请输入编码'
  },
  {
    type: 'searchInput',
    name: 'name',
    label: '中文名称',
    placeholder: '请输入中文名称'
  },
  {
    type: 'searchInput',
    name: 'nameEn',
    label: '英文名称',
    placeholder: '请输入英文名称'
  },
  {
    type: 'searchSelect',
    name: 'state',
    multiple: true,
    defaultValue: [
      'isWrok',
      'preRelease',
      'release'
    ],
    label: '状态',
    placeholder: '请选择状态',
    options: [
      {
        label: '正在工作',
        value: 'isWrok'
      },
      {
        label: '预发布',
        value: 'preRelease'
      },
      {
        label: '已发布',
        value: 'release'
      },
      {
        label: '已修订',
        value: 'revised'
      },
      {
        label: '已作废',
        value: 'invalid'
      }
    ]
  },
  {
    type: 'searchSelect',
    name: 'parentId',
    label: '父模型',
    placeholder: '请选择父模型',
    options: [
      {
        label: 'sss',
        value: 'singleEntity'
      },
      {
        label: 'eeee',
        value: 'masterVersion'
      }
    ]
  },
  {
    type: 'searchSelect',
    name: 'entityType',
    label: '实体类型',
    placeholder: '请选择实体类型',
    options: [
      {
        label: '单实体',
        value: 'singleEntity'
      },
      {
        label: 'master-Version',
        value: 'masterVersion'
      }
    ]
  },
  {
    type: 'searchInput',
    name: 'version',
    label: '版本',
    placeholder: '请输入版本'
  },
  {
    type: 'searchSelect',
    name: 'modeType',
    label: '模型类型',
    placeholder: '请选择模型类型',
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
    ]
  },
  {
    type: 'searchSelect',
    name: 'selectFunction',
    multiple: true,
    defaultValue: [
      'sss'
    ],
    label: '可选功能',
    placeholder: '请选择可选功能',
    options: [
      {
        label: '组合关系',
        value: 'XDM'
      },
      {
        label: '树形关系',
        value: 'SYS'
      },
      {
        label: '权限管理',
        value: 'GENERE'
      }
    ]
  },
  {
    type: 'searchUser',
    name: 'user',
    label: '创建者',
    placeholder: '请输入用户'
  },
  {
    type: 'searchTime',
    name: 'eos',
    label: 'EOS时间',
    placeholder: '请选择时间'
  },
  {
    type: 'searchCascader',
    name: 'tags',
    label: '标签类型',
    placeholder: '请选择标签类型',
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
    ]
  }
],
[
  {
    type: 'searchInput',
    name: 'code',
    label: '编码',
    placeholder: '请输入编码'
  },
  {
    type: 'searchInput',
    name: 'name',
    label: '中文名称',
    placeholder: '请输入中文名称'
  },
  {
    type: 'searchInput',
    name: 'nameEn',
    label: '英文名称',
    placeholder: '请输入英文名称'
  },
  {
    type: 'searchSelect',
    name: 'state',
    multiple: true,
    defaultValue: [
      'isWrok',
      'preRelease',
      'release'
    ],
    label: '状态',
    placeholder: '请选择状态',
    options: [
      {
        label: '正在工作',
        value: 'isWrok'
      },
      {
        label: '预发布',
        value: 'preRelease'
      },
      {
        label: '已发布',
        value: 'release'
      },
      {
        label: '已修订',
        value: 'revised'
      },
      {
        label: '已作废',
        value: 'invalid'
      }
    ]
  },
  {
    type: 'searchSelect',
    name: 'parentId',
    label: '父模型',
    placeholder: '请选择父模型',
    options: [
      {
        label: 'sss',
        value: 'singleEntity'
      },
      {
        label: 'eeee',
        value: 'masterVersion'
      }
    ]
  },
  {
    type: 'searchSelect',
    name: 'entityType',
    label: '实体类型',
    placeholder: '请选择实体类型',
    options: [
      {
        label: '单实体',
        value: 'singleEntity'
      },
      {
        label: 'master-Version',
        value: 'masterVersion'
      }
    ]
  },
  {
    type: 'searchInput',
    name: 'version',
    label: '版本',
    placeholder: '请输入版本'
  },
  {
    type: 'searchSelect',
    name: 'modeType',
    label: '模型类型',
    placeholder: '请选择模型类型',
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
    ]
  },
  {
    type: 'searchSelect',
    name: 'selectFunction',
    multiple: true,
    defaultValue: [
      'sss'
    ],
    label: '可选功能',
    placeholder: '请选择可选功能',
    options: [
      {
        label: '组合关系',
        value: 'XDM'
      },
      {
        label: '树形关系',
        value: 'SYS'
      },
      {
        label: '权限管理',
        value: 'GENERE'
      }
    ]
  },
  {
    type: 'searchUser',
    name: 'user',
    label: '创建者',
    placeholder: '请输入用户'
  },
  {
    type: 'searchTime',
    name: 'eos',
    label: 'EOS时间',
    placeholder: '请选择时间'
  },
  {
    type: 'searchCascader',
    name: 'tags',
    label: '标签类型',
    placeholder: '请选择标签类型',
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
    ]
  }
]
]
export default {
  inject: {
    template: {
      type: String
    }
  },
  data () {
    return {
      condition: Object.freeze(config[this.template])
    }
  },
  methods: {
    async getConfig (condition = {}) {
      this.loadingFlag = true
      let { result } = await this.$api.getDataEntityList({
        ...condition
      })
      if (result) {
        let {
          data
        } = result
        this.condition = Object.freeze(config[this.template])
      } else {
        this.condition = Object.freeze(config[this.template])
      }
    }
  },
  created () {
    this.getConfig({ template: this.template })
  }
}
