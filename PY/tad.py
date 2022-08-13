#Crie um tipo abstrato de dado (TAD) para manipular números complexos na linguagem Python.

#O método deve:
#   - calcular três números complexos;
#   - realizar todas as operações básicas;
#   - e imprimir as propriedades real e img do números. 



class numComplexo:
    a = 2
    b = 3

def novoNumero():
    cad = numComplexo()
    cad.a = int(input('Digite o primeiro valor do número complexo: '))
    cad.b = int(input('Digite o segundo valor do número complexo: '))
    num = complex(cad.a, cad.b)
    return cad



escreveNumero(novoNumero(mostrar))


#print(novoNumero)
#a = 3 + 4j 
#b = complex(5,2)
#c = complex(12, 8)

#print(f"Soma",a + b + c)
#print(f"Subtração", b - c)
#print(f"Multiplicação", a * c)
#print(f"Divisão", c/a)
#print(a.real)
#print(a.imag)

