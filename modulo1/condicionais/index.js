//EXERCICIO DE LER CÓDIGO 
//1
 /* 
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    
   // a) Explique o que o código faz. Qual o teste que ele realiza? Ele testa se o numero é par
    
   // b) Para que tipos de números ele imprime no console "Passou no teste"? numeros par
    
   // c) Para que tipos de números a mensagem é "Não passou no teste"? numeros impares

    
    
//2
    
   
  let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break;// BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
  
    
   // a) Para que serve o código acima? ele informa o preço da fruta escolhida
    
  //  b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? 2.25
    
   // c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? o preço dá 5 reais
   

//   3. 
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)

    
// a) O que a primeira linha está fazendo? perguntando se o numero é maior que 0
    
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10? deu erro
    
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// o let mensagem está dentro do escopo do if

const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	
    }
    let mensagem = "Essa mensagem é secreta!!!"
    console.log(mensagem)

    */

//EXERCICIO DE ESCREVER CÓDIGO 
//1 Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

const idadeUsuario = Number(prompt("Qual sua idade?"))

function dirigirusuario (idade){
    if (idade>18){
        console.log("Você pode dirigir")
    }
    else {
        console.log ("Vocẽ não pode dirigir")
    }
}

dirigirusuario(idadeUsuario)

//2


let turno = prompt("Qual turno você estuda? Responda com: M, V ou N").toUpperCase()

function turnoEstudo (turno){
     if (turno = 'M')
    {  console.log  ("Bom Dia!")}
    else if (turno = 'V')
    { console.log  ("Boa tarde!")}
    else if (turno = 'N')
    { console.log ("Boa noite!")}
    else 
    { console.log ("Turno indefinido" )}
}

(turnoEstudo(turno))

//3 Repetir o exercicio anterior com switch case


const escolherTurno = (turnoEscolhido) =>
{
    switch(turnoEscolhido){
        case 'M':
            console.log('Bom Dia!')
        break
        case 'V':
            console.log('Boa tarde!')
        break
        case 'N':
            console.log('Boa noite!')
        break
        default: 
        console.log('Turno indefinido')
    }
}

const escolhaDeTurnoUsuario = prompt("Qual turno você estuda? Responda com: M, V ou N").toUpperCase()

escolherTurno(escolhaDeTurnoUsuario)

//4 

const VaiAssistirFIlme = (genero,ingresso) =>
{
    if(genero && ingresso){
        const lanchinho = prompt("Qual lanchinho você vai comprar?")
        console.log("Bom filme, e aproveite o(a) seu(sua)", lanchinho),"!"}
        else{
            console.log("Escolha outro filme :(")
        }    
}

const generoFilmeUsuario = prompt('Qual o gênero do filme').toLowerCase() === 'fantasia'
const ingressoFilmeUsuario = prompt('Qual o preço do ingresso').toLowerCase() <= 15.00


VaiAssistirFIlme(generoFilmeUsuario, ingressoFilmeUsuario)