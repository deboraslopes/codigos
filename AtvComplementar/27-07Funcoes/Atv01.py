# Faça um programa, com uma função que necessite de um argumento. A função retorna o valor de caractere ‘P’, se seu argumento for positivo, e ‘N’, se seu argumento for zero ou negativo.

def pn(n):
    if n > 0:
        return 'P'
    elif n == 0:
        return'Nulo'
    else:
        return 'N'

n = int(input('Digite um número positivo ou negativo: '))
print('Retorno P - Positivo ou N - Negativo')
pn(n)