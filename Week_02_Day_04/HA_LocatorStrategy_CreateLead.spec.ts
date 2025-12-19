import { test, expect } from '@playwright/test';

test('Create Lead', async ({ page }) => {

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
    //await page.locator('text=Leads').click();
    //await page.locator('#ext-gen865').click();

    // Click Create Lead
    await page.locator('text=Create Lead').click();

    // Fill Lead details
    await page.locator('#createLeadForm_companyName').fill('TestCompany');
    await page.locator('#createLeadForm_firstName').fill('John');
    await page.locator('#createLeadForm_lastName').fill('Doe');
    await page.locator('#createLeadForm_personalTitle').fill('Mr.');
    await page.locator('#createLeadForm_generalProfTitle').fill('Manager');
    await page.locator('#createLeadForm_annualRevenue').fill('500000');
    await page.locator('#createLeadForm_departmentName').fill('Sales');
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('1234567890');

    // Click Create Lead button
    await page.locator('input[name="submitButton"]').click();

    // Verify company name, first name, last name and status
    const companyName = await page.textContent('#viewLead_companyName_sp');
    const firstName = await page.textContent('#viewLead_firstName_sp');
    const lastName = await page.textContent('#viewLead_lastName_sp');
    const status = await page.textContent('#viewLead_statusId_sp');
    expect(companyName).toContain('TestCompany');
    expect(firstName).toBe('John');
    expect(lastName).toBe('Doe');
    expect(status).toBeTruthy(); // Ensure status exists

    // Get the page title
    const pageTitle = await page.title();
    console.log('Page Title:', pageTitle);

});