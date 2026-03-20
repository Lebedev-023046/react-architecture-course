import { type PostsRepository } from "../repository/types";
import type { PostsDTO } from "../types";

export class PostsService {
  isLoading: boolean = false;
  private posts: PostsDTO | null = null;

  constructor(private postsRepository: PostsRepository) {}

  async getPosts() {
    this.isLoading = true;
    this.posts = await this.postsRepository.getPosts();
    this.isLoading = false;

    return this.posts;
  }
}
