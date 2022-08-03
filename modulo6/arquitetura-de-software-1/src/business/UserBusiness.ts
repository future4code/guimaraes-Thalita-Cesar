import {v4 as generateId} from 'uuid';
import { UserDatabase } from '../data/UserDatabase';


export class UserBusiness{

createUser = async(input: { name:string, email:string, password:string}): Promise<void> => {

        try{
            
            if(!input.name || !input.email || !input.password ){
                throw new Error("Please fill all the fields");
            }

            if(input.email.indexOf("@") === -1){
                throw new Error("Invalid Email");
            }

            if(input.password.length < 6){
                throw new Error("Password must have at least 6 characters");
            }

            const id = generateId();
            const { name, email, password } = input
          
            await new UserDatabase().createUser(
                {id, 
                email,
                name,
                password})
                ;
         
            
        }catch(error:any){
            throw new Error( error.message || "Error creating user. Please check your system administrator.");
        }
    }

getAllUsers = async()=>  {
	try{			
        return await new UserDatabase().getAllUsers();
    }
    catch (error:any) {
        throw new Error(error.message)
    }
}

deleteUser = async(input: {id:string})=>  {

    try {
        
        if(!input.id){
            throw new Error("Insira um id!")
        }

return await new UserDatabase().deleteUser(input.id);
}
catch (error:any) {
    throw new Error(error.message)
}
}

}