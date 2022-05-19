<template>
    <div>
        <v-overlay color="#fff" :dark="false" :opacity="100" :value="first_loading">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <v-row>
            <v-col>
                <section-bar></section-bar>
            </v-col>
        </v-row>
        <progress-bar></progress-bar>
        <v-row>
            <v-col
                v-for="(indicador, key) in indicadores"
                :key="key"
                :cols="indicador.cols"
            >
                <info-card
                    :dark="indicador.dark"
                    :title_data="indicador.title"
                    :color="indicador.color"
                    :icon="indicador.icon"
                    :cols="indicador.cols"
                >
                    <template #content>
                        <div v-if="indicador.error">
                            <error-message :message="indicador.error.message"></error-message>
                        </div>
                        <custom-component :name="indicador.componente" v-if="indicador.componente"></custom-component>
                        <content-card
                            v-if="!indicador.componente"
                            :bottom="indicador.bottom_detail"
                            :content="indicador.content"
                            :data="indicador"
                        ></content-card>
                    </template>
                </info-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import InfoCard from "@/components/general/InfoCard.vue";
import ContentCard from "@/components/general/ContentCard.vue";
import SectionBar from "@/components/home/SectionBar.vue";
import ProgressBar from "@/components/home/ProgressBar.vue";
import CustomComponent from '@/components/custom/CustomComponent.vue'
import ErrorMessage from '@/components/indicador/ErrorMessage.vue'

import { mapState, mapActions, mapMutations } from "vuex";

export default {
    name: "HomeView",
    components: {
        "info-card": InfoCard,
        "content-card": ContentCard,
        "section-bar": SectionBar,
        "progress-bar": ProgressBar,
        'custom-component': CustomComponent,
        'error-message': ErrorMessage
    },
    data(){
        return{
            overlay: true
        }
    },
    methods: {
        ...mapActions({
            getDashboard: "dashboard/getDashboard",
        }),
        ...mapMutations({
            setFirstLoading: 'dashboard/setFirstLoading'
        })
    },
    computed: {
        ...mapState({
            indicadores: (state) => state.dashboard.indicadores,
            first_loading: state => state.dashboard.first_loading
        })
    },
    mounted() {

        this.setFirstLoading(true)
        
        this.getDashboard();
    },
};
</script>
