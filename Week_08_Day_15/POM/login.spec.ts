import test from "@playwright/test";
import { LoginPage } from "../POM/Pages/loginPage";
test("Wrapper Class Login Test", async ({ page }) => {
    const loginPageInstance = new LoginPage(page);
    await loginPageInstance.navigateToLogin("https://login.salesforce.com/");
    await loginPageInstance.enterUsername("#username", "raghuraman.gurun532@agentforce.com");
    await loginPageInstance.enterPassword();
    await loginPageInstance.clickLoginButton("#Login");
});
