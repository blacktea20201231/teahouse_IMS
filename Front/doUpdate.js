import Request from "./Request.js";
import { SMP_Good, SMP_sup } from "./SMP.js";
export function doUpdate_sup(){
   
    let data = {
         "id":document.getElementById("id").value,
         "name":document.getElementById("name").value,
         "tax_id":document.getElementById("tax_id").value,
         "tel":document.getElementById("tel").value,
         "addr":document.getElementById("addr").value,
         "contact":document.getElementById("contact").value, 
         "coop":document.getElementById("coop").value         
     };
     Request().post("/index.php?action=updateSup",Qs.stringify(data))
     .then(res => {
         let response = res['data'];
         //document.getElementById("content").innerHTML = response['message'];
         alert('更新成功')
         SMP_sup()
               
     })
     .catch(err => {
        alert('更新失敗')
        SMP_sup() 
        //document.getElementById("content").innerHTML = err; 
     })
 }

 export function doUpdate_Good(){
   
    let data = {
         "id":document.getElementById("id").value,
         "name":document.getElementById("name").value,
         "safe_stock":document.getElementById("safe_stock").value,
         "unit":document.getElementById("unit").value,
         "supplier_id":document.getElementById("supplier_id").value          
     };
     Request().post("/index.php?action=updateGood",Qs.stringify(data))
     .then(res => {
        alert('更新成功')
        SMP_Good();
         let response = res['data'];       
         document.getElementById("content").innerHTML = response['message'];
     })
     .catch(err => {
         document.getElementById("content").innerHTML = err; 
     })
 }
