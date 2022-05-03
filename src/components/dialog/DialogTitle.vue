<template>
    <v-card-title class="text-h5">
        {{ title }}
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
    props: {
        title: String
    },
    methods: {
        ...mapMutations({
            setFullScreen: 'dialog/setFullScreen',
            setShow: 'dialog/setShow'
        })
    },
    computed: {
        ...mapState({
            fullscreen: state => state.dialog.fullscreen
        })
    }
};
</script>