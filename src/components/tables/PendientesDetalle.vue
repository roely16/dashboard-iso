<template>
    <v-card-text>
        <v-row v-if="bottom_detail.length >= 4" justify="center" align="center">
            <v-col cols="9">
                <v-alert border="top" colored-border prominent icon="mdi-calculator" color="info" class="pt-4" text>
                    <div class="ma-10">
                        <span class="overline mb-10">
                            Cálculo de Pendientes:
                        </span>
                        <br>
                        <operator :value="bottom_detail[0].value"></operator>
                        <span class="ml-4 mr-4 symbol">+</span>
                        <operator :value="bottom_detail[1].value"></operator>
                        <span class="ml-4 mr-4 font-weight-bold symbol error--text">-</span>
                        <operator color="error" :value="bottom_detail[2].value"></operator>
                        <span class="ml-4 mr-4 font-weight-bold success--text symbol">=</span>
                        <operator color="success" :value="bottom_detail[3].value"></operator>
                    </div>
                </v-alert>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<style scoped>
    .symbol{
        font-size: 25px;
    }
</style>

<script>

import Operator from '@/components/custom/IndividualOperator.vue'

import { mapState } from 'vuex'
 
export default {
    components: {
        'operator': Operator
    },
    computed: {
        ...mapState({
            bottom_detail: state => state.dialog.bottom_detail
        })
    }
};  
</script>