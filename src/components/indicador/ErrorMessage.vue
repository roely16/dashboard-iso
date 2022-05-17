<template>
    <v-card-text class="text-center">
        <v-row justify="center" align="center">
            <v-col cols="8">
                <v-avatar size="100" class="mb-4">
                    <v-img :src="require('@/assets/img/error.png')"></v-img>
                </v-avatar>
                <v-card elevation="0">
                    <v-card-text>
                        <small>
                            {{ message }}
                        </small>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-card-text>
</template>

<script>
export default {
    props: {
        message: String,
    },
};
</script>