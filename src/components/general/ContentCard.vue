<template>
    <div>
        <v-card-text>
            <slot name="content">
                <v-row align="center" justify="center">
                    <v-col cols="3">
                        <slot name="chart">
                            <chart :data="content.chart"></chart>
                        </slot>
                    </v-col>
                    <v-col cols="9" class="text-center" :style="total_styles">
                        <slot name="total">
                            <total :data="content.total"></total>
                        </slot>
                    </v-col>
                </v-row>
            </slot>
            <slot name="bottom">
                <bottom :items="bottom"></bottom>
            </slot>
        </v-card-text>
    </div>
</template>

<script>
import CardChart from "@/components/indicador/CardChart.vue";
import CardBottomDetail from "@/components/indicador/CardBottomDetail";
import CardTotal from "@/components/indicador/CardTotal.vue";

export default {
    components: {
        chart: CardChart,
        bottom: CardBottomDetail,
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