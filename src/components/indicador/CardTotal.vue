<template>
    <span>
        {{ total_modified }}%
    </span>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: function(){
                return {}
            }
        },
        content: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    computed:{
        styles(){
            return{
                'font-size': '10vw'
            }
        },
        total_modified(){

            let split_number = this.data.value.toString().split('.')

            if (split_number.length > 1) {
                
                if (this.data.value.toString().split('.')[1].length > 1) {

                    const integer = this.data.value.toString().split('.')[0]
                    
                    const decimals = this.data.value.toString().split('.')[1].slice(0, -1)
                    
                    return integer + '.' + decimals

                }

            }

            return this.data.value

        }
    }
};
</script>