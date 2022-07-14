export interface Client {
    name: string;
    registrationNumber: number;
    consumedEnergy: number;
    calculateBill(): number;
  }

  const Client1: Client = {
    name: "Client1",
    registrationNumber: 1,
    consumedEnergy: 137,
  
    calculateBill: () => {
      return 2;
    }
  }