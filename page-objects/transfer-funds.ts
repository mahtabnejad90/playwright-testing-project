import { expect, Locator, Page } from "@playwright/test"

// export const verifyLink = "http://zero.webappsecurity.com/bank/transfer-funds-verify.html"
// export const confirmLink = "http://zero.webappsecurity.com/bank/transfer-funds-confirm.html"

export class TransferFunds {
    readonly page: Page
    readonly fromAccountSelectBox: Locator
    readonly toAccountSelectBox: Locator
    readonly amountInput: Locator
    readonly descriptionInput: Locator
    readonly submitButton: Locator
    readonly verifyLink: any
    readonly confirmLink: any


  constructor(page: Page) {
    this.page = page
    this.fromAccountSelectBox = page.locator('#tf_fromAccountId')
    this.toAccountSelectBox = page.locator('#tf_toAccountId')
    this.amountInput = page.locator('#tf_amount')
    this.descriptionInput = page.locator('#tf_description')
    this.submitButton = page.locator('#btn_submit')
    this.verifyLink = "http://zero.webappsecurity.com/bank/transfer-funds-verify.html"
    this.confirmLink = "http://zero.webappsecurity.com/bank/transfer-funds-confirm.html"
}

async transferFunds() {
    await this.fromAccountSelectBox.selectOption('2')
    await this.toAccountSelectBox.selectOption('3')
    await this.amountInput.type('500')
    await this.descriptionInput.type('test message')
    await this.submitButton.click()
    await expect(this.page).toHaveURL(this.verifyLink)
    await this.submitButton.click()
    await expect(this.page).toHaveURL(this.confirmLink)
}

}