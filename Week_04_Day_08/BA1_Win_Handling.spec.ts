    import {test, expect } from '@playwright/test';
    test(' Window Handling', async ({page, context}) => {

        await page.goto('https://www.leafground.com/window.xhtml');

        await page.locator("//span[normalize-space()='Open']").click();

        const [childPage] = await Promise.all([
        context.waitForEvent('page'), // Wait for new page to open
        ]);

        await childPage.waitForLoadState(); // Ensure the child page is fully loaded
        const childPageTitle = await childPage.title();
        console.log("Child Page Title: " + childPageTitle);
        await childPage.locator("//textarea[@id='message']").fill('Welcome to Playwright');

        await childPage.close();
        const parentpage = page.locator("//span[normalize-space()='Open Multiple']").click();
        await page.waitForTimeout(5000);

    });