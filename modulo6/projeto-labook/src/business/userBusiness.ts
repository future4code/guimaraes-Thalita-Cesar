import { UserDatabase } from "../data/UserDatabase";
import { createUserDTO } from "../model/createUserDTO";
import { generateId } from "../services/generateId";

export class UserBusiness {
    public create = async (input: createUserDTO): Promise<void> => {
      try {
        const { email, name, password } =input ;
        const id : string = generateId()
 
        const userDatabase = new UserDatabase ()
  
       await userDatabase.create({
        id,
        name,
        email,
        password
      })
  }
       catch (error: any) {
        throw new Error(error.message)}
    }}