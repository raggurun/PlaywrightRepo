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
      "password": "***",
      "client_id": "***",
      "client_secret": "***",  
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
