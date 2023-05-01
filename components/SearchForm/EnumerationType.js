export default {
  input: 'searchInput',
  select: 'searchSelect',
  multipleSelect: 'searchSelect',
  user: 'searchUser',
  radio: 'searchRadio',
  time: 'searchTime',
  cascader: 'searchCascader'
}
export const stateOptions = [{
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
export const entityTypeOptions = [{
    label: '单实体',
    value: 'singleEntity'
  },
  {
    label: 'master-Version',
    value: 'masterVersion'
  }
]
export const modelTypeOptions = [{
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
export const relationEntityTypeOptions = [{
  label: '主外键',
  value: 'PrimaryForeignKey'
},
{
  label: '多对多',
  value: 'ManyToMany'
},
{
  label: '单边不确定',
  value: 'UnilateralUncertainty'
}
]
export const selectFunctionOptions = [{
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
