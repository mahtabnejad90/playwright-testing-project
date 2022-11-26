import {test, expect} from '@playwright/test'
import {HomePage} from '../../page-objects/home-page'
import {LoginPage} from '../../page-objects/login-page'
import {Navbar} from '../../page-objects/components/navbar'
import {CurrencyExchange} from '../../page-objects/currency-exchange'


test.describe('Currency Exchange ', () => {

    let homePage: HomePage
    let loginPage: LoginPage
    let navbar: Navbar
    let currencyExchange: CurrencyExchange

    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navbar = new Navbar(page)
        currencyExchange = new CurrencyExchange(page)

        await homePage.visitHomePage()
        await homePage.clickSignInButton()
        await loginPage.login('username', 'password')
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    })

   test('Foreign Currency', async ({page}) => {

    await navbar.clickOnTabs('Pay Bills')

await currencyExchange.currenchExchangeForm()
await currencyExchange.verifySuccessMessage()

})

})