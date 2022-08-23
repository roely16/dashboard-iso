<template>
    <pie :height="height" :chart-options="chartOptions" :chart-data="chartData"></pie>
</template>

<script>

import { Pie } from "vue-chartjs/legacy";

export default {
    props: {
        chartData: Object,
        chartOptions: Object,
        height: Number
    },
    components: {
        'pie': Pie
    },
    mounted(){
        console.log(this.chartOptions)
    }
}
</script>