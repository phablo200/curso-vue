<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do usuário: {{idade}}</p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (CallBack)</button>
    </div>
</template>
<script>
import barramento from '@/barramento';

export default {
    props:{
        nome: {
            type: String,
            required: true   
        },
        reiniciarFn: Function,
        idade: Number
    },

    data () {
        return {

        }
    },

    created () {
        barramento.quandoIdadeMudar(idade => {
            this.idade = idade
        });
    },
    methods: {
        inverterNome() {
            return this.nome.toString().split('').reverse().join('');
        },

        reiniciarNome(){
            /*
                Neste caso o $event terá contido o valor de nome 
                this.nome='Pedro';
                this.$emit('nomeMudou', this.nome);
            */
            // Outra forma, assim você pegará o valor com $event.nome
            /** 
            const antigo = this.nome
            this.nome = 'Pedro';
            this.$emit('nomeMudou', {
                novo: this.nome,
                antigo
            });
            */
            this.$emit('nomeMudou', 'Pedro');
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
