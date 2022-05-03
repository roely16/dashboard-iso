<template>
    <div>
        <v-row class="pb-2 pt-2">
            <v-col
                v-for="(item, key) in items"
                :key="key"
                class="text-center click"
                cols="3"
                @click="setDetail(item.detail)"
            >
                <v-row>
                    <v-col>
                        <span class="font-weight-medium">
                            {{ item.text }}
                        </span>
                        <br />
                        <span class="text-h5 font-weight-black">
                            {{ item.value }}
                        </span>
                    </v-col>
                    <v-divider v-if="key < (items.length - 1)" vertical></v-divider>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="pb-2" v-if="items.length == 0">
            <v-col> </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.click{
    cursor: pointer;
}
</style>

<script>

import { mapMutations } from 'vuex'

export default {
    props: {
        items: {
            type: Array,
            default() {
                return [];
            },
        },
    },
    methods: {
        ...mapMutations({
            setShow: 'dialog/setShow',
            setData: 'dialog/setData'
        }),
        setDetail(detail){
            this.setData(detail)

            this.setShow(true)
        }
    }
};
</script>
