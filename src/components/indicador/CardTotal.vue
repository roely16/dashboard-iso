<template>
    <span v-bind:class="[data.style]">
        {{ data.value }}
    </span>
</template>

<script>
export default {
    props: {
        data: Object
    }
};
</script>