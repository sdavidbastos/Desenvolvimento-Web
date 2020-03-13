SELECT
    *
FROM
    `cidades`
INSERT INTO
    cidades (nome, area, estado_id)
VALUES
    ('Campinas', 795, 25)
INSERT INTO
    cidades (nome, area, estado_id)
VALUES
    (
        'Niterói',
        133.9,
        (
            select
                id
            from
                estados
            where
                sigla = 'RJ'
        )
    )
INSERT INTO
    cidades (nome, area, estado_id)
VALUES
    (
        'Caruaru',
        920.6,
        (
            select
                id
            from
                estados
            where
                sigla = 'PE'
        )
    )
INSERT INTO
    cidades (nome, area, estado_id)
VALUES
    (
        'Juazeiro do Norte',
        248.2,
        (
            select
                id
            from
                estados
            where
                sigla = 'CE'
        )
    )