import { Request, Response } from "express"
import connection from "../connection"
import { Users } from "../types"

export default async function getAllUsers(
   req: Request,
   res: Response
): Promise<void> {

   try{
   // const {name }= req.query
   const users:Users[] = await connection("labecommerce_users")
   res.status(200).send(users)
   }
   catch (error){
   res.status(500).send("Unexpected server error")
   }
   }