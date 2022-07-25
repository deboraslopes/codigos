#3. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
#   a. Para homens: (72.7*h) - 58
#   b. Para mulheres: (62.1*h) - 44.7

h = float(input('Informe a altura: \n'))
op = int(input('Informe 1 para sexo Feminino e 2 para Masculino \n'))

if op == 1:
    pesoIdeal = (62.1*h) - 44.71
    sexo = ('feminino')
else:
    pesoIdeal = (72.7*h) - 58
    sexo = ('masculino')

print('Peso ideal para pessoas do sexo {} é {:.3f}' .format(sexo, pesoIdeal))