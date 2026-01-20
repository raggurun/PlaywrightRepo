// Step 1: Implement the WebComponent Base Class
class WebComponent {
  selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  click(): void {
    console.log(`Clicked on component with selector: ${this.selector}`);
  }

  focus(): void {
    console.log(`Focused on component with selector: ${this.selector}`);
  }
}

// Step 2: Implement the Button Derived Class
class Button extends WebComponent {
  constructor(selector: string) {
    super(selector);
  }

  // Override click method
  click(): void {
    super.click(); // Call base class click
    console.log(`Button-specific action performed for selector: ${this.selector}`);
  }
}

// Step 3: Implement the TextInput Derived Class
class TextInput extends WebComponent {
  value: string;

  constructor(selector: string) {
    super(selector);
    this.value = "";
  }

  enterText(text: string): void {
    this.value = text;
    console.log(`Entered text "${this.value}" into input with selector: ${this.selector}`);
  }
}

// Step 4: Testing the Components
function testComponents(): void {
  const button = new Button("#submitBtn");
  const textInput = new TextInput("#username");

  // Simulate clicking the button
  button.click();

  // Simulate focusing and entering text into the input
  textInput.focus();
  textInput.enterText("Raghuraman");
}

// Run the test
testComponents();
