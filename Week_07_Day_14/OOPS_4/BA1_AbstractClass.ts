// Define the abstract class
abstract class BaseActions {
  // Concrete method with implementation
  typeAndClick(): void {
    console.log("Typing text and clicking element...");
  }

  // Abstract methods (must be implemented in child class)
  abstract enterText(): void;
  abstract click(): void;
}

// Normal class extending the abstract class
class UserActions extends BaseActions {
  // Implement abstract methods
  enterText(): void {
    console.log("Entering text into input field...");
  }

  click(): void {
    console.log("Clicking the button...");
  }
}

// Create object of normal class
const actions = new UserActions();

// Call the methods
actions.typeAndClick(); // Calls concrete method from abstract class
actions.enterText();    // Calls overridden method
actions.click();        // Calls overridden method
