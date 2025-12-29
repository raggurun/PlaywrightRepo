import test from '@playwright/test';

test.use({ storageState: 'utils/Salesforce_Login.json' });

test('Use the Storage state', async ({ page }) => {

    await page.goto("https://orgfarm-bf1dd99998-dev-ed.develop.lightning.force.com/lightning/page/home");
    await page.waitForTimeout(5000);
    await page.locator("//span[text()='Accounts']").click();

});