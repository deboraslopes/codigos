# 4. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
#   a. C = 5 * ((F-32) / 9).

f = float(input('Informe a temperatura em graus Fahrenheit: \n'))

print('\nA temperatura {}°F corresponde a {:.1f}°C\n' .format(f,(5 * ((f - 32) / 9))))