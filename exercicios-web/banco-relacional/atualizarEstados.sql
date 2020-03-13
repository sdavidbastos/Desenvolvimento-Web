update
    estados
set
    nome = 'Maranhão'
where
    sigla = 'MA'
select
    estados.`nome`
from
    estados
where
    sigla = 'MA'
update
    estados
set
    nome = 'Paraná',
    populacao = 11.32
where
    sigla = 'PR'
    /* Os apelidos serve para se localizar quando utiliza-se de duas ou mais tabelas distintas */
select
    est.nome,
    sigla,
    populacao
from
    estados est
where
    sigla = 'PR'