<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2">
                <v-tabs v-model="selected" vertical>
                    <v-tab v-for="(tab, key) in options" :key="key">
                        <v-icon left>
                            {{ tab.icon }}
                        </v-icon>
                        {{ tab.text }}
                    </v-tab>
                    <v-tab-item> </v-tab-item>
                </v-tabs>
            </v-col>
            <v-col>
                <v-card flat>
                    <v-card-text>
                        <component v-bind:is="customComponent"></component>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "OptionList",
    data() {
        return {
            options: [
                {
                    text: "Indicadores",
                    icon: "mdi-monitor-dashboard",
                    component: "FreezeOption",
                },
                {
                    text: "Configuración",
                    icon: "mdi-cog",
                    component: "ConfigModule",
                },
            ],
            selected: 0,
        };
    },
    computed: {
        customComponent: function () {
            const AsyncComponent = () => ({
                component: import(
                    "@/components/config/" +
                        this.options[this.selected].component
                ),
            });

            return AsyncComponent;
        },
    },
};
</script>