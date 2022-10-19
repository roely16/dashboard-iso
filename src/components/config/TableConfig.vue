<template>
    <v-row>
        <v-col cols="12">
            <v-row>
                <v-col>

                </v-col>
                <v-col cols="6" align="end">
                    <v-btn @click="showModal()" elevation="0" color="primary">
                        <v-icon>
                            mdi-plus
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <v-data-table hide-default-footer :items="table.items" :headers="table.headers"></v-data-table>
        </v-col>

        <modal width="600" title="Agregar Configuración" ref="modal">
            <template #content>
                <form-config-indicador></form-config-indicador>
            </template>
        </modal>
    </v-row>
</template>

<script>

import Modal from '@/components/dialog/CustomModal.vue'
import FormConfigIndicador from '@/components/config/FormConfigIndicador.vue'

import { mapActions, mapState } from 'vuex'

export default {
    components: {
        'modal': Modal,
        'form-config-indicador': FormConfigIndicador
    },
    methods: {
        ...mapActions({
            getConfigList: 'config_view/getConfigList',
            getNewConfig: 'config_view/getNewConfig'
        }),
        showModal(){

            this.getNewConfig()
            
            this.$refs.modal.activeDialog(true)

        }
    },
    computed: {
        ...mapState({
            table: state => state.config_view.table_config
        })
    },
    mounted(){
        this.getConfigList()
    }
}
</script>