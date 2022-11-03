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
        <v-date-picker min="2020-01-01" color="#8AB8A1" v-model="date" type="month" scrollable>
            <v-spacer></v-spacer>
            <v-btn text @click="modal = false"> Cancelar </v-btn>
            <v-btn text color="#8AB8A1" @click="saveDate(date)">
                OK
            </v-btn>
        </v-date-picker>
    </v-dialog>
</template>

<script>

import { mapMutations, mapActions } from 'vuex'

export default {
    data(){
        return{
            menu: false,
            modal: false,
        }
    },
    methods: {
        ...mapMutations({
            setDate: 'dashboard/setDate'
        }),
        ...mapActions({
            getDashboard: 'dashboard/getDashboard'
        }),
        saveDate(date){
            this.$refs.dialog.save(date)
            this.getDashboard()
        }
    },
    computed: {
        date: {
            get(){
                return this.$store.state.dashboard.date
            },
            set(val){
                this.setDate(val)
            }
        }
    }
}
</script>

