<template>
    <v-card-text id="swal2-container">
        <v-row dense justify="center" class="mt-2">
            <v-col class="pr-10" :cols="6">
                <bar-chart
                    :height="250"
                    :chart-options="data.detail.chart_aprobados.options"
                    :chart-data="data.detail.chart_aprobados.data"
                ></bar-chart>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col class="pl-10" cols="6">
                <bar-chart
                    :height="250"
                    :chart-options="data.detail.chart_rechazados.options"
                    :chart-data="data.detail.chart_rechazados.data"
                ></bar-chart>
            </v-col>
            <v-col class="mt-8" align="center" cols="6">
                <pie-chart
                    :height="350"
                    :chart-options="data.detail.chart_motivos.options"
                    :chart-data="data.detail.chart_motivos.data"
                ></pie-chart>
            </v-col>
            <v-divider vertical></v-divider>
            <v-col align="center" cols="6">
                <v-row>
                    <v-col class="pb-0" align="center" cols="12">
                        <v-btn @click="getChart()" icon>
                            <v-icon>
                                mdi-account-search
                            </v-icon>
                        </v-btn>
                    </v-col>
                    <v-col v-if="chart_rechazo_tecnico" class="pt-0" cols="12">
                        <pie
                            :height="350"
                            :chart-options="chart_rechazo_tecnico.options"
                            :chart-data="chart_rechazo_tecnico.data"
                            ref="pie"
                            :plugins="plugins"
                            v-if="!loading"
                        ></pie>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
import PieChart from "@/components/charts/PieChart";
import BarChart from "@/components/charts/BarChart.vue";

import { Pie } from "vue-chartjs/legacy";

import { mapState, mapActions } from "vuex";

import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
    components: {
        "pie-chart": PieChart,
        "bar-chart": BarChart,
        'pie': Pie
    },
    data() {
        return {
            selectedItem: 1,
            items: [
                { text: "Real-Time Real-Time Real-Time", icon: "mdi-clock" },
                { text: "Audience", icon: "mdi-account" },
                { text: "Conversions", icon: "mdi-flag" },
            ],
            plugins: [ChartDataLabels]
        };
    },
    methods: {
        ...mapActions({
            fetchGestionCarteraTecnicos: 'alert/fetchGestionCarteraTecnicos'
        }),
        getChart(){

            this.fetchGestionCarteraTecnicos()

        }
    },  
    computed: {
        ...mapState({
            data: (state) => state.dialog.data,
            fullscreen: (state) => state.dialog.fullscreen,
            chart_rechazo_tecnico: (state) => state.alert.chart_rechazo_tecnico,
            loading: (state) => state.alert.loading
        }),
    },
};
</script>