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
// Superclass TestData
var TestData = /** @class */ (function () {
    function TestData() {
    }
    TestData.prototype.enterCredentials = function () {
        console.log("Entering user credentials...");
    };
    TestData.prototype.navigateToHomePage = function () {
        console.log("Navigating to the Home Page...");
    };
    return TestData;
}());
// Subclass LoginTestData extending TestData
var LoginTestData = /** @class */ (function (_super) {
    __extends(LoginTestData, _super);
    function LoginTestData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginTestData.prototype.enterUsername = function (username) {
        console.log("Entered Username: ".concat(username));
    };
    LoginTestData.prototype.enterPassword = function (password) {
        console.log("Entered Password: ".concat(password));
    };
    return LoginTestData;
}(TestData));
// ✅ Demonstration
// Object of superclass
var testDataObj = new TestData();
testDataObj.enterCredentials();
testDataObj.navigateToHomePage();
console.log("--------------------------------");
// Object of subclass
var loginObj = new LoginTestData();
loginObj.enterCredentials(); // inherited from TestData
loginObj.navigateToHomePage(); // inherited from TestData
loginObj.enterUsername("Raghuraman");
loginObj.enterPassword("Password123");
