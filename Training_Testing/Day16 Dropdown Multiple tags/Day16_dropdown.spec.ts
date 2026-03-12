import {test,expect} from "@playwright/test"
test("",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown?sublist=0")
     await page.locator('#country_code').selectOption({value:"+91"})
     //we can use label,value,index
     await page.locator('#select3').selectOption({index:6})
    // await page.locator('select5').selectOption({label:})

    //assertion -validate if test is correct 
     await expect(page.locator('#country_code')).toHaveValue("+91")
    await expect(page.locator('#select3')).toHaveValue("India")
})

    //multiselectors dropdown
    test("multi select", async({page}) => {

    await page.goto("")

    await page.locator('#select-mutliple-native').selectOption([{value : "Fjailraven - Foldsack No. 1 Backpack, Fits 15 Laptops"}, {index : 3}, {}])

})

//custom dropdown
test("custom dropdown",async({page})=>{
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    await page.locator('//div[@class="sort-sortBy"]').click({force:true})

    await page.waitForTimeout(3000)
    let options =await page.locator('').all()

    for(let opt of options){
        let text=await opt.textContent()
        console.log(text)
    }


})
     