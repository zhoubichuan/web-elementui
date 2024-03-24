export default {
  data() {
    return {
      tableRows: [
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
      ]
    }
  }
};
