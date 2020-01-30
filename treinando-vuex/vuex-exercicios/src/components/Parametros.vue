<template>
    <Painel titulo="Parâmetros" vermelho>
        <div class="parametros">
            <span>
                <strong>Quantidade Padrão: </strong> 
                <input type="number" v-model="quantidade">
            </span>
            <span>
                <strong>Preço Padrão: </strong>
                <input type="number" v-model="preco">
            </span>
        </div>
    </Painel>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
    computed: {
        ...mapMutations (['setQuantidade', 'setPreco']),
        quantidade: {
            set (valor) {
                this.setQuantidade(valor);
            },
            get () {
                return this.$store.state.parametros.quantidade;
            }
        },

        preco: {
            set (valor) {
                this.setPreco(valor);
            },
            get () {
                return this.$store.state.parametros.preco;
            }
        }
    }
}
</script>

<style>
    .parametros {
        display: flex;
        justify-content: space-around;
    }
</style>
