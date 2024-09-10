<template>
    <el-radio class="web-radio" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-radio>
</template>
<script>
export default {
    name: "WebRadio",
};
</script>
<style lang="scss">
.web-radio {
    margin-right: 29px;
    &.el-radio {
        .el-radio__input {
            .el-radio__inner {
                width: 18px;
                height: 18px;
                border-radius: 100%;
                margin-bottom: 2px;
            }
            &.is-checked {
                .el-radio__inner {
                    border: 1px solid #0075ff;
                    background: none;
                    &::after {
                        height: 9px;
                        width: 9px;
                        background-color: #0075ff !important; //被全局样式覆盖
                    }
                }
            }
        }
        .el-radio__label {
            font-weight: 400;
            color: #244367;
            padding-left: 5px;
            font-size: 20px;
        }
        .el-radio__input.is-checked {
            & + .el-radio__label {
                color: #244367;
            }
        }
    }
}
</style>
