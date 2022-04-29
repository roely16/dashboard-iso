<template>
    <bar :chart-options="chartOptions" :chart-data="chartData"></bar>
</template>

<script>

import { Bar } from "vue-chartjs/legacy";

export default {
    props: {
        chartData: Object,
        chartOptions: Object
    },
    components: {
        'bar': Bar
    },
}
</script>