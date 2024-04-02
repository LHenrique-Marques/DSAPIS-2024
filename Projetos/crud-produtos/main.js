const  produtoRepository = require('./produto_repository');
let idGerador = 2;
function main() {
    console.log(produtoRepository.listar());
    produtoRepository.inserir({ 
        nome: "Feijao", 
        categoria: "alimento", 
        preco: 8.00 
    });

    produtoRepository.inserir({ 
        nome: "Suco de laranja", 
        categoria: "bebida", 
        preco: 9.20 
    });

    console.log(produtoRepository.buscarPorId(5));
    console.log(produtoRepository.buscarPorId(2));
}

main();