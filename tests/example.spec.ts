import { test, expect } from '@playwright/test';

test("simple basic test", async({ page }) => {

    //navigates to website
    await page.goto("https://example.com")

    //gives access to the h1 selector
    const pageTitle = await page.locator("h1")

    //assertion to check value of selector
    await expect(pageTitle).toContainText("Example Domain")

})

test("clicking on element", async({ page }) => {

    //navigates to website
    await page.goto("http://zero.webappsecurity.com/index.html")

    //click on element id. # is used to access id
    await page.click("#signin_button")

    await page.click("text=Sign in")

    const loginErrorMessage = await page.locator(".alert-error")
    await expect(loginErrorMessage).toContainText("Login and/or password are wrong.")
    




})