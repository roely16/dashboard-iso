<template>
    <div>
        <v-card min-height="300" :dark="dark" class="card" elevation="0" :color="color">
            <slot name="title">
                <card-title :dark="dark" :title="title_data.name" :icon="title_data.icon"></card-title>
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
        dark: Boolean,
    }
};
</script>