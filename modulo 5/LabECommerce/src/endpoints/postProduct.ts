import { Request, Response } from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';

export default async function postProduct(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, price, image_url } = req.body

      console.log(req.headers["content-type"])

      await connection("labecommerce_products")
         .insert({
            id: generateId(),
            name: name, 
            price: price, 
            image_url: image_url
         })

      res.status(201).send("Produto adcionado com sucesso")
   }  catch (error) {
      res.status(500).send("Unexpected server error")
   }
}