function checaTriangulo(a:string|number, b:string|number, c:string|number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

console.log(checaTriangulo(3,6,6))