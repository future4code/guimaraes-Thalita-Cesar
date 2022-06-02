type Clients={
    name: string,
    balance: number,
    debts: number[],
}

const clients:Clients[] = [
	{ name: "João", balance: 1000, debts: [100, 200, 300] },
	{ name: "Paula", balance: 7500, debts: [200, 1040] },
	{ name: "Pedro", balance: 10000, debts: [5140, 6100, 100, 2000] },
	{ name: "Luciano", balance: 100, debts: [100, 200, 1700] },
	{ name: "Artur", balance: 1800, debts: [200, 300] },
	{ name: "Soter", balance: 1200, debts: [] }
]

function negativeCustomers (clients:Clients[]): Clients[]{
    clients.forEach((client) => {
      const allDebts = client.debts.reduce((a, b) => a + b, 0);
      client.balance -= allDebts;
      client.debts = [];
    });
    const negativesCustomers = clients.filter((client) => client.balance < 0);
    return negativesCustomers;
  };
 console.log(negativeCustomers(clients))