import {test} from '@playwright/test'
import { HomePage } from '../../page-objects/home-page'
import { LoginPage } from '../../page-objects/login-page'
import {Navbar} from '../../page-objects/components/navbar'
import {TransferFunds} from '../../page-objects/transfer-funds'

test.describe('Transfer funds and make payments ', () => {

    let homePage: HomePage
    let loginPage: LoginPage
    let navbar: Navbar
    let transferFunds: TransferFunds

    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navbar = new Navbar(page)
        transferFunds = new TransferFunds(page)

        await homePage.visitHomePage()
        await homePage.clickSignInButton()
        await loginPage.login('username', 'password')
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    })

    test ('Transfer funds', async ({page}) => {
        await navbar.clickOnTabs('Transfer Funds')
        await transferFunds.transferFunds()
    })
})