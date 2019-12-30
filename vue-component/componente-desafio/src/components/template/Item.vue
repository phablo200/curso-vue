<template>
    <div>
        <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
            <v-list-tile-title>{{ item.titulo }}</v-list-tile-title>
        </v-list-tile-content>
    </div>
</template>

<script>
export default {
    props: ["item"],
    data () {
        return {

        }
    }
}
</script>