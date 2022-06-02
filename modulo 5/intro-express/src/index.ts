import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { users } from "./data/users";
import { posts } from "./data/posts";

const app = express()
app.use(express.json())
app.use(cors())

//Exercicio 1

app.get('/', (req: Request, res: Response) => {
    res.status(200).send("Hello World")
})


//4

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users.map(user => {
        return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            website: user.website,
        }
    }))

})

//7

app.get('/posts', (req: Request, res: Response) => {
    res.status(200).send(posts.map(post => {
        return {
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId
        }
    }))
}
)

//8

app.get('/posts', (req: Request, res: Response) => {
    const userId = req.params.id
    const post = posts.find(post =>
        post.id === String(userId)
    )
    if (!post) {
        res.status(404).send("Posts do usuário não foi encontrado")
    } else {
        res.status(200).send(post)
    }
})

app.listen(5000, () => {
    console.log("Servidor na porta 5000")
})