# 3. Escreva uma função que, dado o valor da conta de um restaurante, calcule e exiba a gorjeta do garçom, considerando 10% do valor da conta.

def contaGorgeta(conta):
    gorgeta = conta*0.1
    return gorgeta

conta = float(input('Informe o valor total da conta - R$ '))
print('A gorgeta vai ser de R$ ',contaGorgeta(conta))
    
