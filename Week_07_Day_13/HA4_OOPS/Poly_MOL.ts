class APIClient {
  // Method overload signatures
  sendRequest(endpoint: string): void;
  sendRequest(endpoint: string, requestBody: string, requestStatus: boolean): void;

  // Single implementation handling both overloads
  sendRequest(endpoint: string, requestBody?: string, requestStatus?: boolean): void {
    if (requestBody !== undefined && requestStatus !== undefined) {
      console.log(`Sending request to endpoints: ${endpoint}`);
      console.log(`Request Body: ${requestBody}`);
      console.log(`Request Status: ${requestStatus ? "Success" : "Failed"}`);
    } else {
      console.log(`Sending request to endpoint: ${endpoint}`);
    }
  }

  // Demonstration method
  demonstrateUsage(): void {
    console.log("Demonstrating overloaded sendRequest method:");

    // Call version with one argument
    this.sendRequest("/api/getData");

    // Call version with three arguments
    this.sendRequest("/api/postData", "{ \"name\": \"John\" }", true);
  }
}

// Create an object of APIClient
const client = new APIClient();

// Showcase method overloading
client.demonstrateUsage();