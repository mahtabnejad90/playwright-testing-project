import {test, expect} from '@playwright/test'

test.describe.parallel('Test Feedback Form ', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('http://zero.webappsecurity.com/');
        await page.click('#feedback');
    })

    test ('Reset Feedback Form', async ({page}) => {
        await page.type('#name', 'Mahtab Nejad')
        await page.type('#email', 'mahtab@dummyemail.com')
        await page.type('#subject', 'test subject')
        await page.type('#comment', 'hello world, I am testing this. I love penguins and testing')
        await page.click("input[name='clear']")
        const nameInput = await page.locator('#name')
        const emailInput = await page.locator('#email')
        const subjectInput = await page.locator('#subject')
        const commentInput = await page.locator('#comment')

        await expect(nameInput).toBeEmpty()
        await expect(emailInput).toBeEmpty()
        await expect(subjectInput).toBeEmpty()
        await expect(commentInput).toBeEmpty()
    })

    test ('Submit Feedback Form', async ({page}) => {
        await page.type('#name', 'Mahtab Nejad')
        await page.type('#email', 'mahtab@dummyemail.com')
        await page.type('#subject', 'test subject')
        await page.type('#comment', 'hello world, I am testing this. I love penguins and testing')
        await page.click("input[type='submit']")
        await page.waitForURL('http://zero.webappsecurity.com/sendFeedback.html')
        await page.waitForSelector('#feedback-title')

    })

//end of describe    
})