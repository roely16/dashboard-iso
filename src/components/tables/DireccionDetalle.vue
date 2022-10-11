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
    },
};
</script>