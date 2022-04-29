<template>
    <div>
        <v-row>
            <v-col cols="9">
                <user-avatar></user-avatar>
            </v-col>
            <v-col>
                <date-picker></date-picker>
            </v-col>
        </v-row>
    </div>
</template>

<script>

import UserAvatar from '@/components/home/UserAvatar'
import DatePicker from '@/components/home/DatePicker'

export default {
    components: {
        'user-avatar': UserAvatar,
        'date-picker': DatePicker
    }
}
</script>