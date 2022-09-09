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
                    <span class="font-weight-medium ">
                        {{ item.text }}
                    </span>
                </v-col>
                <v-col cols="12 pt-0 pb-0 total-bottom mt-2">
                    <span class="font-weight-black ">
                        {{ item.value }}
                    </span>
                </v-col>
                <v-divider v-if="key < (items.length - 1)" vertical></v-divider>
            </v-row>
        </v-col>
        <custom-dialog title="Edición" ref="dialog">
            <template #content>
                <edit-field
                    :value="value"
                    :placeholder="placeholder"
                    @updateValue="(val) => updateValue(val)"
                    :data="data"
                ></edit-field>
            </template>
        </custom-dialog>
    </v-row>
</template>

<style scoped>
.click{
    cursor: pointer;
}
.title-bottom{
    font-size: 0.70vw;
}
.total-bottom{
    font-size: 2vw;
}
</style>

<script>

import CustomModal from "@/components/dialog/CustomModal";
import EditField from "@/components/dialog/EditField";

import { mapMutations, mapGetters, mapState } from 'vuex'

export default {
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
        indicador: Object
    },
    components: {
        "custom-dialog": CustomModal,
        "edit-field": EditField,
    },  
    data(){
        return{
            value: 0,
            placeholder: null,
            data: null
        }
    },
    methods: {
        ...mapMutations({
            setShow: 'dialog/setShow',
            setData: 'dialog/setData',
            setBottomSelected:  'config/setBottomSelected'
        }),
        setDetail(detail){
            
            this.setData(detail)

            this.setShow(true)
        },
        showEdit(payload){
            
            this.value = payload.value
            this.placeholder = payload.text
            this.data = payload

            this.setBottomSelected(payload)

            this.$refs.dialog.activeDialog(true)
        },
        updateValue(val){

            this.bottom_selected.value = parseInt(val)
            
        }
    },
    computed: {
        ...mapState({
            bottom_selected: state => state.config.bottom_selected
        }),
        ...mapGetters({
            indicador_get: 'config/indicador'
        })
    }
};
</script>
