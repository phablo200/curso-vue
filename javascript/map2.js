const carrinho =  [
    '{"nome":"Borracha", "preco": "3.45"}',
    '{"nome":"Caderno", "preco": "13.90"}',
    '{"nome":"Kit Lapis", "preco": 4}'
];

const apenasPrecos=carrinho.map((e) => {
    return JSON.parse(e).preco;
})

console.log(apenasPrecos);



