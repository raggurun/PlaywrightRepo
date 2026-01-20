// Superclass Browser
class Browser {
  browserName: string;
  browserVersion: string;

  constructor(browserName: string, browserVersion: string) {
    this.browserName = browserName;
    this.browserVersion = browserVersion;
  }

  openURL(url: string): void {
    console.log(`${this.browserName} v${this.browserVersion} is opening URL: ${url}`);
  }

  closeBrowser(): void {
    console.log(`${this.browserName} v${this.browserVersion} is closing the browser.`);
  }

  navigateBack(): void {
    console.log(`${this.browserName} v${this.browserVersion} is navigating back.`);
  }
}

// Subclass Chrome
class Chrome extends Browser {
  constructor(version: string) {
    super("Chrome", version);
  }

  openIncognito(): void {
    console.log("Chrome is opening in Incognito mode.");
  }

  clearCache(): void {
    console.log("Chrome cache has been cleared.");
  }
}

// Subclass Edge
class Edge extends Browser {
  constructor(version: string) {
    super("Edge", version);
  }

  takeSnap(): void {
    console.log("Edge has taken a screenshot.");
  }

  clearCookies(): void {
    console.log("Edge cookies have been cleared.");
  }
}

// Subclass Safari
class Safari extends Browser {
  constructor(version: string) {
    super("Safari", version);
  }

  readerMode(): void {
    console.log("Safari is now in Reader Mode.");
  }

  fullScreenMode(): void {
    console.log("Safari is now in Full Screen Mode.");
  }
}

// ✅ Demonstration
const chrome = new Chrome("120.0");
chrome.openURL("https://example.com");
chrome.openIncognito();
chrome.clearCache();
chrome.navigateBack();
chrome.closeBrowser();

console.log("------------------------------------------------");

const edge = new Edge("115.0");
edge.openURL("https://playwright.dev");
edge.takeSnap();
edge.clearCookies();
edge.closeBrowser();

console.log("------------------------------------------------");

const safari = new Safari("17.0");
safari.openURL("https://developer.apple.com");
safari.readerMode();
safari.fullScreenMode();
safari.closeBrowser();
