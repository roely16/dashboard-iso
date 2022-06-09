<template>
    <v-row justify="center" class="content">
        <v-col>
            <v-card-text >
                <slot name="content">
                    <v-row align="center" justify="center">
                        <v-col cols="12" lg="3">
                            <slot name="chart">
                                <chart :data="content.chart"></chart>
                            </slot>
                        </v-col>
                        <v-col cols="12" lg="9"  class="text-center" :style="total_styles">
                            <slot name="total">
                                <total :data="content.total"></total>
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
    computed:{
        total_styles(){

            const size = 9

            const font_size = Math.floor((this.data.cols * size) / 6)

            return{
                'font-size': font_size + 'vw'
            }
        }
    }
};
</script>