<template>
    <div>
        <content-card
            :content="data_component.data.content"
        >
            <template #total>
                <v-row>
                    <!-- <v-col cols="6">
                        <h5 style="font-size: 20px">
                            {{ data_component.data.avance.text }}
                        </h5>
                        <span style="font-size: 40px">
                            {{ data_component.data.avance.value }}%
                        </span>
                    </v-col>
                    <v-divider vertical></v-divider> -->
                    <v-col class="cursor" @click="setDetail(data_component.data.eficacia)" cols="12">
                        <!-- <h5 style="font-size: 20px">
                            {{ data_component.data.eficacia.text }}
                        </h5> -->
                        <span :style="total_styles">
                            {{ data_component.data.eficacia.value }}%
                        </span>
                    </v-col>
                </v-row>
            </template>
        </content-card>
        <v-card-actions>
            <bottom_detail :items="data_component.data.bottom_detail"></bottom_detail>
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
    },
    computed:{
        total_styles(){

            return{
                'font-size': (this.clientWidth * 0.20) + 'px'
            }
        }
    },
};
</script>