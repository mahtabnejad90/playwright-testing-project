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

/* test("Selectors", async({ page }) => {

    await page.click("text=some text")

    //css selectors
    await page.click("button")
    await page.click("#id")
    await page.click(".class")

    //visible css selectors
    await page.click(".submit-button:visible")
    
    // combos
    await page.click("#username .first")

    //xpath selectors
    await page.click("//button")


}) */

test("Working with inputs", async({ page }) => {

    //navigates to website
    await page.goto("http://zero.webappsecurity.com/index.html")

    await page.click("#signin_button")

    await page.fill("#user_login", "username")
    await page.type('#user_login', 'some username')
    await page.type('#user_password', 'some password')
    await page.click("text=Sign in")
    const loginErrorMessage = await page.locator(".alert-error")
    await expect(loginErrorMessage).toContainText("Login and/or password are wrong.")

})