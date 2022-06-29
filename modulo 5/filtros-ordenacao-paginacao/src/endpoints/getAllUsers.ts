import { Request, Response } from "express"
import { connection } from "../data/connection"

//1
// a) Crie uma cópia do endpoint acima, e altere-o para que ele possa 
// receber um parâmetro de filtragem por **nome**. Este nome deve ser 
// enviado por **query params**.

export const getUser = async(req: Request,res: Response): Promise<void> =>{
   try {
      let name = req.query.name;

      if(!name) { 
         name ='%' 
      }

      const users = await connection('aula48_exercicio').where("name", "like", `%${name}`)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// b) Crie mais uma cópia do endpoint acima, e agora permita que haja 
// filtragem por **tipo** de user. O tipo de user deve ser passado por 
// **path params.**

export const getUsersByType = async(req: Request,res: Response): Promise<void> =>{
   try {

      let type = req.query.type

      if(!type) { 
         type ='%' 
      }

      const users = await connection('aula48_exercicio').where("type", "=", `%${type}`)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No type found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

//Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de 
// ordenação que possa receber nome ou tipo de user. A ordenação padrão deve ser 
// crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser 
// por email.

export const getUsersOrTypeByOrder = async(req: Request,res: Response): Promise<void> =>{
   try {

      let sort = req.query.sort as string
      let order = req.query.order as string

      if( sort !== "name" && sort !== "email"){
         sort = "name"
      }
      if(sort === "email"){
         sort = "email"
      }

      if (order?.toUpperCase() !== 'ASC' || order?.toUpperCase() !== "DESC") { order = "ASC" }

      const users = await connection('aula48_exercicio').orderBy(order, sort).select()

      if(users.length < 1){
         res.statusCode = 404
         throw new Error("No user found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, 
// e permita que o usuário possa passar a página que deseja ver. O número da página deve 
// ser passado por query params.

export const getUserPerPage = async(req: Request,res: Response): Promise<void> =>{
   try {

let size = Number(req.query.size)
let page = Number(req.query.page)

if(isNaN(size) || size < 1){
   size = 5
}

if(isNaN(page) || page < 1){
   page = 1
}

let offset = size * (page - 1)

const users = await connection('aula48_exercicio')
.limit(size)
.offset(offset)
.select()

if(!users.length){
   res.statusCode = 404
   throw new Error("No user found")
}

res.status(200).send(users)

} catch (error:any) {
console.log(error)
res.send(error.message || error.sqlMessage)
}
}


// Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens,
//     a ordenação e a paginação). Atribua valores padrão para filtragem, ordenação e 
//     paginação para que:

// - Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;
// - Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por **nome** 
// em ordem **decrescente;**
// - Caso o usuário não forneça número de página, deve começar na página 1

export async function getAll(req: Request, res: Response): Promise<void> { 

   let name = req.query.name 
   let type = req.query.type
   let sort = req.query.sort 
   let order = req.query.order 
   let size = Number(req.query.size)
   let page = Number(req.query.page)
   

   try {

      if(){
        
      }

      if(){
        
      }

      if(){
        
      }
      

      const users = await connection("aula48_exercicio")
      .where("name", "like", `%${name}%`)
      .where("type", "=", `%${type}`)
      .orderBy(sort, order)
      .limit(size)
      .offset(offset)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No user found")
      }
      
      res.status(200).send(users)
      
      } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
      }
      }