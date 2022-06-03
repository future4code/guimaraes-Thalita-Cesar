const minhaString:string = "29";
const meuNumero:string|number = "29";

type Person = {
    
    name: string,
    age: number,
    color: Color,
 } 

 enum Color{
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
 }

 const userA: Person = {
   
    name: "Thalita", 
    age: 28,
    color: Color.VERMELHO,
 }

 const userB: Person = {
  
    name: "Samuel", 
    age: 3,
    color: Color.ANIL,
 }

 const userC: Person = {
  
    name: "Thainá", 
    age: 2,
    color: Color.VIOLETA,
 }