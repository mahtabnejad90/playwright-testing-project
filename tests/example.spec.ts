import { test, expect } from '@playwright/test';
import { loadPage, assertTitle } from '../helpers';


test.describe('Basic test', () => {
test("simple basic test", async({ page }) => {

    //navigates to website
    await page.goto("https://example.com")

    //gives access to the h1 selector
    const pageTitle = await page.locator("h1")

    //assertion to check value of selector
    await expect(pageTitle).toContainText("Example Domain")
}) 
})

test.describe("input test suite", () => {

    test("clicking on element", async({ page }) => {

        //navigates to website
        await page.goto("http://zero.webappsecurity.com/index.html")
    
        //click on element id. # is used to access id
        await page.click("#signin_button")
    
        await page.click("text=Sign in")
    
        const loginErrorMessage = await page.locator(".alert-error")
        await expect(loginErrorMessage).toContainText("Login and/or password are wrong.")
        
    })
    
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

})

test.describe("Selectors and assertions", () => {
    test.skip("Selectors", async({ page }) => {

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
    
    
    })
})    
    //.only executes only annotated test
    // @tagName adds tag to test
    test("Assertions @mahtab", async({ page }) => {
    
        //navigates to website
        await page.goto("https://example.com")
        await expect(page).toHaveURL("https://example.com")
        await expect(page).toHaveTitle("Example Domain")
        const elementHOne = await page.locator("h1")
        await expect(elementHOne).toBeVisible()
        await expect(elementHOne).toHaveText("Example Domain")
        await expect(elementHOne).toHaveCount(1)
    
        const elementNonExisting = await page.locator("h5")
        await expect(elementNonExisting).not.toBeVisible()
    })

test.describe("Hooks & Screenshots", () => {

    test.beforeEach(async({ page }) => {
        await page.goto("http://example.com")
    })

        test("Working with inputs", async({ page }) => {
            //take screenshot of full page
            await page.screenshot({ path: "screenshot.png", fullPage: true })

})

        test("single element screenshot", async({ page }) => {
    
            //take screenshot of full page
            const singleElement = await page.$('h1')
            await singleElement!.screenshot({ path: "single_element_screenshot.png" })
})

})


test.describe ("env variables" , () => {

    test.beforeEach(async({ page }) => {
        await page.goto(process.env.BASE_URL!)
    })

    test("Working with inputs", async({ page }) => {

        await expect(page).toHaveTitle("Example Domain")

    })
})

test.only ("Customer helpers" , async({ page }) => {
    await loadPage(page)
    // await page.pause() > adds a pause to the test for debugging
    await assertTitle(page)
})