import { test, expect } from '@playwright/test';

let instance_url: string;
let access_token: string;
let leadId: string;

test.describe.serial('Practice Salesforce API requests', () => {

  test('Generate Token', async ({ request }) => {
    const tokenResponse = await request.post("https://login.salesforce.com/services/oauth2/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Connection": "keep-alive"
      },
      form: {
        "grant_type": "password",
        "username": "manikandanleo4922@agentforce.com",
        "password": "India@2026",
        "client_id": "3MVG9dAEux2v1sLs_5LgrWbWWJbMYKRgBajBibwGyik0pC_tXNFGsk6aV8h1owvGj6hsaxRWhzGX5WP1O87h5",
        "client_secret": "EE7E666EF8204C869125AC8160C78B0F93277C544B84F8B89A0D59AD9FB3AD1C"
      }
    });

    expect(tokenResponse.ok()).toBeTruthy();
    const tokenResponseBody = await tokenResponse.json();
    access_token = tokenResponseBody.access_token;
    instance_url = tokenResponseBody.instance_url;
  });

  test('POST request to Create Lead', async ({ request }) => {
    const leadResponse = await request.post(
      `${instance_url}/services/data/v65.0/sobjects/Lead/`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        },
        data: {
          "FirstName": "Raghu",
          "LastName": "Raman",
          "Company": "Testleaf"
        }
      }
    );

    expect(leadResponse.ok()).toBeTruthy();
    const leadResponseBody = await leadResponse.json();
    leadId = leadResponseBody.id;
    console.log("Created Lead ID:", leadId);
  });

  test('GET request to Fetch Lead', async ({ request }) => {
    const getLeadResponse = await request.get(
      `${instance_url}/services/data/v65.0/sobjects/Lead/${leadId}`,
      {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      }
    );

    expect(getLeadResponse.ok()).toBeTruthy();
    const leadDetails = await getLeadResponse.json();
    console.log("Fetched Lead:", leadDetails);

    expect(leadDetails.FirstName).toBe("Raghu");
    expect(leadDetails.LastName).toBe("Raman");
    expect(leadDetails.Company).toBe("Testleaf");
  });

  test('PATCH request to Update Lead', async ({ request }) => {
    const patchResponse = await request.patch(
      `${instance_url}/services/data/v65.0/sobjects/Lead/${leadId}`,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${access_token}`
        },
        data: {
          "FirstName": "Raghuraman",
          "LastName": "Gurunathan",
          "Company": "Qeagle"
        }
      }
    );

    expect(patchResponse.ok()).toBeTruthy();
    console.log("PATCH Response Status:", patchResponse.status());
  });

  test('GET request to Verify Updated Lead', async ({ request }) => {
    const getUpdatedLeadResponse = await request.get(
      `${instance_url}/services/data/v65.0/sobjects/Lead/${leadId}`,
      {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      }
    );

    expect(getUpdatedLeadResponse.ok()).toBeTruthy();
    const updatedLeadDetails = await getUpdatedLeadResponse.json();
    console.log("Updated Lead:", updatedLeadDetails);

    expect(updatedLeadDetails.Company).toBe("Qeagle");
    expect(updatedLeadDetails.FirstName).toBe("Raghuraman");
    expect(updatedLeadDetails.LastName).toBe("Gurunathan");
  });

  test('DELETE request to Remove Lead', async ({ request }) => { 
    const deleteResponse = await request.delete( `${instance_url}/services/data/v65.0/sobjects/Lead/${leadId}`, 
      { 
        headers: 
        { 
          "Authorization": `Bearer ${access_token}` 
        }
      });  
      expect(deleteResponse.status()).toBe(204); 
      console.log("Lead deleted successfully");     
  });
});
