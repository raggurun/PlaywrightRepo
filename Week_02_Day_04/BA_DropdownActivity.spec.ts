import { test } from '@playwright/test';

test('Dropdown Classroom Assessment', async ({ page }) => {

    await page.goto('https://www.telerik.com/contact');
    
    await page.waitForTimeout(5000);

    // 1st dropdown -> select by index
    let Dropdown1 = page.locator('#Dropdown-1');
    await Dropdown1.selectOption({ index: 4 }); // selects the 5th option

    // 2nd dropdown -> select by value
    // Example: "Product Interest" dropdown
    let Dropdown2 = page.locator('#Dropdown-2');
    await Dropdown2.selectOption({ value: 'Kendo UI for Angular' });

    // 3rd dropdown -> select by label
    // Example: "Country" dropdown
    let Dropdown3 = page.locator('#Country-1');
    await Dropdown3.selectOption({ label: 'Antarctica' });
  });
