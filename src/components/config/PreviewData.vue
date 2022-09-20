<template>
    <div>
        <v-row v-if="process" justify="center" align="center">
            <v-col cols="3">
                <v-select
                    :items="process.detail.indicadores"
                    item-text="nombre"
                    item-value="id"
                    hide-details
                    filled
                    v-model="kpi_selected"
                    placeholder="Seleccione una opción"
                ></v-select>
            </v-col>
            <v-col align="start">
                <h2>
                    {{ process.nombre }}
                </h2>
                <small> Última Actualización: 2022-08-22 15:32:33 </small>
            </v-col>
            <v-col cols="4" align="end">
                <v-progress-circular
                    indeterminate
                    color="primary"
                    class="mr-4"
                    v-if="loading"
                ></v-progress-circular>
                <v-btn @click="saveData(indicador)" class="mr-2" elevation="0">
                    <v-icon> mdi-content-save </v-icon>
                </v-btn>
                <v-btn @click="fetchDataProcess()" class="mr-2" elevation="0">
                    <v-icon> mdi-refresh </v-icon>
                </v-btn>
                <v-btn
                    @click="setProcessPreview(null)"
                    elevation="0"
                    color="primary"
                    >Regresar
                    <v-icon right> mdi-arrow-u-left-top </v-icon>
                </v-btn>
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
        <v-row align="center" justify="center" class="mb-4 text-center" v-else>
            <v-col cols="4">
                <v-avatar size="200" rounded>
                    <v-img
                        :src="require('@/assets/img/dashboard_variant_2.png')"
                    ></v-img>
                </v-avatar>

                <h1 class="text-h5 mt-4">
                    Debe de seleccionar primero un indicador
                </h1>
            </v-col>
        </v-row>
        <v-row align="center" v-if="indicador">
            <v-col cols="3">
                <v-select
                    v-model="bottom_selected"
                    :items="bottom_options"
                    hide-details
                    filled
                    placeholder="Seleccione una opción"
                    @change="updateBottomSelected()"
                ></v-select>
            </v-col>
            <v-col align="end" cols="9">
                <v-btn
                    @click="table_select = !table_select"
                    class="mr-2"
                    elevation="0"
                    :disabled="!bottom_selected"
                    
                >
                    Seleccionar
                    <v-icon right>
                        {{ table_select ? "mdi-eye-off" : "mdi-eye" }}
                    </v-icon>
                </v-btn>
                <v-divider vertical></v-divider>
                <v-badge
                    :content="rows_selected.length"
                    :value="rows_selected.length"
                    bordered
                    color="error"
                    icon="mdi-lock"
                    overlap
                >
                    <v-btn
                        :disabled="
                            !bottom_selected || rows_selected.length == 0
                        "
                        elevation="0"
                        color="error"
                        @click="removeRow()"
                    >
                        Eliminar
                        <v-icon right> mdi-delete </v-icon>
                    </v-btn>
                </v-badge>
                <v-btn
                    @click="addRow"
                    :disabled="!bottom_selected"
                    elevation="0"
                    color="primary"
                    class="ml-4"
                >
                    Agregar
                    <v-icon right> mdi-plus </v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-data-table
                    :headers="table_detail.headers"
                    :items="table_detail.items"
                    :show-select="table_select"
                    :item-key="!table_select ? null : first_header"
                    v-model="rows_selected"
                >
                    <template
                        v-for="(item_table, key) in table_detail.headers"
                        v-slot:[getSlotName(item_table)]="{ item, header }"
                    >
                        <v-edit-dialog
                            :key="key"
                            :return-value.sync="item[header.value]"
                            @save="updateKPI"
                        >
                            {{ item[header.value] }}
                            <template v-slot:input>
                                <v-text-field
                                    single-line
                                    v-model="item[header.value]"
                                    :disabled="table_select"
                                ></v-text-field>
                            </template>
                        </v-edit-dialog>
                    </template>
                </v-data-table>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

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
            bottom_selected: null,
            table_select: false,
            rows_selected: [],
        };
    },
    methods: {
        ...mapMutations({
            setProcessPreview: "config/setProcessPreview",
            setKPISelected: 'config/setKPISelected',
            setIndicador: 'config/setIndicador',
            updateTotal: 'config/updateTotal',
            setBottomSelected: 'config/setBottomSelected'
        }),
        ...mapActions({
            saveData: "config/saveData",
            fetchDataProcess: 'config/fetchDataProcess'
        }),
        getSlotName(item) {
            return `item.` + item.value;
        },
        updateKPI() {
            console.log("update total");
        },
        addRow() {

            // Se agrega un nuevo objeto al array de items
            this.table_detail.items.unshift({});

            // * Si el total de registros en el detalle es mayor que lo mostrado en el indicador, sumar 
            if (this.table_detail.items.length > this.current_bottom.value) {
                
                // * Equiparar
                this.current_bottom.value = this.table_detail.items.length;

                // Recalcular el total
                this.updateTotal(this.current_bottom.value)

            }

        },
        removeRow() {

            const result = this.table_detail.items.filter(({ expediente: id1 }) => !this.rows_selected.some(({ expediente: id2 }) => id2 === id1));

            this.table_detail.items = result

            this.rows_selected = []

            // * Si el detalle del elemento da como resultado una cantidad menor al total mostrado se deberá de restar
            if (this.table_detail.items.length < this.current_bottom.value) {
                
                // * Equiparar
                this.current_bottom.value = this.table_detail.items.length;

                // Recalcular el total
                this.updateTotal(this.current_bottom.value)

            }


        },
        updateBottomSelected(){

            this.setBottomSelected(this.current_bottom)

        }
    },
    computed: {
        ...mapState({
            process: (state) => state.config.process_preview,
            loading: (state) => state.config.loading,
            indicador: state => state.config.indicador
        }),
        kpi_selected: {
            get(){
                return this.$store.state.config.kpi_selected
            },
            set(val){
                this.setKPISelected(val)
            }
        },
        bottom_options() {
            let items = [];

            if (this.indicador) {
                this.indicador.bottom_detail.forEach((bottom) => {
                    items.push(bottom.text);
                });
            }

            return items;
        },
        table_detail() {
            if (this.indicador) {
                // Obtener la tabla en base a la opción seleccionada
                let result = this.indicador.bottom_detail.filter(
                    (item) => item.text == this.bottom_selected
                );

                if (result.length > 0) {
                    return result[0].detail.table;
                }
            }

            return [];
        },
        current_bottom() {

            if (this.indicador) {

                // Obtener la tabla en base a la opción seleccionada

                let result = this.indicador.bottom_detail.filter(

                    (item) => item.text == this.bottom_selected

                );

                if (result.length > 0) {

                    return result[0];

                }
            }

            return [];

        },
        first_header() {

            if (this.table_detail) {

                if (this.table_detail.headers) {

                    return this.table_detail.headers[0].value;

                }

            }

            return null;
        },
    },
    watch: {
        kpi_selected(val){

            if (val) {
                
                const result = this.process.detail.indicadores.filter(

                    (item) => item.id == val
        
                );
        
                if (result) {
                    
                    const response = result[0]

                    this.setIndicador(response)
                    
                }

            }

        }
    }
};
</script>