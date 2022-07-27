lista = []  
val = int(input("digite o valor: "))  
while (val != -1):  
    lista.append(val)  
    val = int(input("digite o valor: "))  
print('a lista: ', lista)  
  
print('a quantidade de valores informados é: ')  
print(len(lista))  # quantidade de valores informados  
  
print('a ordem informada foi: ', lista)  
lista.reverse()  
print('em ordem inversa:')  
  
for x in zip(lista):  
    print(x)  
  
soma = sum(lista)  
print('a soma dos valores é: ', soma)  
  
media = soma / len(lista)  
  
acima = 0  
baixo = 0  
  
for valor_media in lista:  
    if valor_media > media:  
        acima += 1  
  elif valor_media < 7:  
        baixo += 1  
  
print('a media é: ', media)  
print(f'Quantidade de valores acima da média: {acima}\nQuantidade de valores abaixo de 7: {baixo}')