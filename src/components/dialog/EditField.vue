<template>
    <v-container>
        <v-row class="mt-4" justify="center">
            <v-col cols="4">
                <v-text-field filled rounded type="number" v-model="currentValue" :label="placeholder"></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    props: {
        placeholder: String,
        value: [String, Number],
        data: Object
    },
    computed: {
        currentValue: {
            get(){
                return this.value
            },
            set(val){
                
                this.$emit('updateValue', val)

            }
        }
    }
}
</script>