import {test, expect} from '@playwright/test'
import {LoginPage} from '../../page-objects/login-page'


test.describe.parallel('Login / Logout ', () => {
    var loginPage: LoginPage



test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    await loginPage.visitLoginPage()
  
})

test ('Login Negative', async ({page}) => {
    await page.click('#signin_button')
    await loginPage.login('invalid', 'invalid')
    await loginPage.assertErrorMessage()
})

test ('Login Positive', async ({page}) => {
    await page.click('#signin_button')
    await loginPage.login('username', 'password')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
})

test ('Login/logout', async ({page}) => {
    await page.click('#signin_button')
    await loginPage.login('username', 'password')
    await page.goto('http://zero.webappsecurity.com/bank/logout.html')
})
})