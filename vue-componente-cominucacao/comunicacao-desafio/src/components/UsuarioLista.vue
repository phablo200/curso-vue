<template>
    <div class="usuario-lista">
        <table>
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Nome</th>
                    <th>idade</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                    @click.prevent="setUser(usuario)"
                    v-for="usuario in usuarios" 
                    :key="usuario.id">
                    <td>{{ usuario.id }}</td>
                    <td>{{ usuario.nome }}</td>
                    <td>{{ usuario.idade }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import barramento from '@/barramento';
export default {
    props: { usuarios: Array },
    methods: {
        setUser(usuario)
        {
            barramento.setUser(usuario);
        }
    }
}
</script>

<style scoped>
    .usuario-lista {
        flex: 1;
        display: flex;
    }

    table {
        flex: 1;
        border-spacing: 0px;
        border-collapse: separate;
        border-top: 1px solid #CCC;
    }


    th, td {
        padding: 15px;
        border-bottom: 1px solid #CCC;
    }

    tbody tr:hover {
        background: rgba(0, 0, 0, 0.1);
    }
</style>
