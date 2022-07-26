from enum import Enum


class candidato(Enum):
    x = 889
    y = 847
    z = 515
    b = 0

votarNovamente = True
votosx = 0
votosy = 0
votosz = 0
nulos = 0

while (votarNovamente == True):
    try:
        print("Informe o numero do candidato que deseja votar: ")
        voto = int(input())
        
        if (voto == candidato.x.value):
            print(f"Você votou em {candidato.x.name}")
            votosx = votosx + 1
        elif (voto == candidato.y.value):
            print(f"Você votou em {candidato.y.name}")
            votosy = votosy + 1
        elif (voto == candidato.z.value):
            print(f"Você votou em {candidato.z.name}")
            votosz = votosz + 1
        else: 
            print("Você votou nulo")
            nulos = nulos + 1
    except:
        print("Você não digitou um número. Por favor, digite 'S' para votar novamente.")
    
    votarNovamente = input("Deseja votar novamente? (N - Não / S - Sim) ")
    if (votarNovamente == "S" or votarNovamente == "s"):
        votarNovamente = True
    elif (votarNovamente == "N" or votarNovamente == "n"):
        votarNovamente = False
    
if votosx > votosy and votosx > votosz and votosx > nulos:
    print("Candidato eleito: X")
elif votosy > votosx and votosy > votosz and votosy > nulos:
    print("Candidato eleito: Y")
elif votosz > votosx and votosz > votosy and votosz > nulos:
    print("Candidato eleito: Z")

    

print(f"{candidato.x.name}: {votosx} votos")
print(f"{candidato.y.name}: {votosy} votos")
print(f"{candidato.z.name}: {votosz} votos")
print(f"{candidato.b.name}: {nulos} votos")