//EXERCICIO 3

const params = process.argv
const toDo = ["Comprar Leite"]
console.log(toDo);

for (let i = 2; i < params.length; i++) {
    toDo.push(params[i])
}

console.table(toDo)