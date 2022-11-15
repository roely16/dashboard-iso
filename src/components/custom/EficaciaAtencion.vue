<template>
    <v-card-text>
        <v-row class="mb-1" align="start">
            <v-col cols="4" class="text-center">
                <v-card min-height="140" elevation="0">
                    <v-card-text class="pb-0">
                        <h3 class="font-weight-light mb-5">Cumplimiento</h3>
                        <span class="text-h4">
                            {{ data_component.data.cumplimiento }}%
                        </span>
                        <v-row class="mt-1" justify="center">
                            <v-col cols="8">
                                <v-card
                                    elevation="0"
                                    color="grey lighten-2"
                                    @click="setDetail(data_component.data.menor_10)"
                                >
                                    <v-card-text
                                        class="pl-1 pr-1 pt-1 pb-1"
                                    >
                                        <small>
                                                &#60;{{ '10' }}
                                        </small>
                                        <br />
                                        <strong>
                                            {{ data_component.data.menor_10.value }}
                                        </strong>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col class="text-center">
                <h3>Seguimiento de Tiempo de Espera en Cola</h3>
                <v-row class="mt-1">
                    <v-col>
                        <v-card elevation="0" min-height="100">
                            <v-card-text class="pt-0 pb-0">
                                <h4 class="font-weight-light">Mensual</h4>
                                <span class="text-h4">
                                    {{ data_component.data.mensual }}%
                                </span>
                                <v-row class="mt-1" justify="center">
                                    <v-col cols="8">
                                        <v-card
                                            elevation="0"
                                            color="grey lighten-2"
                                            @click="setDetail(data_component.data.menor_20)"
                                        >
                                            <v-card-text
                                                class="pl-1 pr-1 pt-1 pb-1"
                                            >
                                                <small>
                                                    &#60;{{ '20' }}
                                                </small>
                                                <br />
                                                <strong>
                                                    {{ data_component.data.menor_20.value }}
                                                </strong>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col>
                        <v-card elevation="0" min-height="100">
                            <v-card-text class="pt-0 pb-0">
                                <h4 class="font-weight-light">
                                    Trimestral
                                </h4>
                                <span class="text-h4">
                                    {{ data_component.data.trimestral }}%
                                </span>
                                <v-row class="mt-1" justify="center">
                                    <v-col cols="8">
                                        <v-card
                                            elevation="0"
                                            color="grey lighten-2"
                                            @click="setDetail(data_component.data.menor_45)"
                                        >
                                            <v-card-text
                                                class="pl-1 pr-1 pt-1 pb-1"
                                            >
                                                <small>
                                                    &#60;{{ '45' }}
                                                </small>
                                                <br />
                                                <strong>
                                                    {{ data_component.data.menor_45.value }}
                                                </strong>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row class="mt-1">
            <v-col class="pt-1 pb-1 text-center">
                <v-icon @click="expand = !expand">
                    mdi-chevron-down
                </v-icon>
            </v-col>
        </v-row>
        
        <v-divider v-if="expand" class="mt-4 mb-4"></v-divider>

        <bottom-detail v-if="expand" :items="data_component.data.bottom_detail"></bottom-detail>
    </v-card-text>
</template>

<style scoped>
.click {
    cursor: pointer;
}
.title-bottom {
    font-size: 0.7vw;
}
.total-bottom {
    font-size: 2vw;
}
</style>

<script>

import { mapMutations } from 'vuex';

import CardBottomDetail from '@/components/indicador/CardBottomDetail'

export default {
    props: {
        data_component: Object
    },  
    components: {
        'bottom-detail': CardBottomDetail
    },
    data(){
        return{
            expand: false
        }
    },
    methods: {
        ...mapMutations({
            setShow: 'dialog/setShow',
            setData: 'dialog/setData'
        }),
        setDetail(detail){
            
            this.setData(detail)

            this.setShow(true)
        }
    }
};
</script>