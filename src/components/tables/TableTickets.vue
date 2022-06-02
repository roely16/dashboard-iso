<template>
    <v-card-text>
        <v-data-table
            :headers="data_component.table.headers"
            :items="data_component.table.items"
            :items-per-page="10"
            class="elevation-0"
            :search="search"
            :hide-default-footer="
                data_component.table.items.length == 0 ? true : false
            "
            item-key="id"
        >
            <template v-slot:[`item.estado`]="item">
                <v-chip :color="item.item.fecha_cierre ? 'success' : 'error'" label>
                    {{ item.item.fecha_cierre ? 'Finalizado' : 'Pendiente' }}
                </v-chip>
            </template>

            <template v-slot:[`item.id`]="item">
                <a target="_blank" :href="'http://172.23.25.31/Tickets/admin/admin_ticket.php?track=' + item.item.trackid + '&Refresh=' + item.item.id" link label dense>
                    {{ item.item.id }}
                </a>
            </template>
        </v-data-table>
    </v-card-text>
</template>

<script>

import { mapState } from 'vuex'

export default {
    props: {
        data_component: Object,
    },
    computed: {
        ...mapState({
            search: state => state.dialog.search
        })
    }
};
</script>