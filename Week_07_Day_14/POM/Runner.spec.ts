import { test } from '@playwright/test';
import { Leads } from './Leads';
import { CreateLead } from './CreateLead';
import { ViewLead } from './ViewLead';

test('Create and verify a lead', async ({ page }) => {
  // Navigate to application
  await page.goto('http://leaftaps.com/opentaps/control/main');
  await page.fill('#username', 'DemoCSR');
  await page.fill('#password', 'crmsfa');
  await page.click('//input[@value="Login"]');
  await page.click('text=CRM/SFA');
  await page.click('text=Leads');

  // Page objects
  const leads = new Leads(page);
  const createLead = new CreateLead(page);
  const viewLead = new ViewLead(page);

  // Actions
  await leads.clickCreateLead();
  await createLead.enterCompanyName('TestCompany');
  await createLead.enterFirstName('Raghuraman');
  await createLead.enterLastName('S');
  await createLead.submit();

  // Verification
  await viewLead.verifyLeadCreated('Raghuraman');
  await leads.clickFindLeads();
});
