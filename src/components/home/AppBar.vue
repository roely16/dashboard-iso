<template>
    <v-app-bar color="#fff" height="80" elevation="0" app>
        <v-app-bar-nav-icon @click="setDrawer(!drawer)">
            <template v-slot:default>
                <v-icon size="35" color="#000">
                    {{ drawer ? 'mdi-backburger' : 'mdi-forwardburger' }}
                </v-icon>
            </template>
        </v-app-bar-nav-icon>
        <v-toolbar-title>
            <h2>Dashboard de Indicadores ISO</h2>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text>
            <v-icon>
                mdi-magnify
            </v-icon>
        </v-btn>
        <v-btn @click="getDashboard()" text>
            <v-icon>
                mdi-sync
            </v-icon>
        </v-btn>
        <v-btn text>
            <v-icon>
                mdi-bell
            </v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>

import { mapMutations, mapState, mapActions } from 'vuex'

export default {
    name: "AppBar",
    methods: {
        ...mapMutations({
            setDrawer: 'menu/setDrawer'
        }),
        ...mapActions({
            getDashboard: 'dashboard/getDashboard'
        })
    },
    computed: {
        ...mapState({
            drawer: state => state.menu.drawer
        })
    }
};
</script>