import { test, expect } from '@playwright/test';

test('Handle alert inside frame and verify text', async ({ page }) => {
  // 1. Load the given URL
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');

  // 2. Set up event listener for dialog (alert/confirm)
  page.on('dialog', async (dialog) => {
    console.log("Dialog Type: " + dialog.type()); // Get the Alert type
    console.log("Dialog message: " + dialog.message()); // Get the Alert message
    await dialog.accept(); // Accept the alert
  });

  // 3. Locate the frame and click "Try it"
  const frame = page.frameLocator('#iframeResult');
  await frame.locator('button:has-text("Try it")').click();

  // 4. Retrieve the text after handling the alert
  const resultText = await frame.locator('#demo').textContent();

  // 5. Verify the text
  expect(resultText).toBe('You pressed OK!');
  console.log("Result Text: " + resultText);
});
