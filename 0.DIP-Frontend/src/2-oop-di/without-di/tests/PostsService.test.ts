import { expect, test } from "vitest";
import { PostsService } from "../PostsService";

test.skip("PostsService.ts", async () => {
  const service = new PostsService();

  const result = await service.getPermissions();

  /*
  1) PostsApi ходит на бэк. Тест зависит от сети / сервера => дольше времени, больше затрат.
  2) PostsApi завязан на наш бэк, но для какого-то модуля приложения может потребоваться,
  чтобы посты брались из другого источника: supabase, localStorage и т.д.
  Система не расширяемая.
 */
  expect(Array.isArray(result)).toBe(true);
});
