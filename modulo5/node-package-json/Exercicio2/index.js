// EXERCICIO 2

const Mathematics = (operation, numberOne, numberTwo)=>{

    switch(operation){
        case "soma":
            console.log(numberOne + numberTwo)
            break;
        case "subt":
            console.log(numberOne - numberTwo)
            break;
        case "mult":
            console.log(numberOne * numberTwo)
            break;
        case "div":
            console.log(numberOne / numberTwo)
            break;
    }
    }
    
    // const operation = process.arg[2]
    // const numberOne = Number(process.arg[3])
    // const numberTwo = Number(process.arg[4])
    
    Mathematics("soma",2,4)
    