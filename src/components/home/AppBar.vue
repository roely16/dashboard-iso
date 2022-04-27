<template>
    <v-app-bar color="#fff" height="80" elevation="0" app>
        <v-app-bar-nav-icon @click="setDrawer()">
            <template v-slot:default>
                <v-icon size="35" color="#000">
                    {{ drawer ? 'mdi-backburger' : 'mdi-forwardburger' }}
                </v-icon>
            </template>
        </v-app-bar-nav-icon>
        <h2>Dirección de Catastro y Administración del IUSI</h2>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>
                mdi-magnify
            </v-icon>
        </v-btn>
        <v-btn icon>
            <v-icon>
                mdi-bell
            </v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
    name: "AppBar",
    methods: {
        ...mapMutations({
            setDrawer: 'menu/setDrawer'
        })
    },
    computed: {
        ...mapState({
            drawer: state => state.menu.drawer
        })
    }
};
</script>