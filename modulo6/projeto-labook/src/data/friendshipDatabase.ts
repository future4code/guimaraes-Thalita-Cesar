
import { BaseDatabase } from './BaseDatabase'

export class FriendshipDatabase extends BaseDatabase {
    public static TABLE_NAME = "friendship_tab";


    public async follow({id, follower_id, followed_id}:any): Promise<void> {
        try {
            await FriendshipDatabase.connection
                    .insert({
                        id, 
                        follower_id, 
                        followed_id
                    })
                    .into(FriendshipDatabase.TABLE_NAME)
            }
       catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
      }
    };

    public async unfollow({id, follower_id, followed_id}:any): Promise<void> {
            await FriendshipDatabase.connection
                .delete(id)
                .from(FriendshipDatabase.TABLE_NAME)
                .where({ follower_id, followed_id })
                .orWhere({ followed_id, follower_id})
                .into(FriendshipDatabase.TABLE_NAME)

    }
}