<template>
    <el-radio-group class="web-radio-group" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-radio-group>
</template>
<script>
export default {
    name: "WebRadioGroup",
    data() {
        return {};
    },
    props: {},
    methods: {},
};
</script>
<style lang="scss">
.web-radio-group {
    display: block;
    line-height: inherit;
    font-size: inherit;
}
</style>
