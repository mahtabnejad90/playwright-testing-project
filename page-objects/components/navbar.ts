import { expect, Locator, Page } from "@playwright/test"

export class Navbar {

readonly page: Page
readonly accountSummary: Locator
readonly accountActivity: Locator
readonly transferFunds: Locator
readonly payBills: Locator
readonly money_map_tab: Locator
readonly onlineStatements: Locator


constructor(page: Page) {
    this.page = page
    this.accountSummary = page.locator('#account_summary_tab')
    this.accountActivity = page.locator('#account_activity_tab')
    this.transferFunds = page.locator('#transfer_funds_tab')
    this.payBills = page.locator('#pay_bills_tab')
    this.money_map_tab = page.locator('#money_map_tab')
    this.onlineStatements = page.locator('#online_statements_tab')
}

async clickOnTabs(tabName) {
 switch (tabName) {
    case 'Account Summary':
        await this.accountActivity.click()
        break;
    case 'Account Activity':
        await this.accountActivity.click()
        break;
    case 'Transfer Funds':
        await this.transferFunds.click()
        break;
    case 'Pay Bills':
        await this.payBills.click()
        break;
    case 'Money Map':
        await this.money_map_tab.click()
        break;
    case 'Online Statements':
        await this.onlineStatements.click()
        break;
    default:
        throw new Error('Tab doesn\'t exist')
    }
}



}