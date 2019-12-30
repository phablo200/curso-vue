<template>
    <div class='contador'>
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>    
        <hr>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            contador: 0
        }
    },

    methods: {
        adicionar () {
            this.contador++
        },

        subtrair() {
            this.contador--
        } 
    }
}
</script>

<style scoped>

    span {
        height: 30px;
        padding: 5px 25px;
        cursor: pointer;
    }

    button {
        height: 30x;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: white;
        outline: none;
        margin-left: 10px;
        border: none;
    }
</style>