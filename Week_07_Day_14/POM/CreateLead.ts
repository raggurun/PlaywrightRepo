import { Page } from '@playwright/test';

export class CreateLead {
  constructor(private page: Page) {}

  async enterCompanyName(company: string) {
    await this.page.fill('#createLeadForm_companyName', company);
  }

  async enterFirstName(firstName: string) {
    await this.page.fill('#createLeadForm_firstName', firstName);
  }

  async enterLastName(lastName: string) {
    await this.page.fill('#createLeadForm_lastName', lastName);
  }

  async submit() {
    await this.page.click('input[name="submitButton"]');
  }
}
