<template>
    <v-card class="elevation-0">
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