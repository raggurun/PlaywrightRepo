import { expect, test } from "@playwright/test";

test("Visual Regression Testing", async ({ page }) => {

await page.goto(`https://www.flipkart.com/`);

await page.waitForTimeout(10000);

const ss = await page.screenshot({path:`Data/png/flipkart.png`}); // Baseline

//The screenshot captured is placed in "ss" as well as in the folder screenshot--> with name flipkart.png

expect(ss).toMatchSnapshot(`flipkart.png`) 

//Step 1 : First Execution : The image file "flipkart.png"-> empty --> O/P --> failed 

//The reason for failure is we are comparing the capture image with an empty file 

//Step2.a : Second Execution : The image file captures the first screenshot and stores in flipkart.png

//Step2.b : The new image captured is compared with the old image using the variable "ss"

})


// test.only("Visual Regression Testing for a web element", async ({ page }) => {

// await page.goto(`http://leaftaps.com/opentaps/control/main`);

// const ele = page.locator("#username")

// const ss1 = await ele.screenshot({path:`Data/png/leaftaps.png`}); // Baseline

// //The screenshot captured is placed in "ss" as well as in the folder screenshot--> with name flipkart.png

// expect(ss1).toMatchSnapshot(`Data/png/leaftaps.png`)

// //Step 1 : First Execution : The image file "flipkart.png"-> empty --> O/P --> failed 

// //The reason for failure is we are comparing the capture image with an empty file 

// //Step2.a : Second Execution : The image file captures the first screenshot and stores in flipkart.png

// //Step2.b : The new image captured is compared with the old image using the variable "ss"

//})