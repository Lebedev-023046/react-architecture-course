import type { PostsDTO } from "../types";

export interface PostsRepository {
  getPosts(): Promise<PostsDTO>;
}
