<template>
     <v-row ref="card_content" justify="center" class="content">
        <v-col style="cursor: pointer" @click="show_detail()">
            <v-card-text>
                <slot name="content">
                    <v-row align="center" justify="center">
                        <v-col cols="12" lg="3">
                            <slot name="chart">
                                <chart :data="data_component.content.chart"></chart>
                            </slot>
                        </v-col>
                        <v-col cols="12" lg="9" class="text-center" :style="total_styles">
                            <slot name="total">
                                <total :content="data_component.content" :data="data_component.content.total"></total>
                            </slot>
                        </v-col>
                    </v-row>
                </slot>
            </v-card-text>
        </v-col>
    </v-row>
</template>

<script>

import CardChart from "@/components/indicador/CardChart";
import CardTotal from "@/components/indicador/CardTotal";

import { mapMutations } from 'vuex'

export default {
    props: {
        data_component: Object
    },  
    components: {
        'chart': CardChart,
        'total': CardTotal
    },
    data(){
        return{
            clientWidth: 0
        }
    },
    methods: {
        ...mapMutations({
            setShow: 'dialog/setShow',
            setData: 'dialog/setData'
        }),
        handleResize () {
            if (this.$refs.card_content) {
                this.clientWidth = this.$refs.card_content.clientWidth

            }
        },
        show_detail(){
            
            console.log(this.data_component)

            this.setData(this.data_component.custom_data)

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
    mounted(){

        this.handleResize()
        window.addEventListener('resize', this.handleResize)

    }
}
</script>