import { Page } from '@playwright/test';

export class Leads {
  constructor(private page: Page) {}

  async clickCreateLead() {
    await this.page.click('text=Create Lead');
  }

  async clickFindLeads() {
    await this.page.getByRole('link', { name: 'Find Leads' }).click();
  }
}
