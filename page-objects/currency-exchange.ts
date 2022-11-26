import { expect, Locator, Page } from "@playwright/test"

export class CurrencyExchange {

    readonly page: Page
    readonly foreignCurrencyTab: Locator
    readonly currencySelectBox: Locator
    readonly amountInput: Locator
    readonly inDollarsCheckbox: Locator
    readonly calculateCostsButton: Locator
    readonly conversionAmountResult: Locator
    readonly purchaseCashButton: Locator
    readonly alertSuccessMessage: Locator


constructor(page: Page) {
    this.page = page
    this.foreignCurrencyTab = this.page.locator('#tabs > ul > li:nth-child(3) > a')
    this.currencySelectBox = this.page.locator('#pc_currency')
    this.amountInput = this.page.locator('#pc_amount')
    this.inDollarsCheckbox = this.page.locator('#pc_inDollars_true')
    this.calculateCostsButton = this.page.locator('#pc_calculate_costs')
    this.conversionAmountResult = this.page.locator('#pc_conversion_amount')
    this.purchaseCashButton = this.page.locator('#purchase_cash')
    this.alertSuccessMessage = this.page.locator('#alert_content')
}

async currenchExchangeForm() {
    await this.foreignCurrencyTab.click()
    await this.currencySelectBox.selectOption('EUR')
    await this.amountInput.fill('200')
    await this.inDollarsCheckbox.click()
    await this.calculateCostsButton.click()
    await this.conversionAmountResult.isVisible()
    await this.purchaseCashButton.click()
}

async verifySuccessMessage() {
    await this.alertSuccessMessage.isVisible()
    await expect(this.alertSuccessMessage).toContainText('Foreign currency cash was successfully purchased.')
}



}