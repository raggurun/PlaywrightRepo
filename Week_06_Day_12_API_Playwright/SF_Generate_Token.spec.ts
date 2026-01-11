import { test, expect } from '@playwright/test';

test.describe.serial('Salesforce Token Generation', () => {
let instance_url: string;
let access_token: string;

test('Generate Token', async ({ request}) => {
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
      "client_secret": "EE7E666EF8204C869125AC8160C78B0F93277C544B84F8B89A0D59AD9FB3AD1C",  
    }
  });
  expect(tokenResponse.ok()).toBeTruthy();
  expect(tokenResponse.status()).toBe(200);
  let tokenResponseBody = await tokenResponse.json();
  console.log(tokenResponseBody);
  access_token = tokenResponseBody.access_token;
  instance_url = tokenResponseBody.instance_url;
  console.log("The Access Token is: " + access_token);
  console.log("The Token Type is: " + tokenResponseBody.token_type);
  console.log("The Instance URL is: " + tokenResponseBody.instance_url);
  });
});