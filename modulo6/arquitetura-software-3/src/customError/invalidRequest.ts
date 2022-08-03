import { CustomError } from "./customError";

export class InvalidRequest extends CustomError {
    constructor(){
        super("Requisição inválida, envie todos os campos corretamente", 400)
    }
}