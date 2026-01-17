// Classroom3/Method.ts
export class Method {

  // Overload signatures
  fill(locator: string): void;
  fill(locator: string, text: string): void;

  // Single implementation
  fill(locator: string, text?: string): void {
    if (text) {
      console.log(`Filling locator '${locator}' with text '${text}'`);
    } else {
      console.log(`Filling locator '${locator}'`);
    }
  }
}

// Example usage
const m = new Method();

// Call with only locator
m.fill("input#username");

// Call with locator and text
m.fill("input#password", "mySecretPassword");
