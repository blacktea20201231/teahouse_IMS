import Request from "./Request.js"
import showinventoryRecords from "./showinventoryRecords.js"
import checkSafe_stock from "./checkSafe_stock.js"


export default function showCurrentStockConfrimBox () {
    Request().post("/index.php?action=getInv")
        .then(res => {
            const response = res['data']
            let good_names = document.getElementById('good')
            let good_name = good_names.options[good_names.selectedIndex].innerText
            let rows = response['result']
            let inv
            let good_id=document.getElementById('good').value 
            let unit = document.getElementById("good_unit").value
            rows.forEach(element => {
                if (element['good_id'] == good_id) {
                   inv = element['inv']                                 
                }
            })
            alert("執行成功！\n當前庫存：\n" + good_name + "：" + inv + unit)
            checkSafe_stock(good_id,good_name,inv)
            showinventoryRecords()
        })
        .catch(err => {
            console.error(err)
        })

}