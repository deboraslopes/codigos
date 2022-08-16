#Crie uma classe de sua preferência com, no mínimo, uma variável, um método e um incremento. Depois, desenvolva três ou mais objetos para testar o código.


class Paciente:
    def __init__(self, nome, idade, sexo, plano):
        self.nome = nome
        self.idade = idade
        self.genero = ["M", "F"]
        if sexo in self.genero:
            self.sexo = sexo
        else:
            raise Exception("Sexo Inválido!")
        self.lista_planos = ["Unimed", "PlusVita", "SUS"]
        if plano in self.lista_planos:
            self.plano = plano
        else:
            print("Plano Inválido")

    def mudar_plano(self, novo_plano):
        if novo_plano in self.lista_planos:
            self.plano = novo_plano
        else:
            print("Plano Inválido")

paciente = Paciente("Carlos","58", "M", "Unimed")
print(paciente.plano)
paciente.mudar_plano("SUS")
print(paciente.plano)
paciente.mudar_plano("sem plano")
print(paciente.plano)
