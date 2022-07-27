# 7. Considere para os itens abaixo como entrada uma lista de valores reais contendo notas de 0.0 a 10.0. Faça uma função que:
#   1) Devolve a média.
#   2) Devolve a quantidade de notas abaixo de 6.0.
#   3) Devolve a quantidade de notas acima e igual a 6.0.
#   4) Devolve a quantidade de notas acima e igual a média.
#   5) Devolve a maior nota.
#   6) Devolve a menor nota.

listaNotas = []
print('\nPara parar digite -1!')
nota = float(input('Digite a nota: '))
while (nota != -1):
    listaNotas.append(nota)
    nota = float(input('Digite a nota: '))

media = sum(listaNotas)/len(listaNotas)
print('\n(1) Média das notas  = {:.2f} '.format(media))

acima = 0
abaixo = 0
for notaSeis in listaNotas:
    if notaSeis < media:
        abaixo += 1
    elif notaSeis >= media:
        acima += 1
print('(2) Quantidade de notas abaixo de 6.0 =  ', abaixo)
print('(3) Quantidade de notas acima e igual a 6.0 =  ', acima)

acima_med = 0
for valor_media in listaNotas:
    if valor_media >= media:
        acima_med += 1
print('(4) Quantidade de notas acima e igual a média =  ', acima_med)

maiorNota = max(listaNotas)
menorNota = min(listaNotas)
print('(5) Maior nota =  ', maiorNota)
print('(6) Menor nota =  ', menorNota)


