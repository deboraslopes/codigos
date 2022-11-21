create database biblioteca;

create table ALUNO (
	id int,
    nome varchar(30),
    mat int,
    email varchar(30),
    ender varchar(50),
    fone varchar(20),
    primary key (mat)
)default charset utf8mb4;

insert into ALUNO values
(default, 'João Carlos', '1234', 'jcarlos@gmail.com', 'Rua 13 de maio', '(11)7825-4489'),
(default, 'José Vitor', '2345', 'jvitor@gmail.com', 'Rua da Saudade', '(11)7825-6589'),
(default, 'Paulo ANdré', '3456', 'pandr@gmail.com', 'Rua do Sol', '(11)7825-4495');

create table EMPRESTIMO(
	codigo int not null auto_increment,
    matric_aluno int,
    data_hora datetime,
    data_devol date,
    primary key (codigo),
    foreign key (matric_aluno) references ALUNO (mat)
)default charset utf8mb4;

insert into emprestimo values
(default, '1234', '2022-03-12 15-25-00', '2022-03-15'),
(default, '3456', '2022-03-15 14-32-00', '2022-03-18'),
(default, '2345', '2022-03-20 03-51-00', '2022-03-23');

create table SESSAO(
	codigo int not null auto_increment,
    descricao varchar(7),
    localizacao varchar(12),
    primary key (codigo)
) default charset utf8mb4;

insert into sessao values
(default, 'Sessao1', 'Partilheira1'),
(default, 'Sessao2', 'Partilheira2'),
(default, 'Sessao3', 'Partilheira3');

create table LIVRO(
	cod_livro int not null auto_increment,
    titulo varchar(50),
    autor varchar(30),
    cod_sessao int,
    primary key (cod_livro),
    foreign key (cod_sessao) references sessao(codigo)
)default charset utf8mb4;

insert into LIVRO values
(default, 'Modelo Conceitual e Diagramas ER', 'Presman, Roger S', '03'),
(default, 'Livro 2: Modelo Relacional e Álgebra Relacional', 'Heuser, Carlos Alberto', '01'),
(default, 'Livro 3: Linguagem SQL', 'Beighley, Lynn', '02');

create table livro_emprestimo(
    cod_livro int,
    cod_emprestimo int,
    foreign key (cod_livro) references LIVRO(cod_livro),
    foreign key (cod_emprestimo) references emprestimo(codigo)
)default charset utf8mb4;

insert into livro_emprestimo values
('3', '1'),
('1', '3'),
('2', '2');