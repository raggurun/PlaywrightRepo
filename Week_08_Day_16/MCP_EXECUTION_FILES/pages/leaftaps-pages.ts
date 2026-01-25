import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLoginPage() {
    // Navigate to the LeaFtaps login page
    await this.page.goto('http://leaftaps.com/opentaps/control/main');
  }

  async login(username: string, password: string) {
    // Fill in the username
    await this.page.locator('#username').fill(username);

    // Fill in the password
    await this.page.locator('#password').fill(password);

    // Click the login button
    await this.page.locator('.decorativeSubmit').click();
  }

  async clickCRMSFA() {
    // Click on the CRM/SFA link
    await this.page.locator("text='CRM/SFA'").click();
  }
}

export class CreateLeadPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCreateLead() {
    // Click on the Leads tab using a more specific selector
    await this.page.locator('a[href="/crmsfa/control/leadsMain"]').click();

    // Click on the Create Lead option
    await this.page.locator('text=Create Lead').click();
  }

  async createLead(firstName: string, lastName: string, companyName: string) {
    // Fill in the company name
    await this.page.locator('#createLeadForm_companyName').fill(companyName);

    // Fill in the first name
    await this.page.locator('#createLeadForm_firstName').fill(firstName);

    // Fill in the last name
    await this.page.locator('#createLeadForm_lastName').fill(lastName);

    // Click on the Create Lead button
    await this.page.locator('.smallSubmit').click();
  }
}