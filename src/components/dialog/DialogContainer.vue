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
        <v-card style="border-radius: 15px" v-if="!data.component">
            <dialog-title></dialog-title>

            <v-card-text>
                <v-expansion-panels flat v-if="isArray">
                    <v-expansion-panel v-for="(item, key) in data" :key="key">
                        <v-expansion-panel-header>
                            {{ item.descripcion }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <dialog-content
                                :items="item.bottom_detail.table.items"
                                :headers="item.bottom_detail.table.headers"
                            ></dialog-content>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card-text>
            <v-card-text v-if="!isArray && data.table">
                <dialog-content :items="data.table.items" :headers="data.table.headers" ></dialog-content>
            </v-card-text>
        </v-card>

        <custom-component :name="data.component" v-if="data.component"></custom-component>
    </v-dialog>
</template>

<style scoped>
.btn {
    text-transform: unset !important;
}
</style>

<script>
import { mapState, mapMutations } from "vuex";

import DialogTitle from "@/components/dialog/DialogTitle.vue";
import DialogContent from "@/components/dialog/DialogContent.vue";
import CustomComponent from '@/components/custom/CustomComponent.vue'

export default {
    components: {
        "dialog-title": DialogTitle,
        "dialog-content": DialogContent,
        'custom-component': CustomComponent
    },
    methods: {
        ...mapMutations({
            setShow: "dialog/setShow",
        }),
    },
    computed: {
        ...mapState({
            show: (state) => state.dialog.show,
            fullscreen: (state) => state.dialog.fullscreen,
            data: (state) => state.dialog.data,
        }),
        isArray() {
            return Array.isArray(this.data);
        },
    },
};
</script>