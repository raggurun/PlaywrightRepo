import { test, expect } from '@playwright/test';

test('Interact with frames and nested frames', async ({ page }) => {

  await page.goto('https://leafground.com/frame.xhtml');

  // --- Requirement 1: Interact with the Click Me button inside frame ---
  const frame1 = page.frameLocator('//iframe[@src="default.xhtml"]');
  await frame1.locator("//button[@id='Click']").click();

  // Assert the text changed after clicking
  const frame1Text = await frame1.locator("//button[@id='Click']").textContent();
  expect(frame1Text).toContain('Hurray! You Clicked Me.');
  console.log('Text in Frame 1 after click:', frame1Text);

   // --- Requirement 2: Get the total count of frames present in the page ---
  const framesCount = page.frames().length;
  console.log("Total frames on the page: " + framesCount);

  // --- Requirement 3: Interact with the Click Me button inside nested frames ---
    const outerFrame = page.frameLocator("(//iframe)[3]");
    const innerFrameButton = outerFrame.frameLocator("//iframe").locator("//button[@id='Click']");
    await innerFrameButton.click();

  // Assert the text changed after clicking
  const nestedText = await innerFrameButton.textContent();
  expect(nestedText).toContain('Hurray! You Clicked Me.');
  console.log('Text in Nested Frame after click:', nestedText);
});
