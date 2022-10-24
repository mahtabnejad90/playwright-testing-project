import {test, expect} from '@playwright/test'

test.describe.parallel('Test Search Functionality ', () => {

test ('Search Functionality', async ({page}) => {
    const validSearchInput = 'bank'
    
    await page.goto('http://zero.webappsecurity.com/')
    await page.click('#searchTerm')
    await page.type('#searchTerm', validSearchInput)
    await page.keyboard.press('Enter')
    const searchResultsTitle = await page.locator('h2')
    await expect(searchResultsTitle).toContainText('Search Results:')
    const numberOfSearchResults = await page.locator('li > a')
    await expect(numberOfSearchResults).toHaveCount(2)
})
})