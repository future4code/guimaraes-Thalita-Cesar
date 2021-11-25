// EXERCICIO DE LEITURA DE CÓDIGO
/*
//1
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

// a) será impresso o primeiro ator, o ultimo ator e a terceira transmissão.

//2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a) console. log : {nome: 'Juca', idade: 3, raca: 'SRD'}, {nome: 'Juba', idade: 3, raca: 'SRD'} e {nome: 'Jubo', idade: 3, raca: 'SRD'}

//b) os ... inclui uma informação no objeto

//3

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false,
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//a) false, underfined
//b) altura não é uma propriedade do objeto pessoa
*/

//EXERCICIO DE ESCRITA DE CÓDIGO 

//1 
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

const pessoa = {
    nome: "Thalita",
    apelido: ["thata", "lita", "Tha"]
}

console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido} `)

//b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

const novoObjeto = {
    ...pessoa, apelido: ["litinha", "lilita"]
}

console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido} ou de: ${novoObjeto.apelido}`)

//2
//a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
//1. O valor de `nome`
//2. O numero de caracteres do valor `nome`
//3. O valor de `idade`
//4. O valor de `profissão`
//5. O numero de caracteres do valor `profissão`


function minhaFuncao() {
    const pessoa2 = 
    {nome: "bruno", 
    idade: "23",
    prof: {
        profissão: "instrutor"  
}
},
    
    array1 = [pessoa2.nome, pessoa2.nome.length, pessoa2.idade, pessoa2.prof.profissão, pessoa2.prof.profissão.length]
    return array1
}
    console.log (minhaFuncao())

    //3 

    const arraycarrinho = []
    
    function fruta(pera){
        pera = { nome: "pera", disponibilidade: true}
        return pera
    }

    function fruta1(abacaxi){
        abacaxi ={nome:"abacaxi", disponibilidade: false}
        return abacaxi
    }

    function fruta2(melancia){
        melancia ={nome: "melancia", disponibilidade:true}
        return melancia
    }
    arraycarrinho.push(fruta())
    arraycarrinho.push(fruta1())
    arraycarrinho.push(fruta2())
 
    console.log(arraycarrinho)

//DESAFIO


//1
function usuario (name, anos, profissao){
   name= prompt("Qual seu nome?")
   anos= prompt("Qual sua idade")
   profissao = prompt("Qual sua profissão")
   const objetoUsuario = { 
       nome:name, 
       profissão:profissao, 
       idade: anos}
   return objetoUsuario
}

console.log(usuario())

//2

function filmes(){
    const osfilmes = {
        nome: "Interstellar",
        anoDeLançamento: 2014,
        filme2: {
            nome: "Frida",
            anoDeLançamento: 2002,
        }
    }
    const anoFilme = osfilmes.anoDeLançamento < osfilmes.filme2.anoDeLançamento;
    const igual = osfilmes.anoDeLançamento == osfilmes.filme2.anoDeLançamento;
    const mensagem= (`O primeiro filme foi lançado antes do segundo? ${anoFilme},
O primeiro filme foi lançado no mesmo ano do segundo? ${igual} `)
    return mensagem
}

console.log (filmes())

//3 

const novaFunction = fruta1({nome:"abacaxi", disponibilidade: true})

console.log(novaFunction)







