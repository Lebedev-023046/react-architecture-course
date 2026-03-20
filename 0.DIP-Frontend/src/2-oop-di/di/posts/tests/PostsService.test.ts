import { expect, test } from "vitest";
import { PostsService } from "../PermissionService";
import { PostsMockApi } from "../storages/PostsMockApi";

test("PostsService.ts", async () => {
  const postService = new PostsService(new PostsMockApi());

  const posts = await postService.getPosts();

  expect(posts).toEqual([
    {
      userId: 24,
      id: 5,
      title: "Why DI is the most important principle",
    },
  ]);
});
