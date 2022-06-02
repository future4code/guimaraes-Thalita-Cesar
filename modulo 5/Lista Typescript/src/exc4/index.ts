
type Person ={
    name: string,
    salary: number,
    sector: Sector,
	inPerson : boolean
}

enum Sector {
	M="Marketing",
	V="Vendas",
	F="Financeiro",
}

const person:Person[] = [  
    { name: "Marcos", salary: 2500, sector: Sector.M, inPerson: true },
	{ name: "Maria" ,salary: 1500, sector: Sector.V, inPerson: false},
	{ name: "Salete" ,salary: 2200, sector: Sector.F, inPerson: true},
	{ name: "João" ,salary: 2800, sector: Sector.M, inPerson: false},
	{ name: "Josué" ,salary: 5500, sector: Sector.F, inPerson: true},
	{ name: "Natalia" ,salary: 4700, sector: Sector.V, inPerson: true},
	{ name: "Paola" ,salary: 3500, sector: Sector.M, inPerson: true }
    ,]

function searchSectorMarketing(person:Person[]):Person[] {

        const MarketingListFilter: Person[] = person.filter((person) => {
            return person.sector === Sector.M && person.inPerson ==true;
          });
          return MarketingListFilter;
}

 console.log(searchSectorMarketing(person));

