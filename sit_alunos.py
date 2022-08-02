# Desenvolva um programa que deve ler um arquivo csv intitulado “notas_alunos.csv”. O arquivo deve ter a seguinte estrutura:

#   aluno: Nome do aluno;
#   nota_1: Primeira nota;
#   nota_2: Segunda nota;
#   faltas: Número de faltas;

# O programa lerá esse arquivo e criará duas colunas. A primeira coluna será “media”, que terá a média das duas notas do aluno. A segunda será “situacao”, com os valores: APROVADO ou REPROVADO.

# O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado. O programa deverá salvar esse novo dataframe com o nome “alunos_situacao.csv”.

# Por fim, o programa deverá mostrar na tela:
#   - o maior número de faltas;
#   - a média geral das notas dos alunos;
#   - e a maior média.

import pandas as pd

df_alunos = pd.read_csv("notas_alunos", sep=";")
df_alunos.head()

print('Tabela inicial')
print(df_alunos)

print('\n')

print('Criando coluna média:')
media = (df_alunos["nota_1"] + df_alunos["nota_2"])/2
df_alunos["media"] = media
print(df_alunos.head())

print('\n')

print('Criando coluna situção:')
df_alunos.loc[(df_alunos["media"] >= 7) | (df_alunos["faltas"] <= 5), "situacao"] = "APROVADO"
df_alunos.loc[(df_alunos["media"] < 7) | (df_alunos["faltas"]>5), "situacao"] = "REPROVADO"
print(df_alunos.head())

print('\n')

print('Dados solicitados:')
maxFaltas = df_alunos["faltas"].max()
medAll = df_alunos["media"].median()
maiorMedia = df_alunos["media"].max()

print(f"O maior número faltas foi: {maxFaltas}")
print(f"Média geral das notas: {medAll}")
print(f"Maior média: {maiorMedia}")


