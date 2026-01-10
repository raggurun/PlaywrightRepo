import { test, expect } from '@playwright/test';
test('Service Now Storage state', async ({ page, browser }) => {
  await page.goto('https://dev181504.service-now.com');
  await page.locator('#user_name').fill('admin');
  await page.locator('#user_password').fill('F/*jyM6Q6pHh');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(10000);

  //store the state using json file
  await page.context().storageState({ path: "utils/ServiceNow_Login.json" });

});
