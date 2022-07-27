# 5. Faça uma lista com o nome notas, peça as notas ao usuário e só sair quando ele pressionar o -1, depois disso mostre na tela as notas que ele informou. (USAR O WHILE).

notas = []
num = int(input('Insira uma nota ou digite -1 para parar: '))
while (num !=-1):
    notas.append(num)
    num = int(input('Insira uma nota ou digite -1 para parar: '))

print('Notas digitadas:',*notas)