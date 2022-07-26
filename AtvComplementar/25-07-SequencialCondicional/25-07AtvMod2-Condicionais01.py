# 1. Faça um Programa que peça dois números e imprima o maior deles

num1 = int(input('Primeiro número \n'))

num2 = int(input('Segundo número \n'))

if num1>num2:
    print('O primeiro número digitado -->>{}<<-- é o maior!' .format(num1))
elif num1 == num2:
    print('Números iguais!')
else:
    print('O segundo número digitado -->>{}<<-- é o maior!' .format(num2))