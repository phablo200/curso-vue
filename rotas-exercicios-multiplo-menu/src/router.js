import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './components/Inicio.vue';
import Usuario from './components/usuario/Usuario.vue';
import UsuarioLista from './components/usuario/UsuarioLista.vue';
import UsuarioEditar from './components/usuario/UsuarioEditar.vue';
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue';
import Menu from './components/template/Menu.vue';
import MenuAlt from './components/template/MenuAlt.vue';

Vue.use(Router);
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'inicio',
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista, name: 'usuarioListar'},
            { path: ':id', component: UsuarioDetalhe, props: true, name: 'usuarioDetalhe'},
            { path: ':id/editar', component: UsuarioEditar, props: true, name:'usuarioEditar'}
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
});