<template>
  <div style="height: 200px">
    <div class="container1">
      <div class="main1">
        <slot name="main"></slot>
      </div>
      <div class="left1">
        <slot name="left"></slot>
      </div>
      <div class="right1">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>
<style>
.container1 {
  padding: 0 200px 0 300px;
}
.main1,
.left1,
.right1 {
  min-height: 200px;
  float: left;
  position: relative;
}
.main1 {
  background: red;
  width: 100%;
}
.left1 {
  background: yellow;
  width: 300px;
  margin-left: -100%;
  left: -300px;
}
.right1 {
  background: green;
  width: 200px;
  right: -200px;
  margin-left: -200px;
}
</style>