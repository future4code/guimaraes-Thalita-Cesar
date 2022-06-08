type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Como você faria, já com a extensão instalada, para transpilar(converter) 
// esse arquivo typescript em um arquivo javascript? 
// 
// R. o comando tsc
// 
// c) E se este arquivo estivesse dentro de uma pasta chamada src. 
// O processo seria diferente? Se sim, descreva as diferenças.
// 
// R.: Não, desde que no arquivo tsconfig esteja "rootDir": "./src" e o arquivo
// esteja index.ts, 

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma 
// vez só? Caso conheça, explique como fazer.

// usando o tsc compila todos os arquivos index.ts que estão dentro da 
// página src, entrando na pasta pelo terminal e escrevendo tsc + nome do
// arquivo irá compilar, mas para a mesma pasta e não para a pasta build como
// está no package : "start": "tsc && node ./build/index.js". 

