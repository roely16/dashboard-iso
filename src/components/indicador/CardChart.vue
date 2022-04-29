<template>
    <div>
        <component v-bind="data" v-bind:is="currentChart"></component>
    </div>
</template>

<script>

export default {
    props: {
        data: Object
    },
    computed: {
        currentChart: function(){

            const chartName = this.data.type + 'Chart'

            const AsyncComponent = () => ({
                component: import("@/components/charts/" + chartName),
                props: {
                    type: 1
                }
            })

            return AsyncComponent

        }
    }
};
</script>