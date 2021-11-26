// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt('qual a altura do retangulo?')
  const largura = prompt('qual a largura do retangulo?')
  console.log (altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anodenascimento = prompt('Qual ano você nasceu?')
  const anoatual = prompt("Qual ano estamos?")

  console.log(anodenascimento-anoatual)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return (peso/(altura*altura)) 

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('qual o seu nome?')
  const idade = prompt('qual sua idade?')
  const email = prompt('Informe seu email:')

  console.log ('Meu nome é '+ nome + ', tenho '+ idade +' anos, e o meu email é '+ email +'.' )

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

  var novaArray = new Array ();
  novaArray[0] = prompt("Digite uma cor");
  novaArray[1] = prompt("Digite uma cor");
  novaArray[2] = prompt("Digite uma cor");
  
  console.log(novaArray);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso 

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return (string1.length) == (string2.length)

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array [0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return (array [array.length-1])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  arrayParaGuardarIndice0 = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = arrayParaGuardarIndice0

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = prompt ("Qual o ano atual?")
  const anoNascimento = prompt ("Qual o ano de nascimento?")
  const anoRG = prompt ("Qual o ano de emissão do RG?")

  const idade = anoAtual-anoNascimento
  const tempoRG = anoAtual-anoRG

  if (anoAtual-anoNascimento < 18)
  {console.log(false)} 
  else if(idade <=20 && tempoRG >=5) 
   {console.log(true) }
   else if (idade >=20 && idade <50 && tempoRG >=10) 
   {console.log(true)}
   else if 
  (idade >=50 && tempoRG >=15) {
    console.log(true)
  }
  else {console.log(false)}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 4 == 0 &&  ano % 100 != 0 ||  ano % 400 == 0)  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt ("Vocẽ tem mais de 18 anos?[sim/nao]")
  const ensino = prompt ("Você tem ensino médio completo? [sim/nao]")
  const disponibilidade = prompt ("Vocẽ possui disponibilidade exclusiva durante o horário do curso?")
console.log ( idade =='sim' && ensino=='sim' && disponibilidade=='sim' )


}