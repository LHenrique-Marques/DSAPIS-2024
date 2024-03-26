console.log("Hello World");

//const - criar constantes e let - variáveis
const PI = 3.1415;
let minhaVariavel = 20;


let x = ++minhaVariavel;

console.log(minhaVariavel, x);

let y = (x==20) ?20 :10;

console.log(y);

let nome = "Fulano";
let categoria;


if(categoria){
console.log(nome);
}
else{
    console.log("Categoria não está definido!")
}

//Tipos de dados básicos: string, number, booolean. Object, array -> json; function

let produto = {id:1, nome:"Produto 1"};

produto.categoria = "alimento";

produto.preco = 30;

produto.imprimir = function(){
    console.log(produto);
}

//console.log(produto);


function imprimir(produto){
    console.log(produto);
}

imprimir (produto);


function soma(val1, val2){
    return val1+val2
}

console.log(soma(1, 2))


const carro = new Object();
carro.nome = "Gol";
carro.marca = "VW";
console.log(carro);

class Carro{
    constructor(nome, marca){
        this.nome = nome;
        this.marca = marca;
    }
    imprimir(){
        console.log(this);
    }
}

let carro1 = new Carro("Uno", "Fiat");
carro1.imprimir();