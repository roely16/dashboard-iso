<template>
    <v-dialog
        @keydown.esc="setShow(false)"
        @click:outside="setShow(false)"
        :scrollable="!fullscreen"
        :fullscreen="fullscreen"
        style="border-radius: 15px"
        v-model="show"
        width="800"
    >
        <v-card style="border-radius: 15px" class="elevation-0">
            <dialog-title></dialog-title>
            <custom-component :data_component="data_component.detail" :name="data_component.component" v-if="data_component.component"></custom-component>
        </v-card>
         
    </v-dialog>
</template>

<style scoped>
.btn {
    text-transform: unset !important;
}
</style>

<script>

import DialogTitle from "@/components/dialog/DialogTitle.vue";
import CustomComponent from '@/components/custom/CustomComponent.vue'

import { mapState, mapMutations } from "vuex";

export default {
    components: {
        'custom-component': CustomComponent,
        'dialog-title': DialogTitle
    },
    methods: {
        ...mapMutations({
            setShow: "dialog/setShow",
            resetModal: 'dialog/resetModal'
        })
    },
    computed: {
        ...mapState({
            show: (state) => state.dialog.show,
            fullscreen: (state) => state.dialog.fullscreen,
            data_component: (state) => state.dialog.data,
        }),
        isArray() {
            return Array.isArray(this.data);
        },
    },
    watch: {
        show: function(val){

            if (!val) {
                console.log('modal close')
            }

        }
    }
};
</script>