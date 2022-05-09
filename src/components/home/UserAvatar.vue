<template>
    <div>
        <v-row v-if="header" align="center">
            <v-col cols="auto">
                <v-avatar class="mr-4" size="80">
                    <v-img :src="avatar_url"> </v-img>
                </v-avatar>
            </v-col>
            <v-col>
                <h2 class="grey--text text--darken-1">
                    {{ header.area.descripcion }}
                </h2>
                <span class="grey--text text--darken-1 overline">
                    {{ header.jefe.nombre }} {{ header.jefe.apellido }}
                </span>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            header: (state) => state.dashboard.header,
            loading: (state) => state.dashboard.loading,
        }),
        avatar_url: function () {
            if (this.header.jefe) {
                return process.env.VUE_APP_AVATAR_URL + this.header.jefe.avatar;
            }

            return null;
        },
    },
};
</script>