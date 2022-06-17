<template>
    <div>
        <content-card
            :content="data_component.content"
        >
            <template #total>
                <v-row>
                    <v-col cols="6">
                        <h5 style="font-size: 20px">
                            {{ data_component.avance.text }}
                        </h5>
                        <span style="font-size: 40px">
                            {{ data_component.avance.value }}%
                        </span>
                    </v-col>
                    <v-divider vertical></v-divider>
                    <v-col class="cursor" @click="setDetail(data_component.eficacia)" cols="6">
                        <h5 style="font-size: 20px">
                            {{ data_component.eficacia.text }}
                        </h5>
                        <span style="font-size: 40px">
                            {{ data_component.eficacia.value }}%
                        </span>
                    </v-col>
                </v-row>
            </template>
        </content-card>
        <v-card-actions>
            <bottom_detail :items="data_component.bottom_detail"></bottom_detail>
        </v-card-actions>
    </div>
</template>

<style scoped>
    .cursor{
        cursor: pointer;
    }
</style>

<script>

import { mapMutations } from 'vuex';

import ContentCard from "@/components/general/ContentCard";
import CardBottomDetail from '@/components/indicador/CardBottomDetail'

export default {
    props: {
        data_component: Object,
    },
    components: {
        "content-card": ContentCard,
        bottom_detail: CardBottomDetail
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