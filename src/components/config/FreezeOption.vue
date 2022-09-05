<template>
    <div>
        <form-login v-if="!userData" />
        <list-process v-else/>
    </div>
</template>

<script>

import FormLogin from '@/components/config/FormLogin.vue'
import ListProcess from '@/components/config/ListProcess.vue'

export default {
    components: {
        'form-login': FormLogin,
        'list-process': ListProcess
    },
    computed: {
        userData(){
            return JSON.parse(localStorage.getItem('dashboard-iso'))
        },
    }
};
</script>