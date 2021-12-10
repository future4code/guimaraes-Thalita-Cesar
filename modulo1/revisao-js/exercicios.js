// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function compararNumeros(a, b) {
        return a - b;
      })
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const par = array => array % 2 === 0
    
    const pares = array.filter(par)
    
    return pares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
let arrayNova =[]
for(let num of array){
    if (num %2 ===0){
        arrayNova.push(Math.pow(num,2))
    }
}    
return arrayNova   
}


// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maiorNumero = 0;
   for(let i = 0; i < array.length; i++){ 
  if(array[i] > maiorNumero){
  maiorNumero = array[i]
  }
}
  return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
let maiorNumero = undefined;
let menorNumero = undefined;
let maiorDivisivelPorMenor = undefined;
let diferenca = undefined;

if(num1>num2){
    maiorNumero = num1;
    menorNumero = num2
}
else {
    menorNumero = num1;
    maiorNumero = num2
}

if (maiorNumero%menorNumero===0){
    maiorDivisivelPorMenor = true;
}
else {
    maiorDivisivelPorMenor = false;
}

diferenca = maiorNumero-menorNumero

return {maiorNumero: maiorNumero,
maiorDivisivelPorMenor: maiorDivisivelPorMenor,
diferenca: diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array =[]
    for (let i=0; array.length < n; i++){
        if (i%2===0){
            array.push(i)
        }
    }
return array
}



// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if ( ladoA == ladoB && ladoB == ladoC){
        return "Equilátero";      
    }else if(ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){
        return "Escaleno";
    }else{
        return "Isósceles";
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = array.sort( function compararNumeros(a,b){
        return a-b;
    });
    return [novoArray[novoArray.length-2], novoArray[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const objeto = {  nome: 'O Diabo Veste Prada',
    ano: '2006',
    diretor: 'David Frankel',
    atores: ['Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci']};
let frase = `Venha assistir ao filme ${objeto.nome}, de ${objeto.ano}, dirigido por ${objeto.diretor} e estrelado por ${objeto.atores}.`
return frase;
}  

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   //entrada
const novaPessoa=
{
	...pessoa,
    nome: "ANÔNIMO",
}
return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((pessoa) => {
        return (pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    }) 
    return pessoasAutorizadas
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let PessoasNaoAutorizadas = pessoas.filter((pessoa) => {
        return !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5)
    })

    return PessoasNaoAutorizadas

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas = [
        { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, compras: [] }]
    
   
    contas[0].saldoTotal = 500;
    contas[1].saldoTotal = 6260; 
    contas[2].saldoTotal= -3340; 
    contas[3].saldoTotal= -1900; 
    contas[4].aldoTotal= 1300;
    contas[5].saldoTotal= 1400;

    contas[0].compras= [];
    contas[1].compras= [];
    contas[2].compras= [];
    contas[3].compras= [];
    contas[4].compras= [];
    contas[5].compras= [];

    return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {{
   let consultas= [
        { nome: "João", dataDaConsulta: "01/10/2021" },
        { nome: "Pedro", dataDaConsulta: "02/07/2021" },
        { nome: "Paula", dataDaConsulta: "03/11/2021" },
        { nome: "Márcia", dataDaConsulta: "04/05/2021" }
      ]
      
    function compare(a,b) {    
    if (a.nome < b.nome)
     return -1;
  if (a.nome > b.nome)
    return 1;
  return 0;
};
}
return consultas.sort(compare);
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}

