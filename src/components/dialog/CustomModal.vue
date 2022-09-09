<template>
    <div>
        <v-dialog v-model="show" :width="width ? width : '500'">
            <v-card>
                <v-card-title class="text-h5 grey lighten-2">
                    {{ title }}
                </v-card-title>

                <slot name="content">

                </slot>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        width: String
    },
    data() {
        return {
            show: false,
        };
    },
    methods: {
        activeDialog(payload){

            this.show = payload

        }
    }
};
</script>