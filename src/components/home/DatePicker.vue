<template>
    <v-card
        elevation="0"
        color="#8AB8A1"
        style="height: 100%; border-radius: 15px"
    >
        <v-card-text>
            <v-row align="center">
                <v-col cols="3" class="text-center">
                    <v-btn x-large dark icon>
                        <v-icon> mdi-calendar</v-icon>
                    </v-btn>
                </v-col>
                <v-col>
                    <span class="overline white--text">Fecha: </span>
                    <h2 class="white--text">04/2022</h2>
                </v-col>
                <v-col>
                    <span class="overline white--text">Hora: </span>
                    <h2 class="white--text">{{ time }}</h2>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
            interval: null,
            time: null,
        };
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