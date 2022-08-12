import { authenticationData } from "../types/authenticationData";
import { post } from "../types/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
    public static TABLE_NAME = "labook_posts";

    public create = async ( {id, photo, description, type, created_at, author_id }:any): Promise<void>  =>{
    await PostDatabase.connection
      .insert({
        id, photo, description, type, created_at, author_id
      })
      .into(PostDatabase.TABLE_NAME);
  };

  public getPostById = async (id:string): Promise<post[]> => {
    try {
      const posts: post[] = [];
      const result = await PostDatabase.connection(PostDatabase.TABLE_NAME).select("*")
      .where({id:id})
      for (let post of result) {
        posts.push(post);
      }
      return posts;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

}