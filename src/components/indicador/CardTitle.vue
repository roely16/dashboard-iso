<template>
    <v-card-title>
        <v-row align="center">
            <v-col>
                <slot name="title">
                    <h2>
                        <slot name="icon">
                            <v-chip class="mr-2" color="#81B49A" label>
                                <v-icon :size="icon_size" color="#fff">
                                    {{ icon.name }}
                                </v-icon>
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
        color: String,
        title: String,
        icon: Object,
        cols: Number,
    },
    computed:{
        icon_size: function(){

            if (this.cols < 6) {
                
                let result = 24 - (24 * (this.cols / 12))
            
                return result

            }

            return 24
            
        }
    }
};
</script>