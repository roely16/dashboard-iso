<template>
    <pie :chart-options="chartOptions" :chart-data="chartData"></pie>
</template>

<script>

import { Pie } from "vue-chartjs/legacy";

export default {
    props: {
        chartData: Object,
        chartOptions: Object
    },
    components: {
        'pie': Pie
    },
}
</script>