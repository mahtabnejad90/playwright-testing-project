import {test, expect} from '@playwright/test'
import {HomePage} from '../../page-objects/home-page'
import {FeedbackPage} from '../../page-objects/feedback-page'


test.describe.only('Test Feedback Form ', () => {

    let homePage: HomePage
    let feedbackPage: FeedbackPage

    test.beforeEach(async ({page}) => {
       homePage = new HomePage(page)
       feedbackPage = new FeedbackPage(page)

     await homePage.visitHomePage()
     await homePage.clickFeedbackButton()
    })

    test ('Reset Feedback Form', async ({page}) => {
        await feedbackPage.fillForm('name', 'email@email.com', 'helloo', 'mahtab is my name')
        await feedbackPage.resetForm()
        await feedbackPage.assertReset()
    })

    test ('Submit Feedback Form', async ({page}) => {
        await feedbackPage.fillForm('name', 'email@email.com', 'helloo', 'mahtab is my name')
        await feedbackPage.submitForm()
        await feedbackPage.assertFeedbackTitle()
    })

//end of describe    
})