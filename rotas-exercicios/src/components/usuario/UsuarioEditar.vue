<template>
    <div class="usuario-editar">
        <h3>Editar usuário</h3>
        <hr/>
        <p><strong>Código: {{id}}</strong></p>
        <p><strong>Completo: </strong>{{$route.query.completo ? 'Sim' : 'Não'}}</p>
        <p><strong>Lingua</strong> {{$route.query.lingua}} </p>
    </div>
</template>

<script>
export default {
   props: ['id'] 
}
</script>

<style scoped>

</style>