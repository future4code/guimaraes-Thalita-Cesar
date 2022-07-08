import { Request, Response } from "express"
import connection from "../connection"
import { v4 as generateId } from 'uuid';
import transporter from "../mailTransporter";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {

   try {
      const { name, email, password } = req.body

      console.log(req.headers["content-type"])

      await connection("labecommerce_users")
         .insert({
            id: generateId(),
            name:name, 
            email:email, 
            password:password
         })

      const emailSend = await transporter.sendMail({
               from: "<thalita.walleska@gmail.com>",
               to: email,
               subject: "Mensagem de confrimação",
               text: `Olá ${name} sua conta foi criada`,
               html: `<p>Olá ${name} sua conta foi criada</p>`     
            })
            console.log(emailSend)
      res.status(201).send("O usuário foi criado com sucesso!")
      } catch (error) {
      res.status(500).send("Unexpected server error")
}
}