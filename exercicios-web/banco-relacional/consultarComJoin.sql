/* Os dois exemplos abaixo fazem a mesma função */
select
    e.nome as Estado,
    c.nome as Cidade,
    regiao as Região,
    e.populacao as População
from
    estados e,
    cidades c
where
    e.id = c.estado_id;

select
    c.nome as Cidades,
    e.nome as Estados,
    regiao as Região
from
    estados e
    inner join cidades c on e.id = c.estado_id