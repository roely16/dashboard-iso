<template>
    <v-row justify="end" align="end" class="pb-2 pt-2">
        <v-col
            v-for="(item, key) in items"
            :key="key"
            class="text-center click mt-2 mb-2"
            @click="!indicador.editable ? setDetail(item) : showEdit(item)"
        >
            <v-row>
                <v-col cols="12 pb-0 pt-0 title-bottom">
                    <span class="font-weight-medium">
                        {{ item.text }}
                    </span>
                </v-col>
                <v-col cols="12 pt-0 pb-0 total-bottom mt-2">
                    <span class="font-weight-black">
                        {{ item.value }}
                    </span>
                </v-col>
                <v-divider v-if="key < items.length - 1" vertical></v-divider>
            </v-row>
        </v-col>

        <!-- Cuadro de dialogo para edición de valores -->
        <custom-dialog title="Edición" ref="dialog">
            <template #content>
                <edit-field
                    :value="value"
                    :placeholder="placeholder"
                    @updateValue="(val) => updateTotal(val)"
                    :data="data"
                ></edit-field>
            </template>
        </custom-dialog>
    </v-row>
</template>

<style scoped>
.click {
    cursor: pointer;
}
.title-bottom {
    font-size: 0.7vw;
}
.total-bottom {
    font-size: 2vw;
}
</style>

<script>
import CustomModal from "@/components/dialog/CustomModal";
import EditField from "@/components/dialog/EditField";

import { mapMutations, mapState } from "vuex";

export default {
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
        indicador: Object,
    },
    components: {
        "custom-dialog": CustomModal,
        "edit-field": EditField,
    },
    data() {
        return {
            value: 0,
            placeholder: null,
            data: null,
        };
    },
    methods: {
        ...mapMutations({
            setShow: "dialog/setShow",
            setData: "dialog/setData",
            setBottomSelected: "config/setBottomSelected",
            updateTotal: "config/updateTotal",
        }),
        setDetail(detail) {

            console.log(detail)

            this.setData(detail);

            this.setShow(true);
        },
        showEdit(payload) {
            this.value = payload.value;
            this.placeholder = payload.text;
            this.data = payload;

            this.setBottomSelected(payload);

            this.$refs.dialog.activeDialog(true);
        },
        updateValue(val) {
            this.updateTotal(val);

            // this.bottom_selected.value = parseInt(val)

            // // Actualizar el total

            // // * Obtener de bottom_detail los identificados como up y down

            // let up = this.indicador_get.bottom_detail.find(item => item.divide == 'up')

            // let down = this.indicador_get.bottom_detail.find(item => item.divide == 'down')

            // const result = up.value / down.value

            // if (down.value <= 0 || !down.value || up.value <= 0 || !up.value) {

            //     this.indicador_get.content.total.value = 0

            //     return
            // }

            // let total = result * 100

            // this.indicador_get.content.total.value = total > 100 ? 100 : Number.isInteger(total) ? total : total.toFixed(1)
        },
    },
    computed: {
        ...mapState({
            bottom_selected: (state) => state.config.bottom_selected,
            indicador_get: (state) => state.config.indicador,
        }),
    },
};
</script>
