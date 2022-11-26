import {test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/home-page'
import { LoginPage } from '../../page-objects/login-page'

test.describe('Filter Transactions ', () => {

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

    test ('Filter transactions', async ({page}) => {
        await page.click('#account_activity_tab')
        await page.selectOption('#aa_accountId', '2')
        const checkingAccount = await page.locator(
            '#all_transactions_for_account tbody tr'
            )
        await expect(checkingAccount).toHaveCount(3)
        await page.selectOption('#aa_accountId', '4')

        const loanAccount = await page.locator(
            '#all_transactions_for_account tbody tr'
            )
        await expect(loanAccount).toHaveCount(2)

        await page.selectOption('#aa_accountId', '6')

        const nullResults = await page.locator(
            '.well'
            )
        await expect(nullResults).toBeVisible
    })

    

})