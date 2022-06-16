USE `guimaraes-4211482-thalita-cesar`;

#1 

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

#A
# VACHAR (NÚMERO DE CARACTERES) = STRING;
# PRIMARY KEY = CHAVE PRIMÁRIA;
# NOT NULL = NÃO ACEITA VALOR NULL
# DATE = DATA

SHOW DATABASES;
#B = MOSTRA O DATABASE E INFORMATION_SCHEMA
SHOW TABLES;
#B = RETORNA A TABELA 'ACTOR'

#2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

#A 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "BRUNA MARQUEZINE",
  1200000,
  "1963-08-23",
  "female"
);
# NÃO APARECE NENHUM ERRO APENAS NÃO INSERE

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

#não aparece nenhum erro e falta os parametros  birth_date, gender

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

#não aparece nenhum erro e falta o parametro name

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Carol Castro",
  300000,
  "1989-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

#3
SELECT * FROM Actor;
SELECT id, salary from Actor ;
SELECT id, name from Actor WHERE gender = "male";

#A
SELECT * from Actor WHERE gender = "female";
#B
SELECT salary from Actor WHERE name = "Tony Ramos";
#C = RESULTADO NULL
SELECT * from Actor WHERE gender = "invalid";
#D
SELECT id, name, salary from Actor WHERE salary < 500000;
#E = NÃO APARECEU ERRO, APARECEU UU ATOR E UM NULL. 
SELECT id, name from Actor WHERE id = "002";
