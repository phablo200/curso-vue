<template>
    <div class="contadores">
        <h1>Contadores</h1>
        <app-contador></app-contador>
        <app-contador></app-contador>
        <app-contador></app-contador>
        <app-contador></app-contador> 
        <button>Teste</button>
    </div>    
</template>

<script>
    import Contador from './Contador.vue';
    export default {
        components : {
            'app-contador': Contador
        },
        data () {
            return {

            }
        }
    }
</script>

<style>

</style>