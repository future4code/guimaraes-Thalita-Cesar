import { Request, Response } from "express"
import connection from "../connection"
import { Purchases } from "../types"
import { v4 as generateId } from 'uuid';

export default async function postPurchases(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { user_id, product_id, total_price, quantity  } = req.body

      console.log(req.headers["content-type"])

      await connection("labecommerce_purchases")
         .insert({
            id: generateId(),
            user_id:user_id, 
            product_id: product_id,
            total_price: total_price, 
            quantity: quantity
         })

      res.status(201).send("ok")
   } catch (error) {
      res.status(500).send("Unexpected server error")
   }
}