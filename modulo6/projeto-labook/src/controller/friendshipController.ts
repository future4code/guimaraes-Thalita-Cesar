import { Request, Response } from 'express'
import { FriendshipBusiness } from '../business/friendshipBusiness'
import { BaseDatabase } from '../data/BaseDatabase'
import { createFriendshipDTO } from '../model/createFriendshipDTO'


export class FriendshipController {
    async follow(req: Request, res: Response):Promise<void> {
        try {
            const {followed_id, follower_id} = req.body
            const input:createFriendshipDTO ={
                followed_id, follower_id
              }
            
            const friendshipBusiness = new FriendshipBusiness()
            await friendshipBusiness.follow(input)

            res.status(201).send({ message: "Amizade criada com sucesso" });
             } catch (error: any) {
            res.status(400).send(error.message);
             }
            }

    async unfollow(req: Request, res: Response):Promise<void> {
        try {
        const {id} = req.body
        const input = {id}
        const friendshipBusiness = new FriendshipBusiness()
        await friendshipBusiness.unfollow(input)

            res.status(200).send({ message: "Amizade desfeita!" })

        } catch (error: any) {
            res.status(400).send(error.message);
    }
    }
}