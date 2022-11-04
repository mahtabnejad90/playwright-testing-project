import {test, expect} from '@playwright/test'
import {LoginPage} from '../../page-objects/login-page'


test.describe.parallel('Login / Logout ', () => {
    var loginPage: LoginPage



test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    await loginPage.visitLoginPage()
  
})

test ('Login Negative', async ({page}) => {
    await page.click('#signin_button');
    await page.type('#user_login', 'invalid username')
    await page.type('#user_password', 'invalid password')
    await page.click("text=Sign in")
    const errorMessage = await page.locator('.alert-error')
    await expect(errorMessage).toContainText('Login and/or password are wrong.')
})

test ('Login Positive', async ({page}) => {
    await page.click('#signin_button');
    await page.type('#user_login', 'username')
    await page.type('#user_password', 'password')
    await page.click("text=Sign in")
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

})
})