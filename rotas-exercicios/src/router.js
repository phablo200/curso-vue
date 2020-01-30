import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio.vue';
import Usuario from './components/usuario/Usuario.vue';
import UsuarioLista from './components/usuario/UsuarioLista.vue';
import UsuarioEditar from './components/usuario/UsuarioEditar.vue';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue';
Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio,
        name: 'inicio'
    }, {
        path: '/usuario',
        component: Usuario,
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
});