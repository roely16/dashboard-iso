<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="3">
                <v-select
                    :items="process.detail.indicadores"
                    item-text="nombre"
                    item-value="id"
                    hide-details
                    filled
                    v-model="kpi_selected"
                ></v-select>
            </v-col>
            <v-col align="start">
                <v-btn text color="primary">Congelar</v-btn>
            </v-col>
        </v-row>
        <v-row class="mb-4" v-if="indicador">
            <v-col cols="6">
                <info-card
                    :dark="indicador.dark"
                    :title_data="indicador.title"
                    :color="indicador.color"
                    :icon="indicador.icon"
                    :cols="indicador.cols"
                    :indicador="indicador"
                >
                    <template #content>
                        <div v-if="indicador.error">
                            <error-message
                                :message="indicador.error.message"
                            ></error-message>
                        </div>
                        <custom-component
                            :data_component="indicador"
                            :name="indicador.componente"
                            v-if="indicador.componente"
                        />
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
        <v-divider class="mb-4"></v-divider>
    </div>
</template>

<script>
import { mapState } from "vuex";

import InfoCard from "@/components/general/InfoCard.vue";
import ContentCard from "@/components/general/ContentCard.vue";
import CustomComponent from "@/components/custom/CustomComponent.vue";
import ErrorMessage from "@/components/indicador/ErrorMessage.vue";

export default {
    components: {
        "info-card": InfoCard,
        "content-card": ContentCard,
        "custom-component": CustomComponent,
        "error-message": ErrorMessage,
    },
    data() {
        return {
            view_mode: null,
            kpi_selected: null,
        };
    },
    computed: {
        ...mapState({
            process: (state) => state.config.process_preview,
        }),
        indicador() {
            if (this.kpi_selected) {
                const result = this.process.detail.indicadores.filter(
                    (indicador) => indicador.id == this.kpi_selected
                );

                return result[0];
            }

            return false;
        },
    },
};
</script>