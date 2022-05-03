<template>
    <v-app>
        <SideBar />
        <AppBar />
        <v-main>
            <v-container class="pl-4 pr-4 home" fluid>
                <router-view />
                <DialogContainer></DialogContainer>
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
    import DialogContainer from '@/components/dialog/DialogContainer.vue'

    export default {
        name: "App",
        components: {
            AppBar,
            SideBar,
            DialogContainer
        },
    };
</script>
