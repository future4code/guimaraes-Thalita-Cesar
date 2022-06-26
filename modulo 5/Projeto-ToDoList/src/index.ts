import connection from "./connection";
import app from "./app"
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';

const userID = generateId()

    app.post("/user", async (req: Request, res: Response) => {
      try {
          await connection.raw(`
          INSERT INTO User (userID, name, nickname, email)
          VALUES(
              "${req.body.userID}",
              "${req.body.name}",
              "${req.body.nickname}",
              "${req.body.email}"
          )
          `)
          res.status(200).send('Usuário criado com sucesso.')
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

  
  