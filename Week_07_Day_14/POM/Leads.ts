import { Page, Locator } from '@playwright/test';

export class Leads {
  private findLeadsLink: Locator;
  constructor(private page: Page) {

    this.findLeadsLink = page.getByRole('link', { name: 'Find Leads' });
  }

  async clickCreateLead() {
    await this.page.click('text=Create Lead');
  }

  async clickFindLeads() {
    await this.findLeadsLink.click();
  }
}
