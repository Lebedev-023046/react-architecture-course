import { httpClient } from "../shared/HttpClient";
import type { PostsDTO } from "../types";
import type { PostsRepository } from "./types";

export class PostsApi implements PostsRepository {
  async getPosts(): Promise<PostsDTO> {
    return httpClient.get<PostsDTO>("/posts");
  }
}
