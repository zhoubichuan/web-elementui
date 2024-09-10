<template>
    <component :is="component" v-bind="$attrs">
    </component>
</template>
<script>
export default {
    name: "WebTablePage",
    props: {
        component: {
            type: String,
            default: "table1",
        },
    },
    components: {
        table1: () => import('./src/table1.vue'),
        table2: () => import('./src/table2.vue')
    },

};
</script>