import {test} from "@playwright/test"
import excel from "exceljs"
import path from "path"


test("read excel",async({page})=>{
const workbook=new excel.Workbook();
await workbook.xlsx.readFile(path.join(__dirname,'../../../Training_Testing/Day 17_test_data/readexcel.xlsx'))
const sheet=workbook.getWorksheet("Sheet1")
const value=sheet?.getRow(1).getCell(1).value
const value2=sheet?.getRow(1).getCell(1).toString()
console.log(value);
console.log(value2)
   for (let i = 1; i <= sheet?.rowCount!; i++) {
        for (let j = 1; j <= sheet?.columnCount!; j++) {
            const cellValue = sheet?.getRow(i).getCell(j).toString();
            console.log(cellValue);
        }}
})


test("iterate",async({page})=>{
    let url="https://demoapps.qspiders.com/ui?scenario=1"
    const workbook=new excel.Workbook();
    

})