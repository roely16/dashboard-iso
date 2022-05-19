<template>
    <component :data_component="data_component" v-bind:is="customComponent"></component>
</template>

<script>
export default {
    props: {
        name: String,
        data_component: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    computed: {
        customComponent: function(){

            if(this.name){
                
                const AsyncComponent = () => ({
                    component: import("@/components/" + this.name)
                })

                return AsyncComponent
            }
            
            return null

        }
    }
}
</script>