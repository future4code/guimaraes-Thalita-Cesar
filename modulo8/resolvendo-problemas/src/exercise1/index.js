// ideia inicial
// Considere que a gente só possa fazer três operações com string: 
// adicionar um caractere ao final dele, remover um caractere do 
// final dele ou substituir um caractere por outro. Dizemos que 
// uma string é 'one edit' de outra se ela for o resultado da original 
// a partir de UMA SÓ dessas operações. Escreva um método que determine 
// se uma string é  'one edit' de outra.
// Resolvendo o problema
function OneEdit(String1, String2) {
    if (Math.abs(String1.length - String2.length) > 1)
        return false;
    if (String1.length > String2.length)
        return String1.includes(String2);
    if (String2.length > String1.length)
        return String2.includes(String1);
    var charsDiffCount = 0;
    for (var i = 0; i < String1.length; i++) {
        if (String1[i] !== String2[i])
            charsDiffCount++;
    }
    return charsDiffCount === 1;
}
// testes
console.log("1", "expected true", OneEdit("banana", "banan"));
console.log("2", "expected true", OneEdit("bananak", "banana"));
console.log("3", "expected true", OneEdit("panana", "banana"));
console.log("4", "expected false", OneEdit("bananaaaa", "banana"));
