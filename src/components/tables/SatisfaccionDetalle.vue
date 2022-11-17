<template>
    <v-card-text>
        <v-tabs v-model="tab">
            <v-tab>Detalle</v-tab>
            <v-tab>Resumen</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item>
                <table-satisfaccion
                    :data_component="data_component"
                ></table-satisfaccion>
            </v-tab-item>
            <v-tab-item>
                <table-detail :data_component="data.resumen"></table-detail>

                <v-row justify="center">
                    <v-col cols="8">
                        <!-- Explicación del cálculo -->
                        <v-alert
                            border="top"
                            colored-border
                            prominent
                            icon="mdi-calculator"
                            color="info"
                            class="pt-4"
                            text
                        >
                            <div class="ma-10">
                                <span class="overline mb-10">
                                    Cálculo:
                                </span>
                                <br>
                                <operator :value="numerator"></operator>
                                <span class="ml-4 mr-4 symbol">/</span>
                                <operator :value="data.resumen.table.items.length"></operator>
                                <span class="ml-4 mr-4 symbol">=</span>
                                <operator :value="percentage" color="success"></operator>
                            </div>
                        </v-alert>
                    </v-col>
                </v-row>
            </v-tab-item>
        </v-tabs-items>
    </v-card-text>
</template>

<style scoped>
    .symbol{
        font-size: 25px;
    }
</style>

<script>

import TableSatisfaccion from "./TableSatisfaccion";
import TableDetail from "./TableDetail";
import Operator from '@/components/custom/IndividualOperator.vue'


import { mapState } from "vuex";

export default {
    props: {
        data_component: Object,
    },
    components: {
        "table-satisfaccion": TableSatisfaccion,
        "table-detail": TableDetail,
        'operator': Operator
    },
    data() {
        return {
            tab: 0,
        };
    },
    computed: {
        ...mapState({
            data: (state) => state.dialog.data,
        }),
        numerator: function(){

            let value = 0

            this.data.resumen.table.items.forEach(item => {
                value += item.satisfaccion
            });

            return value.toFixed(2)
        },
        percentage: function(){

            return (this.numerator / this.data.resumen.table.items.length).toFixed(2)

        }
    },
};
</script>