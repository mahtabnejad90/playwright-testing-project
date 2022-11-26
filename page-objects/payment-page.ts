import { expect, Locator, Page } from "@playwright/test";

export class PaymentPage {
    readonly page: Page;
    readonly payeeSelectbox: Locator;
    readonly payeeDetailsButton: Locator;
    readonly payeeDetail: Locator;
    readonly accountSelectbox: Locator;
    readonly amountInput: Locator;
    readonly dateInput: Locator;
    readonly descriptionInput: Locator;
    readonly submitPaymentButton: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.payeeSelectbox = page.locator('#sp_payee');
        this.payeeDetailsButton = page.locator('#sp_get_payee_details');
        this.payeeDetail = page.locator('#sp_payee_details');
        this.accountSelectbox = page.locator('#sp_account');
        this.amountInput = page.locator('#sp_amount');
        this.dateInput = page.locator('#sp_date');
        this.descriptionInput = page.locator('#sp_description');
        this.submitPaymentButton = page.locator('#pay_saved_payees');
        this.successMessage = page.locator('#alert_content > span');
    }

    async createPayment() {
        await this.payeeSelectbox.selectOption('apple');
        await this.payeeDetailsButton.click();
        await expect (this.payeeDetail).toBeVisible();
        await this.accountSelectbox.selectOption('6');
        await this.amountInput.type('5000');
        await this.dateInput.type('2021-10-10');
        await this.descriptionInput.type('test message');
        await this.submitPaymentButton.click();
    }

    async verifySuccessMessage() {
        await expect(this.successMessage).toBeVisible();
        await expect(this.successMessage).toContainText('The payment was successfully submitted.');
    }
}

