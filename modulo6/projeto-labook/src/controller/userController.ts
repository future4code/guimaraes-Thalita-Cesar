import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { createUserDTO } from "../model/createUserDTO";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;
      const input : createUserDTO ={
        email, name, password
      }

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }}