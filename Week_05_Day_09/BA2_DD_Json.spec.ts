import { test } from '@playwright/test'
import loginInfo from '../../Data/Leaftaps.json' assert { type: 'json' };

for(let data of loginInfo.loginInfo){

    test(`Read the value from Json ${data.Tc_No}`,async({page})=>{

        // console.log("Test Case Number is "+data.Tc_No);
        // console.log("Username is " +data.Username);
        // console.log("Password is " +data.Password);

        await page.goto("http://leaftaps.com/opentaps/control/main")
        const username = await page.locator("#username").fill(data.Username)
        console.log("Username is " + data.Username)
        const password = await page.locator("#password").fill(data.Password)
        console.log("Password is " + data.Password)
        await page.locator("//input[@value='Login']").click()
    })

}