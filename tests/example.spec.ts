import { test, expect } from '@playwright/test';

test("simple basic test", async({ page }) => {

    //navigates to website
    await page.goto("https://example.com")

    //gives access to the h1 selector
    const pageTitle = await page.locator("h1")

    //assertion to check value of selector
    await expect(pageTitle).toContainText("Example Domain")

})