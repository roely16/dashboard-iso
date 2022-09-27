<template>
    <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
    >
        <template v-slot:activator="{ on, attrs }">
             <v-btn x-large dark icon v-bind="attrs" v-on="on">
                <v-icon> mdi-calendar</v-icon>
            </v-btn>
        </template>
        <v-date-picker color="#8AB8A1" v-model="date" type="month" scrollable>
            <v-spacer></v-spacer>
            <v-btn text @click="modal = false"> Cancelar </v-btn>
            <v-btn text color="#8AB8A1" @click="saveDate(date)">
                OK
            </v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script>

import { mapMutations, mapActions, mapState } from 'vuex'

export default {
    data(){
        return{
            menu: false,
            modal: false,
        }
    },
    methods: {
        ...mapMutations({
            setDate: 'config/setDate'
        }),
        ...mapActions({
            fetchDataProcess: 'config/fetchDataProcess'
        }),
        saveDate(date){

            // * Obtener de nuevo los datos
            this.$refs.dialog.save(date)

            if (this.process_preview) {
                
                this.fetchDataProcess()
                
            }
            
        }
    },
    computed: {
        ...mapState({
            process_preview: 'config/process_preview'
        }),
        date: {
            get(){
                return this.$store.state.config.date
            },
            set(val){
                this.setDate(val)
            }
        }
    }
}
</script>

