import pandas as pd

df = pd.read_csv("salarios.csv", sep=';')
print('\n')
print(df)
print('\n')

media = df["Salario"].mean()
print(media)

df.insert(1, "media", [0,1,2])
print('\n')
print(df)
