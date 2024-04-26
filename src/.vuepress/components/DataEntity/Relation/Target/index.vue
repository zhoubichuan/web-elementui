<template>
<div>
  <target-base></target-base>
  <target-parent></target-parent>
</div>
</template>
<script>
  export default {
  components: {
      TargetBase: () => import('./Base'),
      TargetParent: () => import('./Parent')
    }
  }
</script>