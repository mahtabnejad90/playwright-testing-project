import {test, expect} from '@playwright/test'

test.describe.parallel('Login / Logout ', () => {

test.beforeEach(async ({page}) => {
    await page.goto('http://zero.webappsecurity.com/');
  
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
    const account_summary_tab = await page.locator('#account_summary_tab')
    await expect(account_summary_tab).toContainText('Account Summary')  
    await page.goto('http://zero.webappsecurity.com/logout.html')

})
})