import {Commerce} from './Commerce';
import {Client} from './Client';


class CommercialClient extends Commerce implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private cnpj: string,
      floorsQuantity: number,
      cep: string
    ) {
      super(floorsQuantity, cep);
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.53;
    }
  
    public getCnpj(): string {
      return this.cnpj;
    }
  }

// a) *Quais as semelhanças dessa classe com a `ResidentialClient`?*

// As duas são extends e implements e retorna o calculateBill():

// b) *Quais as diferenças dessa classe com a `ResidentialClient`?*
// O CommercialClient pede um cnpj enquanto o Residential Cliente pede um cpf