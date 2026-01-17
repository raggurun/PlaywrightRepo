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
exports.Xpath = void 0;
// Child file: Xpath.ts
var BA2_P1_Locator_1 = require("./BA2_P1_Locator");
var Xpath = /** @class */ (function (_super) {
    __extends(Xpath, _super);
    function Xpath() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Xpath.prototype.basicXpath = function () {
        return "Basic Xpath";
    };
    Xpath.prototype.advanceXpath = function () {
        return "Advance Xpath";
    };
    return Xpath;
}(BA2_P1_Locator_1.Locator));
exports.Xpath = Xpath;
// Example usage
var xpath = new Xpath();
console.log("CSS:", xpath.css());
console.log("Basic Xpath:", xpath.basicXpath());
console.log("Advanced Xpath:", xpath.advanceXpath());
