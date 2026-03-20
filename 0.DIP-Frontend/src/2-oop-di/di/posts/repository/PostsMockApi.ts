import type { PostsDTO } from "../types";
import type { PostsRepository } from "./types";

export class PostsMockApi implements PostsRepository {
  async getPosts(): Promise<PostsDTO> {
    return [
      {
        userId: 24,
        id: 5,
        title: "Why DI is the most important principle",
      },
    ];
  }
}
