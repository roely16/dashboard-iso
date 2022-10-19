<template>
    <div>
        <v-row>
            <v-col cols="4">
                <v-card
                    elevation="0"
                    color="#8AB8A1"
                    style="height: 100%; border-radius: 15px"
                >
                    <v-card-text>
                        <v-row align="center">
                            <v-col cols="3" class="text-center">
                                <dialog-date-picker></dialog-date-picker>
                            </v-col>
                            <v-col class="date-title">
                                <span class="white--text">Fecha: </span>
                                <br />
                                <span class="white--text font-weight-bold">
                                    {{ date }}
                                </span>
                            </v-col>
                            <v-col class="date-title">
                                <span class="white--text">Hora: </span>
                                <br />
                                <span class="white--text font-weight-bold">{{
                                    time
                                }}</span>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col align-self="center" align="end">
                <h2 class="grey--text text--darken-1">
                    {{ userData.nombre }} {{ userData.apellido }}
                </h2>
                <span class="grey--text text--darken-1 overline">
                    {{ userData.area }}
                </span>
                <br />
                <v-btn small @click="doLogout()" color="error" text>
                    Salir
                    <v-icon right> mdi-logout </v-icon>
                </v-btn>
            </v-col>
        </v-row>

        <v-divider class="mt-4 mb-4"></v-divider>

        <!-- Vista Previa del Proceso Seleccionado -->
        <preview-data v-if="process_preview && !isFreezing"></preview-data>

        <v-row v-else>
            <v-overlay absolute color="#fff" :dark="false" :opacity="100" :value="loading_process">
                <v-progress-circular indeterminate size="64"></v-progress-circular>
            </v-overlay>
            <v-col v-for="(process, key) in process" :key="key" cols="3">
                <v-card
                    flat
                    color="blue-grey lighten-5"
                    min-height="130"
                    style="height: 100%; border-radius: 15px"
                >
                    <v-card-text style="min-height: 95px">
                        <h6 class="text-h6">
                            {{ process.nombre }}
                        </h6>
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                        <v-btn :loading="process.freezing" :disabled="process.freezing" @click="massiveFreeze(process)" color="primary" text>CONGELAR </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn :loading="process.loading" :disabled="process.loading" @click="fetchDataProcess(process)" icon>
                            <v-icon>
                                mdi-chart-bar
                            </v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import DialogDatePicker from "./DialogDatePicker.vue";
import PreviewData from './PreviewData'

import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

export default {
    name: "ListProcess",
    components: {
        "dialog-date-picker": DialogDatePicker,
        'preview-data': PreviewData
    },
    data() {
        return {
            interval: null,
            time: '00:00:00',
        };
    },
    methods: {
        ...mapActions({
            fetchProcess: "config/fetchProcess",
            doLogout: "config/doLogout",
            fetchDataProcess: 'config/fetchDataProcess',
            saveData: 'config/saveData'
        }),
        ...mapMutations({
            setProcessPreview: 'config/setProcessPreview'
        }),
        setTime() {
            this.interval = setInterval(() => {
                this.time = Intl.DateTimeFormat(navigator.language, {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: false,
                }).format();
            }, 1000);
        },
        massiveFreeze(process){

            this.$set(process, 'freezing', true)

            this.fetchDataProcess(process)
            .then(() => {

                this.process_preview.detail.indicadores.forEach(indicador => {
                
                    this.saveData(indicador)

                });

                 // * Clear process_preview
                this.setProcessPreview(null)

                process.freezing = false

            })

        }
    },
    computed: {
        ...mapState({
            process: (state) => state.config.process,
            date: (state) => state.config.date,
            process_preview: state => state.config.process_preview,
            loading_process: state => state.config.loading_process
        }),
        userData() {
            return JSON.parse(localStorage.getItem("dashboard-iso"));
        },
        ...mapGetters({
            isFreezing: 'config/isFreezing'
        })
    },
    created(){
        this.setTime()
    },  
    mounted() {
        this.fetchProcess();
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>