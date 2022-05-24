
function imprimeTresCoresFavoritas (cor1: string, cor2: string, cor3: string): string[]{
    const coresFavoritas = []
    coresFavoritas.push(cor1,cor2,cor3) 
    return coresFavoritas
}

console.log(imprimeTresCoresFavoritas("vermelho","rosa","azul"))