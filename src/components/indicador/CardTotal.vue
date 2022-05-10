<template>
    <span>
        {{ data.value }}
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
        }
    },
    computed:{
        styles(){
            return{
                'font-size': '10vw'
            }
        }
    }
};
</script>