<template>
    <v-card-text>
        <v-data-table
            :headers="data_component.table.headers"
            :items="data_component.table.items"
            :items-per-page="10"
            class="elevation-0"
            :search="search"
            :hide-default-footer="
                data_component.table.items.length == 0 ? true : false
            "
            item-key="id_transaccion"
            show-expand
            single-expand
        >
            <template v-slot:[`item.tiempo_atencion`]="item">
                <v-chip dark color="#8ab8a1" label>
                    {{ item.item.atencion_tiempo }}
                </v-chip>
            </template>

            <template v-slot:[`item.tiempo_cola`]="item">
                <v-chip dark color="#8ab8a1" label>
                    {{ item.item.cola_tiempo }}
                </v-chip>
            </template>

            <template v-slot:expanded-item="{ headers, item }">
                <td class="mt-2 mb-2" :colspan="headers.length">
                    <v-row class="mt-2 mb-2">
                        <v-col cols="4">
                            <strong>
                                Creación de Ticket:
                            </strong>
                        </v-col>
                        <v-col cols="8">
                            <v-chip label>
                                {{ item.f_entrada }}
                            </v-chip>
                        </v-col>
                        <v-col cols="4">
                            <strong>
                                Inicio de Atención:
                            </strong>
                        </v-col>
                        <v-col cols="8">
                            <v-chip label>
                                {{ item.itiempo }}
                            </v-chip>
                        </v-col>
                        <v-col cols="4">
                            <strong>
                                Fin de Atención:
                            </strong>
                        </v-col>
                        <v-col cols="8">
                            <v-chip label>
                                {{ item.ftiempo }}
                            </v-chip>
                        </v-col>
                    </v-row>
                </td>
            </template>

        </v-data-table>
    </v-card-text>
</template>

<script>
import { mapState } from "vuex";

export default {
    props: {
        data_component: Object,
    },
    computed: {
        ...mapState({
            search: (state) => state.dialog.search,
        }),
    },
};
</script>