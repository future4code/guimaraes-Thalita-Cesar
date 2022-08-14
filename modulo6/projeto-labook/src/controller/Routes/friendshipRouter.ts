import express from 'express'
import { FriendshipController } from '../friendshipController';

export const friendshipRouter = express.Router()

const friendshipController = new FriendshipController()

friendshipRouter.post("/follow", friendshipController.follow);
friendshipRouter.delete("/unfollow/:id", friendshipController.unfollow);