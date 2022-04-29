<template>
    <v-navigation-drawer color="#F8F9FC" v-model="drawer" floating class="sidebar" app>
        <v-row class="text-center">
            <v-col>
                <v-avatar size="150">
                    <v-img contain :src="require('@/assets/img/DCAI_ISO.png')">
                    </v-img>
                </v-avatar>
            </v-col>
        </v-row>

        <v-row>
            <v-expansion-panels flat>
                <v-expansion-panel v-for="(section, key) in menu" :key="key">
                    <v-expansion-panel-header color="#F8F9FC">
                        <span class="overline font-weight-light">
                            {{ section.name }}
                        </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content color="#F8F9FC" class="pl-5 pr-5">
                        <v-card
                            style="border-radius: 10px"
                            :to="{ name: item.to }"
                            class="mb-2"
                            elevation="0"
                            :color="'#82B29A'"
                            width="100%"
                            cols="12"
                            v-for="(item, key) in section.items"
                            :key="key"
                        >
                            <v-card-subtitle class="pl-2 pr-2 pt-3 pb-3">
                                <span class="white--text font-weight-bold">
                                    {{ item.name }}
                                </span>
                            </v-card-subtitle>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-row>

        <template v-slot:append>
            <div class="text-center pb-5">
                <v-btn large text>
                    <v-icon> mdi-cog </v-icon>
                </v-btn>
                <v-btn large text>
                    <v-icon> mdi-logout </v-icon>
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>
</template>


<script>

import { mapState, mapMutations } from 'vuex'

export default {
    name: "SideBar",
    data() {
        return {
        };
    },
    methods: {
        ...mapMutations({
            setDrawer: 'menu/setDrawer'
        })
    },
    computed: {
        ...mapState({
            menu: state => state.menu.menu,
        }),
        drawer: {
            set(val){
                this.setDrawer(val)
            },
            get(){

                return this.$store.state.menu.drawer
            }
        }
    }
};
</script>