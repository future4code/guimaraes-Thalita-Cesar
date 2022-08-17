import { v4 as generateId } from 'uuid'
import { CustomError } from '../customError/customError';
import { InvalidRequest } from '../customError/invalidRequest';
import { MovieDatabase } from "../data/MovieDatabase"
import { createMovieDTO } from '../model/createMovieDTO';

export class MovieBusiness {
  public create= async(input: createMovieDTO)=> {
    try{
      const {title, description, duration_in_minutes, year_of_release} = input;
    if (!title|| !description || !duration_in_minutes || !year_of_release) {
      throw new InvalidRequest()
    }
    const id = generateId()

    const movieDatabase = new MovieDatabase()
    await movieDatabase.create({
      id,
      title, 
      description, 
      duration_in_minutes, 
      year_of_release
    })
  }
  catch (error:any) {
    throw new CustomError(error.message || error.sqlMessage, error.statusCode);
  }
  }
}
