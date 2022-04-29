<template>
    <div>
        <v-card-text>
            <v-row align="center">
                <v-col cols="4">
                    <slot name="chart">
                        <chart :data="content.chart"></chart>
                    </slot>
                </v-col>
                <v-col class="text-center">
                    <slot name="total">
                        <total :data="content.total"></total>
                    </slot>
                </v-col>
            </v-row>
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
        content: Object,
        bottom: Array
    },
    data() {
        return {};
    },
};
</script>