#1
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

#A 
#Uma FOREIGN KEY é um campo(chave extrangeira) em uma tabela que se refere à PRIMARY KEY de outra tabela. 

#B

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"004"
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"002",
    "ótimo!",
    9,
	"003"
);

#C = não é inserido na tabela
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"003",
    "bom!",
    5,
	"011"
);

#D 

ALTER TABLE Movie DROP COLUMN rating;


#E Não apaga

DELETE FROM Movie WHERE id = "004";

#2

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

#A está pegando duas chaves extrangeiras, o id de movies e de actor

#B

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"001",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "004"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "005"
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "006"
);

#C Query Interrupted

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "008"
);

#D não é excluido

DELETE FROM Actor WHERE id = "002";

#3

SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;

#A O INNER JOIN retorna registros que possuem valores correspondentes em ambas as tabelas, o ON determina quais os valores correspondentes.

#B 

SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;

