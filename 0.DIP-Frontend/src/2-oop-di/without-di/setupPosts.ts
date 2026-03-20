import { PostsService } from "./PostsService";

// composition root
export const setupPosts = () => {
  new PostsService();
};
