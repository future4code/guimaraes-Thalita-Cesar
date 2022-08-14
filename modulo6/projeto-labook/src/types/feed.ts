import { POST_TYPES } from "./postTypes"

export type feed = {
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: string,
    author_id: string,
 }
