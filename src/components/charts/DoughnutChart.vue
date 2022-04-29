<template>
    <doughnut :chart-options="chartOptions" :chart-data="chartData"></doughnut>
</template>

<script>

import { Doughnut } from "vue-chartjs/legacy";

export default {
    props: {
        chartData: Object,
        chartOptions: Object
    },
    components: {
        'doughnut': Doughnut
    },
}
</script>