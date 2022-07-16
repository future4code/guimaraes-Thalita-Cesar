import {Industry} from './Industry';
import {Client} from './Client';


class IndustrialClient extends Industry implements Client {
    constructor(
      public name: string,
      public registrationNumber: number,
      public consumedEnergy: number,
      private insdustryNumber: string, // tanto faz ser string ou number
      machinesQuantity: number,
      cep: string
    ) {
      super(machinesQuantity, cep);
    }
  
    public getIndustryNumber(): string {
      return this.insdustryNumber;
    }
  
    public calculateBill(): number {
      return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
  }

// a) *De* q*ual classe a `IndustrialClient` deve ser filha? Por quê?*
// Industry, porque é o que o extends está referenciando. 

// b) *Que interface a `IndustrialClient` implementa? Por quê?*
//Client, a interface client pode ser utilizada em várias classes pois retorna os dados de consumo do cliente.

// c) *Nós pedimos para criar somente os getters dessa classe. Pense num motivo para isso: por que só os getters?*
// Porque é uma classe filha, não havia muito sentido criar outros tipos.