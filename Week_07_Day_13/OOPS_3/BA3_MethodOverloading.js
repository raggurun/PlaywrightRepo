"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Method = void 0;
// Classroom3/Method.ts
var Method = /** @class */ (function () {
    function Method() {
    }
    // Single implementation
    Method.prototype.fill = function (locator, text) {
        if (text) {
            console.log("Filling locator '".concat(locator, "' with text '").concat(text, "'"));
        }
        else {
            console.log("Filling locator '".concat(locator, "'"));
        }
    };
    return Method;
}());
exports.Method = Method;
// Example usage
var m = new Method();
// Call with only locator
m.fill("input#username");
// Call with locator and text
m.fill("input#password", "mySecretPassword");
