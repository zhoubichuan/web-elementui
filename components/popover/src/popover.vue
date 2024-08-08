<template>
    <div class="web-popover" :class="customClass">
        <img
            class="triangle"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAASCAYAAADc4RcWAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADFSURBVEiJ3dXRDYIwAEXR1w0YoRvICIzgCIzgCN2AERxBN0AncATcQDe4fmBjYiSltJTE+9mvEygP6d8CKqADBsZ6oN0adeN3bivQYQLks6VBFfAIoI6lUV0A5KtLgeqZIIChFKqPQMHaXyPQRIJgnAu7Fqjis0exubVQbiHIZ3OD5kxAqLwTAZwSQb42Fyi03DENpL5GoM0ISoeRfrFDsPlrD1im//65c0D1bTDvw1rSTtJeUrPo0S7vKeks6SLpaoy5vwBPG9lNAmOs1wAAAABJRU5ErkJggg=="
        />
        <div class="content">
            <header v-if="title" class="header">{{ title }}</header>
            <ul class="main">
                <li
                    v-clickoutside="() => handleClick({})"
                    class="item"
                    v-for="(item, index) in options"
                    :key="index"
                    @click="() => handleClick(item)"
                >
                    {{ item[label] }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "WebPopover",
    props: {
        title: {
            type: String,
            default: "",
        },
        options: {
            type: Array,
            default: () => [],
        },
        customClass: {
            type: String,
            default: "",
        },
        label: {
            type: String,
            default: "label",
        },
    },
    methods: {
        handleClick(item) {
            this.$emit("select", item);
        },
    },
};
</script>
<style lang="scss" scoped>
.web-popover {
    position: absolute;
    top: 17px;
    z-index: 100;
    width: 100%;
    display: block;
    &.double {
        left: 0px;
        width: 100%;
        .main {
            width: 100%;
        }
    }
    .triangle {
        width: 37px;
        height: 18px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -17px;
    }
    .content {
        background: #ffffff;
        box-shadow: 0px 20px 60px 0px rgba(128, 128, 128, 0.3);
        display: block;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        border-radius: 20px;

        .header {
            width: 500px;
            height: 33px;
            display: block;
            padding: 20px 20px 0;
            font-weight: 500;
            &::before {
                content: "";
                display: inline-block;
                width: 6px;
                height: 20px;
                background: linear-gradient(180deg, #3a94fe 0%, #2ec4ff 100%);
                border-radius: 16px 16px 16px 16px;
                margin-right: 12px;
            }
        }
        .main {
            flex: 1;
            width: 100%;
            overflow-y: auto;

            .item {
                margin-left: 18px;
                width: 240px;
                height: 65px;
                border-radius: 16px 16px 16px 16px;
                background: #f3f6f9;
                margin-top: 20px;
                text-align: center;
                line-height: 65px;
                display: inline-block;
                cursor: pointer;
                &:hover {
                    background: linear-gradient(270deg, #d4e8ff 0%, #d3fbff 100%);
                }
                &:last-child {
                    margin-bottom: 20px;
                }
            }
        }
    }
}
</style>
