# Desenvolva um código que simule uma eleição com três candidatos.
# - candidato_X => 889
# - candidato_Y => 847
# - candidato_Z => 515
# - branco => 0

# O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo.
# Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

# Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada candidato, os brancos e nulos 

print('============ ELEIÇÕES ============')
print(' Candidatos ')
print(' Chaves - Número 889')
print(' Seu Madruga - Número 847')
print(' Kiko - Número 515')
print(' Votar Branco - 0')
print('\n')

class candidato (enumerate):
    chaves = 889
    madruga = 847
    kiko = 515
    brancos = 0

Votar = True
votosChaves = 0
votosMadruga = 0
votosKiko = 0
votosBrancos = 0

while (Votar == True):
    try:
        print('\nInforme o número do candidato que deseja votar: ')
        voto = int(input())

        if (voto == candidato.chaves.numerator):
            print('Você votou no Chaves!')
            votosChaves = votosChaves + 1
        elif (voto == candidato.madruga.numerator):
            print('Você votou no Seu Madruga!')
            votosMadruga = votosMadruga + 1
        elif (voto == candidato.kiko.numerator):
            print('Você votou no Kiko!')
            votosKiko = votosKiko + 1
        else:
            print('Voto Nulo!')
            votosBrancos = votosBrancos + 1
    except:
        print('Voto Inválido, por favor repita a operação!\n')

    Votar = input('\n>>Finalizar votação? (S - Sim / N - Não) = ')
    if (Votar == "S" or Votar =="s"):
        Votar = False
    elif (Votar == "N" or Votar =="n"):
        Votar = True

print('\n\n::::: Resultado das Eleições :::::')
if votosChaves > votosMadruga and votosChaves > votosKiko and votosChaves > votosBrancos:
    print(' Chaves Eleito!')
elif votosMadruga > votosChaves and votosMadruga > votosKiko and votosMadruga > votosBrancos:
    print(' Seu Madruga eleito!')
elif votosKiko > votosChaves and votosKiko > votosMadruga and votosKiko > votosBrancos:
    print(' Kiko eleito!')
elif votosBrancos > votosChaves and votosBrancos > votosMadruga and votosBrancos > votosKiko:
    print('Não houve eleitos!')
print('::::::::::::::::::::::::::::::::::::')

print('\n\n:: CONTAGEM DE VOTOS ::')
print('Votos Chaves : {}' .format(votosChaves))
print('Votos Seu Madruga : {}' .format(votosMadruga))
print('Votos Kiko : {}' .format(votosKiko))
print('Votos Brancos / Nulos : {}' .format(votosBrancos))