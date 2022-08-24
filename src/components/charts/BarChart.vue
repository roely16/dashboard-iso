<template>
    <bar :plugins="chartOptions.dataLabels ? plugins : [] " :height="height" :chart-options="chartOptions" :chart-data="chartData"></bar>
</template>

<script>

import { Bar } from "vue-chartjs/legacy";

import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
    props: {
        chartData: Object,
        chartOptions: Object,
        height: Number
    },
    components: {
        'bar': Bar
    },
    data(){
        return{
            plugins: [ChartDataLabels]
        }
    }
}
</script>