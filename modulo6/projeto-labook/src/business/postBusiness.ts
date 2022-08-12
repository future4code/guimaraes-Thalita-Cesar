import { PostDatabase } from "../data/PostDatabase";
import { createPostDTO } from "../model/createPostDTO";
import { generateData } from "../services/generateData";
import { generateId } from "../services/generateId";
import { authenticationData } from "../types/authenticationData";
import { post } from "../types/post";

export class PostBusiness {
  public create = async (input: createPostDTO): Promise<void> => {
    try {
      const { photo, description, type, author_id } = input;
      const id: string = generateId();
      const created_at: string = generateData();
      
      const postDatabase = new PostDatabase ()

     await postDatabase.create({
        id,
        photo,
        description,
        type,
        created_at,
        author_id,
    })
}
     catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getPostById = async (id:string): Promise<post[]> => {
    try {
      const postDatabase = new PostDatabase ()
      const post =  await postDatabase.getPostById(id)
      return post;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
