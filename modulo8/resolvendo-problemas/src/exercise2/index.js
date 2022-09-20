"use strict";
//ideia inicial
exports.__esModule = true;
//Implemente um método que performe uma compressão de string 
// usando a contagem dos caracteres repetidos em sequência. Caso 
// o resultado final tenha um tamanho maior do que a string inicial, 
// seu programa deve retornar a string inicial
exports.stringCompression = function (input) {
    var substrings = [];
    var lastChar = input[0];
    var charCount = 0;
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }
    substrings.push(lastChar + charCount);
    var result = "";
    for (var _a = 0, substrings_1 = substrings; _a < substrings_1.length; _a++) {
        var key = substrings_1[_a];
        result += key;
    }
    return result.length > input.length ? input : result;
};
console.log("1", "expected a2b3", exports.stringCompression("aabbb"));
console.log("2", "expected a2b1c5a3", exports.stringCompression("aabcccccaaa"));
console.log("3", "expected accurate", exports.stringCompression("accurate"));
console.log("4", "expected escola", exports.stringCompression("escola"));
console.log("5", "expected a1c2u1r1a10t1e1", exports.stringCompression("accuraaaaaaaaaate"));
