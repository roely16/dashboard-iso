<template>
    <v-row justify="end" align="end" class="pb-2 pt-2">
        <v-col
            v-for="(item, key) in items"
            :key="key"
            class="text-center click mt-2 mb-2"
            @click="setDetail(item)"
        >
            <v-row>
                <v-col cols="12 pb-0 pt-0 title-bottom">
                    <span class="font-weight-medium ">
                        {{ item.text }}
                    </span>
                </v-col>
                <v-col cols="12 pt-0 pb-0 total-bottom mt-2">
                    <span class="font-weight-black ">
                        {{ item.value }}
                    </span>
                </v-col>
                <v-divider v-if="key < (items.length - 1)" vertical></v-divider>
            </v-row>
        </v-col>
    </v-row>
</template>

<style scoped>
.click{
    cursor: pointer;
}
.title-bottom{
    font-size: 0.70vw;
}
.total-bottom{
    font-size: 2vw;
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
