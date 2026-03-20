import { PostsApi } from "./repository/PostsApi";
import { PostsService } from "./services/PostService";

export const setupPosts = () => {
  new PostsService(new PostsApi());
};
