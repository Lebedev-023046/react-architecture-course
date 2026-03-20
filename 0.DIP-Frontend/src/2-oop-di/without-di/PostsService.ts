import { PostsApi } from "./PostsApi";
import type { PostsDTO } from "./types";

export class PostsService {
  isLoading: boolean = false;
  private posts: PostsDTO | null = null;

  // Нету возможности подмены
  private postsApi = new PostsApi();

  async getPermissions() {
    this.isLoading = true;
    this.posts = await this.postsApi.getPosts();
    this.isLoading = false;

    return this.posts;
  }
}
