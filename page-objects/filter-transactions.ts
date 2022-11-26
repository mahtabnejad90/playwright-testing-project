import { expect, Locator, Page } from "@playwright/test"

export class FilterTransactions {

readonly page: Page
readonly accountSelectBox: Locator
readonly accountListResultTable: Locator
readonly nullResults: Locator

constructor(page: Page) {
    this.page = page
    this.accountSelectBox = this.page.locator('#aa_accountId')
    this.accountListResultTable = this.page.locator('#all_transactions_for_account tbody tr')
    this.nullResults = this.page.locator('.well')
}

async filterTransactions() {
    await this.accountSelectBox.selectOption('2')
    await expect(this.accountListResultTable).toHaveCount(3)
    await this.accountSelectBox.selectOption('4')
    await expect(this.accountListResultTable).toHaveCount(2)
    await this.accountSelectBox.selectOption('6')
    await expect(this.nullResults).toBeVisible()
    await expect(this.nullResults).toHaveText('No results.')
}


}