//ideia inicial

//Implemente um método que performe uma compressão de string 
// usando a contagem dos caracteres repetidos em sequência. Caso 
// o resultado final tenha um tamanho maior do que a string inicial, 
// seu programa deve retornar a string inicial


export const stringCompression = (input:any) => {
   const substrings = [];
   let lastChar = input[0];
   let charCount = 0;
 
   for (const char of input) {
     if (char !== lastChar) {
       substrings.push(lastChar + charCount);
       lastChar = char;
       charCount = 0;
     }
     charCount++;
   }
 
   substrings.push(lastChar + charCount);
   let result = "";
   for (const key of substrings) {
     result += key;
   }
 
   return result.length > input.length ? input : result;
 };


console.log("1", "expected a2b3", stringCompression("aabbb"));
console.log("2", "expected a2b1c5a3", stringCompression("aabcccccaaa"));
console.log("3", "expected accurate", stringCompression("accurate"));
console.log("4", "expected escola", stringCompression("escola"));
console.log("5", "expected a1c2u1r1a10t1e1", stringCompression("accuraaaaaaaaaate"));