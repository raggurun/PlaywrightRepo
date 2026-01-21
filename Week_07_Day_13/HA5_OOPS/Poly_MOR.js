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
// Superclass with common methods
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.findElement = function (selector) {
        console.log("Finding element with selector: ".concat(selector));
    };
    BasePage.prototype.clickElement = function (selector) {
        console.log("Clicking element with selector: ".concat(selector));
    };
    BasePage.prototype.enterText = function (selector, text) {
        console.log("Entering text \"".concat(text, "\" into element with selector: ").concat(selector));
    };
    BasePage.prototype.performCommonTasks = function () {
        console.log("Performing common tasks in BasePage...");
        this.findElement("#default");
        this.clickElement("#default");
        this.enterText("#default", "Sample text");
    };
    return BasePage;
}());
// Subclass overriding performCommonTasks
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.performCommonTasks = function () {
        console.log("Performing login-specific tasks in LoginPage...");
        this.findElement("#username");
        this.enterText("#username", "admin");
        this.findElement("#password");
        this.enterText("#password", "password123");
        this.clickElement("#loginButton");
    };
    return LoginPage;
}(BasePage));
// Demonstration
function demo() {
    console.log("=== BasePage Demo ===");
    var basePage = new BasePage();
    basePage.performCommonTasks();
    console.log("\n=== LoginPage Demo ===");
    var loginPage = new LoginPage();
    loginPage.performCommonTasks();
}
// Run demo
demo();
