<template>
    <v-card style="border-radius: 15px">
        <dialog-title></dialog-title>
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
                show-expand
                single-expand
                item-key="correlativo"
            >
                <template v-slot:[`item.total`]="item">
                    <v-chip :color="item.item.color" label>
                        {{ item.item.total }}
                    </v-chip>
                </template>

                <template v-slot:expanded-item="{ headers, item }">
                    <td class="mt-2 mb-2" :colspan="headers.length">
                        <v-row class="mt-2 mb-2">
                            <v-col>
                                <v-row
                                    v-for="(pregunta, key) in item.detalle"
                                    :key="key"
                                >
                                    <v-col>
                                        {{ pregunta.pregunta }}
                                    </v-col>
                                    <v-col :cols="pregunta.tipo_valor == 'NUMERICO' ? 1 : 12">
                                        <v-chip v-if="pregunta.tipo_valor == 'NUMERICO'" label>
                                            {{ pregunta.valor }}
                                        </v-chip>
                                       
                                        <div v-if="pregunta.valor != ' ' && pregunta.tipo_valor != 'NUMERICO'" class="text-h6">
                                            <code v-text="pregunta.valor"></code>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </td>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
import DialogTitle from "@/components/dialog/DialogTitle.vue";

import { mapState } from "vuex";

export default {
    name: "TableSatisfaccion",
    props: {
        data_component: Object,
    },
    components: {
        "dialog-title": DialogTitle,
    },
    data() {
        return {
            expanded: [],
        };
    },
    computed: {
        ...mapState({
            search: (state) => state.dialog.search,
        }),
    },
};
</script>