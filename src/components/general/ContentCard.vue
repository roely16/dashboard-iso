<template>
    <v-row ref="card_content" justify="center" class="content">
        <v-col>
            <v-card-text>
                <slot name="content">
                    <v-row align="center" justify="center">
                        <v-col cols="12" lg="3">
                            <slot name="chart">
                                <chart :data="content.chart"></chart>
                            </slot>
                        </v-col>
                        <v-col cols="12" lg="9"  class="text-center" :style="total_styles">
                            <slot name="total">
                                <total :content="data" :data="content.total"></total>
                            </slot>
                        </v-col>
                    </v-row>
                </slot>
            </v-card-text>
        </v-col>
    </v-row>
</template>

<style scoped>
    .content{
        min-height: 170px;
    }
</style>

<script>
import CardChart from "@/components/indicador/CardChart.vue";
import CardTotal from "@/components/indicador/CardTotal.vue";

export default {
    components: {
        chart: CardChart,
        total: CardTotal,
    },
    props: {
        content: {
            type: Object,
            default: function(){
                return {}
            }
        },
        bottom: Array,
        data: {
            type: Object,
            default: function(){
                return {}
            }
        }
    },
    data(){
        return{
            clientWidth: 0
        }
    },
    methods: {
        async handleResize () {
            if (this.$refs.card_content) {
                this.clientWidth = await this.$refs.card_content.clientWidth

            }
        }
    },
    computed:{
        total_styles(){
            return{
                'font-size': (this.clientWidth * 0.20) + 'px'
            }
        }
    },
    mounted(){

        this.handleResize()
        .then(() => {
            window.addEventListener('resize', this.handleResize)
        })
       

    }
};
</script>