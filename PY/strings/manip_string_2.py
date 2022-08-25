#Estruture três códigos, os quais devem conter uma função de manipulação de string que obtenha resultado


#Pedir frase, gerar e colocar todas letras em maiusculo
frase = str(input('Digite uma frase: ')).strip().upper()
print('Você digitou a frase {}'.format(frase))

#Separando a frase em palavras
palavras = frase.split()
print('As palavras digitadas são: {}'.format(palavras))

#Juntar as palavras
junto = ''.join(palavras)
print('As palavras digitadas são: {}'.format(junto))

#Inverter string
inverso = ''

for letra in range(len(junto) -1, -1, -1):
    inverso += junto[letra]

print('O inverso de {} é {}'.format(junto, inverso))

#Comparar
if inverso == junto:
    print('Temos um palíndromo!')
else:
    print('A frase não é palíndromo!')

#Dizer se a palavra digitada é um palíndromo

