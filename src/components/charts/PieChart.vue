<template>
    <pie :plugins="chartOptions.dataLabels ? plugins : []" :height="height" :chart-options="chartOptions" :chart-data="chartData"></pie>
</template>

<script>

import { Pie } from "vue-chartjs/legacy";

import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
    props: {
        chartData: Object,
        chartOptions: Object,
        height: Number
    },
    components: {
        'pie': Pie
    },
    data(){
        return{
            plugins: [ChartDataLabels]
        }
    }
}
</script>