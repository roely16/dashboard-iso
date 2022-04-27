<template>
    <v-app>
        <SideBar />
        <AppBar />
        <v-main>
            <v-container>
                <router-view />
            </v-container>
        </v-main>
    </v-app>
</template>

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
