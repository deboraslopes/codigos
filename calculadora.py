# Faça uma função calculadora de dois números com três parâmetros: 
# os dois primeiros serão os números da operação e o terceiro será a entrada 
# que definirá a operação a ser executada. Considera a seguinte definição:
# 1. Soma
# 2. Subtração
# 3. Multiplicação
# 4. Divisão
# Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.


def calcula (num1, num2, op):
    if (op == 1):
        return (num1 + num2)
    elif (op == 2):
        return (num1 - num2)
    elif (op == 3):
        return (num1 * num2)
    elif (op == 4):
        return (num1 / num2)
    else:
        return 0

num1 = 18
num2 = 9
op = 4
resultado = calcula (num1, num2, op)
print(resultado)