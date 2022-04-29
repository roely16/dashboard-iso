<template>
    <div>
        <component :type="1" v-bind="data" v-bind:is="currentChart"></component>
    </div>
</template>

<script>

export default {
    props: {
        data: Object
    },
    computed: {
        currentChart: function(){

            console.log(this.data)

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