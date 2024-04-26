<template>
<div>
  <source-base></source-base>
  <source-parent></source-parent>
</div>
</template>
<script>
  export default {
  components: {
      SourceBase: () => import('./Base'),
      SourceParent: () => import('./Parent')
    }
  }
</script>