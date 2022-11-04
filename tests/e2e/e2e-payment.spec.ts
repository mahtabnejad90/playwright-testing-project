import {test, expect} from '@playwright/test'

test.describe.parallel('New Payment ', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button');
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("text=Sign in")
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    })

    test('Send new payment', async ({page}) => {
        await page.click('#pay_bills_tab')
        await page.selectOption('#sp_payee', 'apple')
        await page.click('#sp_get_payee_details')
        await page.waitForSelector('#sp_payee_details')
        await page.selectOption('#sp_account', '6')
        await page.type('#sp_amount', '5000')
        await page.type('#sp_date', '2021-10-10')
        await page.type('#sp_description', 'test message')
        await page.click('#pay_saved_payees')
        const sucessMessage = await page.locator('#alert_content > span')
        await expect(sucessMessage).toBeVisible()
        await expect(sucessMessage).toContainText('The payment was successfully submitted.')
    })

   test('Foreign Currency', async ({page}) => {
    await page.click('#pay_bills_tab')
    const foreignCurrencyTab = await page.locator('#tabs > ul > li:nth-child(3) > a')
    await foreignCurrencyTab.click()
    await page.selectOption('#pc_currency', 'GBP')
    const helpCurrency = await page.locator('#sp_sell_rate')
    await expect(helpCurrency).toBeVisible()
    await page.type('#pc_amount', '200')
    await page.click('#pc_inDollars_true')
    await page.click('#pc_calculate_costs')
    const conversionAmountResult = await page.locator('#pc_conversion_amount')
    await expect(conversionAmountResult).toBeVisible()
    await page.click('#purchase_cash')
    const alertSuccessMessage = await page.locator('#alert_container')
    await expect(alertSuccessMessage).toBeVisible()
    await expect(alertSuccessMessage).toContainText('Foreign currency cash was successfully purchased.')
   })

})