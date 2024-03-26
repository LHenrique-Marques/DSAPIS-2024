class Produto{
    constructor(nome,categoria,id){
        this.nome = nome;
        this.categoria = categoria;
        this.id = id;
    }
    get_id(){
        return this.id;
    }

}

let pessoa1 = new Produto('Arroz','Comidas',1);

console.log(pessoa1.get_id());
console.log(pessoa1);