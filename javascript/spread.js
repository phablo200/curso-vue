// usar spread com objeto, e usar rest com o parametro de função

const funcionario = {nome: 'Maria', salario: 12348.99};
const clone = {ativo: true, ...funcionario};
console.log(clone);

// usar spread com array

const groupA = ['João', 'Pedro', 'Gloria'];
const groupFinal = ['Maria', ...groupA];
console.log(groupFinal);
