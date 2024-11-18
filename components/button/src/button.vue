<template>
    <el-button :loading="loading" :icon="icon" v-bind="$attrs" v-on="$listeners" @click="handleClick">
        <slot></slot>
    </el-button>
</template>
<script>
export default {
    name: "WebButton",
    data() {
        return {
            icon: "",
            loading: false,
        };
    },
    props: {
        duration: {
            type: Number,
            default: 0,
        },
    },
    created() {
        if (this.$attrs.type === "delete") {
            this.icon = "el-icon-delete";
        }
    },
    methods: {
        handleClick() {
            if (!this.duration) return;
            this.loading = true;
            let timer = setTimeout(() => {
                this.$listeners.click();
                this.loading = false;
            }, this.duration);
            this.$once("hook:beforeDestory", () => {
                clearTimeout(timer);
            });
        },
    },
};
</script>

<style lang="scss">
.el-icon-loading {
    position: absolute;
    left: 5px;
}
.el-button--delete {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px 8px 8px 8px;
    font-weight: 400;
    line-height: 22px;
    font-size: 16px;
    color: #ffffff;
    padding: 4px;
    border: 0.01rem solid rgba(0, 0, 0, 0.3);
    &:hover {
        background: rgba(0, 0, 0, 0.55);
        color: #ffffff;
        border: 0.01rem solid rgba(0, 0, 0, 0.55);
    }
    &:focus {
        background: rgba(0, 0, 0, 0.3);
        color: #ffffff;
        border: 0.01rem solid rgba(0, 0, 0, 0.3);
    }
}
</style>
