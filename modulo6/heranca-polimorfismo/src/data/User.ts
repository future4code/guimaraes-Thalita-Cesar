

export class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public interoduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`;
}
  }


  let user1 = new  User("1", "user1@email.com", "User 1", "123456789");
  
//   console.log(`id: ${user1.id}, email: ${user1.email}, nome: ${user1.name} e password: ${user1.password}`)

// a) *Seria possível imprimir a senha (`password`) atrelada a essa instância?*

// Não é possível imprimir nada que esteja private.

// b) *Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*
//1