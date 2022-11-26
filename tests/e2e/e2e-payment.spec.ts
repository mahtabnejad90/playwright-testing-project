import {test} from '@playwright/test'
import {HomePage} from '../../page-objects/home-page'
import {LoginPage} from '../../page-objects/login-page'
import {Navbar} from '../../page-objects/components/navbar'
import {PaymentPage} from '../../page-objects/payment-page'


test.describe('Payment ', () => {

    let homePage: HomePage
    let loginPage: LoginPage
    let navbar: Navbar
    let paymentPage: PaymentPage

    
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)
        loginPage = new LoginPage(page)
        navbar = new Navbar(page)
        paymentPage = new PaymentPage(page)

        await homePage.visitHomePage()
        await homePage.clickSignInButton()
        await loginPage.login('username', 'password')
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')

    })

    test('Send a standard payment', async ({page}) => {
        await navbar.clickOnTabs('Pay Bills')
        await paymentPage.createPayment()
        await paymentPage.verifySuccessMessage()
    })

})