// Função em JS é First-Class Object (Citizens)
// Higher-order function


// Criar de forma literal.
// Toda função javascript retorna pelo menos um valor undefined.
function fun1() {}

// Armazenar em uma variável
const fun2 = function () {

}

// Armazenar dentro de um array
const array = [ function (a, b) { return a+b }, fun1, fun2];

console.log(array[0](2, 3));

// Armazenar em um atributo de um objeto.
const obj = {};
obj.falar = function () { return 'opa'; };
console.log(obj.falar());

// Passar uma função como parametro para outra função.
function run (fun)
{
    fun();
}

run(function () { console.log('testando passar função por parametro'); })

// Uma função pode retornar/conter uma função
function soma(a, b)
{
    return function (c) {
        console.log(a+b+c);
    }
}
soma(2,3)(4);

const teste = soma(2,3);
teste(3);


