# 2. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

print('.::CADASTRO DE SENHA::.')

while True:
    name = input('Nome de usuário: ')
    senha = input('Senha: ')
    if name == senha:
        print('\n Atenção! \n A senha não pode ser igual ao nome!\n')
    else:
        break