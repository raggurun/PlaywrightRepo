// Playwright using frames
import { test, expect } from '@playwright/test'; 
test('Handle nested frames with FrameLocator and FrameObject', async ({ page }) => {

    // Navigate to the Frames page
    await page.goto('https://www.leafground.com/frame.xhtml');

    // Interact with the first frame
    const frame1 = page.frameLocator("(//iframe)[1]").locator("//button[@id='Click']");
    await frame1.click();
    await page.waitForTimeout(4000);
    const frame1Text = frame1.textContent();
    console.log('Text in Frame 1 after click:', await frame1Text);

    // Interact with the second frame
    const frame2 = page.frameLocator("(//iframe)[2]").locator("//button[@id='Click']");
    await page.waitForTimeout(4000);
    const frame2Text = frame2.textContent();
    console.log('Text in Frame 2 after retrieval:', await frame2Text);

    // Interact with the nested frame
    const outerFrame = page.frameLocator("(//iframe)[3]");
    const innerFrameButton = outerFrame.frameLocator("//iframe").locator("//button[@id='Click']");
    await innerFrameButton.click();
    await page.waitForTimeout(4000);
    const innerFrameText = innerFrameButton.textContent();
    console.log('Text in Nested Frame after click:', await innerFrameText);
});