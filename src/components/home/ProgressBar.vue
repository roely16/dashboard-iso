<template>
    <v-progress-linear
        :indeterminate="loading"
        :color="loading ? 'success' : 'grey lighten-3'"
        class="mb-4 mt-4"
    ></v-progress-linear>
</template>

<script>

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            loading: state => state.dashboard.loading,
        })
    }
}
</script>