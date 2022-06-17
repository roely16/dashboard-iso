<template>
    <v-card-text>
        <v-data-table
            :headers="data_component.table.headers"
            :items="data_component.table.items"
            :items-per-page="10"
            class="elevation-0"
            :search="search"
            :hide-default-footer="data_component.table.items.length == 0 ? true : false"
        ></v-data-table>
    </v-card-text>
</template>

<script>

import { mapState } from "vuex";

export default {
    props: {
        data_component: Object
    },
    components: {
    },
    computed: {
        ...mapState({
            search: state => state.dialog.search
        })
    }
}
</script>