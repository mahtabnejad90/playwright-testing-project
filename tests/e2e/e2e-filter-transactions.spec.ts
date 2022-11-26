import {test} from '@playwright/test'
import { HomePage } from '../../page-objects/home-page'
import { LoginPage } from '../../page-objects/login-page'
import { Navbar } from '../../page-objects/components/navbar'
import { FilterTransactions } from '../../page-objects/filter-transactions'

test.describe('Filter Transactions ', () => {

    let homePage: HomePage
    let loginPage: LoginPage
    let navbar: Navbar
    let filterTransactions: FilterTransactions
    
    test.beforeEach(async ({page}) => {

        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navbar = new Navbar(page)
        filterTransactions = new FilterTransactions(page)

        await homePage.visitHomePage()
        await homePage.clickSignInButton()
        await loginPage.login('username', 'password')
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    })

    test ('Filter transactions', async ({page}) => {
        await navbar.clickOnTabs('Account Activity')
        await filterTransactions.filterTransactions()
    })

    

})