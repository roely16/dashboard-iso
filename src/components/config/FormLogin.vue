<template>
    <div>
        <v-row justify="center" align="center">
            <v-col align="center" cols="6">
                <v-row justify="center">
                    <v-col cols="12">
                        <v-avatar rounded size="100">
                            <v-img
                                :src="require('@/assets/img/lock.png')"
                            ></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            prepend-inner-icon="mdi-account"
                            placeholder="Usuario"
                            hide-details
                            filled
                            v-model="user.user"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <v-text-field
                            @click:append="showPassword = !showPassword"
                            :append-icon="
                                showPassword ? 'mdi-eye-off' : 'mdi-eye'
                            "
                            :type="showPassword ? 'text' : 'password'"
                            prepend-inner-icon="mdi-lock"
                            hide-details
                            placeholder="Contraseña"
                            filled
                            v-model="user.password"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="8">
                        <v-btn
                            :disabled="logging || !filledForm"
                            :loading="logging"
                            block
                            color="primary"
                            large
                            @click="doLogin(user)"
                            >Ingresar</v-btn
                        >
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    data() {
        return {
            showPassword: false,
            user: {
                user: null,
                password: null,
            },
        };
    },
    methods: {
        ...mapActions({
            doLogin: "config/doLogin",
        }),
    },
    computed: {
        ...mapState({
            logging: (state) => state.config.logging,
        }),
        filledForm() {
            if (this.user.user && this.user.password) {
                return true;
            }

            return false;
        },
    },
};
</script>