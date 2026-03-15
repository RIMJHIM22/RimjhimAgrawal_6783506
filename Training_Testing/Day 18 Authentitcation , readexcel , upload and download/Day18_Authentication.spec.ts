import {test,expect} from "@playwright/test"
test("Authentication",async({browser})=>{
    let context=await browser.newContext({httpCredentials:{username:"admin",password:"admin"}})
    let page= await context.newPage()
    await page.goto("https://basic-auth-git-main-shashis-projects-4fa03ca5.vercel.app/")
    await page.waitForTimeout(30000);
})
