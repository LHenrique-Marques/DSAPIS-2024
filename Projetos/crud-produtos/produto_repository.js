let idGerador = 2;
let listaProdutos = [
    {
        nome: "arroz",
        categoria: "alimento",
        preco: 5.80,
        id: 1
    },
    {
        nome: "leite",
        categoria: "bebida",
        preco: 4.25,
        id: 2
    }
];

function listar() {
    return listaProdutos;
}

function inserir(produto) {
    produto.id = ++idGerador;
    listaProdutos.push(produto);
}

function buscarPorId(id) {
    for(let produto of listaProdutos) {
        if(produto.id === id){
            return produto;
        }
    }
}

function deletar(id){
    for(let indice in listaProdutos){
        if(listaProdutos[indice].id === id){
            listaProdutos.splice(indice,1)
        }
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    deletar
}