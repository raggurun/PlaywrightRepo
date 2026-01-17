// Child file: PlaywrightLocators.ts
import { Locator } from "./BA2_P1_Locator";

export class PlaywrightLocators extends Locator {
  
  public getByText(): string {
    return "Get By Text Locator";
  }

  public getByRole(): string {
    return "Get By Role Locator";
  }
}

// Example usage
const pwLocators = new PlaywrightLocators();
console.log("CSS:", pwLocators.css());
console.log("getByText:", pwLocators.getByText());
console.log("getByRole:", pwLocators.getByRole());