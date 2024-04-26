<template>
  <div>
    模板设计
    <page-template
      style="height: 100vh; border: 1px solid lightblue"
    ></page-template>
  </div>
</template>

<script>
export default {
  components: {
    pageTemplate: () => import("./DataEntity"),
  },
};
</script>