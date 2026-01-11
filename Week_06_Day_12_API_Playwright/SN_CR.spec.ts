import { test, expect } from '@playwright/test';
let Username = "admin";
let Password = "F/*jyM6Q6pHh";
let basicAuth = Buffer.from(Username + ":" + Password).toString("base64");
let sys_ID: string;
test.describe.serial('Service Now API Tests', async() => {
test('POST Request Service Now', async ({ request}) => {
  const response = await request.post("https://dev181504.service-now.com/api/now/table/change_request", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic " + basicAuth
    },
    data: {
      "short_description": "Learn API Automation with Playwright",
    }
  });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);
  let responseBody = await response.json();
  console.log(responseBody);
  sys_ID=responseBody.result.sys_id;
  console.log("The Sys ID is: " + sys_ID);
  console.log("The short description is: " + responseBody.result.short_description);
  console.log("The change request number is: " + responseBody.result.number);
  console.log("The change request sys_created_on is: " + responseBody.result.sys_created_on);
  });

  test('GET Request Service Now', async ({ request}) => {
    const response = await request.get(`https://dev181504.service-now.com/api/now/table/change_request/${sys_ID}?sysparm_fields=business_impact%2Cincident_state`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + basicAuth
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    console.log(responseBody);
  });

  test('PATCH Request Service Now', async ({ request}) => {
    const response = await request.patch(`https://dev181504.service-now.com/api/now/table/change_request/${sys_ID}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + basicAuth
      },
      data: {
        "short_description": "Learn API with Playwright",

      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    let responseBody = await response.json();
    console.log(responseBody);
  });

  test('DELETE Request Service Now', async ({ request}) => {
    const response = await request.delete(`https://dev181504.service-now.com/api/now/table/change_request/${sys_ID}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + basicAuth
      }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(204);
  });
  });