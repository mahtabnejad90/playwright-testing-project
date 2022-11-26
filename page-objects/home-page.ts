import { expect, Locator, Page } from "@playwright/test"

export class HomePage {

readonly page: Page
readonly signInButton: Locator
readonly searchBar: Locator


constructor(page: Page) {
    this.page = page
    this.signInButton = page.locator('#signin_button')
    this.searchBar = page.locator('#searchTerm')
}


async visitHomePage() {
    await this.page.goto('http://zero.webappsecurity.com/')

}

async clickSignInButton() {
    await this.signInButton.click()
}

async searchFor(phrase: string) {
    await this.searchBar.type(phrase)
    await this.page.keyboard.press('Enter')
}


}