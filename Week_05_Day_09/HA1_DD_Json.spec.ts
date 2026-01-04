import { test } from '@playwright/test'
import file from '../../Data/Leaftaps_HA.json' assert { type: 'json' };

for(let data of file.loginInfo){

    test(`Read the value from Json ${data.Tc_No}`,async({page})=>{

        // console.log("Test Case Number is "+data.Tc_No);
        // console.log("Username is " +data.Username);
        // console.log("Password is " +data.Password);

        await page.goto("http://leaftaps.com/opentaps/control/main");
        const username = await page.locator("#username").fill(data.Username);
        console.log("Username is " + data.Username);
        const password = await page.locator("#password").fill(data.Password);
        console.log("Password is " + data.Password);
        await page.locator("//input[@value='Login']").click();
            // Click CRM/SFA
        await page.locator('text=CRM/SFA').click();

        await page.waitForTimeout(4000);

        // Click Leads
        await page.getByRole('link', { name: 'Leads' }).click();
        //await page.locator('text=Leads').click();
        //await page.locator('#ext-gen865').click();

        // Click Create Lead
        await page.locator('text=Create Lead').click();
        await page.locator('#createLeadForm_companyName').fill('TestCompany');
        await page.locator('#createLeadForm_firstName').fill('John');
        await page.locator('#createLeadForm_lastName').fill('Doe');
        let Sourcedropdown = page.locator('#createLeadForm_dataSourceId');
        await Sourcedropdown.selectOption({ label: data.Sourcedropdown });
        let MarketingCampaigndropdown = page.locator('#createLeadForm_marketingCampaignId');
        await MarketingCampaigndropdown.selectOption({ label: data.Marketingdropdown });
        // Get the count and print all the values in the Marketing Campaign dropdown
        const MarketingCampaign = await MarketingCampaigndropdown.locator('option').allTextContents();
        console.log("Total options in Marketing Campaign dropdown: " + (MarketingCampaign.length-1));
        for (const option of MarketingCampaign) {
            console.log(option);
        }
        let Industrydropdown = page.locator('#createLeadForm_industryEnumId');
        await Industrydropdown.selectOption({ label: data.Industrydropdown });
        let PreferredCurrencydropdown = page.locator('#createLeadForm_currencyUomId');
        await PreferredCurrencydropdown.selectOption({ label: data.PreferredCurrencydropdown });
        let Countrydropdown = page.locator('#createLeadForm_generalCountryGeoId');
        await Countrydropdown.selectOption({ label: data.Countrydropdown });
        let Statedropdown = page.locator('#createLeadForm_generalStateProvinceGeoId');
        await Statedropdown.selectOption({ label: data.Statedropdown });
        const states = await Statedropdown.locator('option').allTextContents();
        console.log("Total options in State dropdown: " + (states.length-1));
        for (const state of states) {
            console.log(state);
        }
        // Click Create Lead button
        await page.locator('input[name="submitButton"]').click();
    })
}