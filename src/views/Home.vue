<template>
    <div>
        <v-row>
            <v-col>
                <section-bar></section-bar>
            </v-col>
        </v-row>
        <v-divider class="mb-4 mt-4"></v-divider>
        <v-row>
            <v-col v-for="(indicador, key) in indicadores" :key="key" :cols="indicador.cols">
                <info-card :dark="indicador.dark" :title_data="indicador.title" :color="indicador.color" :icon="indicador.icon" :cols="indicador.cols">
                    <template #content>
                        <content-card :bottom="indicador.bottom_detail" :content="indicador.content"></content-card>
                    </template>
                </info-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import InfoCard from "@/components/general/InfoCard.vue";
import ContentCard from '@/components/general/ContentCard.vue'
import SectionBar from '@/components/home/SectionBar.vue'

import { mapState } from 'vuex'

export default {
    name: "HomeView",
    components: {
        "info-card": InfoCard,
        'content-card': ContentCard,
        'section-bar': SectionBar
    },
    data() {
        return {
            
        };
    },
    computed: {
        ...mapState({
            indicadores: state => state.dashboard.indicadores
        })
    }
};
</script>
