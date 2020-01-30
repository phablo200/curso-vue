{
    var a =2;
    let b =2; 
    console.log(b);
}

console.log(a);

// Destructing

const [l, e, ...tras] = 'Cod3r';
console.log(l, e, tras);


const { idade: i, nome } = {nome: 'Phablo', idade: 25};
console.log(i, nome);