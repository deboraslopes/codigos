create database produtos;
use produtos;

create table produtos (
	id int auto_increment not null,
    nome varchar(30),
    preco float,
    primary key (id)
);

create table historico_preco (
	id int auto_increment not null,
    data_hora datetime,
    id_produto int,
    valor_anterior float,
    valor_novo float,
    primary key (id),
    foreign key (id_produto) references produtos(id)
);

DROP TRIGGER IF EXISTS `produtos`.`produtos_AFTER_UPDATE`;

DELIMITER $$
USE `produtos`$$
CREATE DEFINER = CURRENT_USER TRIGGER `produtos`.`produtos_AFTER_UPDATE` AFTER UPDATE ON `produtos` FOR EACH ROW
BEGIN
if new.preco <> old.preco then
	insert into historico_preco values (default, now(), new.id, old.preco, new.preco);
    end if;
END$$
DELIMITER ;

insert into produtos values
(default,'CAMISETA','45.5'),
(default,'CADERNO','18.40');

select * from produtos;

UPDATE produtos SET preco = 38 WHERE (`id` = '1');

select * from historico_preco;

UPDATE produtos SET preco = 65.6 WHERE (`id` = '2');
UPDATE produtos SET preco = 15 WHERE (`id` = '1');