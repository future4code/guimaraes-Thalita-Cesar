import { BaseDatabase } from "./BaseDatabase";
import { v4 as generateId } from 'uuid'
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase{

public createUser = async(user:User): Promise<void> =>{
    {
      await BaseDatabase.connection()
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into("User_Arq");
    } 
  };

public getAllUsers= async()=> {

    try {

        const users: User[] = [];

        const result = await BaseDatabase.connection()
            .select("*")
            .from('User_Arq');

                    for(let user of result){
                            users.push(user);
                    }

        return users;

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

public deleteUser = async(id:string)=>{
  try {
    await BaseDatabase.connection()
      .where({ id })
      .from('User_Arq')
      .delete()
      
  } catch (error:any) {
    throw new Error(error.sqlMessage || error.message);
  }
}
}