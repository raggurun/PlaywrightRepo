//step1 
import {test as basePage, Page} from '@playwright/test'

//step2
export const customFixture=basePage.extend<{Leaftaps:any}>({

//step3
Leaftaps:async({page}:{ page: Page },use: (arg0: Page) => any)=>{

//step 4
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","Demosalesmanager")
await page.fill("#password","crmsfa")
await page.click("//input[@value='Login']")
await page.waitForTimeout(10000)

//step 5
await use(page)
    }
})