<template>
  <el-table-column
    v-if="item.attrs.type"
    :label="item.label"
    v-bind="item.attrs"
  >
  </el-table-column>
  <el-table-column
    v-else-if="item.render"
    :prop="item.prop"
    :label="item.label"
    v-bind="item.attrs"
  >
  <template slot-scope="{ row }">
    <Render v-if="item.render" :render="item.render" :item="item" :row="row"></Render>
    </template>
  </el-table-column>
  <el-table-column
    v-else
    :prop="item.prop"
    :label="item.label"
    v-bind="item.attrs"
  >
    <template slot-scope="{ row }">
      {{ row[item.prop]  || '-'}}
    </template>
  </el-table-column>
</template>
<script>
import Render from "../../Render.js";
export default {
  name: "WebTableColumn",
  components: {
    Render,
  },
  props: {
    item: {
      type: Object,
    },
  },
};
</script>