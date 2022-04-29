<template>
    <div>
        <v-card-text class="mt-4">
            <v-row align="center">
                <v-col cols="4">
                    <chart :data="content.chart"></chart>
                </v-col>
                <v-col class="text-center">
                    <span v-bind:class="[content.style]">
                        {{ content.value }}
                    </span>
                </v-col>
            </v-row>
            <v-row class="pb-2">
                <v-col class="text-center" cols="3">
                    <span class="font-weight-medium"> Total </span>
                    <br />
                    <span class="text-h5 font-weight-black"> 605 </span>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center" cols="3">
                    <span class="font-weight-medium"> Válidas </span>
                    <br />
                    <span class="text-h5 font-weight-black"> 602 </span>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center" cols="3">
                    <span class="font-weight-medium"> SNC </span>
                    <br />
                    <span class="text-h5 font-weight-black"> 3 </span>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="text-center" cols="3">
                    <span class="font-weight-medium"> Rechazadas </span>
                    <br />
                    <span class="text-h5 font-weight-black"> 0 </span>
                </v-col>
            </v-row>
        </v-card-text>
    </div>
</template>

<script>
import CardChart from "@/components/indicador/CardChart.vue";

export default {
    components: {
        chart: CardChart,
    },
    props: {
        content: Object
    },
    data() {
        return {};
    },
};
</script>