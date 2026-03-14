import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"
 test("write excel data",async({page})=>{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"test_data/write_excel1.xlsx"))
let sheet=await book.getWorksheet("Sheet4")
    if(!sheet){
        sheet=await book.addWorksheet("Sheet4")
    }
    sheet.getRow(1).getCell(1).value="playwright"
    

    await book.xlsx.writeFile(path.join(__dirname,"test_data/write_excel1.xlsx"))
 })