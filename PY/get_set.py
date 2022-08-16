# Crie uma classe e insira nela, no mínimo, dois atributos, os quais devem ter um método acessor (get) e um método modificador (set) para cada. Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.

class Produto:
    def __init__(self, nome, preco):
        self.nome = nome
        self.preco = preco

    def desconto(self, percentual):
        self.preco = self.preco - (self.preco * (percentual / 100))
    
    #SET NOME
    @property
    def nome(self):
        return self._nome

    #GET NOME - APENAS PRIMEIRA MAIUSCULA
    @nome.setter
    def nome(self, valor):
        self._nome = valor.title()

    #GET PREÇO
    @property
    def preco(self):
        return self._preco

    #SET PREÇO - RETIRA R$ DO PREÇO
    @preco.setter
    def preco(self, valor):
        if isinstance(valor, str):
            valor = float(valor.replace('R$', ''))
        self._preco = valor

p1 = Produto('CAMISA', 56)
p1.desconto(15)
print(p1.nome, p1.preco)

p2 = Produto('CANECA', 'R$25')
p2.desconto(10)
print(p2.nome, p2.preco)