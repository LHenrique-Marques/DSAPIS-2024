#Exercicio Feito em Python
class Produto():
    def __init__(self,nome,categoria,id):
        self.nome = nome
        self.id = id
        self.categoria = categoria

    def __str__(self):
        return f"""
        ID:{self.id}
        Nome:{self.nome} 
        Categoria:{self.nome}
        """

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
                return iten
    
    def pesquisa_categoria(self,categoria):
        categorias = []
        for iten in self.itens:
            if iten.get_categoria() == categoria:
                categorias.append(iten)

        for categoria in categorias:
            print(f"""{categoria}""")
        
        if len(categorias) == 0:
            print("Categoria Vazia..")
    
    def muda_nome(self,id_buscada,novo_nome):
        for iten in self.itens:
            if iten.get_id() == id_buscada:
                iten.set_nome(novo_nome)


def menu():
    return("""
    -----------------------MENU-----------------------
    0 - Fecha o Programa
    1 - Adiciona Item
    2 - Remove Item
    3 - Mostra Lista
    4 - Pesquisa por ID
    5 - Pesquisar por Categoria
    6 - Mudar nome do produto
    """)
def inicializa():
    lista1 = listas()
    lista1.adiciona_item("Refrigerante","Bebidas")
    lista1.adiciona_item("Pizza","Lanches")
    lista1.adiciona_item("Chopp","Bebidas")
    lista1.adiciona_item("Hamburguer","Lanches")
    while True:
        print(menu())
        try:
            escolha = int(input("Escolha: "))
            
            if escolha == 0:
                break
            
            if escolha == 1:
                lista1.adiciona_item(input("Digite o nome do novo produto: "),input("Digite a Categoria do novo produto: "))
            
            if escolha == 2:
                lista1.mostra_itens()
                try:
                    lista1.deleta_iten(int(input("Digite a ID do produto que deseja Remover: ")))
                except:
                    print("ID invalido.... tente novamente.")

            if escolha == 3:
                lista1.mostra_itens()
            
            if escolha == 4:
                try:
                    p = lista1.procura_id(int(input("Digite a ID do produto que você procura: ")))
                    if p == None:
                        print("ID não encontrada...")
                except:
                    print("Ops... Não encontrei esta ID, tente novamente.")
            
            if escolha == 5:
                lista1.pesquisa_categoria(input("Digite o nome da Categoria que você deseja buscar: "))
        except:
            print("Opção invalida... Tente novamente...")


inicializa()
