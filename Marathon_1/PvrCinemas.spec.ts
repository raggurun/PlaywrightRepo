import { test, expect } from '@playwright/test';

test('PVR Cinemas Flow', async ({ page }) => {
  await page.goto('https://www.pvrcinemas.com/');
  await page.click('text=Select City');
  await page.click('text=Chennai');
  await page.waitForTimeout(4000);
  await page.click("//span[text()='Cinema']");
  await page.click("//div[@id='cinema']");
  await page.click("//span[normalize-space()='INOX National,Virugambakkam Chennai']");
  await page.click("//span[normalize-space()='Sun, 28 Dec']");
  await page.click("//li[@class='p-dropdown-item']//span[contains(normalize-space(),'SIRAI')]");
  await page.click("//li[@class='p-dropdown-item']//span[contains(normalize-space(),'10:00 PM')]");
  await page.click("//button[@aria-label='Submit']//span[@class='p-button-label p-c'][normalize-space()='Book']");
  await page.click("//button[contains(normalize-space(),'Accept')]");
  await page.waitForTimeout(4000);
  await page.click("//span[contains(@id,'SL.SILVER') and normalize-space()='8']");

  const seatInfo = await page.locator("//div[@class='seat-info']").textContent(); 
  expect(seatInfo).toContain('Seat');

  const totalAmount = await page.locator("//div[@class='grand-prices']/h6[contains(normalize-space(),'.')]").textContent(); 
  expect(totalAmount).toContain('.');

  await expect(page).toHaveTitle("PVR Cinemas");
  await page.click("//button[contains(normalize-space(),'Proceed')]");
  
});
