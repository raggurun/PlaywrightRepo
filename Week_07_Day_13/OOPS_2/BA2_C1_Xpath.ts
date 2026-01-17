// Child file: Xpath.ts
import { Locator } from "./BA2_P1_Locator";

export class Xpath extends Locator {
  
  public basicXpath(): string {
    return "Basic Xpath";
  }

  public advanceXpath(): string {
    return "Advance Xpath";
  }
}

// Example usage
const xpath = new Xpath();
console.log("CSS:", xpath.css());
console.log("Basic Xpath:", xpath.basicXpath());
console.log("Advanced Xpath:", xpath.advanceXpath());