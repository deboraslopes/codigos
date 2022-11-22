alter table aluno add column data_nascimento varchar(10) after email;

alter table aluno change fone contato varchar(20);

alter table livro add column isbn int(13);

alter table livro drop column isbn;