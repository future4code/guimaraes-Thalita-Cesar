import { UserDatabase } from "../data/UserDatabase"
import { createUserDTO } from "../model/createUserDTO";
import { CustomError } from "../customError/customError";
import { InvalidRequest } from "../customError/invalidRequest";
import { generateId } from "../services/generateId";

export class UserBusiness {
  public create= async(input: createUserDTO)=> {
    try{
      const { email, name, password } =input ;
    if (!email || !name || !password) {
      throw new InvalidRequest()
    }

    const id : string = generateId()

    const userDatabase = new UserDatabase()
    await userDatabase.create({
      id,
      name,
      email,
      password
    }) }
    catch (error:any) {
      throw new CustomError(error.message || error.sqlMessage, error.statusCode);
    }
    };
    public getAllUsers= async()=> {
    try{			
          return await new UserDatabase().getAllUsers();
      }
      catch (error:any) {
        throw new CustomError(error.message || error.sqlMessage, error.statusCode);
      }
    }
  }
