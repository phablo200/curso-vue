export default {
    state: {
        quantidade: 2,
        preco: 10
    },
    mutations: {
        setQuantidade (state, valor) {
            state.quantidade=valor;
        },

        setPreco (state, valor) {
            state.preco=valor;
        }
    }
};
