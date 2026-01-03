import dotenv from 'dotenv';
import { test } from '@playwright/test'

//set the path to the .env file
dotenv.config({ path:'Data/QA_Leaftaps.env'});
test('Envfile Test Suite', async({page}) => {

// step:1  -->install dotenv
// npm install dotenv

// step:2 --> prod.env
// dotenv.config({path:`constants/prod.env`})

// Multiple file to read
// const fileTORead=process.env.envFile
// dotenv.config({path:`constants/${fileTORead}.env`})

// set the filename
// $env:envFile="staging"
// $env:envFile="QA"

// unset
// $env:envFile=""


    let Url = process.env.LT_Url as string;
    let Username = process.env.LT_Username as string;
    let Password = process.env.LT_Password as string;

    await page.goto(Url);
    console.log("URL is " + Url)
    const username = await page.locator("#username").fill(Username)
    console.log("Username is " + Username)
    const password = await page.locator("#password").fill(Password)
    console.log("Password is " + Password)
    await page.locator("//input[@value='Login']").click()
});