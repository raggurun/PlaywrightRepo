// 2nd Child file: Edge.ts
import { Browser } from "./BA1_P1_Browser";

export class Edge extends Browser {
  
  launchBrowser(): void {
    console.log("Launching Edge Browser...");
    console.log("Browser Type:", this.browserType());
    console.log("Browser Version:", this.browserVersion());
  }

  // Override parent methods
  browserType(): string {
    return "Microsoft Edge";
  }

  browserVersion(): string {
    return "115.0.0";
  }
}

// Create object for Edge
const edge = new Edge();
edge.launchBrowser();
