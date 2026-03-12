import {test} from '@playwright/test'
//test(" test1",async({page})=>{
 //   await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
// //     await page.locator("#btn_a").click({button:"right",clickCount:2,force:true})
// //     await page.locator("#btn_a").dblclick()
// //    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
// //     await page.locator("#btn_a")
// //     await page.mouse.down()
// //     await page.mouse.up()
// await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
//     await page.locator('//div[@class="zoom-button "]').hover()
//     await page.mouse.down()
 
//   await page.waitForTimeout(2000)
//     await page.mouse.up()


//! Drag and Drop using Drag to method
// test.only("Drag to Method",async({page})=>{
//     await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2');
//     await page.getByText("Mobile Charger").dragTo(page.getByText("Mobile Accessories"));
//     await page.getByText("Mobile Cover").dragTo(page.getByText("Mobile Accessories"));
//     await page.getByText("Laptop Cover").dragTo(page.getByText("Laptop Accessories"));
//     await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"));    
// })

// test(" test 2",async({page})=>{
//     await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
//     await page.locator("#submit").dispatchEvent("click")
// })


    // test.only("",async({page})=>{
    //     await page.goto("https://demoapps.qspiders.com/ui/scroll/newTabVertical")
    //     await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded()
    //      await page.locator('//input[@type="checkbox"]').click()//or check()or uncheck()
    //      await page.waitForTimeout(2000)


    //      await page.mouse.move(100,100)
    // })


test('Keyboard copy paste example', async ({ page }) => {

  await page.goto('https://demoapps.qspiders.com/ui?scenario=1');

  
  await page.click('#name');
  await page.keyboard.type('Rimjhim');


  await page.keyboard.press('Tab');
  await page.keyboard.type('rimjhim@gmail.com');

  
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyA');
  await page.keyboard.up('Control');

  
  await page.keyboard.down('Control');
  await page.keyboard.press('KeyC');
  await page.keyboard.up('Control');


  await page.keyboard.press('Tab');

  await page.keyboard.down('Control');
  await page.keyboard.press('KeyV');
  await page.keyboard.up('Control');

});

    