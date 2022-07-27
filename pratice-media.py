import pandas as pd

df = pd.read_excel("notas.xlsx")
media = (df["nota1"])+(df["nota2"])/2
if media >= 7:
    print('Aprovado')
elif media < 7:
    print('Reprovado')