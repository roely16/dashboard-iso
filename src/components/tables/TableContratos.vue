<template>
    <v-card-text>
        <v-data-table
            :headers="data_component.table.headers"
            :items="data_component.table.items"
            :items-per-page="10"
            class="elevation-0"
            :search="search"
            :hide-default-footer="data_component.table.items.length == 0 ? true : false"
            show-expand
            item-key="id_programacion"
            single-expand
            fixed-header
            :height="data_component.table.items.length > 10 ? 550 : null"
        >

            <template v-slot:expanded-item="{ headers, item }">
                <td class="mt-2 mb-2" :colspan="headers.length">
                    <v-row class="mt-2 mb-2">
                        <v-col>
                            <v-card elevation="0">
                                <v-card-title>
                                    Detalle de Programación
                                </v-card-title>
                                <v-card-text>
                                    <v-simple-table dense>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Fecha Programada
                                                    </th>
                                                    <th class="text-left">
                                                        Cuota
                                                    </th>
                                                    <th class="text-left">
                                                        Periodo
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(element, key) in item.detalle_progra" :key="key">
                                                    <td>
                                                        {{ element.fecha_programado }}
                                                    </td>
                                                    <td>
                                                        {{ element.numero_cuota }}
                                                    </td>
                                                    <td>
                                                        {{ element.periodo }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col>
                            <v-card elevation="0">
                                <v-card-title>
                                    Gestión de Programación
                                </v-card-title>
                                <v-card-text>
                                    <v-simple-table dense>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-left">
                                                        Cuota
                                                    </th>
                                                    <th class="text-left">
                                                        No. Gestión
                                                    </th>
                                                    <th>
                                                        Fecha Finalización
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(element, key) in item.gestion_progra" :key="key">
                                                    <td>
                                                        {{ element.numero_cuota }}
                                                    </td>
                                                    <td>
                                                        {{ element.gestionid }}
                                                    </td>
                                                    <td>
                                                        {{ element.fechafinalizacion }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-card-text>
                            </v-card>
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
        data_component: Object
    },
    components: {
    },
    computed: {
        ...mapState({
            search: state => state.dialog.search
        })
    }
}
</script>