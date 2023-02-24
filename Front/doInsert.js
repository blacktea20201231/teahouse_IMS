import { SMP_Good, SMP_sup } from "./SMP.js";
import Request from "./Request.js";
import showCurrentStockConfrimBox from "./showCurrentStockConfrimBox .js";

export  function doInsert_sup(){
    let data = {
         //"id": document.getElementById("id").value,
         "name": document.getElementById("name").value,
         "tax_id": document.getElementById("tax_id").value,
         "contact":document.getElementById("contact").value,
         "tel": document.getElementById("tel").value,
         "addr":document.getElementById("addr").value        
     };
     Request().post("/index.php?action=newSup",Qs.stringify(data))
     .then(res => {
        // let response = res['data'];
        alert('新增供應商成功')
         document.getElementById("content").innerHTML=SMP_sup();
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }

export function doInsert_good(){
    let data = {
         "name": document.getElementById("good_name").value,
         "unit": document.getElementById("good_unit").value,
         "safe_stock": document.getElementById("safe_stock").value,
         "supplier_id": document.getElementById("supplier_id").value
         
     };
     Request().post("/index.php?action=newGood",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         alert('新增成功')
         SMP_Good()
         document.getElementById("content").innerHTML=response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML=err;  
     })
 }

 export function doInsert_input(){
    let data={
        "good_id":document.getElementById("good").value,
        "amount":document.getElementById("amount").value,
        "price":document.getElementById("price").value,
        "due":document.getElementById("due").value,
        "note":document.getElementById("note").value
    };
    Request().post("/index.php?action=newInput",Qs.stringify(data))
    .then(res=>{
        let response = res['data'];
        showCurrentStockConfrimBox();        
        //SMP_sup();
    }) .catch(err => {
        console.log(err);
        window.confirm("入庫失敗！請再試一次。")
        document.getElementById("content").innerHTML=err;  
    })
 }

 export function doInsert_output(){
    let data={
        "good_id":document.getElementById("good").value,
        "amount":document.getElementById("amount").value,        
        "note":document.getElementById("note").value
    };

    Request().post("/index.php?action=newOutput", Qs.stringify(data))
    .then(res => {
        let response = res['data']
        showCurrentStockConfrimBox()
        //document.getElementById("content").innerHTML = response['message']
    }).catch(err => {
        console.log(err)
        document.getElementById("content").innerHTML = err
    })

   
   
 }

 
