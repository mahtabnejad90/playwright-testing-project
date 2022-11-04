import {test, expect} from '@playwright/test'

test.describe.parallel.only('Transfer funds and make payments ', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/index.html')
        await page.click('#signin_button');
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("text=Sign in")
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