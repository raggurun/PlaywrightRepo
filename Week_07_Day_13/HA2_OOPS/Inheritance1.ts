// Superclass TestData
class TestData {
  enterCredentials(): void {
    console.log("Entering user credentials...");
  }

  navigateToHomePage(): void {
    console.log("Navigating to the Home Page...");
  }
}

// Subclass LoginTestData extending TestData
class LoginTestData extends TestData {
  enterUsername(username: string): void {
    console.log(`Entered Username: ${username}`);
  }

  enterPassword(password: string): void {
    console.log(`Entered Password: ${password}`);
  }
}

// ✅ Demonstration
// Object of superclass
const testDataObj = new TestData();
testDataObj.enterCredentials();
testDataObj.navigateToHomePage();

console.log("--------------------------------");

// Object of subclass
const loginObj = new LoginTestData();
loginObj.enterCredentials();   // inherited from TestData
loginObj.navigateToHomePage(); // inherited from TestData
loginObj.enterUsername("Raghuraman");
loginObj.enterPassword("Password123");
