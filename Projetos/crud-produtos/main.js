const  produtoRepository = require('./produto_repository');
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

    produtoRepository.deletar(2);
    console.log(produtoRepository.buscarPorId(2));
    console.log(produtoRepository.buscarPorId(3));
}

main();