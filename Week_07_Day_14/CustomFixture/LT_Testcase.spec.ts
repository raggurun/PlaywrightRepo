import { customFixture } from "./LT_Fixture"

customFixture("SalesForce Application Sanity Testing",async({Leaftaps})=>{

const title= await Leaftaps.title()
console.log("Title of the page:",title)
await Leaftaps.click('text=CRM/SFA')
})
