import {test} from "@playwright/test"
import fs from "fs"
import path from "path"
path.join(__dirname,"/test_data/data.json")
fs.readFileSync(path.join(__dirname,"/test_data/data.json"))
let dataFile=fs.readFileSync(path.join(__dirname,"/test_data/data.json"))
//to convert json file to js file
//JSON.PARSE=====convert json obj to js
let data=JSON.parse(dataFile)

test("json",async({page})=>{
    //console.log(data.greet)
    data.forEach(element => {
        console.log(element.greet)
        
    });
}) 
test ("for apllication",async({page})=>{

    await page.goto(data.url)
 await page.getByLabel("Username").fill(data.username)
 for(let d of data){
    let url=d.url
let username=d.username
let password=d.password
 }
    
await page.goto(url)
console.log(page.title())

})