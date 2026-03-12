import {test} from '@playwright/test'
test("",async({browser})=>{
    let context =await browser.newContext()
    let page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    await page.getByPlaceholder()
    await page
    let [page2]=await Promise.all([page.waitForNavigation(),
        page.locator("//img[@class="MZeksS"]').first().click()])

console.log(await page.url())
console.log(await page2.url())
})
