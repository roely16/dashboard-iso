<template>
    <v-container>
        <v-row>
            <v-col cols="6">
                <v-text-field hide-details outlined append-icon="mdi-calendar"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-select v-model="type" :items="new_config" hide-details label="Tipo" outlined></v-select>
            </v-col>
        </v-row>
        <v-divider class="mt-4 mb-4"></v-divider>
        <v-row>
            <v-col cols="4" v-for="(indicador, key) in indicadores" :key="key">
                <v-card :dark="indicador.selected ? true : false" :color="indicador.selected ? 'success' : null" @click="select(indicador)" min-height="130">
                    <v-card-text>
                        <span class="text-h6">
                            {{ indicador.proceso }}
                        </span>
                        <br>
                        <small class="font-weight-medium">
                            {{ indicador.nombre }}
                        </small>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="mt-4">
            <v-col>
                <v-btn text>
                    Cancelar
                </v-btn>
                <v-btn color="primary" elevation="0" class="ml-4">
                    Guardar
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { mapState } from 'vuex'

export default {
    data(){
        return{
            type: null
        }
    },
    methods: {
        select(item){
            item.selected = !item.selected
        }
    },
    computed: {
        ...mapState({
            new_config: state => state.config_view.new_config,
        }),
        indicadores: function(){

            const result = this.new_config.filter(item => item.value == this.type)

            if (result.length > 0) {
                
                return result[0].indicadores
            }

            return []
        }
    }
}
</script>