# 3. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contraram para desenvolver o programa que calculará os reajustes.
#   a. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
#   b. salários até R$ 280,00 (incluindo) : aumento de 20%
#   c. salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
#   d. salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
#   e. salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
#   f. o salário antes do reajuste;
#   g. o percentual de aumento aplicado;
#   h. o valor do aumento;
#   i. o novo salário, após o aumento.

print('************************************')
print('*   Programa de aumento salarial   *')
print('************************************')

sal = float(input('Informe o salário para cálculo do aumento \nR$ '))
if sal <=280:
    percent = '20'
    aumento = (sal/100)*20
    newSal = sal + aumento
elif sal>280 and sal<700:
    percent = 15
    aumento = (sal/100)*percent
    newSal = sal + aumento
elif sal>700 and sal<1500:
    percent = 10
    aumento = (sal/100)*percent
    newSal = sal + aumento
elif sal>1500:
    percent = 5
    aumento = (sal/100)*percent
    newSal = sal + aumento

print ('-------->>>Aumento concedido<<<--------')
print('  Salário antes do rejuste: R$ {:.2f}' .format(sal))
print('  O aumento será de {}% - R$ {:.2f}' .format(percent,aumento))
print('  O novo salário é R${:.2f}' .format(newSal))
print('----------------------------------------')