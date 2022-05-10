<template>
    <v-card-title>
        <v-row align="center">
            <v-col>
                <slot name="title">
                    <h2>
                        <slot name="icon">
                            <v-chip
                                v-if="icon.name"
                                class="mr-2"
                                :color="
                                    icon.container
                                        ? icon.container
                                        : '#66000000'
                                "
                                style="height: 40px; border-radius: 10px"
                            >
                                <template v-slot:default>
                                    <v-icon
                                        :size="icon_size"
                                        :color="
                                            icon.color
                                                ? icon.color
                                                : dark
                                                ? '#fff'
                                                : '#000'
                                        "
                                    >
                                        {{ icon.name }}
                                    </v-icon>
                                </template>
                            </v-chip>
                        </slot>
                        {{ title }}
                    </h2>
                </slot>
            </v-col>
            <v-col cols="2" class="text-right">
                <slot name="action">
                    <v-btn icon>
                        <v-icon> mdi-dots-horizontal </v-icon>
                    </v-btn>
                </slot>
            </v-col>
        </v-row>
    </v-card-title>
</template>

<script>
export default {
    props: {
        dark: Boolean,
        title: String,
        icon: {
            type: Object,
            default() {
                return {
                    color: "#fff",
                    container: "#66000000",
                    size: 24,
                };
            },
        },
        cols: Number,
    },
    computed: {
        icon_size: function () {
            if (this.cols < 6) {
                let result = 24 - 24 * (this.cols / 12);

                return result;
            }

            return 24;
        },
    },
};
</script>