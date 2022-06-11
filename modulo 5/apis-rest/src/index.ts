import express, { Request, Response } from "express";
import cors from "cors";
import { users, UserType, User} from "./data";

const app = express()

app.use(express.json())
app.use(cors())

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send("Todos os usuários")})


app.get("/users" , (req:Request , res:Response) => {
    try {
        const getUserByName = req.query.type as string

        const userName = users.filter((user) =>{
        if (getUserByName.toLowerCase() === UserType.ADMIN) {
               return user
        }
        res.status(200).send(userName)
        })
        } 
        catch{
        res.status(404).send('Nenhum usuário foi encontrado')
        };
    });
//O Query Parameters

app.post('/users/create', (req:Request, res:Response)=>{
    
        try{
            const { name, email, type, age } = req.body

            const createUser:User = {
                id: users.length+1,
                name,
                email,
                type: type.toUpperCase(),
                age
            }
    
            users.push(createUser)
            res.status(200).send(users)
        }
        catch{
            res.status(400).send('Solicitação incorreta. Tente Novamente.')
            };
    })

    // Não há diferença na usabilidade dos métodos Post e Put, no CRUD o post é
    // mais utilizado para enviar uma informação e Put para atualizar.

    app.listen(5000, () => {
        console.log("Servidor na porta 5000")
    })