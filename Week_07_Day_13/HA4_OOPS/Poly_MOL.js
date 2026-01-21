var APIClient = /** @class */ (function () {
    function APIClient() {
    }
    // Single implementation handling both overloads
    APIClient.prototype.sendRequest = function (endpoint, requestBody, requestStatus) {
        if (requestBody !== undefined && requestStatus !== undefined) {
            console.log("Sending request to endpoints: ".concat(endpoint));
            console.log("Request Body: ".concat(requestBody));
            console.log("Request Status: ".concat(requestStatus ? "Success" : "Failed"));
        }
        else {
            console.log("Sending request to endpoint: ".concat(endpoint));
        }
    };
    // Demonstration method
    APIClient.prototype.demonstrateUsage = function () {
        console.log("Demonstrating overloaded sendRequest method:");
        // Call version with one argument
        this.sendRequest("/api/getData");
        // Call version with three arguments
        this.sendRequest("/api/postData", "{ \"name\": \"John\" }", true);
    };
    return APIClient;
}());
// Create an object of APIClient
var client = new APIClient();
// Showcase method overloading
client.demonstrateUsage();
