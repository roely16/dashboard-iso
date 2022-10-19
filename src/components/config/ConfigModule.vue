<template>
    <v-row>
        <v-col cols="2">
            <config-menu></config-menu>
        </v-col>
        <v-col cols="1" align="center">
            <v-divider vertical ></v-divider>
        </v-col>
        <v-col>
            <component v-bind:is="customComponent"></component>
        </v-col>
    </v-row>
</template>

<script>

import { mapState } from 'vuex'

import ConfigMenu from '@/components/config/ConfigMenu.vue'

export default {
    name: 'IndicadoresView',
    components: {
        'config-menu': ConfigMenu
    },
    computed: {
        ...mapState({
            options: state => state.config_view.options
        }),
        customComponent: function(){

            // * Obtener la opción seleccionada
            const result = this.options.filter(option => option.selected)

            const component = () => ({
                component: import(
                    "@/components/config/" +
                        result[0].component
                ),
            });

            return component
        }
    }
}
</script>