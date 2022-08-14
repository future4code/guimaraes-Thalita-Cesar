import { BaseDatabase } from "../data/BaseDatabase";
import { feed } from "../types/feed";

export class FeedDatabase extends BaseDatabase {
    public static TABLE_NAME = "labook_posts";

  public async showFeed(id: string): Promise<any> {
    try {
        const feeds: feed[] = [];
        const result = await FeedDatabase.connection(FeedDatabase.TABLE_NAME).select(`
            photo,
            description,
            type,
            created_at,
            author_id,
              LEFT JOIN friendship_tab ON labook_posts.author_id = friendship_tab.followed_id
              WHERE
              friendship_tab.follower_id = '${id}'
              ;
        `)
        for (let feed of result) {
          feeds.push(feed);
        }
        return feeds
    }
        catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
          }
        }}