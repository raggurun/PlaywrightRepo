import { Page, expect } from '@playwright/test';

export class ViewLead {
  constructor(private page: Page) {}

  async verifyLeadCreated(expectedName: string) {
    const leadName = await this.page.textContent('#viewLead_firstName_sp');
    expect(leadName).toContain(expectedName);
  }
}
