<template>
    <div>
        <v-card :dark="dark" class="card" elevation="0" :color="color">
            <slot name="title">
                <card-title :dark="dark" :title="title_data.name" :icon="title_data.icon"></card-title>
            </slot>
            <slot name="content"></slot>
            <v-card-actions>
                <bottom :indicador="indicador" :items="indicador.bottom_detail"></bottom>
            </v-card-actions>
        </v-card>
    </div>
</template>

<style scoped>
.card {
    border-radius: 15px;
}
.icon-container {
    background-color: red;
}
</style>

<script>

import CardTitle from '@/components/indicador/CardTitle.vue'
import CardBottomDetail from "@/components/indicador/CardBottomDetail";

export default {
    name: "info-card",
    components: {
        'card-title': CardTitle,
        bottom: CardBottomDetail,
    },
    props: {
        title_data: Object,
        color: String,
        dark: Boolean,
        indicador: Object
    }
};
</script>