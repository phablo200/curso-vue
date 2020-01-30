function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase);
        }, segundos * 1000);
    });
}

falarDepoisDe(3, 'Que legal')
    .then(resp => {
        console.log(resp);
        return `${resp} melhor ainda`;
    })
    .then(resp => {
        console.log(resp);
    })