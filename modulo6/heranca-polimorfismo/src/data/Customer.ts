import { User } from "./User";

export class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }

  }

  let costumer1 = new Customer("1", "user1@email.com", "User 1", "123456789", "410,00");
  costumer1.interoduceYourself();

  // console.log(
  //   `id: ${costumer1.id}, 
  //   email: ${costumer1.email}, 
  //   nome: ${costumer1.name}, 
  //   password: ${costumer1.password},
  //   purchaseTotal ${costumer1.purchaseTotal} e
  //   creditCard: ${costumer1.creditCard}`);

//a) *Quantas vezes a mensagem `"Chamando o construtor da classe Customer"` foi impressa no terminal?* 
//1

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal? Por quê?*

// Agora, imprima **todas as informações possíveis** da instância que você criou: o id, o nome, o email, o valor total de compra (`purchaseTotal`) e o cartão de crédito (`creditCard`). Perceba que as propriedades públicas da classe pai (`User`) foram "herdadas" pela classe filha (`Customer`).

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?* *Por quê?*
//Não, ela está como privada.