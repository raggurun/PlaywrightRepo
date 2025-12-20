import { test, expect } from '@playwright/test';

test('Breakout Assessment 1 Using XPath', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    await page.locator('//button[@type="submit"]').click();
    
    const searchBox = page.locator('//input[@id="twotabsearchtextbox"]');
    await searchBox.fill('iPhone'); 
    await searchBox.press('Enter');

    const storageOption = page.locator('//span[contains(text(),"512 GB & above")]');
    await storageOption.click();

    await page.waitForTimeout(6000); // Wait for 6 seconds to ensure the page loads

    const addToCartButton = page.locator('//button[@id="a-autoid-21-announce"]');
    await addToCartButton.click();

});