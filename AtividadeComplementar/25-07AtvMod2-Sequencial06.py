# 4. Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.

number = int(input('Informe um número: '))
if number > 0:
    print ('Número positivo')
elif number == 0:
    print('Zero!')
else:
    print('Número negativo')