import {test, expect} from '@playwright/test'

test.describe.parallel('Transfer Funds ', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#signin_button');
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("text=Sign in")
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
        const account_summary_tab = await page.locator('#account_summary_tab')
        await expect(account_summary_tab).toContainText('Account Summary')  
    })

    test ('Transfer Funds', async ({page}) => {
        await page.click('#transfer_funds_tab')
        const transferFundsTitle = await page.locator('.board-header')
        await expect(transferFundsTitle).toContainText('Transfer Money & Make Payments')
        await page.selectOption('#tf_fromAccountId', '2')
        await page.selectOption('#tf_toAccountId', '3')
        await page.type('#tf_amount', '100')
        await page.type('#tf_description', 'test message')
        await page.click('#btn_submit')
        await page.waitForURL('http://zero.webappsecurity.com/bank/transfer-funds-verify.html')
        const verifyTransferSubmissionTitle = await page.locator('.board-header')
        await expect(verifyTransferSubmissionTitle).toContainText('Transfer Money & Make Payments - Verify')
        const cancelButton = await page.locator('#btn_cancel')
        await expect(cancelButton).toBeVisible()
        await page.click('#btn_submit')
        await page.waitForURL('http://zero.webappsecurity.com/bank/transfer-funds-confirm.html')
        const successMessage = await page.locator('.alert-success')
        await expect(successMessage).toContainText('You successfully submitted your transaction.')
    })

})

test.describe.parallel('Filter Transactions ', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/')
        await page.click('#signin_button');
        await page.type('#user_login', 'username')
        await page.type('#user_password', 'password')
        await page.click("text=Sign in")
        await page.goto('http://zero.webappsecurity.com/bank/account-summary.html')
    })

    test('Filter Transactions', async ({page}) => {
        const account_summary_tab = await page.locator('#account_activity_tab')
        await expect(account_summary_tab).toContainText('Account Activity')
        await page.click('#account_activity_tab')  
        const showTransactionsTitle = await page.locator('.board-header')
        await page.pause()
        await expect(showTransactionsTitle).toContainText('Show Transactions')
        const helpBlockText = await page.locator('.help-block')
        await expect(helpBlockText).toContainText('Choose an account to view.')
        await page.selectOption('#aa_accountId', '2')
        //add count assertion here tbc

    })

})