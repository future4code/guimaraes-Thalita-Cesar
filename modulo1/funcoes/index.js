/*
//Exercicio de Leitura de Código
//1
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
// o console.log deu um valor para a variável que está indefinida, resultando em 10 e 50.

//O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
function minhaFuncao(variavel) {
	return variavel * 5
}

//(minhaFuncao(2))
//(minhaFuncao(10))

//Daria um erro: Uncaught TypeError: minhaFuncao(...) is not a function


let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

// criou uma variável, e abaixo uma função anonima texto com return, 
//transformando o texto recebido em letra minusculas e buscando a string cenoura dentro dele. 
//Na const resposta invocou a função colocando a variável da resposta do usuário dentro dela. 
//O resultado deu falso, não tem cenoura na frase.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     //i.   Eu gosto de cenoura
     //true
     //ii.  CENOURA é bom pra vista
     //true
     //iii. Cenouras crescem na terra 
     //true

*/

//EXERCICIO DE ESCRITA DE CÓDIGO

//1. 

//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:


function informação (){
    let nome = "Thalita,"
    let idade = "28"
    let moradia ="Natal,"
    let eEstudante = "sou"
    let frase = ` Eu sou ${nome} tenho ${idade} anos, moro em ${moradia} e ${eEstudante} estudante`;


    return frase  
 }
console.log (informação ())

//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

function informacoesPessoais (nome, idade, cidade, profissão){
    nome = "Thalita,"
    idade = "28"
    cidade ="Natal,"
    profissão = "Estudante"
    let frase = ` Eu sou ${nome} tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`;
    return frase
}
console.log (informacoesPessoais ())

//2 

//a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function soma(n1,n2){
    let soma = n1+n2
    return soma
    }
    
    console.log(soma(9,10))
//  b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.


function boleano(n1,n2){
    let boleano = n1>=n2
    return boleano
    }
    console.log(boleano(10,5))

//c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function par(n, d) {
    return n % d == 0;
  } 
  console.log(par(13, 2))


    //d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
    
    function mensagem (texto) {
         return `${texto.length}, ${texto.toUpperCase()}`
    }
console.log (mensagem("Olá, mundo"))


//3. 3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e **chame** essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações */

function soma1 (numero1,numero2)
{
   return numero1+numero2
}

function subtração (numero1,numero2)
{
   return numero1-numero2
}

function multiplicação (numero1,numero2)
{
   return numero1*numero2
}

function divisão (numero1,numero2)
{
   return numero1/numero2
}

let numero1 = Number(prompt("Escreva um numero"))
let numero2 = Number(prompt("Escreva outro numero"))

console.log("Números inseridos: " , numero1, " , ",numero2)
console.log("Soma: " + soma1(numero1,numero2))
console.log("Diferença:: " + subtração(numero1,numero2))
console.log("Multiplicação: " + multiplicação(numero1,numero2))
console.log("Divisão " + divisão(numero1,numero2))

