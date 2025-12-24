import { test, expect } from '@playwright/test';

test('Salesforce Account Creation Flow', async ({ page }) => {
  // 1. Navigate to the url
  await page.goto('https://login.salesforce.com/');

  // 2. Enter username using getByLabel
  await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com');

  // 3. Enter password using getByLabel
  await page.getByLabel('Password').fill('TestLeaf@2025');

  // 4. Click Login
  await page.getByRole('button', { name: 'Log In' }).click();

  // 5. Verify the title and url of the page using appropriate assertions
  await expect(page).toHaveTitle("Lightning Experience"); // Adjust regex based on actual title
  await page.waitForTimeout(5000); // Wait for navigation to complete
  await expect(page).toHaveURL("https://testleaf.lightning.force.com/lightning/page/home");

  // 6. Click App Launcher using the class locator
  await page.locator('.slds-icon-waffle').click();

  await page.waitForTimeout(5000); 

  // 7. Click View All using getByText
  await page.getByText('View All').last().click();

  await page.waitForTimeout(5000);

  // 8. Enter ‘Service’ in the App Launcher Search box using getByPlaceholder
  await page.getByPlaceholder('Search apps or items...').fill('Service');

  // 9. Click Service using index based XPath
  await page.locator("(//mark[text()='Service'])[1]").click();

  await page.waitForTimeout(6000);

  // 10. Click Accounts using attribute based CSS selector
  await page.locator("a[title='Accounts']").click();

  // 11. Click New using getByRole
  await page.getByRole('button', { name: 'New' }).click();

  // 12. Enter Account name using attribute based CSS selector
  await page.locator("input[name='Name']").fill('Test Account5');

  // 13. Click Save button using XPath
  await page.locator("//button[@name='SaveEdit']").click();

  // 14. Verify the toast message displayed
  const toast = page.locator('.toastMessage.slds-text-heading--small.forceActionsText');

  await expect(toast).toBeVisible();
  await expect(toast).toContainText('was created'); // Adjust based on actual message
  console.log(await toast.textContent());
});
