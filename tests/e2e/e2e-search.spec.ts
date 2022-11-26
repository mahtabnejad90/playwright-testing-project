import {test, expect} from '@playwright/test'
import {HomePage} from '../../page-objects/home-page'

test.describe.parallel('Test Search Functionality ', () => {

test('Search Functionality', async ({page}) => {

    let homePage: HomePage = new HomePage(page)
    await homePage.visitHomePage()
    await homePage.searchFor('bank')
    const searchResultsTitle = await page.locator('h2')
    await expect(searchResultsTitle).toContainText('Search Results:')
    const numberOfSearchResults = await page.locator('li > a')
    await expect(numberOfSearchResults).toHaveCount(2)
})
})