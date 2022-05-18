<template>
    <v-card>
        <v-toolbar flat>
            <v-toolbar-title>Configuración</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn @click="setShow(false)" icon>
                <v-icon> mdi-close </v-icon>
            </v-btn>
        </v-toolbar>
        <list-options></list-options>
    </v-card>
</template>

<script>
import Options from "@/components/config/Options.vue";
import { mapMutations } from "vuex";

export default {
    name: "ConfigModule",
    components: {
        "list-options": Options,
    },
    methods: {
        ...mapMutations({
            setShow: "dialog/setShow",
        }),
    },
};
</script>