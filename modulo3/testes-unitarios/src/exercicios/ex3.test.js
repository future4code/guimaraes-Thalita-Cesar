import { checaItensDuplicados } from "./ex3";

describe("Checa itens duplicados", () => {

    test("retorna false pra [1, 2, 3]", () => {
        const resultado = checaItensDuplicados([1, 2, 3]);
        expect(resultado).toEqual(false);
      });

      test("retorna true pra [a, a, b,c]", () => {
        const resultado = checaItensDuplicados(["a", "a", "b", "c"]);
        expect(resultado).toEqual(true);
      });

      test("retorna true pra [5, 5, 3, 3, 5, 3]", () => {
        const resultado = checaItensDuplicados([5, 5, 3, 6, 5, 6]);
        expect(resultado).toEqual(true);
      });

      test("retorna false pra []", () => {
        const resultado = checaItensDuplicados([]);
        expect(resultado).toEqual(false);
      });

});
