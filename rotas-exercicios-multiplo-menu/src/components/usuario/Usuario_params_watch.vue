<template>
    <div class="usuario">
        <h2>Usuários {{id}}</h2>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            $route(novo, antigo)
            {
                this.id = novo.params.id
            }
        },
        methods: {
            irParaInicio () {
                //this.$router.push('/');
                // Outra opção
                this.$router.push({path: '/'})
            }
        }
    }
</script>

<style scoped>

</style>