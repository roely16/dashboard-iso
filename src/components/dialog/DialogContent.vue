<template>
    <v-data-table
        :headers="headers"
        :items="items"
        :items-per-page="10"
        class="elevation-0"
        :search="search"
        :hide-default-footer="items.length == 0 ? true : false"
    ></v-data-table>
</template>

<script>

import { mapState } from 'vuex'

export default {
    props:{
        items: Array,
        headers: Array
    },
    computed: {
        ...mapState({
            data: state => state.dialog.data,
            search: state => state.dialog.search
        })
    }
};
</script>