<template>
    <v-app>
        <SideBar />
        <AppBar />
        <v-main>
            <v-container class="pl-4 pr-4 home" fluid>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

<style scoped>
    .home{
        background-color: #fff;
    }
</style>

<script>

    import AppBar from '@/components/home/AppBar'
    import SideBar from '@/components/home/SideBar'

    export default {
        name: "App",
        components: {
            AppBar,
            SideBar
        },
        data: () => ({
            //
        }),
    };
</script>
