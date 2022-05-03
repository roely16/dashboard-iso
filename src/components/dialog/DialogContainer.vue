<template>
    <v-dialog @keydown.esc="setShow(false)" @click:outside="setShow(false)" scrollable :fullscreen="fullscreen" style="border-radius: 15px" v-model="show" width="800">
        <v-card style="border-radius: 15px">
            
            <dialog-title :title="data.title"></dialog-title>

            
            <dialog-content></dialog-content>

            <v-card-actions v-if="footer" class="grey lighten-3 pt-4 pb-4">
                <v-spacer></v-spacer>
                <v-btn class="btn" text>
                    Cancelar
                </v-btn>
                <v-btn class="btn" color="primary" elevation="0" @click="setShow(false)">
                    Save Changes
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped>
    .btn {
        text-transform: unset !important;
    }
</style>

<script>

import { mapState, mapMutations } from 'vuex'

import DialogTitle from '@/components/dialog/DialogTitle.vue'
import DialogContent from '@/components/dialog/DialogContent.vue'

export default {
    props: {
        footer: {
            type: Boolean,
            default: false
        },
        data: {
            type: Object,
            default: function(){
                return {
                    table: {},
                    title: 'Detalle'
                }
            }
        }
    },
    components: {
        'dialog-title': DialogTitle,
        'dialog-content': DialogContent
    },
    methods: {
        ...mapMutations({
            setShow: 'dialog/setShow'
        })
    },
    computed:{
        ...mapState({
            show: state => state.dialog.show,
            fullscreen: state => state.dialog.fullscreen
        })
    }
};
</script>