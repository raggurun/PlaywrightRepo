import { PlaywrightWrapper } from "../Utils/Wrapper";

export class LoginPage extends PlaywrightWrapper {

    async navigateToLogin(url: string) 
    {
    await this.navigateTo(url);
    }
    async enterUsername(Selector: string, value: string) 
    {
    await this.enterText(Selector, value);
    }
    async enterPassword() 
    {
    await this.enterText("#password", "TestAutomation@123");
    }
    async clickLoginButton(Selector: string) 
    {
    await this.clickElement(Selector);
    }
}