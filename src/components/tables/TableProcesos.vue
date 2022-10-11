<template>
    <v-card-text>
        <v-tabs class="mb-4 ml-4" v-model="tab">
            <v-tab>Resumen</v-tab>
            <v-tab>Detalle</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
            <v-tab-item>
                <v-row>
                    <v-col cols="7">
                        <v-list>
                            <v-list-item v-for="(element, key) in dialog_data.tooltip" :key="key">
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ element.title }}
                                    </v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-chip label>
                                        {{ element.value }}
                                    </v-chip>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-col>
                    <v-col align="center">
                        <v-divider vertical></v-divider>
                    </v-col>
                    <v-col cols="4">
                        <v-card class="text-center pt-4" outlined>
                            <span class="text-h1 text-center">
                                {{ dialog_data.value }}
                            </span>
                            <v-card-subtitle>
                                {{ dialog_data.text }}
                            </v-card-subtitle>
                        </v-card>
                    </v-col>
                </v-row>
            </v-tab-item>
            <v-tab-item>
                <v-expansion-panels flat>
                    <v-expansion-panel
                        v-for="(item, key) in data_component"
                        :key="key"
                    >
                        <v-expansion-panel-header>
                            {{ item.descripcion }}
                        </v-expansion-panel-header>
                        <v-expansion-panel-content class="pl-0 ml-0">
                            <custom-component
                                :data_component="item.bottom_detail"
                                :name="item.component"
                            ></custom-component>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-tab-item>
        </v-tabs-items>
    </v-card-text>
</template>

<style scoped>
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
    padding: 0 !important;
}
</style>

<script>

import CustomCumponent from "@/components/custom/CustomComponent.vue";

import { mapState } from "vuex";

export default {
    props: {
        data_component: Array,
    },
    components: {
        "custom-component": CustomCumponent,
    },
    data() {
        return {
            tab: 0,
        };
    },
    computed: {
        ...mapState({
            dialog_data: state => state.dialog.data
        })
    }
};
</script>