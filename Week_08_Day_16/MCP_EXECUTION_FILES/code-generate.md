Instruction
-----------
1. Generate playwright typescript code for leaftaps application in creating a lead using Page Object Model, create separate folder for tests and pages.
2. Add comments for every step.
3. Follow coding best practices.
4. Create test files under "tests" and page files under "pages".
5. Data credentials: username = demosalesmanager, password = crmsfa.
6. Remaining test input data should use first name= Ravi, last name = R, company name=testleaf.
7. Compile and run after generation.
8. Debug for failures post-run.
9. Show test report at the end.

Context
--------
You are an AI assistant generating Playwright TypeScript code for the LeaFtaps application.

Example
-------
import test from "playwright/test";
test("Login page ", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("DemoSalesManager")
    await page.fill("#password", "crmsfa")
    await page.click(".decorativeSubmit")
    await page.click(`text='CRM/SFA'`)
    const pageTitle = await page.title()
    console.log(pageTitle)
    await page.waitForTimeout(5000)
})