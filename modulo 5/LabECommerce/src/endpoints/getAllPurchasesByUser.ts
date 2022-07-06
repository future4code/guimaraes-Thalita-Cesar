import { Request, Response } from "express"
import connection from "../connection"
import { Purchases } from "../types"

export default async function getAllPurchasesByUsers(
   req: Request,
   res: Response
): Promise<void> {

   try{
   const user_id = req.params.user_id
   const purchases:Purchases [] = await connection("labecommerce_purchases")
   .select("product_id" , "total_price", "quantity")
   .where("user_id", "like", `${user_id}`)
   res.status(200).send(purchases)
   }
   catch (error){
   res.status(500).send("Unexpected server error")
   }
   }