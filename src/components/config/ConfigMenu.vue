<template>
    <div>
        <v-card :color="item.selected ? '#82B29A' : null" @click="selectMenu(item)" width="100%" class="sidebar mb-2" elevation="0" outlined v-for="(item, key) in options" :key="key">
            <v-card-subtitle class="pl-2 pr-2 pt-3 pb-3">
                <v-icon :dark="item.selected" size="20" left>
                    {{ item.icon }}
                </v-icon>
                <span v-bind:class="[{'white--text': item.selected}, 'font-weight-bold']">
                    {{ item.text }}
                </span>
            </v-card-subtitle>
        </v-card>
    </div>
</template>

<style scoped>
    .sidebar{
        border-radius: 10px;
    }
</style>

<script>

import { mapState, mapMutations } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            selectMenu: 'config_view/selectOption'
        })
    },
    computed: {
        ...mapState({
            options: state => state.config_view.options
        })
    }
}
</script>