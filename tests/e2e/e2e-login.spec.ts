import {test} from '@playwright/test'
import {LoginPage} from '../../page-objects/login-page'
import {HomePage} from '../../page-objects/home-page'


test.describe('Login / Logout ', () => {
    let loginPage: LoginPage
    let homePage: HomePage

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    homePage = new HomePage(page)
    await homePage.visitHomePage()  
})

test ('Login Negative', async ({page}) => {
    await homePage.clickSignInButton()
    await loginPage.login('invalid', 'invalid')
    await loginPage.wait(3000)
    await loginPage.assertErrorMessage()
})

test ('Login Positive', async ({page}) => {
    await homePage.clickSignInButton()
    await loginPage.login('username', 'password')
    await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
})

test ('Login/logout', async ({page}) => {
    await homePage.clickSignInButton()
    await loginPage.login('username', 'password')
    await page.goto('http://zero.webappsecurity.com/bank/logout.html')
})
})