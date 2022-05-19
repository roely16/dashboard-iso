<template>
    <v-card-text>
        <v-expansion-panels flat>
            <v-expansion-panel v-for="(item, key) in data_component" :key="key">
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
    </v-card-text>
</template>

<style scoped>
.v-expansion-panel-content >>> .v-expansion-panel-content__wrap {
    padding: 0 !important;
}
</style>

<script>
import CustomCumponent from "@/components/custom/CustomComponent.vue";

export default {
    props: {
        data_component: Array,
    },
    components: {
        "custom-component": CustomCumponent,
    },
};
</script>