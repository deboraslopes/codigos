# Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

# Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

anoCorreto = False
while (anoCorreto == False):
   print("Ano do Nascimento: ")
   try:
       ano = int(input())
       if (ano > 1922 and ano < 2021):
           anoCorreto = True
           print("Idade=",2022 - ano, "!")
       else :
           print("Informe um ano entre 1922 e 2021")
   except:
       print("Caracter inválido, por favor insira o ano de nascimento")