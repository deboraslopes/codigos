def media_aluno (nota1, nota2):
    media = (nota1 + nota2) / 2
    return media

resultado = media(10, 8)
print (resultado)


def ant_e_suc(num):
    ant = num - 1
    suc = num + 1
    return ant, suc

antecessor, sucessor = ant_e_suc(5)
print(antecessor)
print(sucessor)