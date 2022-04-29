<template>
    <div>
        <v-card :dark="dark" class="card" elevation="0" :color="color" min-height="100">
            <slot name="title">
                <card-title :title="title_data.name" :icon="title_data.icon"></card-title>
            </slot>
            <slot name="content"></slot>
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

export default {
    name: "info-card",
    components: {
        'card-title': CardTitle
    },
    props: {
        title_data: Object,
        color: String,
        dark: Boolean
    },
};
</script>