// Child file: Xpath.ts
import { Locator } from "./BA3_P1_Locator";

export class Xpath extends Locator {
  
  public basicXpath(): string {
    return "Basic Xpath";
  }

  public advanceXpath(): string {
    return "Advance Xpath";
  }

  // Override parent css() method 
  public css(): string 
  { 
    return "c.l() - CSS Locator overridden in Xpath";
  } 
    
}


// Example usage
const xpath = new Xpath();
console.log("Calling overridden css():", xpath.css());
console.log("Basic Xpath:", xpath.basicXpath());
console.log("Advanced Xpath:", xpath.advanceXpath());