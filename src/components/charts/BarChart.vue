<template>
    <bar :height="height" :chart-options="chartOptions" :chart-data="chartData"></bar>
</template>

<script>

import { Bar } from "vue-chartjs/legacy";

export default {
    props: {
        chartData: Object,
        chartOptions: Object,
        height: Number
    },
    components: {
        'bar': Bar
    },
}
</script>