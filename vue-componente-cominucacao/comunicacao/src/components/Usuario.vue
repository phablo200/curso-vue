<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <p>O nome do usuário é <strong>{{nome}}</strong></p>
        <p>Idade é {{idade}}</p>
        <button @click="alterarNome">
            Alterar nome
        </button>
        <hr>
        <div class="componentes">
            <app-usuario-info 
                :nome="nome" 
                :idade="idade"
                @nomeMudou="nome=$event"
                :reiniciarFn="reiniciarNome"
            />
            <app-usuario-editar 
                :idade="idade"
                :alterarFn="alterarIdade"
            />
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from '@/components/UsuarioInfo'
import AppUsuarioEditar from '@/components/UsuarioEditar'
export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data () {
        return {
            nome: 'Pedro',
            idade: 21
        }
    },
    methods: {
        alterarNome () {
            this.nome = 'Ana Mária';
        },
        reiniciarNome () {
            this.nome='Pedro'
        },
        alterarIdade() {
            this.idade = 34;
        }
    }
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
