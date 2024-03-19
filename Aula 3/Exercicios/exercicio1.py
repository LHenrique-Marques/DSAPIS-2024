#Exercicio Feito em Python
class Produto():
    def __init__(self,nome,categoria,id):
        self.nome = nome
        self.id = id
        self.categoria = categoria

    def __str__(self):
        return f"""
        Nome:{self.nome} 
        ID:{self.id}"""

    def get_id(self):
        return self.id
    
    def get_categoria(self):
        return self.categoria

    def set_nome(self,novo_nome):
        self.nome = novo_nome

class listas():
    def __init__(self):
        self.itens = []
        self.contador = 1

    def adiciona_item(self,nome_produto,categoria):
        self.itens.append(Produto(nome_produto,categoria,self.contador))
        self.contador = self.contador + 1
    
    def deleta_iten(self,id_buscada):
        for iten in self.itens:
            if iten.get_id() == id_buscada:
                removido = iten.get_id() - 1
                del(self.itens[removido])

    
    def mostra_itens(self):
        for iten in self.itens:
            print(iten)
    
    def procura_id(self,id_buscada):
        for iten in self.itens:
            if iten.get_id() == id_buscada:
                print(iten)
    
    def pesquisa_categoria(self,categoria):
        categorias = []
        for iten in self.itens:
            if iten.get_categoria() == categoria:
                categorias.append(iten)

        print("Produtos:")
        for categoria in categorias:
            print(f"""{categoria},""")
    
    def muda_nome(self,id_buscada,novo_nome):
        for iten in self.itens:
            if iten.get_id() == id_buscada:
                iten.set_nome(novo_nome)


lista1 = listas()
lista1.adiciona_item("Refrigerante","Bebidas")
lista1.adiciona_item("Pizza","Lanches")
lista1.adiciona_item("Chopp","Bebidas")