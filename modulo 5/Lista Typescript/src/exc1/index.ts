

function FormataStringData(name:string, data:string):string {
    let dia  = data.split("/")[0];
    let mes  = data.split("/")[1];
    let ano  = data.split("/")[2];
  
    return `Olá me chamo ${name}, nasci no dia ${(dia).slice(-2)} do mês ${(mes).slice(-2)} do ano de ${ano}. `;
  }
  

  console.log(FormataStringData('Katia', '02/03/1999'));