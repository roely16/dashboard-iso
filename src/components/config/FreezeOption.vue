<template>
    <div>
        <form-login v-if="!logged" />
        <list-process v-else/>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';

import FormLogin from '@/components/config/FormLogin.vue'
import ListProcess from '@/components/config/ListProcess.vue'

export default {
    components: {
        'form-login': FormLogin,
        'list-process': ListProcess
    },
    methods:{
        ...mapMutations({
            setLogged: 'config/setLogged'
        }),
        checkLogged(){

            if (!this.userData) {
                this.setLogged(false)

                return
            }

            this.setLogged(true)
        }
    },
    computed: {
        ...mapState({
            logged: state => state.config.logged
        }), 
        userData(){
            return JSON.parse(localStorage.getItem('dashboard-iso'))
        }
    },
    mounted(){

        this.checkLogged()
        
    }
};
</script>