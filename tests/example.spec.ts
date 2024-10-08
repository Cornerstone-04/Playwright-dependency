import test, { expect } from "@playwright/test";

test.only("basic test", async ({ page }) => {
  await page.goto("https://commitquality.com/");
  await expect(page.locator('[data-testid="navbar-logout"]')).toBeVisible();
  await page.screenshot({
    path: "screenshots/auth-setup.jpeg",
    fullPage: true,
  });
});
