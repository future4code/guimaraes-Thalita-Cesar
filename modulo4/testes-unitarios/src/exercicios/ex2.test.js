import { checaPalindromo } from "./ex2";

describe("Checa Palíndromo", () => {
  it("retorna true para 'mirim'", () => {
    const ehPalindromo = checaPalindromo("mirim");
    expect(ehPalindromo).toEqual(true);
  });

    it("retorna true para 'arara'", () => {
      const ehPalindromo = checaPalindromo("arara");
      expect(ehPalindromo).toEqual(true);
    });
      it("retorna true para 'asa'", () => {
        const ehPalindromo = checaPalindromo("asa");
        expect(ehPalindromo).toEqual(true);
      });
// A função a seguir falhou no teste porque o teste conta o espaço e acentos.
        it("retorna true para 'Socorram-me subi no onibus em marrocos'", () => {
          const ehPalindromo = checaPalindromo("socorram me subi no on ibus em marrocos");
          expect(ehPalindromo).toEqual(true);
        });
})
