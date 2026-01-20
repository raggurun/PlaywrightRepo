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
// Superclass Browser
var Browser = /** @class */ (function () {
    function Browser(browserName, browserVersion) {
        this.browserName = browserName;
        this.browserVersion = browserVersion;
    }
    Browser.prototype.openURL = function (url) {
        console.log("".concat(this.browserName, " v").concat(this.browserVersion, " is opening URL: ").concat(url));
    };
    Browser.prototype.closeBrowser = function () {
        console.log("".concat(this.browserName, " v").concat(this.browserVersion, " is closing the browser."));
    };
    Browser.prototype.navigateBack = function () {
        console.log("".concat(this.browserName, " v").concat(this.browserVersion, " is navigating back."));
    };
    return Browser;
}());
// Subclass Chrome
var Chrome = /** @class */ (function (_super) {
    __extends(Chrome, _super);
    function Chrome(version) {
        return _super.call(this, "Chrome", version) || this;
    }
    Chrome.prototype.openIncognito = function () {
        console.log("Chrome is opening in Incognito mode.");
    };
    Chrome.prototype.clearCache = function () {
        console.log("Chrome cache has been cleared.");
    };
    return Chrome;
}(Browser));
// Subclass Edge
var Edge = /** @class */ (function (_super) {
    __extends(Edge, _super);
    function Edge(version) {
        return _super.call(this, "Edge", version) || this;
    }
    Edge.prototype.takeSnap = function () {
        console.log("Edge has taken a screenshot.");
    };
    Edge.prototype.clearCookies = function () {
        console.log("Edge cookies have been cleared.");
    };
    return Edge;
}(Browser));
// Subclass Safari
var Safari = /** @class */ (function (_super) {
    __extends(Safari, _super);
    function Safari(version) {
        return _super.call(this, "Safari", version) || this;
    }
    Safari.prototype.readerMode = function () {
        console.log("Safari is now in Reader Mode.");
    };
    Safari.prototype.fullScreenMode = function () {
        console.log("Safari is now in Full Screen Mode.");
    };
    return Safari;
}(Browser));
// ✅ Demonstration
var chrome = new Chrome("120.0");
chrome.openURL("https://example.com");
chrome.openIncognito();
chrome.clearCache();
chrome.navigateBack();
chrome.closeBrowser();
console.log("------------------------------------------------");
var edge = new Edge("115.0");
edge.openURL("https://playwright.dev");
edge.takeSnap();
edge.clearCookies();
edge.closeBrowser();
console.log("------------------------------------------------");
var safari = new Safari("17.0");
safari.openURL("https://developer.apple.com");
safari.readerMode();
safari.fullScreenMode();
safari.closeBrowser();
