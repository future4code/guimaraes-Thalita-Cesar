export abstract class Place {
    constructor(protected cep: string) {}
  
      public getCep(): string {
          return this.cep;
    }
  }

//   let place1 = new Place("8954145");

//   Qual foi o erro que o Typescript gerou?
//   Não se pode criar uma instância de uma classe abstrata

// Pense e responda: o que precisaríamos fazer para conseguir efetivamente criar uma instância dessa classe?
// Criar uma nova classe com extends da classe mãe Place