//Exercícios de interpretação de código
//1. 10 e 10,5
//2. 10 10 10
//3. o programa calcula o valor que recebe por hora trabalhada, melhores variáveis seriam: horasDias, salarioDia

//Exercícios de escrita de código

//1. 

//const Name;
//const idade;

//console.log(typeof Name, typeof idade);

// o resultado é um erro: Uncaught SyntaxError: Missing initializer in const declaration

const nomeUsuario = prompt("Qual seu nome?")
const idadeUsuario = prompt("qual sua idade?")

console.log(nomeUsuario + idadeUsuario);

console.log("Olá", nomeUsuario, " você tem", idadeUsuario, "anos")



//2. 

const roupaAzul = prompt("Você está usando roupa azul hoje [sim/não]?")
const roupaAmarela = prompt("Você está usando roupa amarela hoje [sim/não]?")
const roupaRosa = prompt("Você está usando roupa rosa hoje [sim/não]?")

console.log(roupaAzul)
console.log(roupaAmarela)
console.log(roupaRosa)

console.log("Você está usando roupa azul hoje [sim/não]?", roupaAzul);
console.log("Você está usando roupa amarela hoje [sim/não]?", roupaAmarela);
console.log ("Você está usando roupa rosa hoje [sim/não]?", roupaRosa);
    
//3.

let a = 10
let b = 25

let c= a
a = b
b = c

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//Desafio

const numeroUsuario1 = 45
const numeroUsuario2= 10

let x = numeroUsuario1 + numeroUsuario2; //o resultado deve ser 55
let y = numeroUsuario1 * numeroUsuario2; //o resultado deve ser 450

console.log(x,y)


