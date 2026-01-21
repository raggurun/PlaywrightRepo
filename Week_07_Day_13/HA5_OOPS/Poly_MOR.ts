// Superclass with common methods
class BasePage {
  findElement(selector: string): void {
    console.log(`Finding element with selector: ${selector}`);
  }

  clickElement(selector: string): void {
    console.log(`Clicking element with selector: ${selector}`);
  }

  enterText(selector: string, text: string): void {
    console.log(`Entering text "${text}" into element with selector: ${selector}`);
  }

  performCommonTasks(): void {
    console.log("Performing common tasks in BasePage...");
    this.findElement("#default");
    this.clickElement("#default");
    this.enterText("#default", "Sample text");
  }
}

// Subclass overriding performCommonTasks
class LoginPage extends BasePage {
  override performCommonTasks(): void {
    console.log("Performing login-specific tasks in LoginPage...");
    this.findElement("#username");
    this.enterText("#username", "admin");
    this.findElement("#password");
    this.enterText("#password", "password123");
    this.clickElement("#loginButton");
  }
}

// Demonstration
function demo() {
  console.log("=== BasePage Demo ===");
  const basePage = new BasePage();
  basePage.performCommonTasks();

  console.log("\n=== LoginPage Demo ===");
  const loginPage = new LoginPage();
  loginPage.performCommonTasks();
}

// Run demo
demo();