/* // Storage state example test
import { test, expect } from '@playwright/test';
import fs from 'fs';

test('should save and load storage state', async ({ browser }) => {
  // Define the path for the storage state file
  const storageStatePath = 'storageState.json';
    // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the login page
    await page.goto('https://example.com/login');
    // Perform login actions
    await page.fill('#username', 'myUsername');
    await page.fill('#password', 'myPassword');
    await page.click('#loginButton');
    // Wait for navigation after login
    await page.waitForNavigation();
    // Save the storage state to a file
    await context.storageState({ path: storageStatePath });
    await context.close();

    // Create a new browser context with the saved storage state
    const newContext = await browser.newContext({ storageState: storageStatePath });
    const newPage = await newContext.newPage();
    // Navigate to a page that requires authentication
    await newPage.goto('https://example.com/dashboard');
    // Verify that the user is logged in by checking for a specific element
    await expect(newPage.locator('#welcomeMessage')).toBeVisible();
    await newContext.close();
    // Clean up the storage state file
    fs.unlinkSync(storageStatePath);
}); */

import { test, expect } from '@playwright/test';
test('Storage state', async ({ page, browser }) => {
  await page.goto('https://login.salesforce.com/');
  await page.getByLabel('Username').fill('raghuraman.gurun532@agentforce.com');
  await page.getByLabel('Password').fill('TestAutomation@123');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(20000);

  //store the state using json file
  await page.context().storageState({ path: "utils/Salesforce_Login.json" });

});
