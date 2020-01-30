<template>
    <div class="usuario-detalhe">
        <h3>Detalhar usuário</h3>
        <hr/>
        <p><strong>Código: {{id}}</strong></p>
        <!-- :to="`/usuario/${id}/editar`" -->
        <router-link tag="button" primario :to="{name: 'usuarioEditar', params: {id}, query: {completo: true, lingua: 'pt'}}">
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    props:['id']
}
</script>

<style scoped>

</style>