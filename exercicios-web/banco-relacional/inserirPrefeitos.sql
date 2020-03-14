INSERT INTO
    prefeitos (nome, cidade_id)
values
    ('Rodrigo Neves', 2),
    ('Raquel Lyra', 3),
    ('Zenaldo Coutinho', null)
select
    *
from
    prefeitos
insert into
    prefeitos (nome, cidade_id)
values
    ('Rafael Graca', null)
select
    *
from
    estados
select
    *
from
    cidades c
    inner join prefeitos p on c.id = p.cidade_id
select
    *
from
    cidades c
    left join prefeitos p on c.id = p.cidade_id
union
select
    *
from
    cidades c
    right join prefeitos p on c.id = p.cidade_id
select
    *
from
    cidades c full
    join prfeitos p on c.id = p.cidade_id