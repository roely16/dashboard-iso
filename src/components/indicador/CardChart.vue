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

            if(this.data){
                
                 const chartName = this.data.type + 'Chart'

                const AsyncComponent = () => ({
                    component: import("@/components/charts/" + chartName),
                })

                return AsyncComponent
            }
            
            return null

        }
    }
};
</script>