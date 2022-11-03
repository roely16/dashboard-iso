<template>
    <v-chip :color="color" dark label x-large>
        {{ value }}
    </v-chip>
</template>

<script>
export default {
    name: "IndividualOperator",
    props: {
        value: [String, Number],
        color: String,
    },
};
</script>