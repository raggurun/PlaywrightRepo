
import { test, expect } from "@playwright/test";

test.use({ storageState: 'utils/ServiceNow_Login.json' });

test('Ordering Mobile using Service Now Portal', async ({ page }) => {

    await page.goto("https://dev181504.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D26370819c3d532105954bd33e4013102");
    await page.waitForTimeout(5000);
    const logo = page.getByAltText('ServiceNow Service Management');
    await expect(logo).toBeVisible();
    const title = await page.title(); 
    console.log("Page title is:", title);
    await expect(page).toHaveTitle("ServiceNow");
    await page.click('text=All');
    await page.click('text=Service Catalog');
    const catalogFrame = page.frameLocator('iframe[id="gsft_main"]'); 
    await catalogFrame.locator('text=Mobiles').first().click();
    await page.waitForTimeout(3000);
    await catalogFrame.locator("//strong[text()='Apple iPhone 13 pro']").click(); 
    await catalogFrame.locator("//label[@for='IO:ee5d87ca9747011021983d1e6253af57_13aec34e9747011021983d1e6253af3a']").click();
    const dropdown = catalogFrame.locator("//select[@id='IO:ff1f478e9747011021983d1e6253af68']");
    await dropdown.selectOption('500MB [add $1.00]');
    await catalogFrame.locator("//label[@for='IO:d1b3f6fe9752cd1021983d1e6253afd2_d454fe329792cd1021983d1e6253afd1']").click();
    await catalogFrame.locator("//label[@for='IO:86c4fa729792cd1021983d1e6253afd3_8335fe729792cd1021983d1e6253af37']").click();
    await catalogFrame.locator('button:has-text("Order Now")').click();
    await expect(catalogFrame.locator('text=Thank you, your request has been submitted')).toBeVisible();
    const confirmationMessage = await catalogFrame.locator('text=Thank you, your request has been submitted').textContent();
    console.log("Confirmation Message:", confirmationMessage);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: './Data/png/servicenow-order.png', fullPage: true });

     });
