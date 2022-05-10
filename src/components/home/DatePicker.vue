<template>
    <v-card
        elevation="0"
        color="#8AB8A1"
        style="height: 100%; border-radius: 15px"
    >
        <v-card-text>
            <v-row align="center">
                <v-col cols="3" class="text-center">
                    <dialog-date-picker></dialog-date-picker>
                </v-col>
                <v-col class="date-title">
                    <span class="white--text">Fecha: </span>
                    <br>
                    <span class="white--text font-weight-bold">
                        {{ date }}
                    </span>
                </v-col>
                <v-col class="date-title">
                    <span class="white--text">Hora: </span>
                    <br>
                    <span class="white--text font-weight-bold">{{ time }}</span>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<style scoped>
    .date-title{
        font-size: 1vw;
    }
</style>

<script>
import DialogDatePickerVue from './DialogDatePicker.vue'

import { mapState } from 'vuex'

export default {
    components: {
        'dialog-date-picker': DialogDatePickerVue
    },
    data() {
        return {
            interval: null,
            time: '00:00:00',
        };
    },
    computed: {
        ...mapState({
            date: state => state.dashboard.date
        })
    },
    created() {
        this.interval = setInterval(() => {
            this.time = Intl.DateTimeFormat(navigator.language, {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false
            }).format();
        }, 1000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
};
</script>