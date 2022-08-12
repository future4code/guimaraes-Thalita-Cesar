import express, { Express, Request, Response } from "express"
import { PostBusiness } from "../business/postBusiness";
import { createPostDTO } from "../model/createPostDTO";

export class PostController {
    async create(req: Request, res: Response):Promise<void> {
        try {
          const { photo, description, type, author_id, created_at } = req.body;
          const input:createPostDTO ={
            photo, 
            description, 
            type,
            created_at,
            author_id
          }
    
          const postBusiness = new PostBusiness();
          await postBusiness.create(input);
    
          res.status(201).send({ message: "Post criado com sucesso" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }
    getPostById = async (req: Request, res: Response) => {
        try {
          const id  = req.params;
          const postBusiness = new PostBusiness();
          const post = await postBusiness.getPostById(id);
          res.status(200).send(post);
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };
    }

   