import pandas as pd

df = pd.read_csv("notas.csv", sep=";")
df.head()

media = (df["Nota1"] + df["Nota2"])/2
df["media"] = media
print(df.head())

df.loc[df["media"]>=7,"SITUACAO"] = "APROVADO"
df.loc[df["media"]<7, "SITUACAO"] = "REPROVADO"

print(df.head())

df.to_csv("notas.csv")
