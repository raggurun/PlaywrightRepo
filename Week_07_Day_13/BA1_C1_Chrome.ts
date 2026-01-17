// 1st Child file: Chrome.ts
import { Browser } from "./BA1_P1_Browser";

export class Chrome extends Browser {
  
  launchBrowser(): void {
    console.log("Launching Chrome Browser...");
    console.log("Browser Type:", this.browserType());
    console.log("Browser Version:", this.browserVersion());
  }

  // Override parent methods
  browserType(): string {
    return "Google Chrome";
  }

  browserVersion(): string {
    return "122.0.0";
  }
}

// Create object for Chrome
const chrome = new Chrome();
chrome.launchBrowser();
