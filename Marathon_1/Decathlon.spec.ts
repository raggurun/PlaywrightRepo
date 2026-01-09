import { test, expect } from '@playwright/test';

test('Decathlon Product Search and Add to Cart Flow', async ({ page }) => {
  await page.goto('https://www.decathlon.in/  ');
  await expect(page).toHaveURL("https://www.decathlon.in/");
  const logo = page.locator("//a[@class='ml-3 cursor-default md:ml-6 lg:ml-12']//*[name()='svg']");
  await expect(logo).toBeVisible();
  const searchBox = page.locator("//div[contains(@class,'GufYiF')]//span[normalize-space(text())='Search for']").first();
  await searchBox.click();
  await page.waitForTimeout(3000);
  const typeProduct = page.locator("//input[@placeholder='Search For 60+ Sports and 6000+ Products']");
  await typeProduct.fill('Shoes');
  await page.keyboard.press('Enter');
  await expect(page).toHaveTitle("Search | Shoes");
  await page.locator("//span[@class='aisRefinementListLabelText' and contains(text(),'Running')]").click();
  await page.locator("//span[@class='aisRefinementListLabelText' and contains(text(),'Men')]").click();
  await page.locator("//span[@class='aisRefinementListLabelText' and contains(text(),'Uk 10.5 - eu 45')]").click();
  const sortBy = page.locator("//span[normalize-space()='Most Relevant']");
  await sortBy.click();
  const priceLowToHigh = page.locator("//a[normalize-space(text())='Price: Low to High']");
  await priceLowToHigh.click(); 
  await page.locator("(//p[@class='text-12 lg:text-14 text-black' and normalize-space(text())='ADD TO CART'])[1]").click();
  const sizeOption = page.locator('//div[normalize-space(text())="UK 8 - EU 42"]');
  await sizeOption.click();
  await page.locator("//span[@class='font-medium text-white' and normalize-space(text())='ADD TO CART']").click();
  const cartPopupMessage = page.locator("//h3[normalize-space(text())='Product added to cart']"); 
  await expect(cartPopupMessage).toHaveText("Product added to cart");

});