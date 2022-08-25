#Estruture três códigos, os quais devem conter uma função de manipulação de string que obtenha resultado


#Contar numero de palavras na frase
frase = str(input('Digite uma frase: ')).strip()
frase = str.split(frase)
print('A frase tem {} letras'.format(len(frase)))