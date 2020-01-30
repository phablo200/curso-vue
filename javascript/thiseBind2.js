function Pessoa () {
    this.idade = 0;
    /**
     * 
     * Amarrando ao contexto this com bind 
    setInterval(function () {
       this.idade++;
       console.log(this.idade) 
    }.bind(this), 1000)
    */

    // Amarrando com arrow function
    setInterval (() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);

}

new Pessoa;