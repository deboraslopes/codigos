#Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

#Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

anoCorreto = False
while(anoCorreto == False):
    ano = input('Ano do nascimento: ')
    try:
     ano = int(input())
     if (ano >=1922) and (ano <= 2021):
          anoCorreto = True
          print('Idade = ')
     else:
          print('Insira um ano de nascimento entre 1922 e 2021!')
     except:
          print('Caracter Inválido, por favor digite um número')

numeroCorreto = False
while (numeroCorreto == False):
   print("Insira um número par")
   try:
       numero = int(input())
       if (numero%2 == 0):
           numeroCorreto = True
           print("Você digitou um numero par !")
       else :
           print("Você digitou um número impar")
   except:
       print("Caracter inválido, por favor digite um número par")