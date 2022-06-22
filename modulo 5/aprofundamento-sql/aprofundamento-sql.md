
SET SQL_SAFE_UPDATES = 0;

#1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

#A = EXCLUI A COLUNA SALARY
#B = ALTERA O GENERO PARA 6 STRINGS
#C 
ALTER TABLE Actor MODIFY gender VARCHAR(100);

#2
#A
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "1985-05-03"
WHERE id = "003";

#B 
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

#C

UPDATE Actor
SET 
name = "Manu Gavassi",
birth_date = "2020-02-10",
salary = 600000,
gender = "female"
WHERE id = "005";



#3
#A
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
#B
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;

#4
#A 
SELECT MAX(salary) FROM Actor;
#B
SELECT MIN(salary) FROM Actor WHERE GENDER = "female";
#C
SELECT COUNT(*) FROM Actor WHERE gender = "female";
#D 
SELECT SUM(salary) FROM Actor;

#5
#A 
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
#retorna o id de 2 grupos, o count de cada um com a contagem  e o gender com os gêneros

#B
SELECT id, name FROM Actor
ORDER BY name DESC;
#C
SELECT * FROM Actor
ORDER BY salary;
#D
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
#E 
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

#6
#A
ALTER TABLE Movie ADD playing_limit_date DATE;
#B
ALTER TABLE Movie CHANGE rating rating FLOAT;
#C
UPDATE Movie
SET
playing_limit_date = "2020-12-31"
WHERE id = "001";
#D
DELETE FROM Movie WHERE id = "001";
   
SELECT * FROM Actor;
