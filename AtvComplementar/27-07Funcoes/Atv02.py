# 2. Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado.

def contaDigito(n):
    return len(str(n))

def exibe():
    n = int(input('Forneça um inteiro: '))
    print(contaDigito(n), 'dígitos')
    
while True:
    exibe()