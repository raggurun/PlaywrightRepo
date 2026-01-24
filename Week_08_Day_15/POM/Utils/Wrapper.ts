import { Page } from "@playwright/test";

export abstract class PlaywrightWrapper {
    page:Page
    constructor(page:Page) {
    
        this.page = page;
    }

async navigateTo(url: string) {
await this.page.goto(url);
}

async enterText(Selector: string, value: string) {
await this.page.locator(Selector).fill(value);
}

async clickElement(Selector: string) {
await this.page.locator(Selector).click();
}
}