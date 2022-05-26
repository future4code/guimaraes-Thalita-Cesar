function obterEstatisticas(numeros:number[]):object {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas : { maior:number, menor:number, media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    return estatisticas
}

type amostraDeIdades = {

    numeros: number[],
    obterEstatisticas: (numeros:number[]) => object
}