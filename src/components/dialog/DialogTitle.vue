<template>
    <v-card-title class="text-h5 mt-2">
        <v-btn @click="setShowSearch()" icon>
            <v-icon>
                mdi-magnify
            </v-icon>
        </v-btn>
        <v-text-field v-if="showSearch" v-model="search" hide-details dense></v-text-field>
        <v-spacer></v-spacer>
        <v-btn @click="setFullScreen()" icon>
            <v-icon>
                {{ fullscreen ? 'mdi-fullscreen-exit' : 'mdi-fullscreen' }}
            </v-icon>
        </v-btn>
        <v-btn @click="setShow(false)" icon>
            <v-icon> mdi-close </v-icon>
        </v-btn>
    </v-card-title>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            setFullScreen: 'dialog/setFullScreen',
            setShow: 'dialog/setShow',
            setSearch: 'dialog/setSearch',
            setShowSearch: 'dialog/setShowSearch'
        })
    },
    computed: {
        ...mapState({
            fullscreen: state => state.dialog.fullscreen,
            data: state => state.dialog.data,
            showSearch: state => state.dialog.showSearch
        }),
        search: {
            get(){
                return this.$store.state.dialog.search
            },
            set(val){
                this.setSearch(val)
            }
        }
    }
};
</script>