import { test } from '@playwright/test';

test('Salesforce login and click app launcher', async ({ page }) => {
  // Load the Salesforce login page
  await page.goto('https://login.salesforce.com/?locale=in');

  // Enter username
  await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');

  // Enter password
  await page.locator('#password').fill('TestLeaf@2025');

  // Click on login button
  await page.locator('#Login').click();

  // Wait for 12 seconds
  await page.waitForTimeout(12000);

  // Get and print the title of the page
  let title = await page.title();
  console.log('Page Title: ', title);

  // Click on App Launcher (9-dot icon)
  // Salesforce App Launcher is usually represented by a button with class 'slds-icon-waffle'
  await page.locator('.slds-icon-waffle').click();
});
