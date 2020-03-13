SELECT
    regiao AS 'Regiao',
    sum(populacao) AS Total
FROM
    estados
GROUP BY
    regiao
ORDER BY
    Total DESC
SELECT
    avg(populacao) AS Total
FROM 
    estados