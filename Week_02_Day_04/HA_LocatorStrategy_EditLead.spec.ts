import { test, expect } from '@playwright/test';

test('Edit Lead', async ({ page }) => {

    // Navigate to CRM application
    await page.goto('http://leaftaps.com/opentaps/control/main');

    // Login
    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();

    // Click CRM/SFA
    await page.locator('text=CRM/SFA').click();

    await page.waitForTimeout(4000);

    // Click Leads
    await page.getByRole('link', { name: 'Leads' }).click();

     // Click Find Leads
     await page.getByRole('link', { name: 'Find Leads' }).click();
    //await page.locator ('text=Find Leads').click();

     await page.waitForTimeout(4000);

    // Enter the first name
    await page.locator('#ext-gen248').fill('John');

    // Click Find Leads button
    await page.getByRole('button', { name: 'Find Leads' }).click();

    // Click the first resulting Lead ID
    await page.getByRole('link', { name: 'John' }).first().click();
 

    // Click Edit
    await page.getByRole('link', { name: 'Edit' }).click();
    //await page.locator('#ext-gen604').click();

    // Edit fields
    await page.locator('#updateLeadForm_companyName').fill('UpdatedCompany');
    await page.locator('#updateLeadForm_annualRevenue').fill('750000');
    await page.locator('#updateLeadForm_departmentName').fill('Marketing');
    await page.locator('#updateLeadForm_description').fill('Lead updated via Playwright automation script.');

    // Click Update
    await page.locator('input[value="Update"]').click();

    // Verify edited fields
    const companyName = await page.textContent('#viewLead_companyName_sp');
    const annualRevenue = await page.textContent('#viewLead_annualRevenue_sp');
    const department = await page.textContent('#viewLead_departmentName_sp');
    const description = await page.textContent('#viewLead_description_sp');
    expect(companyName).toContain('UpdatedCompany');
    expect(annualRevenue).toContain('$750,000.00');
    expect(department).toBe('Marketing');
    expect(description).toContain('Lead updated via Playwright automation script.');

    // Get the page title
    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);

});