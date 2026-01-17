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
exports.Edge = void 0;
// 2nd Child file: Edge.ts
var BA1_P1_Browser_1 = require("./BA1_P1_Browser");
var Edge = /** @class */ (function (_super) {
    __extends(Edge, _super);
    function Edge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Edge.prototype.launchBrowser = function () {
        console.log("Launching Edge Browser...");
        console.log("Browser Type:", this.browserType());
        console.log("Browser Version:", this.browserVersion());
    };
    // Override parent methods
    Edge.prototype.browserType = function () {
        return "Microsoft Edge";
    };
    Edge.prototype.browserVersion = function () {
        return "115.0.0";
    };
    return Edge;
}(BA1_P1_Browser_1.Browser));
exports.Edge = Edge;
// Create object for Edge
var edge = new Edge();
edge.launchBrowser();
