<template>
	<v-app>
		<Menu />
		<app-tollbar/>
		<app-carousel/>
		<app-footer />
	</v-app>
</template>
<script>
import Footer from './components/template/Footer.vue';
import Menu from './components/template/Menu.vue';
import ToolBar from './components/template/Toolbar.vue';
import Caroulsel from './components/widgets/Caroulsel.vue';

/*
	Tipos de nomeclatura
*/
export default {
	components: {
		appFooter: Footer,
		Menu,
		'app-tollbar': ToolBar,
		'app-carousel': Caroulsel
	}
}
</script>
