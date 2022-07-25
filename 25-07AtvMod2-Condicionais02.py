# Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

print('Olá, em qual turno você estuda? \n Digite:\n M-matutino \n V-Vespertino \n N- Noturno')

turno = input()
if turno == 'm' or turno == 'M':
    print('\n === Bom dia! ===')
elif turno == 'v' or turno == 'V':
    print('\n === Boa tarde! ===')
elif turno == 'n' or turno == 'N':
    print('\n === Boa noite! ===')
else:
    print('Valor Inválido!')