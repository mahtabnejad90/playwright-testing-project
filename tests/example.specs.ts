import { test, expect } from '@playwright/test';

test("simple basic test", async({ page }) => {

    await page.goto("https://example.com")
    const pageTitle = await page.locator("h1")
    await expect(pageTitle).toContain("Example Domain")

})