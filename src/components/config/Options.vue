<template>
    <div fluid>
        <v-row>
            <v-col>
                <v-tabs v-model="selected">
                    <v-tab v-for="(tab, key) in options" :key="key">
                        <v-icon left>
                            {{ tab.icon }}
                        </v-icon>
                        {{ tab.text }}
                    </v-tab>
                </v-tabs>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-card-text>
                        <component v-bind:is="customComponent"></component>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
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
            selected: 1,
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