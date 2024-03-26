
let listaProdutos = [
    {
        id:1,
        nome: "Feijão",
        categoria: "Alimento",
        preco: 5.80
    },
    {
        id: 2,
        nome: "Leite",
        categoria: "Bebida",
        preco: 3.45
    }
];
function listar (){
    return listaProdutos;
}

function main(){
    console.log(listar());
}
