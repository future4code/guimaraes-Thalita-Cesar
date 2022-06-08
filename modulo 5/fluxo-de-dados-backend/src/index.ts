import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { products } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/teste', (req: Request, res: Response) => {
    res.status(200).send("Deu certo")})


 app.post('/create/products', (req: Request, res: Response) => {
     try {
    const { id, name, price} = req.body
    if(!id || !name ||!price){
        throw new Error("Erro! Está faltando algum parâmetro");      
      }
  
      if(typeof name !== "string" ){
        throw new Error("O nome é diferente de string")}
  
      if(typeof price !=="number" ||price <= 0){
        throw new Error("O price está diferente de number ou está menor que 0")}

    products.push({id: id, name: name, price: price })
    res.status(200).send(products)
 }
  catch{
      res.status(400).send('produto não inserido')}
})

app.get('/products', (req: Request, res: Response) => {
    res.status(200).send(products.map(product => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
        }
    }))

})

app.put("/products/:id", (req: Request, res: Response)=>{
    try{
      const id = req.params.id
      const price = req.body.price

      if(!price || price !=="number"|| price <= 0){
        throw new Error("Precisa passar o parâmetro válido")
      }
      products.forEach((product)=>{
        if(product.id === id){
          product.price = price
        }})       
      res.status(201).send(products)
    }
    catch{
        res.status(400).send('O produto não foi editado. Tente Novamente')
    }}
  )

  app.delete("/products/:id", (req: Request, res: Response)=>{
    try{
      const id = req.params.id
      products.forEach((product, i)=>{
        if(product.id === id){
          products.splice(i,1)
        }
      })
      res.status(200).send(products)
    }
    catch{
        res.status(400).send('O produto não foi deletado. Tente Novamente')
    };
}
)
 app.listen(3003, () => {console.log("Servidor de pé na porta 3003")})