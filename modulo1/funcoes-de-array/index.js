
 /*
//Exercícios de interpretação de código
//1.  Leia o código abaixo
  
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" }
    ]
    
    const novoArrayA = usuarios.map((item, index, array) => {
       console.log(item, index, array)
    })

    
//a) O que vai ser impresso no console? ele imprimiu 3 array, cada um com um objeto e o indice.

    
//2. Leia o código abaixo
    
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    
    console.log(novoArrayB)
    
// a) O que vai ser impresso no console? Vai imprimir um array com apenas o nome de cada item



// 3. Leia o código abaixo
    
    const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC)
    
//a) O que vai ser impresso no console? Ele imprime os objetos que não contem Chijo

 */

//Exercícios de escrita de código



//1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    

    const pets = [
       { nome: "Lupin", raca: "Salsicha"},
       { nome: "Polly", raca: "Lhasa Apso"},
       { nome: "Madame", raca: "Poodle"},
       { nome: "Quentinho", raca: "Salsicha"},
       { nome: "Fluffy", raca: "Poodle"},
       { nome: "Caramelo", raca: "Vira-lata"},
    ]  
    
//a) Crie um novo array que contenha apenas o nome dos doguinhos

const novoArrayA = pets.map((item, index, array) => {
   return item.nome
})

console.log(novoArrayA)
    
// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

const novoArrayB = pets.filter((item, index, array) => {
   return item.raca == "Salsicha"
})

console.log(novoArrayB)
    
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

const novoArrayC =  pets.filter((pets) => {
   return pets.raca.toLowerCase() === "poodle";
});
const nomesnovoArrayC = novoArrayC.map((pets) => {
   return pets.nome;
});
console.log('Você ganhou um cupom de desconto de 10% para tosar o/a  ' + nomesnovoArrayC[0]);
console.log('Você ganhou um cupom de desconto de 10% para tosar o/a  ' + nomesnovoArrayC[1]);

//2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array **map** e **filter:**
    

    const produtos = [
       { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
       { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
       { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
       { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
       { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
       { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
       { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
       { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
       { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
       { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
    ]

    
//a) Crie um novo array que contenha apenas o nome de cada item

const arrayProdutosA = produtos.map((item, index, array) => {
   return item.nome
})

console.log(arrayProdutosA)
    
//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const arrayProdutosB = produtos.map((item, index, array) => {
   let percentual = item.preco-(item.preco*0.05);
   item.preco= percentual;
   return item
})

console.log(arrayProdutosB)

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

const arrayProdutosC = produtos.filter((item, index, array) =>{
 return item.categoria === "Bebidas"})
 console.log(arrayProdutosC)
    
//d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const arrayProdutosD =  produtos.filter((produtos) => {
   return produtos.nome.includes("Ypê");
});


console.log(arrayProdutosD)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
    

const arrayProdutosE =  produtos.filter((produtos) => {
   return produtos.nome.includes("Ypê");
});

const precoProdutosE = arrayProdutosE.map((produtos)=> {
   console.log("Compre " + produtos.nome + " por " + produtos.preco.toFixed(2)+ " .");
});


