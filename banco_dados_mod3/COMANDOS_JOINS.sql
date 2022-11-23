select origem.regiao, regulacao.motivo
from regulacao inner join origem
on origem.id = regulacao.hosp_orig
order by origem.regiao;

select regulacao.resol, hospitais.nome
from regulacao left join hospitais
on regulacao.cod_dest = hospitais.id;

select regulacao.resol, hospitais.nome
from regulacao right join hospitais
on regulacao.cod_dest = hospitais.id;

select * from regulacao
left join paciente
on regulacao.cod_paciente = paciente.codigo
union
select * from regulacao
right join paciente
on regulacao.cod_paciente = paciente.codigo;