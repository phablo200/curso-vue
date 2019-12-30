<template>  
    <v-navigation-drawer app>
        <v-toolbar flat>
            <v-list>
                <v-list-tile>
                    <v-list-tile-title class="title">
                        Menu
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-toolbar>

        <v-divider></v-divider>

        <v-list dense class="pt-0">
            <v-list-tile v-for="item in itensMenu" :key="item.titulo">
                <Item :item="item" />    
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
import Item from './Item.vue';
export default {
    components: {
        Item
    },
    data () {
        return {
            itensMenu: [
				{titulo: 'Início', icon: 'dashboard'},
				{titulo: 'Sobre', icon: 'question_answer'}
			]
        }
    }
}
</script>