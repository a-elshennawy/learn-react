import { test, expect } from "@playwright/test";

// describe your test, then async function with page parameter
test("should increment and decrement the counter", async ({ page }) => {
  // 1. Visit your application's base URL.
  // Make sure your Vite dev server is running (npm run dev)
  await page.goto("http://localhost:5173");

  // 2. Find the heading and confirm its initial state.
  await expect(page.locator("h1")).toHaveText("Count : 0");

  // 3. Find the increment button and click it.
  await page.getByRole("button", { name: "+" }).click();

  // 4. Assert that the count has updated to 1.
  await expect(page.locator("h1")).toHaveText("Count : 1");

  // 5. Find the decrement button and click it.
  await page.getByRole("button", { name: "-" }).click();

  // 6. Assert that the count has updated back to 0.
  await expect(page.locator("h1")).toHaveText("Count : 0");
});
