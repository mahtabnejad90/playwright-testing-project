import {test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/home-page'
import { LoginPage } from '../../page-objects/login-page'

test.describe('Transfer funds and make payments ', () => {

    let homePage: HomePage
    let loginPage: LoginPage

    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)

        await homePage.visitHomePage()
        await homePage.clickSignInButton()
        await loginPage.login('username', 'password')
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    })

    test ('Transfer funds', async ({page}) => {
        await page.click('#transfer_funds_tab')
        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '3')
        await page.type('#tf_amount', '500')
        await page.type('#tf_description', 'test message')
        await page.click('#btn_submit')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/bank/transfer-funds-verify.html')
        await page.click('#btn_submit')
        await expect(page).toHaveURL('http://zero.webappsecurity.com/bank/transfer-funds-confirm.html')
    })
})