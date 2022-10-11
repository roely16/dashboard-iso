<template>
    <v-card-text>
        <v-row>
            <v-col cols="7">
                <v-list>
                    <v-list-item
                        v-for="(element, key) in dialog_data.tooltip"
                        :key="key"
                    >
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

                <v-card class="mt-4" outlined>
                    <v-card-subtitle>
                        Cálculo
                    </v-card-subtitle>
                    <v-card-text>
                        <h2>
                            {{ parseFloat(result.enumerator).toFixed(2) }} / {{ dialog_data.tooltip.length }} = {{ result.total }}
                        </h2>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            dialog_data: (state) => state.dialog.data,
        }),
        result: function(){
            
            let total = 0

            this.dialog_data.tooltip.forEach(element => {
                total += parseFloat(element.value)
            });

            const result = {
                enumerator: total,
                total: parseFloat(total / this.dialog_data.tooltip.length).toFixed(1)
            }

            return result

        }
    },
};
</script>