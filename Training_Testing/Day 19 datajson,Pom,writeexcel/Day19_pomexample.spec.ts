import {test} from "@playwright/test"
import example from "../Assessment/PageObjectModel/example.page.ts"


test("",async({page})=>{
let examplePage=new example(page)
await page.goto("https://practicetestautomation.com/practice-test-login/")
})