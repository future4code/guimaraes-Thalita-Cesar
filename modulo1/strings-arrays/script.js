//INTERPRETAÇÃO
/*
//1
let array
console.log('a. ', array) //INDEFINIDO

array = null
console.log('b. ', array) //NULL

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //11

let i = 0
console.log('d. ', array[i])// 3, deu a posição do ultimo array declarado

array[i+1] = 19
console.log('e. ', array) //colocou 19 no lugar no 4

const valor = array[i+6]
console.log('f. ', valor) //deu 9, foi para a posição 6

//2 

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

// EXERCICIO 

//01
let nomeDoUsuario = prompt ("Qual seu nome?")
let emailDoUsuario = prompt ("Qual seu email?")
console.log ('O e-mail ' + emailDoUsuario + ' foi cadastrado com sucesso. Seja bem-vinda(o) ' + nomeDoUsuario)

//2
const myArray= ['lasanha', 'pizza', 'açaí', 'sorvete', 'macarronada']
console.log(myArray)

console.log("Essas são as minhas comidas preferidas:")
console.log (myArray[0])
console.log (myArray[1])
console.log (myArray[2])
console.log (myArray[3])
console.log (myArray[4])

const comidaDoUsuario = prompt("Insira uma comida preferida")
myArray.push(comidaDoUsuario)

console.log (myArray)


//3
const listaDeTarefas = []

const Array0 =prompt("Escreva a primeira tarefa do dia: ")
const Array1 =prompt("Escreva a segunda tarefa do dia: ")
const Array2 =prompt("Escreva a terceira tarefa do dia : ")
listaDeTarefas.push(Array0, Array1 , Array2)

console.log (listaDeTarefas)

const indice = prompt("Qual tarefa você já realizou? [0,1,2]")
listaDeTarefas.splice(indice,1)
console.log (listaDeTarefas)

