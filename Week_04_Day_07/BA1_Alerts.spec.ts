import { test, expect } from '@playwright/test';

test ('Handle alerts on Leafground', async ({ page }) => {
  await page.goto("https://www.leafground.com/alert.xhtml");

  //Prompt Alert Handling
  page.once('dialog', async dialog => {
   console.log('Dialog Type:', dialog.type());
    console.log('Dialog Message:', dialog.message());
    await dialog.accept('Raghu learning Alert Handling');
    const promptMessage = await page.locator("//span[@id='confirm_result']").textContent();
    console.log('Entered Message:', promptMessage);
  });
  await page.click("//button[@id='j_idt88:j_idt104']//span[@class='ui-button-text ui-c'][normalize-space()='Show']");

  // Confirmation Alert Handling
  page.once('dialog', async dialog => {
    console.log('Dialog Type:', dialog.type());
    console.log('Dialog Message:', dialog.message());
    await dialog.accept();
     const confirmMessage = await page.locator("//span[text()='User Clicked : OK']").textContent();
     console.log('Confirmation Message:', confirmMessage);
   });
    await page.click("//button[@id='j_idt88:j_idt93']//span[@class='ui-button-text ui-c'][normalize-space()='Show']");
});