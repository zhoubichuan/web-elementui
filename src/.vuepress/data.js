var data = {};
data.table1 = [
  {
    attrs: { fixed: "left", type: "selection", width: "55" },
  },
  {
    label: "序号",
    attrs: { fixed: "left", type: "index", width: "55" },
  },
  {
    prop: "code",
    label: "编码",
    attrs: {
      "show-overflow-tooltip": true,
      width: "55",
    },
    render: (
      h,
      {
        data: {
          attrs: { item, row },
        },
      }
    ) => (
      <el-link
        size={"mini"}
        type={"primary"}
        onClick={(row) => this.showViewModal(row)}
      ></el-link>
    ),
  },
  {
    prop: "name",
    label: "中文名称",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "nameEn",
    label: "英文名称",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "descript",
    label: "中文描述",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "descriptEn",
    label: "英文描述",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "version",
    label: "版本",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "state",
    label: "状态",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "eos",
    label: "EOS时间",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "modeType",
    label: "模型类型",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "creater",
    label: "创建者",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "creatTime",
    label: "创建时间",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "modifier",
    label: "更新者",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "modifyTime",
    label: "更新时间",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    prop: "tags",
    label: "标签",
    attrs: {
      "show-overflow-tooltip": true,
    },
  },
  {
    label: "操作",
    attrs: { fixed: "right", "show-overflow-tooltip": true },
    render: (
      h,
      {
        data: {
          attrs: { item, row },
        },
      }
    ) => [
      <el-link
        icon={"el-icon-edit"}
        title={"编辑"}
        onClick={(row) => this.showEditModal(row)}
      />,
      <el-link
        icon={"el-icon-collection"}
        title={"修订"}
        onClick={(row) => this.showRemoveModal(row)}
      />,
    ],
  },
];
data.search1 = [
  {
    type: "searchInput",
    name: "code",
    label: "编码",
    placeholder: "请输入编码",
  },
  {
    type: "searchInput",
    name: "name",
    label: "中文名称",
    placeholder: "请输入中文名称",
  },
  {
    type: "searchInput",
    name: "nameEn",
    label: "英文名称",
    placeholder: "请输入英文名称",
  },
  {
    type: "searchSelect",
    name: "state",
    multiple: true,
    defaultValue: ["isWrok", "preRelease", "release"],
    label: "状态",
    placeholder: "请选择状态",
    options: [
      {
        label: "正在工作",
        value: "isWrok",
      },
      {
        label: "预发布",
        value: "preRelease",
      },
      {
        label: "已发布",
        value: "release",
      },
      {
        label: "已修订",
        value: "revised",
      },
      {
        label: "已作废",
        value: "invalid",
      },
    ],
  },
  {
    type: "searchSelect",
    name: "parentId",
    label: "父模型",
    placeholder: "请选择父模型",
    options: [
      {
        label: "sss",
        value: "singleEntity",
      },
      {
        label: "eeee",
        value: "masterVersion",
      },
    ],
  },
  {
    type: "searchSelect",
    name: "entityType",
    label: "实体类型",
    placeholder: "请选择实体类型",
    options: [
      {
        label: "单实体",
        value: "singleEntity",
      },
      {
        label: "master-Version",
        value: "masterVersion",
      },
    ],
  },
  {
    type: "searchInput",
    name: "version",
    label: "版本",
    placeholder: "请输入版本",
  },
  {
    type: "searchSelect",
    name: "modeType",
    label: "模型类型",
    placeholder: "请选择模型类型",
    options: [
      {
        label: "XDM",
        value: "XDM",
      },
      {
        label: "SYS",
        value: "SYS",
      },
      {
        label: "GENERE",
        value: "GENERE",
      },
    ],
  },
  {
    type: "searchSelect",
    name: "selectFunction",
    multiple: true,
    defaultValue: ["sss"],
    label: "可选功能",
    placeholder: "请选择可选功能",
    options: [
      {
        label: "组合关系",
        value: "XDM",
      },
      {
        label: "树形关系",
        value: "SYS",
      },
      {
        label: "权限管理",
        value: "GENERE",
      },
    ],
  },
  {
    type: "searchUser",
    name: "user",
    label: "创建者",
    placeholder: "请输入用户",
  },
  {
    type: "searchTime",
    name: "eos",
    label: "EOS时间",
    placeholder: "请选择时间",
  },
  {
    type: "searchCascader",
    name: "tags",
    label: "标签类型",
    placeholder: "请选择标签类型",
    options: [
      {
        label: "XDM",
        value: "XDM",
      },
      {
        label: "SYS",
        value: "SYS",
      },
      {
        label: "GENERE",
        value: "GENERE",
      },
    ],
  },
];

export default {
  install: function (Vue) {
    Vue.prototype.getData = (name) => data[name] || [];
  },
};
