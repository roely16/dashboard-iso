<template>
    <component v-bind="data" v-bind:is="customComponent"></component>
</template>

<script>
export default {
    props: {
        name: String,
        data: {
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
                    component: import("@/components/" + this.name),
                    props: {
                        type: 1
                    }
                })

                return AsyncComponent
            }
            
            return null

        }
    }
}
</script>