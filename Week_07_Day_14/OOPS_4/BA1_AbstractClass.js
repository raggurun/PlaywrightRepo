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
// Define the abstract class
var BaseActions = /** @class */ (function () {
    function BaseActions() {
    }
    // Concrete method with implementation
    BaseActions.prototype.typeAndClick = function () {
        console.log("Typing text and clicking element...");
    };
    return BaseActions;
}());
// Normal class extending the abstract class
var UserActions = /** @class */ (function (_super) {
    __extends(UserActions, _super);
    function UserActions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Implement abstract methods
    UserActions.prototype.enterText = function () {
        console.log("Entering text into input field...");
    };
    UserActions.prototype.click = function () {
        console.log("Clicking the button...");
    };
    return UserActions;
}(BaseActions));
// Create object of normal class
var actions = new UserActions();
// Call the methods
actions.typeAndClick(); // Calls concrete method from abstract class
actions.enterText(); // Calls overridden method
actions.click(); // Calls overridden method
