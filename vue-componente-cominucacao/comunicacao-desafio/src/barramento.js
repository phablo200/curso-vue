import Vue from 'vue';
export default new Vue({
    methods: {
        setUser(user)
        {
            this.$emit('usuarioSelecionado', user);
        },

        getUser(callback)
        {
            this.$on('usuarioSelecionado', callback);
        }
    }
});