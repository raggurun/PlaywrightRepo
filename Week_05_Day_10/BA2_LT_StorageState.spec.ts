import { test, expect } from '@playwright/test';
test('Storage state', async ({ page, browser }) => {
  await page.goto("http://leaftaps.com/crmsfa/control/main");
  await page.locator("//td[@align='left']//input[@name='USERNAME']").fill('Demosalesmanager');
  await page.locator("//td[@align='left']//input[@name='PASSWORD']").fill('crmsfa');
  await page.locator("//input[@value='Login']").click();
  await page.waitForTimeout(20000);

  //store the state using json file
  await page.context().storageState({ path: "utils/LeafTapsLogin.json" });

});