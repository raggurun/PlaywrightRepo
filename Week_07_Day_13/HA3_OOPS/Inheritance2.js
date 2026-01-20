var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Step 1: Implement the WebComponent Base Class
var WebComponent = /** @class */ (function () {
    function WebComponent(selector) {
        this.selector = selector;
    }
    WebComponent.prototype.click = function () {
        console.log("Clicked on component with selector: ".concat(this.selector));
    };
    WebComponent.prototype.focus = function () {
        console.log("Focused on component with selector: ".concat(this.selector));
    };
    return WebComponent;
}());
// Step 2: Implement the Button Derived Class
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(selector) {
        return _super.call(this, selector) || this;
    }
    // Override click method
    Button.prototype.click = function () {
        _super.prototype.click.call(this); // Call base class click
        console.log("Button-specific action performed for selector: ".concat(this.selector));
    };
    return Button;
}(WebComponent));
// Step 3: Implement the TextInput Derived Class
var TextInput = /** @class */ (function (_super) {
    __extends(TextInput, _super);
    function TextInput(selector) {
        var _this = _super.call(this, selector) || this;
        _this.value = "";
        return _this;
    }
    TextInput.prototype.enterText = function (text) {
        this.value = text;
        console.log("Entered text \"".concat(this.value, "\" into input with selector: ").concat(this.selector));
    };
    return TextInput;
}(WebComponent));
// Step 4: Testing the Components
function testComponents() {
    var button = new Button("#submitBtn");
    var textInput = new TextInput("#username");
    // Simulate clicking the button
    button.click();
    // Simulate focusing and entering text into the input
    textInput.focus();
    textInput.enterText("Raghuraman");
}
// Run the test
testComponents();
