

//EXERCICIO DE LEITURA DE CÓDIGO
/*
//1) 10, ele executou o código 4 vezes somando o valor adcionado ao valor inicial, quando chegou na quinta vez ele adcionou mais 1 valor, mas não somou ao valor inicial


for (const index of [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30].entries()) {
    console.log(index);
  }

//2 
//a) 19 21 23 25 27 30
//b) acessando o indice de cada elemento de um array
for (const index of [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30].entries()) {
    console.log(index);
  }

  */


//3) o código roda 4 vezes deixando um asterisco a cada repetição

//EXERCICIO DE ESCRITA DE CÓDIGO

//1

const bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let array =[]
if (bichinhos === 0) {
    console.log(`Que pena! Você pode adotar um pet!`);
} 
else if(bichinhos>0){
       for (let i = 0; i < bichinhos; i++) {
        array.push(prompt(`Digite aqui o nome do seus pet`))   
       }
       console.log("Os nomes são", array) 
    }
else {
    console.log("Valor indefinido")
}

//2
// Este array será usado para exemplificar as respostas de todos os itens
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//a
for (const index of arrayOriginal) {
    console.log(index);
  }

//d

for (const index of [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55].entries()) {
    console.log(index);
  }


for (let element of arrayOriginal){
    element= element/10
}

//e
const maiorMenor = (arrayOriginal)=>{
    let maiorNum =0
    let menorNum = Infinity

    for(let i=0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i]< menorNum){
            menorNum = arrayOriginal[i]
        }
        else if(arrayOriginal[i]> maiorNum){
            maiorNum=arrayOriginal[i]
        }
    }
    console.log("O menor número é:", menorNum)
    console.log("O maior número é:", maiorNum)
}

maiorMenor(arrayOriginal)