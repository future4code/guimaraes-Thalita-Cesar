type Movie ={
    movieTitle: string,
    year: number,
    genre: Genre,
	grade? : number
}

enum Genre {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

const MovieA: Movie = {
	movieTitle: "Duna",
	year: 2021,
	genre: Genre.ACAO,
	grade: 74,
 }
 const MovieB: Movie = {
	movieTitle: "Duna",
	year: 2021,
	genre: Genre.ACAO
}

console.log(`nome: ${MovieA.movieTitle}, anoLancamento: ${MovieA.year}, genero: ${MovieA.genre}, pontuacao:${MovieA.grade}`)
console.log(`nome: ${MovieB.movieTitle}, anoLancamento: ${MovieB.year}, genero: ${MovieB.genre}`)

