# Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

# Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

anoCorreto = False
nome = input("Nome: ")
while (anoCorreto == False):
    try:
       ano = int(input("Ano de nascimento: "))
       if (ano > 1922 and ano < 2021):
           idade = 2022 - ano
           anoCorreto = True
           print(f"{nome} tem/terá {idade} anos em 2022.")
       else :
           print("Informe um ano entre 1922 e 2021!")
    except:
       print("Caracter inválido, por favor insira o ano de nascimento!")