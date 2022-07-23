# Faça uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
# 1: Soma
# 2: Subtração
# 3: Multiplicação
# 4: Divisão
# 0: Sair

# Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.

# Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

def calcula (num1, num2, op):
    if (op == 1):
        return (num1 + num2)
    elif (op == 2):
        return (num1 - num2)
    elif (op == 3):
        return (num1 * num2)
    elif (op == 4):
        return (num1 / num2)
    else:
        return 0
while True:
    print('-------------- CALCULADORA -------------- ')
    print('Selecone o número correspondente à operação')
    print('1: Soma \n2: Subtração \n3: Multiplicação \n4: Divisão \n0: Sair')

    op = int(input('Digite a operação'))
    if not (op == 0):
        
        if (op == 1) or (op ==2):
            num1 = int(input('Digite primeiro número'))
            num2 = int(input('Digite o segundo número'))

        calcula(num1, num2, op)

        print('--->>Resultado = ',calcula(num1, num2, op), '<<---')
    
