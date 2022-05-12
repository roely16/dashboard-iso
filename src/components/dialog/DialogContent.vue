<template>
    <v-card-text>
        <v-data-table
            :headers="data.table.headers"
            :items="data.table.items"
            :items-per-page="10"
            class="elevation-0"
            :search="search"
            :hide-default-footer="data.table.items.length == 0 ? true : false"
        ></v-data-table>
    </v-card-text>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            data: state => state.dialog.data,
            search: state => state.dialog.search
        })
    }
};
</script>