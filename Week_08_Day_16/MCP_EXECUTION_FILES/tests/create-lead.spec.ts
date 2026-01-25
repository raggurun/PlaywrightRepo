import { test, expect } from '@playwright/test';
import { LoginPage, CreateLeadPage } from '../pages/leaftaps-pages';

test('Create Lead in LeaFtaps', async ({ page }) => {
  // Initialize the page objects
  const loginPage = new LoginPage(page);
  const createLeadPage = new CreateLeadPage(page);

  // Step 1: Navigate to the login page
  await loginPage.navigateToLoginPage();

  // Step 2: Log in with valid credentials
  await loginPage.login('demosalesmanager', 'crmsfa');

  // Step 3: Click on CRM/SFA link
  await loginPage.clickCRMSFA();

  // Step 4: Navigate to Create Lead page
  await createLeadPage.navigateToCreateLead();

  // Step 5: Fill in lead details and create lead
  await createLeadPage.createLead('Ravi', 'R', 'testleaf');

  // Step 6: Verify lead creation (example: check for success message or title)
  const title = await page.title();
  expect(title).toContain('View Lead');
});