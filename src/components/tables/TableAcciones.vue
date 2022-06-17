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
            <template v-slot:[`item.descripcion`]="item">
                <more-text additional-container-css="padding-left: 0px; padding-bottom: 0px; padding-right: 0px" more-text="Mostrar más" less-text="Mostrar menos" :text="item.item.descripcion"></more-text>
            </template>
        </v-data-table>
    </v-card-text>
</template>

<script>

import vueShowMoreText from 'vue-show-more-text'

import { mapState } from 'vuex'

export default {
    components: {
        'more-text': vueShowMoreText
    },  
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