<template>
  <div class="web-layout">
    <div class="container">
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WebLayout",
  data() {
    return {
      loading: false,
    };
  },
  props: {
    duration: {
      type: Number,
      default: 1000,
    },
  },
};
</script>
<style lang="scss" scoped>
.web-layout {
  .container {
    height: 100%;
    padding: 0 20% 0 20%;
    .main,
    .left,
    .right {
      height: 100%;
      float: left;
      position: relative;
    }
  }
  .main {
    background: lightblue;
    width: 100%;
  }
  .left {
    background: lightcyan;
    width: 30%;
    margin-left: -100%;
    left: -30%;
  }
  .right {
    background: lightgrey;
    width: 20%;
    right: -20%;
    margin-left: -20%;
  }
}
</style>