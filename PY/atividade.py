from time import sleep

seg = int(input("Indique um segundo inicial para a contagem: "))
print("Iniciando contagem regressiva... ")
for cont in range (seg, 0, -1):
    print (cont)
    sleep (1)
print ('BUUUUM!')
