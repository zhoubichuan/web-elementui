<template>
  <div>
    <base-attr></base-attr>
    <extend-attr></extend-attr>
    <parent-attr></parent-attr>
  </div>
</template>
<script>
export default {
  components: {
    BaseAttr: () => import("./BaseAttr"),
    ExtendAttr: () => import("./ExtendAttr"),
    ParentAttr: () => import("./ParentAttr"),
  },
};
</script>