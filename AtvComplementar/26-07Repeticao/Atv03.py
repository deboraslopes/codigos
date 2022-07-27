# 3. Faça um programa que leia 5 números e informe a soma e a média dos números.

soma=0
media=0
for rodada in range(0, 5):
    valor = int(input('Digite: '))
    soma = soma + valor

media = soma/5
print('\nA soma dos valores é: ',soma)
print('A média é: ',media)