import { expect, test } from "vitest";

export function sum(a: number, b: number) {
  return a + b;
}

test("sum.ts", () => {
  expect(sum(1, 2)).toBe(3);
});
