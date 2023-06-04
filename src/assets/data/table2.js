export default [
  {
    attrs: { fixed: "left", type: "selection", width: "55" },
  },
  {
    label: "序号",
    attrs: { fixed: "left", type: "index", width: "55" },
  },
  {
    prop: "type",
    label: "组件类型",
    attrs: { "show-overflow-tooltip": true },
  },
  {
    prop: "name",
    label: "字段",
    attrs: { "show-overflow-tooltip": true },
  },
  {
    prop: "label",
    label: "名称",
    attrs: { "show-overflow-tooltip": true },
  },
  {
    prop: "placeholder",
    label: "placeholder",
    attrs: { "show-overflow-tooltip": true },
  },
  {
    prop: "multiple",
    label: "是否多选",
    attrs: { "show-overflow-tooltip": true },
  },
  {
    prop: "defaultValue",
    label: "默认字段",
    attrs: { "show-overflow-tooltip": true },
  },
  {
    prop: "options",
    label: "选项",
    attrs: { "show-overflow-tooltip": true },
  },
  function(){
    return ({
      label: "操作",
      attrs: { fixed: "right", "show-overflow-tooltip": true },
      render: (
        h,
        {
          data: {
            attrs: { item, scope },
          },
        }
      ) => [
        <el-link
          icon={"el-icon-edit"}
          title={"编辑"}
          onClick={() => this.showEditModal(scope)}
        ></el-link>,
        <el-link
          icon={"el-icon-collection"}
          title={"修订"}
          onClick={() => this.showRemoveModal(scope)}
        ></el-link>,
      ],
    })
  }
];
