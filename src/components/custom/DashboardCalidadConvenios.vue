<template>
    <v-card-text>
        <v-row dense justify="center" class="mt-2">
            <v-col :cols="6">
                <bar-chart :height="250" :chart-options="data.detail.chart_aprobados.options" :chart-data="data.detail.chart_aprobados.data"></bar-chart>
            </v-col>
             <v-col cols="6">
                <bar-chart :height="250" :chart-options="data.detail.chart_rechazados.options" :chart-data="data.detail.chart_rechazados.data"></bar-chart>
            </v-col>
            <v-col align="center" cols="6">
                <pie-chart :height="350" :chart-options="data.detail.chart_motivos.options" :chart-data="data.detail.chart_motivos.data"></pie-chart>
            </v-col>
            <v-col cols="6">
                <v-row dense>
                   <v-col cols="3">
                        
                   </v-col>
                   <v-col>

                   </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>

import PieChart from '@/components/charts/PieChart'
import BarChart from '@/components/charts/BarChart.vue'

import { mapState } from 'vuex'

export default {
    components: {
        'pie-chart': PieChart,
        'bar-chart': BarChart
    },
    data(){
        return{
            selectedItem: 1,
            items: [
                { text: 'Real-Time Real-Time Real-Time', icon: 'mdi-clock' },
                { text: 'Audience', icon: 'mdi-account' },
                { text: 'Conversions', icon: 'mdi-flag' },
            ],
        }
    },
    computed: {
        ...mapState({
            data: state => state.dialog.data,
            fullscreen: state => state.dialog.fullscreen
        })
    }
}
</script>