class Produto{
    constructor(nome,categoria,id){
        this.nome = nome;
        this.categoria = categoria;
        this.id = id;
    }
    get id(){
        return this.id;
    }

}

let pessoa1 = new Produto('Arroz','Comidas',1);

console.log(pessoa1);