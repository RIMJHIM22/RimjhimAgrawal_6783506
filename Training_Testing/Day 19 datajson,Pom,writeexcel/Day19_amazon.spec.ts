import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
 test ("amazon shoes",async({page})=>{
   await page.goto("https://www.amazon.in");
   await page.locator('//input[@id="twotabsearchtextbox"]').fill("shoes")
   

 })