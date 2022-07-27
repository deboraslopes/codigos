# 5. Faça uma função que recebe um valor inteiro e verifica se o valor é positivo ou negativo.

def Verifica(n):
    if n < 0:
        return ('Número NEGATIVO')
    elif n == 0:
        return ('Valor digitado foi zero!')
    else:
        return ('Número POSITIVO')

n = int(input('Informe um valor inteiro positivo ou negativo: '))
print(Verifica(n))