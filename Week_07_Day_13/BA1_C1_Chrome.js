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
exports.Chrome = void 0;
// 1st Child file: Chrome.ts
var BA1_P1_Browser_1 = require("./BA1_P1_Browser");
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chrome.prototype.launchBrowser = function () {
        console.log("Launching Chrome Browser...");
        console.log("Browser Type:", this.browserType());
        console.log("Browser Version:", this.browserVersion());
    };
    // Override parent methods
    Chrome.prototype.browserType = function () {
        return "Google Chrome";
    };
    Chrome.prototype.browserVersion = function () {
        return "122.0.0";
    };
    return Chrome;
}(BA1_P1_Browser_1.Browser));
exports.Chrome = Chrome;
// Create object for Chrome
var chrome = new Chrome();
chrome.launchBrowser();
