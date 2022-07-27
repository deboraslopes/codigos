# 4. Faça uma função que peça ao usuário um numero inteiro e escreva uma função para saber se ele é PAR ou IMPAR.

def ParImpar(n):
    resto = n % 2
    if resto == 0:
        return ('Número PAR')
    else:
        return ('Número ÍMPAR')

n = int(input('Informe um valor inteiro: '))
print(ParImpar(n))