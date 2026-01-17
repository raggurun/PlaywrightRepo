"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaywrightLocators = void 0;
// Child file: PlaywrightLocators.ts
var BA2_P1_Locator_1 = require("./BA2_P1_Locator");
var PlaywrightLocators = /** @class */ (function (_super) {
    __extends(PlaywrightLocators, _super);
    function PlaywrightLocators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlaywrightLocators.prototype.getByText = function () {
        return "Get By Text Locator";
    };
    PlaywrightLocators.prototype.getByRole = function () {
        return "Get By Role Locator";
    };
    return PlaywrightLocators;
}(BA2_P1_Locator_1.Locator));
exports.PlaywrightLocators = PlaywrightLocators;
// Example usage
var pwLocators = new PlaywrightLocators();
console.log("CSS:", pwLocators.css());
console.log("getByText:", pwLocators.getByText());
console.log("getByRole:", pwLocators.getByRole());
