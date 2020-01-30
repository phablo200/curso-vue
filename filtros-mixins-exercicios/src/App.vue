<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr/>
		<p>{{ obj.riq }}</p>
		<p>{{ obj.rtad }}</p>

		<input type="teste" v-model="inputTeste"/>

		<ul v-if="dadosPrimeiraTabela.length>0">
			<li v-for="d in dadosPrimeiraTabela" :key="d">{{d}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			cpf: 39605915510,
			obj: {
				riq: 'RIQf',
				rtad: 'MASSA'
			},
			data: [],
			inputTeste: ''	
		}
	},

	computed: {
        riq () {
			if (1)
			{
				return `${this.obj.riq}`.toUpperCase();
			}
			return `${this.obj.riq}`;
		},

		raw () {
			if (false)
			{
				return `RAW`;
			}
			return `${this.obj.rtad}`;
		},

		async dadosPrimeiraTabela () {
			await this.data.push('teste');
			return this.data;
		}
	},

	watch: {
		async inputTeste (value) {
			let data=[];
			
		}
	},


	created () {
		this.carregarDados();
		this.data.push('teste1');
		this.data.push('teste2');
		this.data.push('teste3');
	},

	methods: {
		carregarDados () {	
			this.obj.riq = this.riq;
			this.obj.rtad = this.raw;
		}
	}	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
