set global log_bin_trust_function_creators = 1;

DELIMITER $$

create function conta_cliente (thisdate date) returns int(11)

begin
	return (select count(*) from clientes where thisdate = cadastro);
end $$

DELIMITER ;

select conta_cliente('2022-01-02') as clientes;
