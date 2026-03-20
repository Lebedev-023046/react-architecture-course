import type { PostsDTO } from "./types";

export class PostsApi {
  async getPosts(): Promise<PostsDTO> {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Ошибка при запросе на статус: ${response.status}`);
    }

    const posts: PostsDTO = await response.json();
    return posts;
  }
}
